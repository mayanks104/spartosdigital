import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Code className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-green-500 font-bold text-xl">Spartos Digital</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Transforming businesses through innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/spartos-digital/" className="text-gray-400 hover:text-green-500">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-green-500">About Us</Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-400 hover:text-green-500">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-green-500">Contact Us</Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-400 hover:text-green-500">Case Studies</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/app-development" className="text-gray-400 hover:text-green-500">App Development</Link>
              </li>
              <li>
                <Link to="/services/web-development" className="text-gray-400 hover:text-green-500">Web Development</Link>
              </li>
              <li>
                <Link to="/services/seo-optimization" className="text-gray-400 hover:text-green-500">SEO Optimization</Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className="text-gray-400 hover:text-green-500">Digital Marketing</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-400">
                <MapPin className="h-5 w-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                <span>SY NO. 172/4, SITE NO 10, UTTARAHALLI HOBLI, KOTHANUR VILLAGE, J P NAGAR 8TH PHASE, BENGALURU, KARNATAKA, 560062</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2 text-green-500" />
                <a href="tel:+919872511346" className="hover:text-green-500">+91 98725 11346</a>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2 text-green-500" />
                <a href="mailto:business@spartosdigital.com" className="hover:text-green-500">business@spartosdigital.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-500/20 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Spartos Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;