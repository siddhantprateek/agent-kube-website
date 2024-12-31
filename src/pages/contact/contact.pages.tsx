
import { motion } from 'framer-motion';
import { FlipWords } from "@/components/ui/flip-words";
import { Mail, MessageSquare, Send } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Contact = () => {
  const words = ["questions", "feedback", "ideas", "collaboration"];

  return (
    <motion.div
      className="py-16 px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div
          className="space-y-4"
          variants={itemVariants}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Got any
            <FlipWords className='text-emerald-600' words={words} />
            <br/>
            for us?
          </h1>
          <p className="text-lg text-gray-600">
            We're here to help and would love to hear from you
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={itemVariants}
        >
          <motion.div
            className="space-y-8 bg-white p-8 rounded-2xl shadow-lg"
            whileHover={{ y: -5 }}
          >
            <form className="space-y-6">
              <motion.div
                className="space-y-2"
                variants={itemVariants}
              >
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </motion.div>

              <motion.div
                className="space-y-2"
                variants={itemVariants}
              >
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </motion.div>

              <motion.div
                className="space-y-2"
                variants={itemVariants}
              >
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  rows={4}
                  className="w-full px-4 py-2 bg-transparent border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Your message here..."
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-emerald-600 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-emerald-700 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="space-y-8"
            variants={itemVariants}
          >
            <div className="space-y-6">
              <motion.div
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 hover:bg-emerald-300 border-2 border-emerald-700 rounded-lg">
                  <Mail className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                  <p className="text-gray-600">info@agentkube.com</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 hover:bg-emerald-300 border-2 border-emerald-700 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Live Chat</h3>
                  <p className="text-gray-600">Chat with our support team</p>
                  <p className="text-gray-600">Response time: ~5 minutes</p>
                </div>
              </motion.div>
            </div>


          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;