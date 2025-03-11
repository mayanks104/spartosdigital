import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowRight, ChevronRight, BarChart, Users, Target, Clock } from 'lucide-react';
import { fetchCaseStudyDetail } from '../lib/api';
import type { CaseStudyDetail } from '../types';

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [caseStudy, setCaseStudy] = useState<CaseStudyDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCaseStudy = async () => {
      try {
        const data = await fetchCaseStudyDetail(id as string);
        setCaseStudy(data);
      } catch (error) {
        console.error('Failed to fetch case study:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCaseStudy();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black pt-16 flex items-center justify-center">
        <div className="text-green-500">Loading case study...</div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-black pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Case Study Not Found</h1>
          <p className="text-gray-400">The requested case study does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${caseStudy.heroImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="flex items-center text-sm text-gray-400 mb-4">
              <span>{caseStudy.industry}</span>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span>{caseStudy.service}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {caseStudy.company}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {caseStudy.description}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {caseStudy.keyMetrics.map((metric, index) => (
                <div key={index} className="bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-green-500/20">
                  <div className="text-green-500 text-2xl font-bold mb-2">{metric.value}</div>
                  <div className="text-gray-400 text-sm">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
              <p className="text-gray-400 mb-6">{caseStudy.challenge}</p>
              <div className="space-y-4">
                {caseStudy.challengePoints.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1">
                      <Target className="w-5 h-5 text-green-500 mr-3" />
                    </div>
                    <p className="text-gray-400">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Approach</h2>
              <p className="text-gray-400 mb-6">{caseStudy.approach}</p>
              <div className="space-y-4">
                {caseStudy.approachPoints.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1">
                      <ArrowRight className="w-5 h-5 text-green-500 mr-3" />
                    </div>
                    <p className="text-gray-400">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-green-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">The Solution</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudy.solutionFeatures.map((feature, index) => (
              <div key={index} className="p-6 bg-black border border-green-500/20 rounded-lg">
                {feature.icon === 'chart' && <BarChart className="w-8 h-8 text-green-500 mb-4" />}
                {feature.icon === 'users' && <Users className="w-8 h-8 text-green-500 mb-4" />}
                {feature.icon === 'clock' && <Clock className="w-8 h-8 text-green-500 mb-4" />}
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">The Results</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="space-y-8">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1">
                      <Target className="w-5 h-5 text-green-500 mr-3" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{result.title}</h3>
                      <p className="text-gray-400">{result.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src={caseStudy.resultImage}
                alt="Results visualization"
                className="rounded-lg border border-green-500/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-green-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <img
                src={caseStudy.testimonial.avatar}
                alt={caseStudy.testimonial.name}
                className="w-20 h-20 rounded-full mx-auto object-cover"
              />
            </div>
            <blockquote className="text-xl text-gray-300 mb-6">
              "{caseStudy.testimonial.quote}"
            </blockquote>
            <div className="text-white font-semibold">{caseStudy.testimonial.name}</div>
            <div className="text-green-500">{caseStudy.testimonial.position}</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-green-500 hover:bg-green-400 transition-colors"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;