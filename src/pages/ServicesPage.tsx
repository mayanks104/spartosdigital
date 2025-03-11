import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Code,
  Database,
  Search,
  BarChart,
  Globe,
  Rocket,
  Users,
  Target,
  LineChart,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    id: 'app-development',
    icon: <Code className="h-12 w-12 text-green-500" />,
    title: 'App Development',
    description: 'Custom mobile and web applications built for scale.',
    features: ['Native iOS & Android', 'Cross-Platform Solutions', 'Progressive Web Apps']
  },
  {
    id: 'saas-solutions',
    icon: <Database className="h-12 w-12 text-green-500" />,
    title: 'SaaS Solutions',
    description: 'End-to-end SaaS product development and deployment.',
    features: ['Cloud Architecture', 'Multi-tenant Systems', 'API Development']
  },
  {
    id: 'seo-optimization',
    icon: <Search className="h-12 w-12 text-green-500" />,
    title: 'SEO Optimization',
    description: 'Boost your organic visibility and search rankings.',
    features: ['Technical SEO', 'Content Strategy', 'Link Building']
  },
  {
    id: 'digital-marketing',
    icon: <BarChart className="h-12 w-12 text-green-500" />,
    title: 'Digital Marketing',
    description: 'Data-driven marketing across all major platforms.',
    features: ['Social Media', 'PPC Campaigns', 'Email Marketing']
  },
  {
    id: 'web-development',
    icon: <Globe className="h-12 w-12 text-green-500" />,
    title: 'Web Development',
    description: 'Modern, responsive websites that convert.',
    features: ['Custom Websites', 'E-commerce', 'Web Applications']
  },
  {
    id: 'product-development',
    icon: <Rocket className="h-12 w-12 text-green-500" />,
    title: 'Product Development',
    description: 'From concept to launch, we build successful products.',
    features: ['MVP Development', 'Product Strategy', 'Market Analysis']
  },
  {
    id: 'lead-generation',
    icon: <Users className="h-12 w-12 text-green-500" />,
    title: 'Lead Generation',
    description: 'Quality lead acquisition strategies that work.',
    features: ['Lead Magnets', 'Sales Funnels', 'Marketing Automation']
  },
  {
    id: 'marketing-strategy',
    icon: <Target className="h-12 w-12 text-green-500" />,
    title: 'Marketing Strategy',
    description: 'Comprehensive marketing plans for growth.',
    features: ['Market Research', 'Brand Strategy', 'Growth Planning']
  },
  {
    id: 'analytics-reporting',
    icon: <LineChart className="h-12 w-12 text-green-500" />,
    title: 'Analytics & Reporting',
    description: 'Deep insights and performance tracking.',
    features: ['Data Analysis', 'Custom Dashboards', 'Performance Tracking']
  }
];

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-green-500/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to transform your business and drive growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => navigate(`/services/${service.id}`)}
                className="group p-8 border border-green-500/20 rounded-lg hover:border-green-500 transition-all cursor-pointer bg-black hover:bg-green-500/5"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-400">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex items-center text-green-500 group-hover:translate-x-2 transition-transform">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business goals
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center px-8 py-4 border-2 border-green-500 text-base font-medium rounded-full text-black bg-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;