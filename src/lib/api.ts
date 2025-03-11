// Simulated API calls - In production, replace with real API endpoints
export const submitContactForm = async (formData: any) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Form submitted successfully' });
    }, 1000);
  });
};

export const fetchCaseStudies = async () => {
  return [
    {
      id: '1',
      industry: 'Healthcare',
      description: 'Maximizing Lead Generation with Google Ads',
      results: [
        '10% increase in conversions',
        'Enhanced patient acquisition',
        'Lower CPL',
        '₹30L/month budget optimization'
      ]
    },
    {
      id: '2',
      industry: 'Entertainment',
      description: 'Lowering CPI for an App Install Campaign',
      results: [
        'CPI reduced from ₹25 to ₹16',
        'Improved campaign efficiency',
        'Enhanced audience segmentation',
        '₹20L/month budget optimization'
      ]
    },
    {
      id: '3',
      industry: 'SaaS',
      description: 'Driving Conversions with Google Ads & Email Marketing',
      results: [
        '25% increase in conversions',
        'Improved user acquisition',
        'Enhanced engagement',
        'Better conversion tracking'
      ]
    },
    {
      id: '4',
      industry: 'Fintech',
      description: 'Optimizing CAC for a Digital Gold Investment App',
      results: [
        'Reduced Customer Acquisition Cost',
        'Improved user engagement',
        'Enhanced targeting strategies',
        'Optimized media spend'
      ]
    },
    {
      id: '5',
      industry: 'Real Estate',
      description: 'Improving Lead Quality & Conversion Rates',
      results: [
        'Higher lead-to-sale conversion',
        'Reduced wasted ad spend',
        'Improved campaign ROI',
        'Enhanced lead quality'
      ]
    }
  ];
};

