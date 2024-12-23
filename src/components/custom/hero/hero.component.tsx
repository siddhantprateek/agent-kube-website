import { Badge } from "@/components/ui/badge";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      <motion.div
        className="relative bg-gradient-to-t from-gray-100/80 to-gray-200 rounded-3xl py-12 sm:py-24 px-4 sm:px-8 shadow-sm border border-gray-100 min-h-[70vh] sm:min-h-[85vh]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-center mt-8 sm:mt-20 mb-8 sm:mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Badge
              variant="secondary"
              className="bg-gray-500/10 text-sm sm:text-base my-2 sm:my-4 text-stone-500 hover:text-stone-700 hover:cursor-pointer rounded-full px-2 sm:px-4 py-1"
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-2 sm:px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <motion.span
                  className="mr-1 sm:mr-2 text-sm sm:text-base"
                  animate={{ rotate: [0, 14, -8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  ✨
                </motion.span>
                Try Agent Kube Operator →
              </AnimatedShinyText>
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            variants={itemVariants}
          >
            <span className="text-blue-600/80 mr-2">Kubernetes</span>
            Intelligence
            <br />
            <motion.span
              className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
                opacity: [1, 0.8, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Always on Guard
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 px-4"
            variants={itemVariants}
          >
            Turn complexity into clarity with AI-powered analysis.
          </motion.p>

          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <a
                href="/waitlist"
                className="inline-block bg-black text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg rounded-lg hover:bg-gray-800 transition-colors"
              >
                Join Waitlist
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;