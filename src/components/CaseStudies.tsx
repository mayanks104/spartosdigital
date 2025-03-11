import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchCaseStudies } from '../lib/api';
import type { CaseStudy } from '../types';
import { ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
      <section id="case-studies" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-green-500">Loading case studies...</p>
          </div>
        </div>
      </section>
    );
  }

  const displayedCaseStudies = isHomePage ? caseStudies.slice(0, 3) : caseStudies;

  return (
    <section id="case-studies" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Case Studies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See how we've helped businesses transform their digital presence and achieve remarkable results
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCaseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-black border border-green-500/20 rounded-lg overflow-hidden hover:border-green-500 transition-all cursor-pointer p-6"
              onClick={() => navigate(`/case-studies/${study.id}`)}
            >
              <div className="mb-4">
                <span className="text-green-500 text-sm font-medium">
                  {study.industry}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {study.description}
              </h3>
              <div className="space-y-2 mb-6">
                {study.results.map((result, index) => (
                  <div
                    key={index}
                    className="flex items-center text-sm text-gray-400"
                  >
                    <span className="mr-2">•</span>
                    {result}
                  </div>
                ))}
              </div>
              <div className="flex items-center text-green-500 group-hover:translate-x-2 transition-transform">
                View Case Study
                <ArrowRight className="ml-2 h-5 w-5" />
              </div>
            </div>
          ))}
        </div>
        {isHomePage && (
          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/case-studies')}
              className="inline-flex items-center px-8 py-3 border border-green-500 text-base font-medium rounded-full text-green-500 hover:bg-green-500 hover:text-black transition-all duration-300"
            >
              View All Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudies;