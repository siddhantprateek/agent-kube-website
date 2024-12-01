import { Button } from "@/components/ui/button";
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
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        className="relative bg-gradient-to-t from-gray-100/80 to-gray-200 rounded-3xl py-24 px-8 shadow-sm border border-gray-100 min-h-[85vh]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-center mt-20 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Badge
              variant="secondary"
              className="bg-gray-500/10 text-base my-4 text-stone-500 hover:text-stone-700 hover:cursor-pointer rounded-full px-4 py-1"
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <motion.span
                  className="mr-2"
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
            className="text-6xl font-bold mb-4"
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
            className="text-xl text-gray-600 mb-8"
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
              <Button
                size="lg"
                className="px-8 py-6 text-lg"
              >
                Get free demo
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;