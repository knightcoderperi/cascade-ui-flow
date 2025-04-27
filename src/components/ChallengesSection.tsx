
import { motion } from 'framer-motion';
import { Clock, MessageCircle } from 'lucide-react';

const ChallengesSection = () => {
  return (
    <section id="challenges" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">The Challenges We Solve</h2>
        <div className="section-subtitle"></div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img 
              src="/lovable-uploads/db722b9c-dc70-429e-ab29-2f21f4558e31.png" 
              alt="Healthcare Challenges" 
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
              Medical tourism, especially in India, is plagued by disorganization and inefficiency. Facilitators often rely on outdated methods, leading to delayed bookings, inadequate patient support, and missed growth opportunities.
            </p>
            <p className="text-gray-700 mb-8">
              Our platform addresses these pain points by streamlining lead management and improving operational efficiency for facilitators and hospitals alike.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-light p-2 rounded">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="ml-3 font-bold text-gray-800">Efficient Operations</h3>
                </div>
                <p className="text-gray-600 text-sm">Streamlined booking and management</p>
              </div>
              
              <div className="bg-blue-50 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-light p-2 rounded">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="ml-3 font-bold text-gray-800">Enhanced Support</h3>
                </div>
                <p className="text-gray-600 text-sm">Improved patient communication</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
