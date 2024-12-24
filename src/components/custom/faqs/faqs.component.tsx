import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

interface FAQData {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 md:py-6 text-left flex justify-between items-center focus:outline-none group"
        onClick={onClick}
      >
        <span className="text-base md:text-lg font-medium text-gray-900 group-hover:text-gray-600">{question}</span>
        <ChevronDown
          className={`w-4 h-4 md:w-5 md:h-5 text-gray-500 transition-transform duration-200 group-hover:text-gray-600 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96 pb-4 md:pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-sm md:text-base text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQData[] = [
    {
      question: 'Is there a free plan?',
      answer: 'Yes, we offer a free tier that includes basic features to help you get started. You can upgrade anytime to access premium features.'
    },
    {
      question: 'Do you offer any discounts?',
      answer: 'We offer discounts for annual subscriptions and special rates for educational institutions and non-profit organizations.'
    },
    {
      question: 'How do I cancel my subscription?',
      answer: "You can cancel your subscription at any time from your account settings. If you cancel, you'll still have access to your plan until the end of your billing period."
    },
    {
      question: 'What happens if I switch to a lower-priced plan?',
      answer: "When switching to a lower-priced plan, the change will take effect at the start of your next billing cycle. You'll continue to have access to your current plan's features until then."
    },
    {
      question: 'Can I change my plan?',
      answer: 'Yes, you can change your plan at any time. Changes to a higher-tier plan take effect immediately, while downgrades take effect at the end of your current billing cycle.'
    }
  ];

  const toggleQuestion = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto px-4 py-8 md:py-12 sm:px-6 lg:px-8">
      <p className="font-bold text-gray-600 text-center mt-6 md:mt-10 mb-3 md:mb-5 text-sm md:text-base">
        FAQs
      </p>
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">
        Frequently Asked Questions
      </h1>
      <div className="max-w-3xl mx-auto space-y-1 px-0 sm:px-8 md:px-12 lg:px-16">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => toggleQuestion(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;