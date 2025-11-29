import { motion } from "framer-motion";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { useSEO } from "@/hooks/useSEO";

const Privacy = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SEO and Breadcrumbs
  useSEO({
    title: "Privacy Policy | One In a Billion (OIB) - Rare Meets Real",
    description: "Read the Privacy Policy for One In a Billion (OIB). Learn how we collect, use, and protect your personal information.",
    canonical: "https://myoib.com/privacy",
    ogTitle: "Privacy Policy | One In a Billion (OIB)",
    ogDescription: "Read the Privacy Policy for One In a Billion (OIB). Learn how we collect, use, and protect your personal information.",
    ogImage: "https://myoib.com/favicons/OIB-LOGO.png",
    breadcrumbs: [
      { name: "Home", url: "https://myoib.com/" },
      { name: "Privacy Policy", url: "https://myoib.com/privacy" }
    ]
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Breadcrumb items={[
            { name: "Privacy Policy", url: "/privacy" }
          ]} />
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-shadow-glow">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: September 10, 2025</p>

          <div className="space-y-6 leading-relaxed text-base md:text-lg text-foreground/90">
            <p>At OIB (One In a Billion), your privacy is important to us. This Privacy Policy explains how we collect, use, store, and protect your information when you interact with our services. By using OIB, you agree to the practices outlined in this policy.</p>

            <h2 className="text-xl md:text-2xl font-medium mt-10">1. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium">Personal Information:</span> Name, email address, phone number, company name, and billing details when you engage our services.</li>
              <li><span className="font-medium">Business Information:</span> Details about your startup idea, project requirements, and related documents shared with us for consultation and execution.</li>
              <li><span className="font-medium">Payment Information:</span> Processed securely through third-party payment providers. OIB does not store sensitive card or banking details.</li>
              <li><span className="font-medium">Usage Information:</span> Data on how you interact with our website or services, including IP addresses, browser type, and access times.</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-medium mt-10">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, manage, and deliver our services</li>
              <li>Communicate with you about projects, updates, and billing</li>
              <li>Customize and improve user experience</li>
              <li>Process payments securely</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-medium mt-10">3. Sharing of Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium">Third-Party Service Providers:</span> Hosting, development, legal, or payment partners who assist us in delivering services.</li>
              <li><span className="font-medium">Business Partners:</span> With your consent, when collaborating to fulfill your project requirements.</li>
              <li><span className="font-medium">Legal Authorities:</span> If required by law, regulation, or legal process.</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-medium mt-10">4. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to safeguard your information against unauthorized access, disclosure, alteration, or destruction. However, no system is 100% secure, and we cannot guarantee absolute security of your data.</p>

            <h2 className="text-xl md:text-2xl font-medium mt-10">5. Data Retention</h2>
            <p>We retain your personal and business information only as long as necessary to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fulfill the purposes outlined in this policy</li>
              <li>Provide ongoing services</li>
              <li>Comply with legal and contractual obligations</li>
            </ul>
            <p>You may request deletion of your information by contacting us.</p>

            <h2 className="text-xl md:text-2xl font-medium mt-10">6. Your Rights</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access and review the personal data we hold about you</li>
              <li>Request corrections or updates</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for data processing (where applicable)</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-medium mt-10">7. Third-Party Links and Services</h2>
            <p>Our website or services may include links to third-party platforms. OIB is not responsible for the privacy practices of external websites or services. We encourage you to review their policies before sharing information.</p>

            <h2 className="text-xl md:text-2xl font-medium mt-10">8. International Users</h2>
            <p>If you are accessing OIB from outside India, please note that your data may be transferred and processed in countries where our service providers operate. By using our services, you consent to such transfers.</p>

            <h2 className="text-xl md:text-2xl font-medium mt-10">9. Updates to this Policy</h2>
            <p>OIB may update this Privacy Policy from time to time. Any changes will be posted on our website with an updated “Last Updated” date. Continued use of our services after changes indicates your acceptance of the revised policy.</p>

            <h2 className="text-xl md:text-2xl font-medium mt-10">10. Contact Us</h2>
            <p>If you have any questions or requests regarding this Privacy Policy, please contact us at:<br />
            oneinabillion@myoib.com</p>

            <p className="mt-10 text-sm text-muted-foreground">© 2025 OIB (One In a Billion) – Rare Meets Real</p>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;


