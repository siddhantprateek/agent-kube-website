import { WAITING } from "@/assets";
import AvatarCircles from "@/components/ui/avatar-circles";
import { motion } from "framer-motion";

const WaitlistPage = () => {
  const avatars = [
    {
      imageUrl: "https://avatars.githubusercontent.com/u/16860528",
      profileUrl: "https://github.com/dillionverma",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/20110627",
      profileUrl: "https://github.com/tomonarifeehan",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/106103625",
      profileUrl: "https://github.com/BankkRoll",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/59228569",
      profileUrl: "https://github.com/safethecode",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/59442788",
      profileUrl: "https://github.com/sanjay-mali",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/89768406",
      profileUrl: "https://github.com/itsarghyadas",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="mt-20 p-4"
    >
      <div className="max-w-6xl mx-auto bg-gray-50 rounded-3xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Content */}
          {/* Logo */}
          {/* <div className="flex items-center gap-2 mb-12">
                <img src={LOGO} className="h-[3rem] -mr-5" alt="" />
                <span className="text-xl font-bold">AgentKube</span>
              </div> */}


          <motion.div
            variants={containerVariants}
            className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between"
          >
            <div>
              {/* Coming Soon Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm mb-6"
              >
                Coming Soon
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              >
                Your AI Co-Pilot for Kubernetes
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-gray-600 mb-8"
              >
                Join the waitlist to be among the first to experience our intelligent agent that simplifies cluster management, automates troubleshooting, and optimizes performance.
              </motion.p>

              {/* Form */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 mb-8"
              >
                <div className="launchlist-widget" data-key-id="5BFOY9" data-height="180px"></div>

                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  placeholder="name@domain.com"
                  className="flex-1 px-4 py-3 bg-transparent border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Join now
                </motion.button>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <AvatarCircles numPeople={10} avatarUrls={avatars} />
                <span className="text-sm text-gray-600">
                  10+ devs have already joined
                </span>
              </motion.div>
            </div>

            {/* Footer */}
            <motion.div
              variants={itemVariants}
              className="text-sm text-gray-500 mt-12"
            >
              © 2024 - Agentkube - All rights reserved.
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={imageVariants}
            className="w-full md:w-1/2"
          >
            <div className="h-full">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                src={WAITING}
                alt="Mountain landscape with person"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default WaitlistPage;