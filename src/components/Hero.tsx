import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = ({ onGetStarted }: { onGetStarted: () => void }) => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-green-500/5 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/10 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Transform Your Digital Presence
        </h1>

        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          End-to-end digital solutions for businesses ready to scale. From product
          development to marketing strategy, we're your partner in digital success.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={onGetStarted}
            className="group inline-flex items-center px-8 py-4 border-2 border-green-500 text-base font-medium rounded-full text-black bg-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
          <Link
            to="/services"
            className="group inline-flex items-center px-8 py-4 border-2 border-green-500 text-base font-medium rounded-full text-green-500 hover:bg-green-500 hover:text-black transition-all duration-300"
          >
            Our Services
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '5+', label: 'Years Experience' },
            { value: '50+', label: 'Projects Completed' },
            { value: '99%', label: 'Client Satisfaction' },
            { value: '500+', label: 'ROI-Optimized Campaigns' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-green-500 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-green-500 rounded-full animate-scroll"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;