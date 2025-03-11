import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Industries from './components/Industries';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import CaseStudyDetail from './pages/CaseStudyDetail';
import ServicesPage from './pages/ServicesPage';
import CaseStudiesPage from './pages/CaseStudies';
import Modal from './components/Modal';
import ContactForm from './components/ContactForm';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero onGetStarted={() => setIsContactModalOpen(true)} />
              <Services />
              <Industries />
              <CaseStudies />
              <Testimonials />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
      
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
        </Routes>

        <Modal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        >
          <ContactForm onClose={() => setIsContactModalOpen(false)} />
        </Modal>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;