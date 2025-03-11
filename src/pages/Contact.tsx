import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-green-500/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to transform your digital presence? We're here to help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 text-center border border-green-500/20 rounded-lg">
              <MapPin className="w-8 h-8 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-400">
                SY NO. 172/4, SITE NO 10,<br />
                UTTARAHALLI HOBLI,<br />
                KOTHANUR VILLAGE,<br />
                J P NAGAR 8TH PHASE,<br />
                BENGALURU, KARNATAKA, 560062
              </p>
            </div>
            <div className="p-6 text-center border border-green-500/20 rounded-lg">
              <Phone className="w-8 h-8 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-400">
                <a href="tel:+919872511346" className="hover:text-green-500">+91 98725 11346</a><br />
                Mon-Fri, 9am-6pm IST
              </p>
            </div>
            <div className="p-6 text-center border border-green-500/20 rounded-lg">
              <Mail className="w-8 h-8 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-400">
                <a href="mailto:business@spartosdigital.com" className="hover:text-green-500">business@spartosdigital.com</a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;