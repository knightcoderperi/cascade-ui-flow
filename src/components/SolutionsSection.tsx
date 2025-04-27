
import { motion } from 'framer-motion';
import { Code, Users, MessageSquare, FileText, LineChart, Database, Languages, CreditCard, Search } from 'lucide-react';

const solutions = [
  {
    icon: <Code className="w-6 h-6" />,
    color: "bg-blue-card",
    title: "Custom AI-Powered Website",
    description: "Intelligent, responsive websites tailored to healthcare providers with automated patient interactions."
  },
  {
    icon: <Users className="w-6 h-6" />,
    color: "bg-purple",
    title: "Enhanced Patient Conversion",
    description: "Smart conversion optimization tools to turn visitors into patients with personalized experiences."
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    color: "bg-green-card",
    title: "Real-Time Query Handling",
    description: "Instant response system for patient inquiries with AI-powered chat support."
  },
  {
    icon: <FileText className="w-6 h-6" />,
    color: "bg-orange-card",
    title: "Medical Report Analysis",
    description: "Advanced AI analysis of medical reports for quick and accurate patient assessments."
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    color: "bg-pink-card",
    title: "Improved Lead Generation",
    description: "Data-driven lead generation strategies to attract and engage potential patients."
  },
  {
    icon: <Database className="w-6 h-6" />,
    color: "bg-indigo-card",
    title: "Comprehensive Healthcare Database",
    description: "Extensive medical information database for accurate patient guidance and support."
  },
  {
    icon: <Languages className="w-6 h-6" />,
    color: "bg-red-card",
    title: "Multilingual Support",
    description: "Breaking language barriers with comprehensive multilingual communication tools."
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    color: "bg-teal-card",
    title: "Seamless Payment Handling",
    description: "Secure and efficient payment processing for medical services globally."
  },
  {
    icon: <Search className="w-6 h-6" />,
    color: "bg-blue-card",
    title: "Marketing And SEO Support",
    description: "Optimized digital presence with advanced SEO and marketing strategies."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  })
};

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Comprehensive Solutions</h2>
        <div className="section-subtitle"></div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="feature-card"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div className={`feature-icon ${solution.color}`}>
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
