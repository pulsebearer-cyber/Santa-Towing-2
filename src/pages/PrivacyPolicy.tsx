import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <main className="pt-24 lg:pt-[104px] bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-dark text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <ShieldCheck className="w-16 h-16 text-accent mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            How we collect, use, and protect your information at Santa Towing & Garage Services Ltd.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 md:p-12 rounded-[1px] shadow-sm border border-dark/10"
          >
            <div className="prose prose-slate max-w-none prose-headings:text-dark prose-p:text-dark/80 prose-a:text-primary">
              <p className="text-sm text-dark/50 mb-8 font-bold">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

              <p>
                Welcome to Santa Towing & Garage Services Ltd. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how our website collects, uses, stores, and safeguards your information when you use our towing and automotive services in Ghana.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-dark/10 pb-2">Information We Collect</h2>
              <p>
                To provide you with timely and effective emergency and automotive services, we may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-dark/80">
                <li><strong>Personal Identifiable Information:</strong> This includes your full name, phone numbers, and email addresses provided during booking or enquiries.</li>
                <li><strong>Service Details:</strong> Information regarding your vehicle (make, model, issue), current location, and destination for towing requests.</li>
                <li><strong>Communication Records:</strong> Information provided through contact forms, emails, WhatsApp messages, or phone calls with our dispatch team.</li>
                <li><strong>Usage Data:</strong> Basic technical information collected automatically as you browse our website to help us ensure our platform operates correctly.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-dark/10 pb-2">How We Use Your Information</h2>
              <p>
                The information we collect is strictly utilized to deliver and improve our services. We use your data to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-dark/80">
                <li>Respond to your enquiries and arrange emergency towing or repair services.</li>
                <li>Communicate with you regarding service updates, dispatch arrivals, and quotes.</li>
                <li>Enhance and optimize the functionality of our website and customer support operations.</li>
                <li>Prevent misuse, fraud, and unauthorized activity on our platform.</li>
                <li>Meet regulatory and legal obligations as a registered business operating in Ghana.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-dark/10 pb-2">How We Share Information</h2>
              <p>
                We do not sell, rent, or trade your personal information to external marketers. Your information is only shared under the following circumstances:
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">Service Providers and Towing Partners</h3>
              <p>
                To execute your service requests, necessary details (such as your location and vehicle issue) may be shared with our internal dispatch teams, tow truck drivers, and affiliated mechanic partners directly involved in your roadside assistance or vehicle repair.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-dark/10 pb-2">Data Security</h2>
              <p>
                We implement robust, industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. While we strive to use commercially acceptable means to protect your data, please be aware that no method of transmission over the internet is completely secure.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-dark/10 pb-2">Data Retention</h2>
              <p>
                We retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy, such as resolving disputes, fulfilling service contracts, and complying with our legal obligations.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-dark/10 pb-2">Cookies and Tracking Technologies</h2>
              <p>
                Our website may use cookies and similar tracking technologies to track activity on our platform and store certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-dark/10 pb-2">Third-Party Services</h2>
              <p>
                Our website may contain links to other sites or utilize third-party communication tools (such as WhatsApp) that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit, as we assume no responsibility for their content, privacy policies, or practices.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-dark/10 pb-2">User Rights</h2>
              <p>
                You have the right to request access to, correction of, or deletion of your personal data that we hold. If you wish to exercise any of these rights, or if you have questions regarding the data we possess, please contact our support team.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-dark/10 pb-2">Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us immediately.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-dark/10 pb-2">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-dark/10 pb-2">Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:
              </p>
              
              <div className="bg-slate-50 p-6 rounded-[1px] mt-6 border border-dark/10 flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-3 text-dark/80">
                  <div className="w-10 h-10 rounded-[1px] bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-medium">info@santatowing.com</span>
                </div>
                <div className="flex items-center gap-3 text-dark/80">
                  <div className="w-10 h-10 rounded-[1px] bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-medium">0244753849</span>
                </div>
                <div className="flex items-center gap-3 text-dark/80">
                  <div className="w-10 h-10 rounded-[1px] bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="font-medium">123 Spintex Road, Accra, Ghana</span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
