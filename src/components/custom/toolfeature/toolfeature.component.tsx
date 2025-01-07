import { EDITOR, INVESTIGATION, MONITORING, PROTOCOL } from "@/assets";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
// import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { motion } from "framer-motion";
const content = [
  {
    title: "AI Editor",
    description:
      "Streamlines development and debugging of complex Kubernetes manifest files through intelligent assistance, automated error detection, and built-in validation, significantly reducing the time spent on manual configuration work.",
    content: (
      <img
        src={EDITOR}
        className="w-full object-cover"
        alt="linear board demo"
      />
    ),
  },
  {
    title: "Response Protocols",
    description:
      "Accelerates incident resolution through standardized response workflows with predefined steps, automatic execution of pre-approved commands, and intelligent branching logic based on incident types, enabling faster and more consistent handling of production issues.",
    content: (
      <img
        src={PROTOCOL}
        className="w-full object-cover"
        alt="linear board demo"
      />
    ),
  },
  {
    title: "Investigation",
    description:
      "Automates initial problem detection and root cause analysis through systematic log collection, metric gathering, and pattern matching to reduce manual effort. Reduces MTTR by automating initial problem detection.",
    content: (
      <img
        src={INVESTIGATION}
        className="w-full object-cover"
        alt="linear board demo"
      />
    ),
  },
  {
    title: "Cluster Monitoring",
    description:
      "Get real-time visibility into Kubernetes cluster health through automated pod state tracking, log analysis, and proactive issue detection, enabling teams to identify problems before they impact service availability.",
    content: (
      <img
        src={MONITORING}
        className="w-full object-cover"
        alt="linear board demo"
      />
    ),
  },
];

interface FeatureSectionProps {
  title: string;
  description: string;
  content: React.ReactNode;
  isReversed: boolean;
}


const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  content,
  isReversed
}) => {
  return (
    <motion.div
      className={`flex flex-col gap-8 items-center mb-20 lg:mb-32 ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Image container */}
      <div className="w-full lg:w-2/3">
        <motion.div
          className="rounded-lg overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {content}
        </motion.div>
      </div>

      {/* Content container */}
      <div className="w-full lg:w-1/3 px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: isReversed ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};


const ToolFeature = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <HeroHighlight>
          <h1 className="text-5xl text-black dark:text-gray-300">
            Discover the powerful features that make Kubernetes {" "}
            <Highlight className="text-black dark:text-white">
             management effortless
            </Highlight>
          </h1>
        </HeroHighlight>

      </div>

      {content.map((item, index) => (
        <FeatureSection
          key={item.title}
          {...item}
          isReversed={index % 2 !== 0}
        />
      ))}

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          What's Next? You Decide
        </h2>
        <p className="text-xl px-20 text-gray-600 dark:text-gray-300">
          Join our growing community of Kubernetes enthusiasts in shaping the future of cluster management. Share your feature requests, vote on upcoming capabilities, and help us prioritize what matters most to DevOps teams. Your feedback directly influences our development roadmap.
        </p>
      </div>
    </div>
  )
}

export default ToolFeature