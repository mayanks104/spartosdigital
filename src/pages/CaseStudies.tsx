import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { fetchCaseStudies } from '../lib/api';
import type { CaseStudy } from '../types';

const CaseStudiesPage = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadCaseStudies = async () => {
      try {
        const data = await fetchCaseStudies();
        setCaseStudies(data);
      } catch (error) {
        console.error('Failed to fetch case studies:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCaseStudies();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black pt-20 flex items-center justify-center">
        <div className="text-green-500">Loading case studies...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-green-500/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore how we've helped businesses achieve remarkable results through innovative digital solutions
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-black border border-green-500/20 rounded-lg overflow-hidden hover:border-green-500 transition-all cursor-pointer p-8"
                onClick={() => navigate(`/case-studies/${study.id}`)}
              >
                <div className="mb-4">
                  <span className="text-green-500 text-sm font-medium">
                    {study.industry}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-6">
                  {study.description}
                </h3>
                <div className="space-y-3 mb-8">
                  {study.results.map((result, index) => (
                    <div
                      key={index}
                      className="flex items-center text-sm text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                      {result}
                    </div>
                  ))}
                </div>
                <div className="flex items-center text-green-500 group">
                  View Case Study
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;