import { FeatureGrid, Footer, Header, Hero } from "@/components/custom";
import { motion } from 'framer-motion';
import DASHBOARD from '@/assets/dashboard.png';

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
      className="min-h-screen bg-gray-200"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      {/* Header */}
      <motion.div 
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        variants={fadeInUp}
      >
        <Header />
      </motion.div>

      {/* Main Container */}
      <Hero />

      <motion.div 
        className="mx-auto max-w-7xl px-4 mb-10 sm:px-6 lg:px-8"
        variants={fadeInUp}
      >
        <motion.div
          className="mockup-browser border-2 border-gray-400/40 bg-gray-100 my-8 border hover:shadow-2xl hover:shadow-gray-600/10 overflow-hidden"
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
            app.agentkube.com
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

      <motion.div 
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        variants={fadeInUp}
      >
        <FeatureGrid />
      </motion.div>

      <motion.footer
        variants={fadeInUp}
      >
        <Footer />
      </motion.footer>
    </motion.div>
  );
};

export default LandingPage;