import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ActionDemo = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-gray-100 rounded-xl p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold mb-4">See it in action</h2>
          <p className="text-gray-600 mb-8">
            Discover the full range of features offered by Agentkube.
            Try out a demo cluster or watch a video demonstration now.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://account.agentkube.com">
              <button className="px-6 py-2.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-600 transition-colors">
                Explore
              </button>
            </a>
            <button className="px-6 py-2.5 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
              Watch a demo
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <motion.div
          className="relative w-full lg:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* <img 
            src="/api/placeholder/600/400" 
            alt="Dashboard Preview" 
            className="w-full h-auto rounded-lg shadow-lg"
          /> */}
        </motion.div>
      </div>
    </div>
  );
};

export default ActionDemo;