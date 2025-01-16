import { useState, type FC  } from 'react';
import LOGO from "@/assets/logo.png";
import { Badge } from "@/components/ui/badge";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { motion } from 'framer-motion';
import { BlurText } from "@/components/ui/blur-text";
import { Check, Copy } from 'lucide-react';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";

interface CopyableCodeProps {
  content: string;
}

const CopyableCode: FC<CopyableCodeProps> = ({ content }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative group">
      <pre className="bg-gray-200 dark:bg-neutral-900 p-3 rounded-lg text-sm overflow-x-auto">
        <code className="text-neutral-800 dark:text-neutral-200">{content}</code>
      </pre>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded-md bg-gray-100 dark:bg-neutral-800/50 opacity-0 group-hover:opacity-100  transition-opacity"
      >
        {copied ? (
          <motion.div
    
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <Check className="w-4 h-4 text-green-500" />
          </motion.div>
        ) : (
          <Copy className="w-4 h-4 text-gray-600 dark:text-gray-400" />
        )}
      </motion.button>
    </div>
  );
};

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

  const helmRepoCommands = `helm repo add agentkube https://agentkube.github.io/helm-charts
helm repo update`;

  const installationCommands = `helm install agentkube-operator agentkube/agentkube-operator \\
-n agentkube-operator-system \\
--create-namespace \\
--set manager.apikey=AGENTKUBE_API_KEY \\
--set manager.clusterName=CLUSTER_NAME`;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      <motion.div
        className="relative dark:bg-black bg-gray-50 dark:bg-grid-white/[0.2] bg-grid-gray-500/[0.2] rounded-3xl py-20 sm:py-24 px-4 sm:px-8 shadow-none min-h-[70vh] sm:min-h-[85vh] overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Radial gradient overlay */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-gray-200 [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"></div>

        <motion.div
          className="text-center mt-8 sm:mt-20 mb-8 sm:mb-12 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a variants={itemVariants}>
          </motion.a>
          <Modal>
            <ModalTrigger>
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
                  Try Agentkube Operator →
                </AnimatedShinyText>
              </Badge>
            </ModalTrigger>
            <ModalBody>
              <ModalContent className="text-start">
                <h4 className="flex items-center text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold mb-4">
                  <img src={LOGO} className='h-10 w-10' />
                  <span className="mr-2 px-1 py-0.5 rounded-md bg-gray-200 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                    Agentkube
                  </span>{" "}
                  Operator Installation.
                </h4>
                <div className="py-6 space-y-6 max-w-2xl">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h5 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        1. Add the AgentKube Helm repository:
                      </h5>
                      <CopyableCode content={helmRepoCommands} />
                    </div>
                    <div className="space-y-2">
                      <h5 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        2. Generate an <span className='p-1 bg-gray-200 rounded-[0.4rem] text-gray-500'> AGENTKUBE_API_KEY</span> from the dashboard.
                      </h5>
                    </div>
                    <div className="space-y-2">
                      <h5 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        3. Install the operator:
                      </h5>
                      <CopyableCode content={installationCommands} />
                    </div>
                  </div>
                </div>
              </ModalContent>
              <ModalFooter className="gap-4">
                <a 
                  href="https://docs.agentkube.com/quickstart" 
                  target="_blank" 
                  className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28"
                >
                  Go to Docs 
                </a>
                <a 
                  href="https://dashboard.agentkube.com" 
                  target="_blank" 
                  className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black"
                >
                  Generate an API Key
                </a>
              </ModalFooter>
            </ModalBody>
          </Modal>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            variants={itemVariants}
          >
            <span className="text-blue-600/80 mr-2">Kubernetes</span>
            Intelligence
            <br />

            <BlurText
              text="Always on Guard"
              className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center font-semibold leading-none dark:from-white dark:to-slate-900/10"
            />
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 px-4"
            variants={itemVariants}
          >
            Turn complexity into clarity with AI-powered analysis.
          </motion.p>

          <motion.div variants={itemVariants}>
            <motion.a
              href="https://www.producthunt.com/posts/agentkube?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-agentkube"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center my-5"
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=776573&theme=light&t=1736692483697"
                alt="Agentkube - AI Agent for Kubernetes Cluster | Product Hunt"
                style={{ width: '250px', height: '54px' }}
                width={250}
                height={54}
                className="block"
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;