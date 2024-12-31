import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { BlurText } from '@/components/ui/blur-text';

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
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const getPriceForPlan = (basePrice: number | string): number | string => {
    if (typeof basePrice === 'string') return basePrice;
    return billingPeriod === 'annual' ? basePrice * 10 : basePrice;
  };

  const pricingOptions = [
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

  const featureCategories = [
    {
      name: "General",
      features: [
        {
          name: "Kubernetes Clusters",
          description: "Number of supported clusters",
          values: ["1 cluster", "Up to 3 clusters", "Up to 10 clusters", "Unlimited"]
        },
        {
          name: "Support Level",
          values: ["Community", "Email", "Priority", "24/7 Dedicated"]
        }
      ]
    },
    {
      name: "Investigation Features",
      features: [
        {
          name: "Automated Triage",
          values: [true, true, true, true]
        },
        {
          name: "Root Cause Analysis",
          values: [true, true, true, true]
        },
        {
          name: "Custom Response Protocol",
          values: [false, true, true, true]
        },
        {
          name: "Advanced Pattern Detection",
          values: [false, true, true, true]
        }
      ]
    },
    {
      name: "Security & Compliance",
      features: [
        {
          name: "RBAC Support",
          values: [false, true, true, true]
        },
        {
          name: "Audit Logging",
          values: [false, false, true, true]
        },
        {
          name: "Custom Security Policies",
          values: [false, false, true, true]
        }
      ]
    },
    {
      name: "Advanced Features",
      features: [
        {
          name: "Custom Integrations",
          values: [false, true, true, true]
        },
        {
          name: "API Access",
          values: ["Limited", "Full", "Full", "Enterprise"]
        },
        {
          name: "Deployment Options",
          values: ["Cloud", "Cloud", "Cloud/Hybrid", "Any"]
        }
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

      <h2 className='bg-emerald-300 border-2 border-emerald-600 mt-4 p-2 rounded-[0.4rem]'>
        <BlurText 
          text='*Note: Pricing structure and feature distribution subject to change post-beta.'
        />
      </h2>

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
            Annual billing {billingPeriod === 'annual' && '(Save 16%)'}
          </button>
        </motion.div>
      </motion.div>

      {/* Pricing Cards */}
      <motion.div 
        className="mt-12 grid gap-8 lg:grid-cols-4 lg:gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {pricingOptions.map((option) => (
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
                  {typeof option.price === 'number' ? `$${getPriceForPlan(option.price)}` : option.price}
                </span>
                <span className="text-sm font-semibold leading-6">
                  /{billingPeriod === 'annual' ? 'year' : option.period}
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                {option.description}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <Button
                variant={option.isPopular ? "secondary" : "default"}
                className={`w-full ${
                  option.isPopular ? 'bg-[#A9FF4C] hover:bg-[#98E643] text-black' : ''
                }`}
              >
                Get started
              </Button>
              
              <Button
                variant="ghost"
                className={`w-full ${
                  option.isPopular ? 'text-white hover:bg-gray-800' : ''
                }`}
              >
                Chat to sales
              </Button>
            </div>

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

      {/* Feature Comparison Table */}
      <div className="mt-24">
        <h3 className="text-2xl font-bold mb-8">Feature Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-4 px-6 text-left">Features</th>
                {pricingOptions.map((option) => (
                  <th key={option.name} className="py-4 px-6 text-center">{option.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureCategories.map((category) => (
                <>
                  <tr key={category.name} className="rounded-xl">
                    <td colSpan={5} className="py-3 px-6 bg-gray-50  font-semibold rounded-xl">{category.name}</td>
                  </tr>
                  {category.features.map((feature) => (
                    <tr key={feature.name} className="border-t hover:bg-gray-300/80">
                      <td className="py-3 px-6">{feature.name}</td>
                      {feature.values.map((value, valueIdx) => (
                        <td key={valueIdx} className="py-3 px-6 text-cente">
                          {typeof value === 'boolean' ? (
                            value ? (
                              <Check className="h-5 w-5 text-emerald-600 mx-auto" />
                            ) : (
                              <X className="h-5 w-5 text-gray-400 mx-auto" />
                            )
                          ) : (
                            <span className="text-sm">{value}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pricing;