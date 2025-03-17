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
        avatar: 'https://cdn-icons-png.flaticon.com/512/4003/4003833.png'
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
        avatar: 'data:image/png;base64,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'
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
        avatar: 'data:image/jpeg;base64,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'
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
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2UvdgwD9zm9_uV5ZGjHVmUl7hanbhvrm7rw&s'
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
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVsahpDsV09Vd74RbDo2e4tS_LIA2meqAXBg&s'
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