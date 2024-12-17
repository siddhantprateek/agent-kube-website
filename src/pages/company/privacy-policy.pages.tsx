import React from 'react';

interface PolicySectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
}

const PolicySection: React.FC<PolicySectionProps> = ({ title, id, children }) => (
  <div id={id} className="mb-12">
    <h2 className="text-2xl font-bold mb-4 text-gray-900">{title}</h2>
    <div className="space-y-4 text-md text-gray-600">{children}</div>
  </div>
);

const PrivacyPolicy: React.FC = () => {
  const lastUpdated = "December 16, 2024";

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "information-collection", title: "Information We Collect" },
    { id: "information-use", title: "How We Use Your Information" },
    { id: "data-security", title: "Data Security" },
    { id: "data-retention", title: "Data Retention" },
    { id: "your-rights", title: "Your Rights" },
    { id: "updates", title: "Updates to This Policy" },
    { id: "contact", title: "Contact Us" }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <p className="text-sm text-gray-600 mb-2">LAST UPDATE: {lastUpdated}</p>
          <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="md:w-1/4">
            <div className="sticky top-8">
              <h2 className="text-xl font-semibold mb-4">Content</h2>
              <nav className="space-y-2">
                {sections.map(section => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-gray-600 hover:text-gray-900"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Content */}
          <div className="md:w-3/4">
            <PolicySection id="" title="">
              <p className='font-bold text-black text-justify'>
                By utilizing the Agentkube Platform (defined below) or by otherwise indicating your
                consent to these Agentkube Terms of Service (the "Terms") you acknowledge and agree
                to all of the terms and provisions contained herein. Agentkube Technologies, the
                provider of the Agentkube Platform, is referred to herein as "Agentkube." And you
                are referred to herein as "Customer." Agentkube and Customer are collectively referred
                to herein as the "Parties." If you are agreeing to these Terms on behalf of an
                organization or any entity other than yourself, you hereby represent and warrant
                that you have been authorized to do so by such organization or entity. PLEASE READ
                THESE TERMS OF USE CAREFULLY, AS THEY CONTAIN AN AGREEMENT TO ARBITRATE AND OTHER
                IMPORTANT INFORMATION REGARDING YOUR LEGAL RIGHTS, REMEDIES, AND OBLIGATIONS. THE
                AGREEMENT TO ARBITRATE REQUIRES (WITH LIMITED EXCEPTION) THAT YOU SUBMIT CLAIMS
                YOU HAVE AGAINST US TO BINDING AND FINAL ARBITRATION, AND FURTHER THAT: (1) YOU
                WILL ONLY BE PERMITTED TO PURSUE CLAIMS AGAINST COMPANY ON AN INDIVIDUAL BASIS,
                NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS OR REPRESENTATIVE ACTION OR
                PROCEEDING, (2) YOU WILL ONLY BE PERMITTED TO SEEK RELIEF (INCLUDING MONETARY,
                INJUNCTIVE, AND DECLARATORY RELIEF) ON AN INDIVIDUAL BASIS, AND (3) YOU MAY NOT
                BE ABLE TO HAVE ANY CLAIMS YOU HAVE AGAINST US RESOLVED BY A JURY OR IN A COURT
                OF LAW.
              </p>
            </PolicySection>


            <PolicySection id="introduction" title="Introduction">
              <p>
                At Agentkube, we take your privacy seriously. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you use our Kubernetes management platform
                and related services. Please read this privacy policy carefully.
              </p>
            </PolicySection>

            <PolicySection id="information-collection" title="Information We Collect">
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Account information (name, email address, company details)</li>
                <li>Kubernetes cluster configuration data</li>
                <li>Usage data and metrics</li>
                <li>Communication preferences</li>
                <li>Customer support interactions</li>
              </ul>
            </PolicySection>

            <PolicySection id="information-use" title="How We Use Your Information">
              <p>We use the collected information for various purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Providing and maintaining our services</li>
                <li>Monitoring and analyzing usage patterns</li>
                <li>Improving our platform's performance and features</li>
                <li>Communicating with you about updates and services</li>
                <li>Ensuring platform security and preventing abuse</li>
              </ul>
            </PolicySection>

            <PolicySection id="data-security" title="Data Security">
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

            <PolicySection id="data-retention" title="Data Retention">
              <p>
                We retain your information only for as long as necessary to fulfill the purposes
                outlined in this privacy policy, unless a longer retention period is required by law.
                When we no longer need personal data, it is deleted or anonymized.
              </p>
            </PolicySection>

            <PolicySection id="your-rights" title="Your Rights">
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Export your data in a portable format</li>
              </ul>
            </PolicySection>

            <PolicySection id="updates" title="Updates to This Policy">
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes
                by posting the new privacy policy on this page and updating the "Last Updated" date.
              </p>
            </PolicySection>

            <PolicySection id="contact" title="Contact Us">
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-2">
                <p>Email:
                  <a className="text-blue-700" href="mailto:siddhant@perfect3sixty.com"> siddhant@perfect3sixty.com</a>,
                  <a className="text-blue-700" href="mailto:mail@agentkube.com"> mail@agentkube.com</a>
                </p>
              </div>
            </PolicySection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;