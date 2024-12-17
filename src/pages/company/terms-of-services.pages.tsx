import React from 'react';

interface TermsSectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
}

const TermsSection: React.FC<TermsSectionProps> = ({ title, id, children }) => (
  <div id={id} className="mb-12">
    <h2 className="text-2xl font-bold mb-4 text-gray-900">{title}</h2>
    <div className="space-y-4 text-gray-600">{children}</div>
  </div>
);

const TermsAndConditions: React.FC = () => {
  const lastUpdated = "December 16, 2024";

  const sections = [
    { id: "agreement", title: "1. Agreement to Terms" },
    { id: "service-description", title: "2. Service Description" },
    { id: "user-accounts", title: "3. User Accounts" },
    { id: "service-usage", title: "4. Service Usage" },
    { id: "data-processing", title: "5. Data Processing" },
    { id: "intellectual-property", title: "6. Intellectual Property" },
    { id: "service-availability", title: "7. Service Availability" },
    { id: "payment-terms", title: "8. Payment Terms" },
    { id: "limitation-liability", title: "9. Limitation of Liability" },
    { id: "changes-terms", title: "10. Changes to Terms" },
    { id: "contact", title: "11. Contact Information" }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <p className="text-sm text-gray-600 mb-2">LAST UPDATE: {lastUpdated}</p>
          <h1 className="text-4xl font-bold text-gray-900">Terms and Conditions</h1>
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
            <TermsSection id="" title="">
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
            </TermsSection>
            <TermsSection id="agreement" title="1. Agreement to Terms">
              <p>
                By accessing and using Agentkube's services, you agree to be bound by these Terms and
                Conditions. If you disagree with any part of these terms, you may not access or use our services.
              </p>
            </TermsSection>

            <TermsSection id="service-description" title="2. Service Description">
              <p>
                Agentkube offers a comprehensive Kubernetes management platform along with a
                range of related services. These include efficient management and monitoring of
                Kubernetes clusters, automated incident response and investigation, AI-driven analysis
                and optimization, as well as reliable technical support and maintenance.
              </p>
            </TermsSection>

            <TermsSection id="user-accounts" title="3. User Accounts">
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

            <TermsSection id="service-usage" title="4. Service Usage">
              <p>
                You agree to refrain from using the service for any illegal purposes or activities.
                You must not interfere with or disrupt the service or its servers, nor attempt
                to gain unauthorized access to any part of the service. Additionally,
                you are prohibited from transferring your account access to unauthorized third
                parties. Lastly, using the service in any manner that could cause damage or overload
                our systems is strictly prohibited.
              </p>

            </TermsSection>

            <TermsSection id="data-processing" title="5. Data Processing">
              <p>
                By using our services, you acknowledge and agree that we may process your Kubernetes
                cluster data and related information in accordance with our Privacy Policy. You represent
                and warrant that you have all necessary rights and permissions to share this data with us.
              </p>
            </TermsSection>

            <TermsSection id="intellectual-property" title="6. Intellectual Property">
              <p>
                The service and its original content, features, and functionality are owned by Agentkube
                and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </TermsSection>

            <TermsSection id="service-availability" title="7. Service Availability">
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

            <TermsSection id="payment-terms" title="8. Payment Terms">
              <p>
                For paid services, you agree to pay all fees according to the pricing plan you select.
                We reserve the right to modify our pricing with reasonable notice. Fees are non-refundable
                except as required by law or explicitly stated in our refund policy.
              </p>
            </TermsSection>

            <TermsSection id="limitation-liability" title="9. Limitation of Liability">
              <p>
                To the maximum extent permitted by law, Agentkube and its affiliates shall not be liable
                for any indirect, incidental, special, consequential, or punitive damages resulting from
                your use or inability to use the service.
              </p>
            </TermsSection>

            <TermsSection id="changes-terms" title="10. Changes to Terms">
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any material
                changes via email or through the service. Your continued use of the service after such
                modifications constitutes acceptance of the updated terms.
              </p>
            </TermsSection>

            <TermsSection id="contact" title="11. Contact Information">
              <p>
                For questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="mt-2">
                <p>Email:
                  <a className="text-blue-700" href="mailto:siddhant@perfect3sixty.com"> siddhant@perfect3sixty.com</a>,
                  <a className="text-blue-700" href="mailto:mail@agentkube.com"> mail@agentkube.com</a>
                </p>
              </div>
            </TermsSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;