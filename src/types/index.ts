export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CaseStudy {
  id: string;
  industry: string;
  description: string;
  results: string[];
}

export interface CaseStudyDetail {
  id: string;
  industry: string;
  service: string;
  description: string;
  heroImage: string;
  keyMetrics: Array<{
    value: string;
    label: string;
  }>;
  challenge: string;
  challengePoints: string[];
  approach: string;
  approachPoints: string[];
  results: Array<{
    title: string;
    description: string;
  }>;
  solutionFeatures: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  resultImage: string;
  testimonial: {
    quote: string;
    name: string;
    position: string;
    avatar: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  image: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}