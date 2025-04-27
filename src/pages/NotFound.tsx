
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <motion.div 
        className="text-center px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl md:text-8xl font-bold text-purple mb-4">404</h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">Oops! Page not found</p>
        <Link 
          to="/" 
          className="button-primary inline-block"
        >
          Return to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
