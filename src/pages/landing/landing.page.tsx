import { FeatureGrid, Hero, FAQs, ActionDemo, ToolFeature, VidPreview } from "@/components/custom";
import { motion } from 'framer-motion';
import DASHBOARD from '@/assets/dashboard2.png';
import { BlurText } from "@/components/ui/blur-text";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const LandingPage = () => {
  return (
    <motion.div
      className="min-h-screen"
      initial="initial"
      animate="animate"
      variants={staggerContainer}

    >


      {/* Main Container */}
      <Hero />

      <motion.div
        className="mx-auto max-w-7xl px-4 mb-10 sm:px-6 lg:px-8"
        variants={fadeInUp}
      >
        <motion.div
          className="mockup-browser border-gray-400/40 bg-gray-100 my-8 border hover:shadow-2xl hover:shadow-gray-600/10 overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="mockup-browser-toolbar text-gray-600"
            whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
          >
            dashboard.agentkube.com
          </motion.div>
          <motion.div
            className="bg-gray-200 flex justify-center py-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.img
              src={DASHBOARD}
              alt="Dashboard"
              className="max-w-full h-auto"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="w-full bg-gray-900 py-20">
        <motion.div
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          variants={fadeInUp}
          id="features-section"
        >
          <div className="my-10">
            <span className="text-emerald-500 ">Key Features</span>
            <h1 className="text-5xl text-white mt-1">Features</h1>
            <p className="text-xl text-gray-400">
              <BlurText
                text="Seamlessly orchestrate and monitor clusters from a single dashboard."
              />
            </p>
          </div>
          <FeatureGrid />
        </motion.div>
      </div>

      <ActionDemo />

      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        variants={fadeInUp}
      >

        <VidPreview />
      </motion.div>


      <ToolFeature />

      {/* <Partner /> */}

      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        variants={fadeInUp}
      >
        <FAQs />
      </motion.div>

    </motion.div>
  );
};

export default LandingPage;