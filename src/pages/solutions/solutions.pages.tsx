import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { KUBEICON } from '@/assets';
import { ActivityLog, AnimatedInvestigation } from '@/components/custom';

// Enhanced animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};


interface SolutionFtProps {
  title: string;
  description: string;
  delay?: number;
}

interface SolutionFtProps {
  title: string;
  description: string;
  delay?: number;
}

const SolutionFeatureCard: React.FC<SolutionFtProps> = ({ title, description, delay = 0 }) => (
  <motion.div
    variants={cardVariants}
    initial="initial"
    whileInView="animate"
    whileHover="hover"
    viewport={{ once: true }}
    transition={{ delay }}
    className="flex flex-col h-full"
  >
    <Card className="h-full p-4 sm:p-5 border-2 shadow-none bg-gradient-to-b from-gray-400/50 to-gray-200 hover:shadow-2xl hover:shadow-gray-400/40 transition-all duration-300">
      <CardHeader className='text-gray-600 hover:text-gray-900 transition-colors duration-300'>
        <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-sm sm:text-md text-gray-600">{description}</CardDescription>
      </CardHeader>
    </Card>
  </motion.div>
);

interface ClusterCardProps {
  cluster: number;
  index: number;
}

const ClusterCard: React.FC<ClusterCardProps> = ({ cluster, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    whileHover={{ scale: 1.05 }}
    transition={{
      duration: 0.5,
      delay: index * 0.2,
      type: "spring",
      stiffness: 300
    }}
    viewport={{ once: true }}
    className="bg-[#fdfdf9a1] p-3 sm:p-4 rounded-lg max-w-xl"
  >
    <div className="flex items-center space-x-3 sm:space-x-4">
      <motion.div
        className="bg-sky-200 p-2 rounded-lg"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 1 }}
      >
        <img src={KUBEICON} className='h-6 w-6 sm:h-7 sm:w-7' alt='kubernetes-icon' />
      </motion.div>
      <div className="flex-1">
        <h2 className="text-sm font-semibold text-gray-800">kubernetes_cluster {cluster}</h2>
        <p className="text-xs sm:text-sm text-gray-600">Last active: 16/12/2024, 11:32:57</p>
      </div>
    </div>
  </motion.div>
);


const SolutionPage = () => {
  const features = [
    {
      title: "Automated Incident Response",
      description: "AI-powered initial response and investigation for Kubernetes incidents, reducing Mean Time To Resolution.",
      icon: "🔍"
    },
    {
      title: "Smart Investigation Engine",
      description: "Advanced AI that proactively identifies potential issues, orchestrates systematic investigations, and pinpoints root causes with minimal human intervention.",
      icon: "🧠"
    },
    {
      title: "Intelligent Response Protocol System",
      description: "Structured workflow engine with step definitions, branching logic, and automated execution capabilities.",
      icon: "📘"
    },
    {
      title: "Secure Command Execution",
      description: "Pre-defined command sets with robust error handling and retry logic in a secure environment.",
      icon: "🔐"
    }
  ];

  const technicalFeatures = [
    {
      title: "Kubernetes Cluster Management",
      items: [
        "Read-only RBAC permissions",
        "Real-time cluster state monitoring",
        "Comprehensive pod health tracking",
        "System log analysis"
      ],
      description: "Comprehensive visibility and control over multiple Kubernetes environments.",
      component: (
        <div className='my-10 space-y-2'>
          {[1, 2, 3].map((cluster, index) => (
            <ClusterCard key={cluster} cluster={cluster} index={index} />
          ))}
        </div>
      )
    },
    {
      title: "Investigation Workflow",
      description: "Incident investigation with our AI-powered workflow, quickly identify root causes and resolve problems.",
      items: [
        "Automated problem detection",
        "Log collection and analysis",
        "Pattern matching and correlation",
        "Root cause determination"
      ],
      component: (
          <AnimatedInvestigation />
      )
    },
    {
      title: "Audit Logs",
      description: "Track all actions, enforce security policies, and ensure compliance with detailed activity logs and sophisticated access controls.",
      items: [
        "Strict access control",
        "Command whitelisting",
        "Comprehensive audit logging",
        "Action verification"
      ],
      component: (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ActivityLog />
        </motion.div>
      )
    }
  ];

  return (
    <motion.div
      className="min-h-screen"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative bg-gradient-to-t from-gray-300 to-gray-200 rounded-3xl py-8 sm:py-16 px-4 sm:px-8 border-b border-green-800 min-h-[50vh] sm:min-h-[70vh]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-center my-8 sm:my-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Badge
                variant="secondary"
                className="bg-blue-500/10 text-sm sm:text-base my-2 sm:my-4 text-gray-500 hover:text-blue-700 rounded-full px-3 sm:px-4 py-1"
              >
                Kubernetes Intelligence Platform
              </Badge>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Automated SRE Intelligence for
              <br />
              <span className="text-emerald-500">Kubernetes Environments</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Transform your Kubernetes operations with AI-powered incident response,
              automated investigation, and intelligent problem resolution.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Core Features Grid */}
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16"
        variants={fadeInUp}
      >
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-8 sm:mb-12 text-gray-600"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Core Capabilities
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-2">
          {features.map((feature, index) => (
            <SolutionFeatureCard
              key={index}
              {...feature}
              delay={index * 0.2}
            />
          ))}
        </div>
      </motion.div>

      {/* Technical Features */}
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16"
        variants={fadeInUp}
      >
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-8 sm:mb-12 text-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Technical Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-4">
          {technicalFeatures.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full border-2 border-gray-200 bg-slate-300/60 p-4 sm:p-6 rounded-3xl shadow-none">
                <CardHeader className="space-y-2 sm:space-y-4">
                  <CardTitle className="text-2xl sm:text-3xl">{section.title}</CardTitle>
                  <CardDescription className="text-base sm:text-lg">{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {section.component}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center bg-gray-800 p-6 sm:p-20 w-full text-white rounded-3xl">
          <motion.h2
            className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Kubernetes Operations?
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join the waitlist to be among the first to experience the future of Kubernetes management.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <a
              href="/waitlist"
              className="inline-block bg-white text-black px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Join Waitlist
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SolutionPage;