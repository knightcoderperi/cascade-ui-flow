
import { motion } from 'framer-motion';
import { Phone, Mail, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's get in touch!</h2>
        <p className="text-gray-600 max-w-2xl mb-12">
          Got questions about GoGetWell.AI? Our team is here to help. Contact us for quick and friendly support.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center bg-purple-50 p-5 rounded-lg">
              <div className="bg-purple-light p-3 rounded-full">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500 mb-1">Phone</p>
                <p className="font-medium">+91 9811396858</p>
              </div>
            </div>
            
            <div className="flex items-center bg-purple-50 p-5 rounded-lg">
              <div className="bg-purple-light p-3 rounded-full">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <p className="font-medium">hello@gogetwell.ai</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-purple-50 p-3 rounded-full hover:bg-purple-100 transition-colors">
                  <Twitter className="w-5 h-5 text-purple" />
                </a>
                <a href="#" className="bg-purple-50 p-3 rounded-full hover:bg-purple-100 transition-colors">
                  <Linkedin className="w-5 h-5 text-purple" />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Message"
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-purple text-white font-medium py-3 px-6 rounded-md hover:bg-purple-dark transition-colors flex justify-center items-center"
              >
                Submit
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
