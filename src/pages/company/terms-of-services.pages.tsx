import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

interface TermsSectionProps {
  title: string;
  children: React.ReactNode;
}

const TermsSection: React.FC<TermsSectionProps> = ({ title, children }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>
    <div className="space-y-4 text-gray-600">{children}</div>
  </div>
);

const TermsAndConditions: React.FC = () => {
  const lastUpdated = "December 16, 2024";

  return (
    <motion.div
      className="min-h-scree"
      initial="initial"
      animate="animate"
      variants={fadeInUp}
    >
      {/* Hero Section */}
      <div className="bg-gray-200/50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
          <p className="text-lg text-gray-600">Last updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Terms Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-b from-gray-50 to-gray-200 rounded-2xl p-8 shadow-sm border-2 border-gray-50">
          <TermsSection title="1. Agreement to Terms">
            <p>
              By accessing and using Agent Kube's services, you agree to be bound by these Terms and
              Conditions. If you disagree with any part of these terms, you may not access or use our services.
            </p>
          </TermsSection>

          <TermsSection title="2. Service Description">
            <p>
              Agentkube provides a Kubernetes management platform and related services. Our services include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Kubernetes cluster management and monitoring</li>
              <li>Automated incident response and investigation</li>
              <li>AI-powered analysis and optimization</li>
              <li>Technical support and maintenance</li>
            </ul>
          </TermsSection>

          <TermsSection title="3. User Accounts">
            <p>
              When you create an account with us, you must provide accurate, complete, and current
              information. You are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>Restricting access to your account</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized access</li>
            </ul>
          </TermsSection>

          <TermsSection title="4. Service Usage">
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Use the service for any illegal purposes</li>
              <li>Interfere with or disrupt the service or servers</li>
              <li>Attempt to gain unauthorized access to any part of the service</li>
              <li>Transfer your account access to unauthorized third parties</li>
              <li>Use the service in a way that could damage or overwhelm our systems</li>
            </ul>
          </TermsSection>

          <TermsSection title="5. Data Processing">
            <p>
              By using our services, you acknowledge and agree that we may process your Kubernetes
              cluster data and related information in accordance with our Privacy Policy. You represent
              and warrant that you have all necessary rights and permissions to share this data with us.
            </p>
          </TermsSection>

          <TermsSection title="6. Intellectual Property">
            <p>
              The service and its original content, features, and functionality are owned by Agent Kube
              and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </TermsSection>

          <TermsSection title="7. Service Availability">
            <p>
              While we strive to provide uninterrupted service, we do not guarantee that the service will
              be available at all times. We may occasionally:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Perform maintenance or updates</li>
              <li>Modify or discontinue features</li>
              <li>Suspend service for technical reasons</li>
              <li>Implement security measures</li>
            </ul>
          </TermsSection>

          <TermsSection title="8. Payment Terms">
            <p>
              For paid services, you agree to pay all fees according to the pricing plan you select.
              We reserve the right to modify our pricing with reasonable notice. Fees are non-refundable
              except as required by law or explicitly stated in our refund policy.
            </p>
          </TermsSection>

          <TermsSection title="9. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, Agent Kube and its affiliates shall not be liable
              for any indirect, incidental, special, consequential, or punitive damages resulting from
              your use or inability to use the service.
            </p>
          </TermsSection>

          <TermsSection title="10. Changes to Terms">
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any material
              changes via email or through the service. Your continued use of the service after such
              modifications constitutes acceptance of the updated terms.
            </p>
          </TermsSection>

          <TermsSection title="11. Contact Information">
            <p>
              For questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="mt-2">
              <p>Email:
                <a className='text-blue-700' href='mailto:siddhant@perfect3sixty.com'> siddhant@perfect3sixty.com </a>,
                <a className='text-blue-700' href='mailto:mail@agentkube.com'> mail@agentkube.com</a></p>
              {/* <p>Address: [Your Company Address]</p> */}
            </div>
          </TermsSection>
        </div>
      </div>

      {/* Footer Note */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <p className="text-sm text-gray-500 text-center">
          These terms and conditions were last updated on {lastUpdated}. By using our services,
          you agree to be bound by these terms.
        </p>
      </div>
    </motion.div>
  );
};

export default TermsAndConditions;