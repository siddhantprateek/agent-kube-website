import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const partnerLogos = [
  { name: "Alice & Star", logo: "/api/placeholder/120/60" },
  { name: "Reply Liquid", logo: "/api/placeholder/120/60" },
  { name: "Upbound", logo: "/api/placeholder/120/60" },
  { name: "Google Cloud", logo: "/api/placeholder/120/60" },
  { name: "ATDAC", logo: "/api/placeholder/120/60" },
  { name: "Sunny Systems", logo: "/api/placeholder/120/60" },
];


const Partners = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <span className="text-emerald-500 font-medium">Partners and integrations</span>
      <h2 className="text-4xl font-bold mt-2 mb-4">
        Join our powerful<br />cloud ecosystem
      </h2>
      <p className="text-gray-600 max-w-lg mb-8">
        Agentkube seamlessly integrates with key technologies,
        letting your customers optimize K8s cost management automatically.
      </p>
      
      <motion.button 
        className="px-6 py-2.5 mb-12 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
        whileHover={{ x: 5 }}
      >
        Become a partner
        <ArrowRight className="w-4 h-4" />
      </motion.button>

      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        variants={{
          show: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {partnerLogos.map((partner, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-lg p-6 flex items-center justify-center border border-gray-100 hover:border-gray-200 transition-colors"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
          >
            <img 
              src={partner.logo} 
              alt={partner.name}
              className="max-w-[120px] h-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Partners;