import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Check, ArrowRight, Users, Target, Shield, Zap, BarChart, Code, Globe, Search, Database, Rocket } from 'lucide-react';

const serviceDetails = {
  'app-development': {
    title: 'App Development',
    description: 'Custom mobile and web applications built for scale.',
    hero: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
    overview: 'We create powerful, scalable applications that drive business growth and user engagement. Our development team combines technical expertise with creative innovation to deliver solutions that exceed expectations.',
    expertise: [
      'Native iOS & Android Development',
      'Cross-Platform Solutions',
      'Progressive Web Apps (PWA)',
      'Enterprise Applications',
      'IoT & Wearable Apps',
      'Real-time Applications'
    ],
    technologies: [
      'React Native',
      'Flutter',
      'Swift',
      'Kotlin',
      'Node.js',
      'Firebase'
    ],
    processSteps: [
      {
        title: 'Discovery & Planning',
        description: 'We analyze your requirements and create a comprehensive development roadmap.',
        icon: <Target className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Design & Prototyping',
        description: 'Creating intuitive interfaces and interactive prototypes for your approval.',
        icon: <Code className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Development',
        description: 'Building your application with clean, efficient, and scalable code.',
        icon: <Zap className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Testing & QA',
        description: 'Rigorous testing to ensure performance, security, and reliability.',
        icon: <Shield className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Deployment',
        description: 'Smooth deployment and integration with your existing systems.',
        icon: <Rocket className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Maintenance & Support',
        description: 'Ongoing support and updates to keep your app running optimally.',
        icon: <Users className="w-8 h-8 text-green-500" />
      }
    ]
  },
  'web-development': {
    title: 'Web Development',
    description: 'Modern, responsive websites that convert.',
    hero: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    overview: 'We create stunning, high-performance websites that deliver exceptional user experiences and drive business results. Our web development solutions are built with scalability and future growth in mind.',
    expertise: [
      'Custom Website Development',
      'E-commerce Solutions',
      'Progressive Web Apps',
      'Content Management Systems',
      'Web Application Development',
      'API Integration'
    ],
    technologies: [
      'React.js',
      'Next.js',
      'Node.js',
      'TypeScript',
      'Tailwind CSS',
      'MongoDB'
    ],
    processSteps: [
      {
        title: 'Planning & Architecture',
        description: 'Defining project scope and technical architecture.',
        icon: <Target className="w-8 h-8 text-green-500" />
      },
      {
        title: 'UI/UX Design',
        description: 'Creating engaging and intuitive user interfaces.',
        icon: <Code className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Development',
        description: 'Building your website with modern technologies.',
        icon: <Zap className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Testing',
        description: 'Comprehensive testing across devices and browsers.',
        icon: <Shield className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Deployment',
        description: 'Secure and efficient deployment process.',
        icon: <Rocket className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Maintenance',
        description: 'Regular updates and performance optimization.',
        icon: <BarChart className="w-8 h-8 text-green-500" />
      }
    ]
  }, 
  'saas-solutions': {
    title: 'SaaS Solutions',
    description: 'Scalable cloud-based software solutions for modern businesses.',
    hero: 'https://images.unsplash.com/photo-1544197150-b99a580bb7c6',
    overview: 'We build robust, scalable, and secure SaaS platforms that empower businesses to streamline operations, enhance customer experience, and drive growth. Our expert team ensures seamless integration, high availability, and future-proof architecture.',
    expertise: [
      'Multi-Tenant Architecture',
      'Cloud-Native Solutions',
      'API-First Development',
      'AI & Data-Driven Platforms',
      'Subscription & Billing Management',
      'Enterprise SaaS Solutions'
    ],
    technologies: [
      'AWS & Azure',
      'Node.js',
      'React & Angular',
      'Python & Django',
      'Kubernetes',
      'MongoDB & PostgreSQL'
    ],
    processSteps: [
      {
        title: 'Discovery & Strategy',
        description: 'Understanding your business needs and defining a scalable SaaS architecture.',
        icon: <Target className="w-8 h-8 text-blue-500" />
      },
      {
        title: 'UI/UX Design & Prototyping',
        description: 'Crafting seamless user experiences with intuitive design.',
        icon: <Code className="w-8 h-8 text-blue-500" />
      },
      {
        title: 'Development & API Integration',
        description: 'Building scalable, secure, and API-driven SaaS solutions.',
        icon: <Zap className="w-8 h-8 text-blue-500" />
      },
      {
        title: 'Security & Compliance',
        description: 'Ensuring enterprise-grade security and regulatory compliance.',
        icon: <Shield className="w-8 h-8 text-blue-500" />
      },
      {
        title: 'Deployment & Cloud Scaling',
        description: 'Deploying on cloud infrastructure with auto-scaling capabilities.',
        icon: <Rocket className="w-8 h-8 text-blue-500" />
      },
      {
        title: 'Maintenance & Continuous Improvement',
        description: 'Providing ongoing updates, monitoring, and feature enhancements.',
        icon: <Users className="w-8 h-8 text-blue-500" />
      }
    ]
  },

  'seo-optimization': {
    title: 'SEO Optimization',
    description: 'Boost your organic visibility and search rankings.',
    hero: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f1fafd',
    overview: 'We help businesses improve their online visibility through comprehensive SEO strategies that drive organic traffic and increase conversions.',
    expertise: [
      'Technical SEO',
      'On-Page Optimization',
      'Content Strategy',
      'Link Building',
      'Local SEO',
      'E-commerce SEO'
    ],
    technologies: [
      'Google Analytics',
      'SEMrush',
      'Ahrefs',
      'Google Search Console',
      'Screaming Frog',
      'Moz Pro'
    ],
    processSteps: [
      {
        title: 'SEO Audit',
        description: 'Comprehensive analysis of your current SEO status.',
        icon: <Search className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Strategy Development',
        description: 'Creating a customized SEO roadmap.',
        icon: <Target className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Implementation',
        description: 'Executing optimization strategies.',
        icon: <Code className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Content Optimization',
        description: 'Optimizing content for search engines and users.',
        icon: <Globe className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Monitoring',
        description: 'Tracking rankings and performance metrics.',
        icon: <BarChart className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Reporting',
        description: 'Regular performance reports and recommendations.',
        icon: <Database className="w-8 h-8 text-green-500" />
      }
    ]
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies for growth.',
    hero: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    overview: 'We deliver comprehensive digital marketing solutions that drive traffic, engagement, and conversions across all digital channels.',
    expertise: [
      'SEO & Content Marketing',
      'Social Media Marketing',
      'PPC Advertising',
      'Email Marketing',
      'Analytics & Reporting',
      'Conversion Optimization'
    ],
    technologies: [
      'Google Analytics',
      'SEMrush',
      'HubSpot',
      'Facebook Ads',
      'Google Ads',
      'Mailchimp'
    ],
    processSteps: [
      {
        title: 'Strategy Development',
        description: 'Creating comprehensive marketing plans aligned with your goals.',
        icon: <Target className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Channel Selection',
        description: 'Identifying the most effective marketing channels.',
        icon: <Globe className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Content Creation',
        description: 'Developing engaging content that resonates with your audience.',
        icon: <Code className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Campaign Launch',
        description: 'Executing marketing campaigns across chosen channels.',
        icon: <Rocket className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Performance Tracking',
        description: 'Monitoring campaign performance and ROI.',
        icon: <BarChart className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Optimization',
        description: 'Continuous improvement based on data insights.',
        icon: <Zap className="w-8 h-8 text-green-500" />
      }
    ]
  },
  'product-development': {
    title: 'Product Development',
    description: 'From concept to launch, we build successful products.',
    hero: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e',
    overview: 'We help businesses transform ideas into successful digital products through our comprehensive product development process.',
    expertise: [
      'Product Strategy',
      'MVP Development',
      'User Research',
      'Product Design',
      'Development & Testing',
      'Launch Strategy'
    ],
    technologies: [
      'React.js',
      'Node.js',
      'Python',
      'AWS',
      'Docker',
      'Kubernetes'
    ],
    processSteps: [
      {
        title: 'Discovery',
        description: 'Understanding your vision and market requirements.',
        icon: <Search className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Strategy',
        description: 'Developing product strategy and roadmap.',
        icon: <Target className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Design',
        description: 'Creating user-centered product design.',
        icon: <Code className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Development',
        description: 'Building your product with agile methodology.',
        icon: <Zap className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Testing',
        description: 'Comprehensive testing and quality assurance.',
        icon: <Shield className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Launch',
        description: 'Product launch and market deployment.',
        icon: <Rocket className="w-8 h-8 text-green-500" />
      }
    ]
  },
  'lead-generation': {
    title: 'Lead Generation',
    description: 'Quality lead acquisition strategies that work.',
    hero: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
    overview: 'We help businesses generate high-quality leads through targeted strategies and proven methodologies.',
    expertise: [
      'Lead Magnets',
      'Landing Pages',
      'Email Marketing',
      'Content Marketing',
      'Social Media Lead Gen',
      'Marketing Automation'
    ],
    technologies: [
      'HubSpot',
      'Mailchimp',
      'Salesforce',
      'LinkedIn Ads',
      'Facebook Ads',
      'Google Ads'
    ],
    processSteps: [
      {
        title: 'Audience Analysis',
        description: 'Understanding your target audience and their needs.',
        icon: <Users className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Strategy Development',
        description: 'Creating comprehensive lead generation strategy.',
        icon: <Target className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Content Creation',
        description: 'Developing engaging lead magnets and content.',
        icon: <Code className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Campaign Setup',
        description: 'Setting up and launching lead gen campaigns.',
        icon: <Rocket className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Optimization',
        description: 'Continuous optimization of lead quality and quantity.',
        icon: <BarChart className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Nurturing',
        description: 'Lead nurturing and conversion optimization.',
        icon: <Zap className="w-8 h-8 text-green-500" />
      }
    ]
  },
  'marketing-strategy': {
    title: 'Marketing Strategy',
    description: 'Comprehensive marketing plans for growth.',
    hero: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    overview: 'We develop comprehensive marketing strategies that align with your business goals and drive sustainable growth.',
    expertise: [
      'Market Research',
      'Competitive Analysis',
      'Brand Strategy',
      'Channel Strategy',
      'Growth Planning',
      'Performance Metrics'
    ],
    technologies: [
      'Google Analytics',
      'SEMrush',
      'HubSpot',
      'Tableau',
      'Salesforce',
      'Adobe Analytics'
    ],
    processSteps: [
      {
        title: 'Research',
        description: 'Market and competitor analysis.',
        icon: <Search className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Strategy Development',
        description: 'Creating comprehensive marketing strategy.',
        icon: <Target className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Planning',
        description: 'Detailed action plan and timeline.',
        icon: <Code className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Implementation',
        description: 'Executing marketing initiatives.',
        icon: <Rocket className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Measurement',
        description: 'Tracking KPIs and performance metrics.',
        icon: <BarChart className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Optimization',
        description: 'Strategy refinement based on results.',
        icon: <Zap className="w-8 h-8 text-green-500" />
      }
    ]
  },
  'analytics-reporting': {
    title: 'Analytics & Reporting',
    description: 'Deep insights and performance tracking.',
    hero: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    overview: 'We help businesses make data-driven decisions through comprehensive analytics and reporting solutions.',
    expertise: [
      'Data Analysis',
      'Custom Dashboards',
      'Performance Tracking',
      'Conversion Analysis',
      'User Behavior Analysis',
      'ROI Measurement'
    ],
    technologies: [
      'Google Analytics',
      'Tableau',
      'Power BI',
      'Mixpanel',
      'Amplitude',
      'Looker'
    ],
    processSteps: [
      {
        title: 'Requirements Analysis',
        description: 'Understanding your analytics needs.',
        icon: <Search className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Setup & Integration',
        description: 'Implementing analytics tools and tracking.',
        icon: <Code className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Dashboard Creation',
        description: 'Building custom analytics dashboards.',
        icon: <BarChart className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Data Analysis',
        description: 'In-depth analysis of collected data.',
        icon: <Target className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Reporting',
        description: 'Regular performance reporting.',
        icon: <Database className="w-8 h-8 text-green-500" />
      },
      {
        title: 'Optimization',
        description: 'Continuous improvement recommendations.',
        icon: <Zap className="w-8 h-8 text-green-500" />
      }
    ]
  }
};

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = serviceDetails[id as keyof typeof serviceDetails];

  if (!service) {
    return (
      <div className="min-h-screen bg-black pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Service Not Found</h1>
          <p className="text-gray-400">The requested service does not exist.</p>
          <button
            onClick={() => navigate('/services')}
            className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-green-500 hover:bg-green-400"
          >
            View Our Services
          </button>
        </div>
      </div>
    );
  }

  const onGetStarted = () => {
    // Add your logic here
  };

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section
        className="py-32 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${service.hero})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
            <p className="text-gray-400 text-lg">{service.overview}</p>
          </div>
        </div>
      </section>

      {/* Expertise & Technologies */}
      <section className="py-20 bg-green-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Our Expertise</h2>
              <div className="grid gap-4">
                {service.expertise.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Technologies We Use</h2>
              <div className="grid grid-cols-2 gap-4">
                {service.technologies.map((tech, index) => (
                  <div key={index} className="p-4 border border-green-500/20 rounded-lg text-gray-300">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Our Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.processSteps.map((step, index) => (
              <div key={index} className="p-6 border border-green-500/20 rounded-lg">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your goals with our {service.title.toLowerCase()} services.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-green-500 hover:bg-green-400 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;