
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="hero" className="bg-navy pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-purple-light">AI Front Office</span>
            <br />
            <span className="text-white">For Healthcare Agents</span>
          </h1>
          <div className="mt-8 mb-10">
            <p className="text-white text-lg inline">Create </p>
            <p className="text-purple-light text-lg inline">AI Store </p>
            <p className="text-white text-lg inline">in 2 min</p>
            <br />
            <p className="text-white text-lg inline">Scale with </p>
            <p className="text-purple-light text-lg inline">Digital Marketing</p>
          </div>
          <motion.button 
            className="button-primary px-8 py-3 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started
          </motion.button>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <div className="stat-item">
            <span className="stat-number">2100</span>
            <span className="stat-plus">+</span>
            <p className="stat-label ml-2">Qualified Doctors</p>
          </div>
          <div className="stat-item">
            <span className="stat-number">1000</span>
            <span className="stat-plus">+</span>
            <p className="stat-label ml-2">Hospitals</p>
          </div>
          <div className="stat-item">
            <span className="stat-number">800</span>
            <span className="stat-plus">+</span>
            <p className="stat-label ml-2">Treatment Plans</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
