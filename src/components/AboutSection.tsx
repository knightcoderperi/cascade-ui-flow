
import { motion } from 'framer-motion';
import { Zap, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Us</h2>
        <div className="section-subtitle"></div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img 
              src="/lovable-uploads/204ac66b-3537-470c-888e-5f32b1e1044d.png" 
              alt="Healthcare Professionals" 
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 mb-6">
              We are a pioneering AI-driven platform focused on revolutionizing the medical tourism industry. By addressing inefficiencies and disorganization, we empower healthcare facilitators to modernize their operations, attract more patients, and deliver seamless, personalized care across borders.
            </p>
            <p className="text-gray-700 mb-8">
              Our cutting-edge solutions are designed to streamline processes and enhance the overall patient experience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-light p-2 rounded">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="ml-3 font-bold text-gray-800">Modern Solutions</h3>
                </div>
                <p className="text-gray-600 text-sm">Leveraging AI technology for healthcare</p>
              </div>
              
              <div className="bg-blue-50 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-light p-2 rounded">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="ml-3 font-bold text-gray-800">Patient-Centric</h3>
                </div>
                <p className="text-gray-600 text-sm">Personalized healthcare experiences</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
