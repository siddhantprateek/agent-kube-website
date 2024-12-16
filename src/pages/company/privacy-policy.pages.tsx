import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

interface PolicySectionProps {
  title: string;
  children: React.ReactNode;
}

const PolicySection: React.FC<PolicySectionProps> = ({ title, children }) => (
  <div className="mb-12">
    <h2 className="text-3xl font-semibold mb-4 text-gray-800">{title}</h2>
    <div className="space-y-4 text-md text-gray-600">{children}</div>
  </div>
);

const PrivacyPolicy: React.FC = () => {
  const lastUpdated = "December 16, 2024";

  return (
    <motion.div
      className="min-h-screen"
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      {/* Hero Section */}
      <div className="bg-gray-200/50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">Last updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Policy Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-b from-gray-50 to-gray-200 rounded-2xl p-8 shadow-sm border-2 border-gray-50">
          <PolicySection title="Introduction">
            <p>
              At Agentkube, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our Kubernetes management platform 
              and related services. Please read this privacy policy carefully.
            </p>
          </PolicySection>

          <PolicySection title="Information We Collect">
            <p>We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Account information (name, email address, company details)</li>
              <li>Kubernetes cluster configuration data</li>
              <li>Usage data and metrics</li>
              <li>Communication preferences</li>
              <li>Customer support interactions</li>
            </ul>
          </PolicySection>

          <PolicySection title="How We Use Your Information">
            <p>We use the collected information for various purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Providing and maintaining our services</li>
              <li>Monitoring and analyzing usage patterns</li>
              <li>Improving our platform's performance and features</li>
              <li>Communicating with you about updates and services</li>
              <li>Ensuring platform security and preventing abuse</li>
            </ul>
          </PolicySection>

          <PolicySection title="Data Security">
            <p>
              We implement appropriate technical and organizational measures to protect 
              your information against unauthorized access, alteration, disclosure, or destruction. 
              These measures include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and audits</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Continuous monitoring and threat detection</li>
            </ul>
          </PolicySection>

          <PolicySection title="Data Retention">
            <p>
              We retain your information only for as long as necessary to fulfill the purposes 
              outlined in this privacy policy, unless a longer retention period is required by law. 
              When we no longer need personal data, it is deleted or anonymized.
            </p>
          </PolicySection>

          <PolicySection title="Your Rights">
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Export your data in a portable format</li>
            </ul>
          </PolicySection>

          <PolicySection title="Updates to This Policy">
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes 
              by posting the new privacy policy on this page and updating the "Last Updated" date.
            </p>
          </PolicySection>

          <PolicySection title="Contact Us">
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-2">
              <p>Email: 
                <a className='text-blue-700' href='mailto:siddhant@perfect3sixty.com'> siddhant@perfect3sixty.com </a>, 
                <a className='text-blue-700' href='mailto:mail@agentkube.com'> mail@agentkube.com</a></p>
              {/* <p>Address: [Your Company Address]</p> */}
            </div>
          </PolicySection>
        </div>
      </div>

      {/* Footer Note */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <p className="text-sm text-gray-500 text-center">
          This privacy policy was last updated on {lastUpdated}. If you have questions or concerns about our policy, please contact our privacy team.
        </p>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;