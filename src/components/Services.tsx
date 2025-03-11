import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Database, Search, BarChart, Globe, Rocket, Users, Target, LineChart } from 'lucide-react';

const services = [
  {
    id: 'app-development',
    icon: <Code className="h-8 w-8 text-green-500" />,
    title: 'App Development',
    description: 'Custom mobile and web applications built for scale.'
  },
  {
    id: 'saas-solutions',
    icon: <Database className="h-8 w-8 text-green-500" />,
    title: 'SaaS Solutions',
    description: 'End-to-end SaaS product development and deployment.'
  },
  {
    id: 'seo-optimization',
    icon: <Search className="h-8 w-8 text-green-500" />,
    title: 'SEO Optimization',
    description: 'Boost your organic visibility and search rankings.'
  },
  {
    id: 'digital-marketing',
    icon: <BarChart className="h-8 w-8 text-green-500" />,
    title: 'Digital Marketing',
    description: 'Data-driven marketing across all major platforms.'
  },
  {
    id: 'web-development',
    icon: <Globe className="h-8 w-8 text-green-500" />,
    title: 'Web Development',
    description: 'Modern, responsive websites that convert.'
  },
  {
    id: 'product-development',
    icon: <Rocket className="h-8 w-8 text-green-500" />,
    title: 'Product Development',
    description: 'From concept to launch, we build successful products.'
  }
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 border border-green-500/20 rounded-lg hover:border-green-500 transition-colors cursor-pointer"
              onClick={() => navigate(`/services/${service.id}`)}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/services')}
            className="inline-flex items-center px-8 py-3 border border-green-500 text-base font-medium rounded-full text-green-500 hover:bg-green-500 hover:text-black transition-all duration-300"
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;