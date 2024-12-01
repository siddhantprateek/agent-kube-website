import { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface PricingOption {
  name: string;
  price: number | string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const pricingOptions: PricingOption[] = [
    {
      name: "Developer Tier",
      price: 0,
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "1 cluster",
        "Community support",
        "Basic Response Protocol",
        "Core investigation features",
        "Public Docker images",
        "Rate limited API"
      ]
    },
    {
      name: "Pro Tier",
      price: 29,
      period: "per month",
      description: "Growing teams up to 3 clusters",
      isPopular: true,
      features: [
        "Up to 3 clusters",
        "Email support",
        "Advanced Response Protocol",
        "Custom integrations",
        "Unlimited investigations",
        "Team collaboration"
      ]
    },
    {
      name: "Business",
      price: 199,
      period: "per month",
      description: "Advanced features + priority support",
      features: [
        "Up to 10 clusters",
        "Priority support",
        "Enterprise features",
        "Advanced analytics",
        "SSO & RBAC",
        "Audit logs"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "per month",
      description: "Advanced features + unlimited usage",
      features: [
        "Unlimited clusters",
        "24/7 support",
        "On-prem deployment",
        "Custom contracts",
        "Dedicated support",
        "Professional services"
      ]
    }
  ];

  return (
    <div className="py-24 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <motion.div 
        className="text-left"
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        <h2 className="text-7xl font-bold tracking-tight text-gray-800">
          We've got a plan<br />that's <span className='text-emerald-500'>perfect</span> for you
        </h2>
      </motion.div>

      <motion.div 
        className="mt-12 flex justify-start gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div 
          className="inline-flex rounded-lg border p-1 bg-gray-300"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <button
            onClick={() => setBillingPeriod('monthly')}
            className={`px-4 py-2 text-sm rounded-md transition-all duration-200 ${
              billingPeriod === 'monthly'
                ? 'bg-white shadow-sm text-black'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Monthly billing
          </button>
          <button
            onClick={() => setBillingPeriod('annual')}
            className={`px-4 py-2 text-sm rounded-md transition-all duration-200 ${
              billingPeriod === 'annual'
                ? 'bg-white shadow-sm text-black'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Annual billing
          </button>
        </motion.div>
      </motion.div>

      <motion.div 
        className="mt-12 grid gap-8 lg:grid-cols-4 lg:gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {pricingOptions.map((option, _) => (
          <motion.div
            key={option.name}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`relative flex flex-col rounded-2xl border p-8 ${
              option.isPopular
                ? 'bg-gray-900 text-white shadow-2xl'
                : 'bg-white text-gray-900'
            }`}
          >
            {option.isPopular && (
              <motion.div 
                className="absolute -top-4 right-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="inline-flex items-center rounded-full bg-[#A9FF4C] px-3 py-1 text-sm font-medium text-gray-900">
                  Popular
                </span>
              </motion.div>
            )}

            <div className="mb-6">
              <h3 className="text-lg font-semibold leading-7">{option.name}</h3>
              <div className="mt-4 flex items-baseline gap-x-2">
                <span className="text-4xl font-bold tracking-tight">
                  {typeof option.price === 'number' ? `$${option.price}` : option.price}
                </span>
                <span className="text-sm font-semibold leading-6">/{option.period}</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                {option.description}
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant={option.isPopular ? "secondary" : "default"}
                className={`w-full ${
                  option.isPopular ? 'bg-[#A9FF4C] hover:bg-[#98E643] text-black' : ''
                }`}
              >
                Get started
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-2"
            >
              <Button
                variant="ghost"
                className={`w-full ${
                  option.isPopular ? 'text-white hover:bg-gray-800' : ''
                }`}
              >
                Chat to sales
              </Button>
            </motion.div>

            <div className="mt-8 space-y-3">
              <h4 className={`text-sm font-semibold leading-6 ${
                option.isPopular ? 'text-white' : 'text-gray-900'
              }`}>
                FEATURES
              </h4>
              <ul className="space-y-3 text-sm leading-6">
                {option.features.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex gap-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Check className={`h-5 w-5 flex-none ${
                      option.isPopular ? 'text-[#A9FF4C]' : 'text-gray-600'
                    }`} />
                    <span className={option.isPopular ? 'text-gray-300' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Pricing;