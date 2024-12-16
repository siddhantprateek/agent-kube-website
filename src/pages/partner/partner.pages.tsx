
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const PartnerPage = () => {
  const features = [
    'Complete FinOps observability for K8s costs within 3 minutes',
    'Over 90% cost optimization - fully automated',
    'Lead sharing, MSP joint events and GTM activities',
    'An easy K8s module for your cloud platform'
  ];

  const partnerTypes = [
    {
      title: 'Reseller & SI',
      description: 'Co-sell with Agentkube',
      benefits: [
        'Offer the value of automated optimization and savings to your customers',
        'Accelerate growth with K8s efficiency and uncover revenue budgets to make valuable long-term partnerships',
        'Acquire new customers for your business with Agentkube\'s cost optimization',
        'Get full partners benefit from lead sharing, MSP programs, joint events, certifications, and more!'
      ]
    },
    {
      title: 'OEM & MSP partners',
      description: 'FinOps offering for K8s',
      benefits: [
        'Add Kubernetes observability and spend analysis to your FinOps service within minutes',
        'Make automation an inherent part of your offering'
      ]
    },
    {
      title: 'Technology partners',
      description: 'K8s optimization for your product',
      benefits: [
        'Add K8s optimization to your product offering',
        'Get a game-changing differentiator and expand your market reach'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Top commissions',
      description: 'Earn the best rates in the cloud native market.',
      icon: '⭐'
    },
    {
      title: 'Marketing & sales support',
      description: 'Get all the collateral and technical training you need.',
      icon: '🎯'
    },
    {
      title: 'Deal priority',
      description: "Once you register a deal, you'll get full GTM support to make you succeed.",
      icon: '🎉'
    },
    {
      title: 'Dedicated account manager',
      description: 'Get personalized support and get answers fast.',
      icon: '👤'
    },
    {
      title: 'Available on GCP, AWS and Azure marketplaces',
      description: 'Speed up procurement by getting deals directly on the marketplaces.',
      icon: '☁️'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <p className="text-green-600 font-semibold">#1 Kubernetes platform</p>
          <h1 className="mt-4 text-5xl font-bold text-gray-900">Partner with Agentkube</h1>
          
          {/* Feature Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white px-4 py-2 rounded-full text-sm text-gray-600 shadow-sm"
              >
                {feature}
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex justify-center gap-4">
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-lg"
            >
              Become a partner
            </Button>
          </div>
        </div>

        {/* Dashboard Preview */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 rounded-xl overflow-hidden shadow-2xl"
        >
          <div className="bg-gray-900 text-white p-6">
            <h2 className="text-2xl">Hello, Michael</h2>
            <p className="text-gray-400">Check your current and previous deals</p>
            <div className="mt-4">
              <span className="text-green-400">$90,495.50</span>
            </div>
          </div>
          <div className="bg-white p-6">
            <table className="w-full">
              <thead className="text-left text-gray-500">
                <tr>
                  <th className="py-2">Deal</th>
                  <th>Contact</th>
                  <th>Submitted on</th>
                  <th>Deal amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="py-3">TechCorp</td>
                  <td>john@techcorp.com</td>
                  <td>2024-02-16</td>
                  <td>$23,450</td>
                  <td className="text-green-600">Active</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div> */}
      </div>

      {/* Partner Types Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {partnerTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{type.title}</CardTitle>
                  <p className="text-lg text-gray-600">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-green-600">•</span>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Fully committed to your success</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-gray-800"
              >
                <div className="text-2xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
            <div className="p-6 rounded-lg bg-gray-800">
              <h3 className="text-xl font-semibold mb-2">50+ partners and counting</h3>
              <p className="text-gray-400 mb-4">Join the ever-growing community of K8s experts.</p>
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
              >
                Become a partner
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerPage;