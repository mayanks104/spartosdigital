import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code, Home, Briefcase, FileText, Users, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: <Home className="h-5 w-5" /> },
    { name: 'Services', href: '/services', icon: <Briefcase className="h-5 w-5" /> },
    { name: 'Case Studies', href: '/case-studies', icon: <FileText className="h-5 w-5" /> },
    { name: 'About', href: '/about', icon: <Users className="h-5 w-5" /> },
    { name: 'Contact', href: '/contact', icon: <Phone className="h-5 w-5" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-lg border-b border-green-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <Code className="h-8 w-8 text-green-500 transform group-hover:rotate-180 transition-transform duration-500" />
              <span className="ml-2 text-green-500 font-bold text-xl">Spartos Digital</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-green-500 bg-green-500/10'
                      : 'text-gray-300 hover:text-green-500 hover:bg-green-500/10'
                  }`}
                >
                  {item.icon}
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-green-500 hover:text-green-400 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden fixed inset-0 top-20 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
          <div className="absolute inset-0 bg-black/95 backdrop-blur-lg">
            <div className="p-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-4 py-3 rounded-lg text-base font-medium mb-2 ${
                    isActive(item.href)
                      ? 'text-green-500 bg-green-500/10'
                      : 'text-gray-300 hover:text-green-500 hover:bg-green-500/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;