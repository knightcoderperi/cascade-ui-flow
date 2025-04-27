
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is gogetwell.ai?",
    answer: "gogetwell.ai is an AI-powered platform that helps healthcare facilitators streamline their operations, from building customized websites to managing patient leads and enhancing communication."
  },
  {
    question: "What is the AI Front Office for Healthcare Agents?",
    answer: "The AI Front Office is our comprehensive suite of tools designed specifically for healthcare facilitators. It includes website creation, patient communication, lead management, and data analytics capabilities."
  },
  {
    question: "How does the AI Agent assist me in my healthcare business?",
    answer: "The AI Agent automates repetitive tasks, provides 24/7 patient support, analyzes medical reports, manages appointments, and offers personalized recommendations for improving your healthcare business operations."
  },
  {
    question: "Can I customize the website for my healthcare services?",
    answer: "Yes! You can fully customize your website to match your brand, specialty areas, and service offerings. Our platform provides easy-to-use tools to create professional healthcare websites without coding knowledge."
  },
  {
    question: "How does this platform support independent healthcare facilitators like me?",
    answer: "Our platform is specifically designed for independent facilitators, providing affordable tools to compete with larger organizations. It offers automation that reduces overhead while improving patient acquisition and retention."
  },
  {
    question: "How does the platform help me manage patient leads?",
    answer: "The platform includes a comprehensive CRM system that tracks patient inquiries, follows up automatically, segments leads by priority, and provides analytics to optimize your conversion rates."
  },
  {
    question: "Is it easy to integrate the platform with the hospitals I work with?",
    answer: "Yes, our platform offers seamless integration capabilities with major hospital management systems and electronic health records, making coordination and information sharing efficient."
  },
  {
    question: "Is the platform secure and compliant with healthcare regulations?",
    answer: "Absolutely. Our platform is built with HIPAA compliance in mind and employs enterprise-grade security measures to protect patient data and meet international healthcare data protection standards."
  },
  {
    question: "How quickly can I get started with the platform?",
    answer: "You can be up and running in as little as 2 minutes! Our guided setup process will help you configure your AI tools, website, and lead management system quickly."
  },
  {
    question: "What kind of customer support is available if I need help?",
    answer: "We offer 24/7 customer support through chat, email, and phone. Additionally, you'll have access to comprehensive documentation, video tutorials, and regular webinars to help you get the most from our platform."
  },
  {
    question: "How does the platform help me attract more patients?",
    answer: "Our platform includes built-in SEO tools, content generation for medical topics, social media integration, and targeted advertising capabilities to improve your online visibility and attract more potential patients."
  }
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="section-subtitle"></div>
        
        <motion.div 
          className="mt-12 max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-purple" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 pb-4 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
