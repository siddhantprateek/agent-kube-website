import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const AnimatedInvestigation = () => {
  const namespaces = [
    { name: 'agent-kube-operator-system', status: 'Active', age: '12d' },
    { name: 'cyclops', status: 'Active', age: '147d' },
    { name: 'default', status: 'Active', age: '211d' },
    { name: 'kube-public', status: 'Active', age: '211d' },
    { name: 'kube-system', status: 'Active', age: '211d' }
  ];

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    },
    hover: {
      boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const chevronVariants = {
    hidden: { scale: 0, rotate: -90 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: {
      rotate: 90,
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    }),
    hover: {
      backgroundColor: "rgba(255,255,255,0.1)",
      x: 10,
      transition: {
        duration: 0.2
      }
    }
  };

  const commandBoxVariants = {
    hover: {
      scale: 1.02,
      backgroundColor: "rgba(255,255,255,0.9)",
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true }}
        variants={containerVariants}
        className="bg-[#fdfdf9a1] text-sm p-4 rounded-xl shadow-sm transition-shadow duration-300"
      >
        <motion.div 
          className="flex items-center gap-2 mb-4 relative"
          variants={childVariants}
        >
          <motion.div 
            className="bg-blue-200 rounded-full p-1 z-10 cursor-pointer"
            variants={chevronVariants}
          >
            <ChevronRight className="text-blue-500" size={15} />
          </motion.div>
          <motion.h2 
            className="font-semibold"
            variants={childVariants}
            whileHover={{ scale: 1.02 }}
          >
            Step 1 Get All Namespace
          </motion.h2>
        </motion.div>

        <motion.div 
          className="text-sm"
          variants={childVariants}
        >
          <motion.h3 
            className="font-medium mb-2"
            variants={childVariants}
          >
            Command Results
          </motion.h3>

          <motion.div 
            className="bg-gray-200 border border-gray-400 rounded-lg p-2 mb-2 font-mono cursor-pointer"
            variants={commandBoxVariants}
            whileHover="hover"
          >
            <span className="text-gray-500">▶</span> kubectl get namespaces
          </motion.div>
        </motion.div>

        <motion.div 
          className="bg-gray-900 text-gray-200 rounded-lg text-xs overflow-hidden"
          variants={childVariants}
        >
          <div className="p-4">
            <motion.div 
              className="flex justify-between font-semibold mb-2"
              variants={childVariants}
            >
              <div>NAME</div>
              <div>STATUS</div>
            </motion.div>
            
            {namespaces.map((ns, index) => (
              <motion.div
                key={ns.name}
                custom={index}
                variants={listItemVariants}
                whileHover="hover"
                className="flex justify-between rounded px-2 cursor-pointer"
              >
                <div className="py-1">{ns.name}</div>
                <div className="py-1">{ns.status}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedInvestigation;