
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SolutionsSection from '../components/SolutionsSection';
import AboutSection from '../components/AboutSection';
import MissionSection from '../components/MissionSection';
import ChallengesSection from '../components/ChallengesSection';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Index = () => {
  // Preload images
  useEffect(() => {
    const imagesToPreload = [
      '/lovable-uploads/204ac66b-3537-470c-888e-5f32b1e1044d.png',
      '/lovable-uploads/db722b9c-dc70-429e-ab29-2f21f4558e31.png',
      '/lovable-uploads/67aa495f-cef9-4fc6-bf32-28a25e0f2633.png'
    ];
    
    imagesToPreload.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <HeroSection />
        <SolutionsSection />
        <AboutSection />
        <MissionSection />
        <ChallengesSection />
        <FaqSection />
        <ContactSection />
        <Footer />
        <ScrollToTopButton />
      </motion.div>
    </div>
  );
};

export default Index;
