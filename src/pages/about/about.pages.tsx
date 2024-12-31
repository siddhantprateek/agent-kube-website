import { motion } from 'framer-motion';
import { BlurText } from "@/components/ui/blur-text";
import { AGENTKUBEHQ } from '@/assets';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const About = () => {
  return (
    <motion.div 
      className="min-h-screen max-w-4xl mx-auto px-6 py-12"
      initial="initial"
      animate="animate"
    >
      <motion.div variants={fadeInUp} className="space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-5xl font-bold">About us</h1>
          <p className="text-xl text-gray-600">
            <BlurText text="Empowering developers to master Kubernetes, one cluster at a time." />
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">Our story</h2>
          <blockquote className="text-2xl italic text-gray-700 border-l-4 pl-4 border-gray-300">
            <TextGenerateEffect 
            words="Kubernetes shouldn't be a barrier to innovation - it should be an enabler for everyone."
            />
            
          </blockquote>
          <img className='rounded-2xl' src={AGENTKUBEHQ} alt="" />

          <div className="space-y-4 text-lg text-gray-600">
            <p>
              As developers, we've experienced firsthand the complexity of managing Kubernetes clusters. 
              While Kubernetes is powerful, its learning curve often becomes a roadblock for teams 
              wanting to deploy modern applications.
            </p>
            
            <p>
              We saw teams struggling with endless YAML files, complex configurations, and 
              mysterious errors. Many developers were spending more time troubleshooting their 
              infrastructure than building their applications.
            </p>

            <p>
              That's when we realized: what if we could make Kubernetes as intuitive as using 
              a modern development environment? What if we could abstract away the complexity 
              while maintaining the power and flexibility that makes Kubernetes great?
            </p>

            <p>
              This vision led to the creation of Agentkube - a platform that combines the 
              power of AI with a seamless user interface to make Kubernetes accessible to 
              everyone, from seasoned DevOps engineers to developers just getting started 
              with containerization.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-5xl font-semibold">Our <span className='text-emerald-600'>mission</span></h2>
          <p className="text-lg text-gray-600">
            At Agentkube, we're on a mission to democratize Kubernetes. We believe that 
            every developer should be able to harness the full potential of container 
            orchestration without getting lost in its complexity. Through intelligent 
            automation and intuitive design, we're making Kubernetes accessible, 
            manageable, and enjoyable to work with.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;