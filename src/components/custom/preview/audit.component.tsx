import { ArrowRight, Key, Settings, LogIn } from 'lucide-react';
import { motion } from 'framer-motion';

const ActivityLog = () => {
  const activities = [
    {
      time: '12:58',
      icon: <ArrowRight className="w-4 h-4 text-blue-500" />,
      actor: 'Diffix',
      actorClass: 'text-blue-500',
      action: 'Executed query on',
      target: 'cloak',
      targetClass: 'font-medium',
      ip: '127.0.0.1',
      peer: '127.0.0.1:54050'
    },
    {
      time: '12:58',
      icon: <Key className="w-4 h-4 text-amber-500" />,
      actor: 'Jakub',
      actorClass: 'text-blue-500',
      action: 'Altered Diffix permissions',
      ip: '127.0.0.1',
      peer: '127.0.0.1:53760'
    },
    {
      time: '12:45',
      icon: <Settings className="w-4 h-4 text-purple-500" />,
      actor: 'Sarah',
      actorClass: 'text-blue-500',
      action: 'Updated system settings of',
      ip: '192.168.1.105',
      peer: '192.168.1.105:62'
    },
    {
      time: '12:42',
      icon: <LogIn className="w-4 h-4 text-green-500" />,
      actor: 'Marcus',
      actorClass: 'text-blue-500',
      action: 'Logged in',
      ip: '10.0.0.15',
      peer: '10.0.0.15:51432'
    },
    {
      time: '12:39',
      icon: <ArrowRight className="w-4 h-4 text-blue-500" />,
      actor: 'Diffix',
      actorClass: 'text-blue-500',
      action: 'Executed query on',
      target: 'perf',
      targetClass: 'font-medium',
      ip: '127.0.0.1',
      peer: '127.0.0.1:53999'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.9
    },
    show: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  const lineVariant = {
    hidden: { height: 0 },
    show: { 
      height: 32,
      transition: {
        duration: 0.4,
        delay: 0.2
      }
    }
  };

  const iconVariant = {
    hidden: { 
      scale: 0,
      rotate: -45
    },
    show: { 
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    }
  };

  return (
    <motion.div 
      className="flex flex-col space-y-4 text-xs"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {activities.map((activity, index) => (
        <motion.div 
          key={index} 
          className="flex items-center group cursor-pointer"
          variants={item}
          whileHover={{
            x: 4,
            transition: { duration: 0.2 }
          }}
        >
          <motion.div 
            className="flex flex-col items-center mr-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            <motion.span 
              className="text-gray-500"
              whileHover={{ scale: 1.1, color: "#000" }}
            >
              {activity.time}
            </motion.span>
          </motion.div>
          
          <div className="flex items-center relative">
            {index !== activities.length - 1 && (
              <motion.div 
                className="absolute left-4 top-10 w-px bg-gray-400"
                variants={lineVariant}
                initial="hidden"
                animate="show"
                transition={{ delay: index * 0.1 }}
              />
            )}
            
            <motion.div 
              className="rounded-full bg-gray-200 border border-gray-400 p-1.5 mr-3"
              variants={iconVariant}
              whileHover={{ 
                scale: 1.15,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }
              }}
            >
              {activity.icon}
            </motion.div>
            
            <motion.div 
              className="flex flex-col"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: index * 0.1 + 0.1,
                type: "spring",
                stiffness: 300,
                damping: 24
              }}
            >
              <div className="flex items-center space-x-1">
                <motion.span 
                  className={`${activity.actorClass} transition-colors duration-200`}
                  whileHover={{ scale: 1.05 }}
                >
                  {activity.actor}
                </motion.span>
                <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                  {activity.action}
                </span>
                {activity.target && (
                  <motion.span 
                    className={`${activity.targetClass} transition-colors duration-200`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {activity.target}
                  </motion.span>
                )}
              </div>
              
              <motion.div 
                className="text-gray-500"
                whileHover={{ color: "#4B5563" }}
              >
                IP Address: {activity.ip} Peer: {activity.peer}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ActivityLog;