export const fetchCaseStudyDetail = async (id: string) => {
  const caseStudies = {
    '1': {
      id: '1',
      industry: 'Healthcare',
      service: 'Digital Marketing',
      description: 'Maximizing Lead Generation with Google Ads',
      heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
      keyMetrics: [
        { value: '10%', label: 'Conversion Increase' },
        { value: '₹30L', label: 'Monthly Budget' },
        { value: '25%', label: 'Lower CPL' },
        { value: '95%', label: 'Client Satisfaction' }
      ],
      challenge: 'A leading healthcare provider sought to improve its lead generation through Google Ads while managing a substantial monthly budget of ₹30L.',
      challengePoints: [
        'High cost per lead',
        'Inefficient budget allocation',
        'Poor targeting',
        'Low conversion rates'
      ],
      approach: 'We implemented advanced optimization strategies, refined targeting, and improved ad creatives.',
      approachPoints: [
        'Advanced campaign optimization',
        'Refined audience targeting',
        'Creative A/B testing',
        'Conversion tracking setup'
      ],
      results: [
        {
          title: 'Increased Conversions',
          description: '10% increase in overall conversion rate'
        },
        {
          title: 'Cost Efficiency',
          description: 'Significant reduction in cost per lead'
        },
        {
          title: 'Quality Improvement',
          description: 'Higher quality leads and better ROI'
        }
      ],
      solutionFeatures: [
        {
          icon: 'chart',
          title: 'Advanced Analytics',
          description: 'Implemented comprehensive tracking and reporting'
        },
        {
          icon: 'users',
          title: 'Audience Optimization',
          description: 'Refined targeting for better lead quality'
        },
        {
          icon: 'clock',
          title: 'Real-time Optimization',
          description: 'Continuous campaign improvements'
        }
      ],
      resultImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      testimonial: {
        quote: 'The results achieved through their Google Ads optimization were remarkable.',
        name: 'Marketing Director',
        position: 'Healthcare Industry',
        avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2'
      }
    },
    '2': {
      id: '2',
      industry: 'Entertainment',
      service: 'App Marketing',
      description: 'Lowering CPI for an App Install Campaign',
      heroImage: 'https://images.unsplash.com/photo-1586899028174-e7098604235b',
      keyMetrics: [
        { value: '36%', label: 'CPI Reduction' },
        { value: '₹20L', label: 'Monthly Budget' },
        { value: '45%', label: 'CTR Increase' },
        { value: '2x', label: 'ROAS' }
      ],
      challenge: 'An entertainment brand running large-scale Meta campaigns aimed to boost app installs while reducing acquisition costs.',
      challengePoints: [
        'High CPI',
        'Inefficient ad spend',
        'Poor campaign performance',
        'Limited user engagement'
      ],
      approach: 'We leveraged audience segmentation, creative A/B testing, and real-time optimizations.',
      approachPoints: [
        'Advanced audience segmentation',
        'Creative optimization',
        'Real-time bid adjustments',
        'Performance tracking'
      ],
      results: [
        {
          title: 'CPI Reduction',
          description: 'Reduced CPI from ₹25 to ₹16'
        },
        {
          title: 'Efficiency',
          description: 'Improved campaign performance'
        },
        {
          title: 'Scale',
          description: 'Maintained performance at scale'
        }
      ],
      solutionFeatures: [
        {
          icon: 'chart',
          title: 'Performance Tracking',
          description: 'Real-time monitoring and optimization'
        },
        {
          icon: 'users',
          title: 'User Targeting',
          description: 'Advanced audience segmentation'
        },
        {
          icon: 'clock',
          title: 'Continuous Optimization',
          description: 'Ongoing performance improvements'
        }
      ],
      resultImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      testimonial: {
        quote: 'Their app marketing expertise helped us achieve our user acquisition goals efficiently.',
        name: 'Product Manager',
        position: 'Entertainment Industry',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
      }
    },
    '3': {
      id: '3',
      industry: 'SaaS',
      service: 'Digital Marketing',
      description: 'Driving Conversions with Google Ads & Email Marketing',
      heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      keyMetrics: [
        { value: '25%', label: 'Conversion Increase' },
        { value: '40%', label: 'Email Open Rate' },
        { value: '15%', label: 'CTR Improvement' },
        { value: '3x', label: 'ROI' }
      ],
      challenge: 'A SaaS brand offering a noise cancellation solution needed to scale its online presence and improve conversion rates.',
      challengePoints: [
        'Low conversion rates',
        'Poor tracking setup',
        'Ineffective email campaigns',
        'Limited online visibility'
      ],
      approach: 'We implemented a comprehensive digital marketing strategy combining Google Ads and email marketing.',
      approachPoints: [
        'Google Ads optimization',
        'GA & GTM integration',
        'Email campaign automation',
        'Conversion tracking enhancement'
      ],
      results: [
        {
          title: 'Conversion Growth',
          description: '25% increase in overall conversions'
        },
        {
          title: 'Engagement',
          description: 'Improved user engagement metrics'
        },
        {
          title: 'Tracking',
          description: 'Enhanced conversion attribution'
        }
      ],
      solutionFeatures: [
        {
          icon: 'chart',
          title: 'Analytics Integration',
          description: 'Comprehensive tracking setup'
        },
        {
          icon: 'users',
          title: 'Email Automation',
          description: 'Targeted email campaigns'
        },
        {
          icon: 'clock',
          title: 'Performance Optimization',
          description: 'Continuous improvement'
        }
      ],
      resultImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      testimonial: {
        quote: 'The digital marketing strategy transformed our online presence and user acquisition.',
        name: 'CEO',
        position: 'SaaS Industry',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
      }
    },
    '4': {
      id: '4',
      industry: 'Fintech',
      service: 'Digital Marketing',
      description: 'Optimizing CAC for a Digital Gold Investment App',
      heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      keyMetrics: [
        { value: '30%', label: 'CAC Reduction' },
        { value: '45%', label: 'Conversion Rate' },
        { value: '2.5x', label: 'ROI' },
        { value: '50%', label: 'User Retention' }
      ],
      challenge: 'A fintech company wanted to improve its customer acquisition efficiency for its digital gold investment app.',
      challengePoints: [
        'High customer acquisition cost',
        'Poor user retention',
        'Inefficient targeting',
        'Low conversion rates'
      ],
      approach: 'Through deep funnel analysis, audience segmentation, and creative enhancements, we optimized media spend and refined targeting strategies.',
      approachPoints: [
        'Funnel optimization',
        'Audience segmentation',
        'Creative testing',
        'Performance tracking'
      ],
      results: [
        {
          title: 'CAC Reduction',
          description: 'Significant reduction in customer acquisition cost'
        },
        {
          title: 'User Quality',
          description: 'Improved user retention and engagement'
        },
        {
          title: 'ROI',
          description: 'Better return on ad spend'
        }
      ],
      solutionFeatures: [
        {
          icon: 'chart',
          title: 'Funnel Analysis',
          description: 'Deep dive into user journey'
        },
        {
          icon: 'users',
          title: 'User Targeting',
          description: 'Refined audience segments'
        },
        {
          icon: 'clock',
          title: 'Optimization',
          description: 'Continuous performance improvement'
        }
      ],
      resultImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      testimonial: {
        quote: 'Their strategic approach helped us significantly reduce our customer acquisition costs.',
        name: 'Product Lead',
        position: 'Fintech Industry',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
      }
    },
    '5': {
      id: '5',
      industry: 'Real Estate',
      service: 'Digital Marketing',
      description: 'Improving Lead Quality & Conversion Rates',
      heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      keyMetrics: [
        { value: '35%', label: 'Lead Quality' },
        { value: '40%', label: 'Conversion Rate' },
        { value: '25%', label: 'Cost Reduction' },
        { value: '3x', label: 'ROI' }
      ],
      challenge: 'A real estate firm aimed to attract high-intent buyers through paid media campaigns.',
      challengePoints: [
        'Poor lead quality',
        'High ad spend waste',
        'Inefficient targeting',
        'Low conversion rates'
      ],
      approach: 'By optimizing landing pages, refining audience targeting, and implementing conversion tracking, we enhanced ad efficiency.',
      approachPoints: [
        'Landing page optimization',
        'Audience refinement',
        'Conversion tracking',
        'Ad optimization'
      ],
      results: [
        {
          title: 'Lead Quality',
          description: 'Significant improvement in lead quality'
        },
        {
          title: 'Cost Efficiency',
          description: 'Reduced wasted ad spend'
        },
        {
          title: 'Conversion Rate',
          description: 'Higher lead-to-sale conversion'
        }
      ],
      solutionFeatures: [
        {
          icon: 'chart',
          title: 'Performance Tracking',
          description: 'Comprehensive analytics setup'
        },
        {
          icon: 'users',
          title: 'Audience Targeting',
          description: 'Refined buyer personas'
        },
        {
          icon: 'clock',
          title: 'Optimization',
          description: 'Continuous improvement'
        }
      ],
      resultImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      testimonial: {
        quote: 'The improvement in lead quality has transformed our sales process.',
        name: 'Sales Director',
        position: 'Real Estate Industry',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
      }
    }
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(caseStudies[id as keyof typeof caseStudies]);
    }, 1000);
  });
};

export const fetchTestimonials = async () => {
  return [
    {
      id: '1',
      name: 'Marketing Director',
      position: 'Healthcare Industry',
      company: 'Leading Healthcare Provider',
      content: 'The results achieved through their Google Ads optimization were remarkable.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2'
    },
    {
      id: '2',
      name: 'Product Manager',
      position: 'Entertainment Industry',
      company: 'Entertainment Brand',
      content: 'Their app marketing expertise helped us achieve our user acquisition goals efficiently.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
    },
    {
      id: '3',
      name: 'CEO',
      position: 'SaaS Industry',
      company: 'Tech Company',
      content: 'The digital marketing strategy transformed our online presence and user acquisition.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
    }
  ];
};