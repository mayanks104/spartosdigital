import React, { useState } from 'react';
import { Send, Loader } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { ContactForm } from '../types';

const initialFormState: ContactForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: ''
};

const ContactFormComponent = ({ onClose }: { onClose?: () => void }) => {
  const [formData, setFormData] = useState<ContactForm>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const { error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
        },
      ]);
    
    setIsSubmitting(false);
    
    if (error) {
      setSubmitStatus({ success: false, message: error.message });
    } else {
      setSubmitStatus({ success: true, message: 'Submission successful!' });
      alert('Thank you for your message. We\'ll get back to you soon!'); 
      if (onClose) onClose();
      setFormData(initialFormState);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-black p-8 rounded-lg border border-green-500/20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Contact Us</h2>
        {onClose && (
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            ×
          </button>
        )}
      </div>

      {submitStatus.message && (
        <div className={`p-4 mb-6 rounded ${submitStatus.success ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}> 
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md bg-gray-900 border border-gray-700 text-white px-4 py-2 focus:outline-none focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md bg-gray-900 border border-gray-700 text-white px-4 py-2 focus:outline-none focus:border-green-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-400">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md bg-gray-900 border border-gray-700 text-white px-4 py-2 focus:outline-none focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-400">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md bg-gray-900 border border-gray-700 text-white px-4 py-2 focus:outline-none focus:border-green-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-400">Service Interested In *</label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-900 border border-gray-700 text-white px-4 py-2 focus:outline-none focus:border-green-500"
          >
            <option value="">Select a service</option>
            <option value="app-development">App Development</option>
            <option value="saas-solutions">SaaS Solutions</option>
            <option value="seo-optimization">SEO Optimization</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="web-development">Web Development</option>
            <option value="product-development">Product Development</option>
            <option value="lead-generation">Lead Generation</option>
            <option value="marketing-strategy">Marketing Strategy</option>
            <option value="analytics-reporting">Analytics & Reporting</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message *</label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-900 border border-gray-700 text-white px-4 py-2 focus:outline-none focus:border-green-500"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-green-500 hover:bg-green-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader className="animate-spin mr-2 h-5 w-5" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactFormComponent;