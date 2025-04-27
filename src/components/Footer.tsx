
import { Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">©2025 gogetwell.ai</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-purple transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-purple transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-purple transition-colors">Pricing Policy</a>
            <a href="#" className="text-gray-600 hover:text-purple transition-colors">Editor Policy</a>
          </div>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-purple transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-purple transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
