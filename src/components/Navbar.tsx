
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-2xl font-bold flex items-center">
          <span className="text-purple-light">go</span>Getwell.ai
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-white hover:text-purple-light transition-colors">About Us</a>
          <a href="#faq" className="text-white hover:text-purple-light transition-colors">F&Q</a>
          <a href="#contact" className="text-white hover:text-purple-light transition-colors">Contact Us</a>
        </div>

        <div className="hidden md:flex space-x-4">
          <button className="px-6 py-2 text-gray-800 bg-white rounded-md hover:bg-gray-100 transition-colors">
            Login
          </button>
          <button className="px-6 py-2 text-white bg-purple hover:bg-purple-dark rounded-md transition-colors">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy absolute w-full py-4 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#about" className="text-white py-2 hover:text-purple-light" onClick={() => setIsMenuOpen(false)}>
              About Us
            </a>
            <a href="#faq" className="text-white py-2 hover:text-purple-light" onClick={() => setIsMenuOpen(false)}>
              F&Q
            </a>
            <a href="#contact" className="text-white py-2 hover:text-purple-light" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </a>
            <div className="flex flex-col space-y-3 pt-3 border-t border-gray-800">
              <button className="px-6 py-2 text-gray-800 bg-white rounded-md hover:bg-gray-100 transition-colors">
                Login
              </button>
              <button className="px-6 py-2 text-white bg-purple hover:bg-purple-dark rounded-md transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
