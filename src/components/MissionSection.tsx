
import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp } from 'lucide-react';

const MissionSection = () => {
  return (
    <section id="mission" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Mission</h2>
        <div className="section-subtitle"></div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 mb-6">
              Our mission is to simplify the complex medical tourism process by leveraging advanced AI tools that optimize healthcare facilitators operations, maximize revenue opportunities, and provide patients with personalized and stress-free treatment journeys.
            </p>
            <p className="text-gray-700 mb-8">
              We strive to become the leading platform for healthcare tourism management and digital transformation.
            </p>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-light p-2 rounded">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="ml-3 font-bold text-gray-800">AI-Powered Solutions</h3>
                </div>
                <p className="text-gray-600">Optimizing operations with advanced technology</p>
              </div>
              
              <div className="bg-blue-50 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-light p-2 rounded">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="ml-3 font-bold text-gray-800">Growth Focus</h3>
                </div>
                <p className="text-gray-600">Maximizing revenue and opportunities</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img 
              src="/lovable-uploads/67aa495f-cef9-4fc6-bf32-28a25e0f2633.png" 
              alt="Healthcare Mission" 
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
