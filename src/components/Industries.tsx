import React from 'react';
import { Building2, Briefcase, ShoppingBag, Stethoscope, GraduationCap, Ban as Bank, Plane, Factory } from 'lucide-react';

const industries = [
  {
    icon: <Building2 className="h-8 w-8 text-green-500" />,
    name: 'Real Estate',
    description: 'Digital solutions for property management and real estate operations'
  },
  {
    icon: <Briefcase className="h-8 w-8 text-green-500" />,
    name: 'Finance',
    description: 'Fintech solutions and banking software development'
  },
  {
    icon: <ShoppingBag className="h-8 w-8 text-green-500" />,
    name: 'E-commerce',
    description: 'Online retail and marketplace solutions'
  },
  {
    icon: <Stethoscope className="h-8 w-8 text-green-500" />,
    name: 'Healthcare',
    description: 'Digital health and medical technology solutions'
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-green-500" />,
    name: 'Education',
    description: 'E-learning and educational technology platforms'
  },
  {
    icon: <Bank className="h-8 w-8 text-green-500" />,
    name: 'Insurance',
    description: 'Insurance technology and process automation'
  },
  {
    icon: <Plane className="h-8 w-8 text-green-500" />,
    name: 'Travel',
    description: 'Travel technology and booking solutions'
  },
  {
    icon: <Factory className="h-8 w-8 text-green-500" />,
    name: 'Manufacturing',
    description: 'Industrial automation and IoT solutions'
  }
];

const Industries = () => {
  return (
    <section id="industries" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Industries We Serve
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We deliver innovative solutions across diverse industries, helping businesses transform and grow
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="p-6 border border-green-500/20 rounded-lg hover:border-green-500 transition-all"
            >
              <div className="mb-4">{industry.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {industry.name}
              </h3>
              <p className="text-gray-400">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;