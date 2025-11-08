import { motion } from "framer-motion";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { useSEO } from "@/hooks/useSEO";

const Terms = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SEO and Breadcrumbs
  useSEO({
    title: "Terms of Service | One In a Billion (OIB) - Rare Meets Real",
    description: "Read the Terms of Service for One In a Billion (OIB). Learn about our service terms, user conduct, and policies.",
    canonical: "https://myoib.com/terms",
    ogTitle: "Terms of Service | One In a Billion (OIB)",
    ogDescription: "Read the Terms of Service for One In a Billion (OIB). Learn about our service terms, user conduct, and policies.",
    ogImage: "https://myoib.com/images/White_Logo.png",
    breadcrumbs: [
      { name: "Home", url: "https://myoib.com/" },
      { name: "Terms of Service", url: "https://myoib.com/terms" }
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
            { name: "Terms of Service", url: "/terms" }
          ]} />
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-shadow-glow">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: September 10, 2025</p>

          <div className="space-y-6 leading-relaxed text-base md:text-lg text-foreground/90">
            <p>Welcome to OIB (One in a Billion). These Terms of Service govern your use of our website, services, and programs. By engaging with OIB, you agree to these terms in full. If you disagree with any part of these terms, please refrain from using our services.</p>

            <h2 className="text-xl md:text-2xl font-medium mt-10">1. Acceptance of Terms</h2>
            <p>By accessing or using OIB, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. OIB reserves the right to update or modify these terms at any time. Continued use of our services after any updates indicates your acceptance of the revised terms.</p>

            <h2 className="text-xl md:text-2xl font-medium mt-10">2. Description of Services</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Business consultation (idea validation, planning, and strategy)</li>
              <li>Design and development (UI/UX, websites, applications, and MVPs)</li>
              <li>Branding and marketing strategy</li>
              <li>Legal and administrative assistance</li>
              <li>Providing a full-fledged operational team to run the client’s company for three months</li>
              <li>Assisting in hiring and onboarding processes for long-term sustainability</li>
            </ul>
            <p>OIB may also offer additional advisory and growth support services based on client requirements.</p>

            <h2 className="text-xl md:text-2xl font-medium mt-10">3. User Conduct</h2>
            <p>You agree not to use OIB’s services to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate applicable laws or regulations</li>
              <li>Infringe upon the intellectual property or rights of others</li>
              <li>Distribute harmful, offensive, or unlawful content</li>
              <li>Attempt to gain unauthorized access to OIB’s systems or networks</li>
              <li>Misuse our consultation, hiring, or development services for fraudulent purposes</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-medium mt-10">4. Project Scope and Deliverables</h2>
            <p>OIB delivers services based on mutually agreed project scopes, proposals, or contracts. Clients are responsible for providing accurate information, resources, and timely approvals to ensure smooth execution.</p>
            <p>Delays caused by the client may impact timelines.</p>
            <p>OIB is not liable for outcomes dependent on third-party providers or market conditions.</p>

            <h2 className="text-xl md:text-2xl font-medium mt-10">5. Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All content, designs, software, and materials developed by OIB remain the property of OIB until full payment is received.</li>
              <li>Upon completion and payment, clients gain rights to the final deliverables as outlined in the project agreement.</li>
              <li>OIB retains the right to showcase completed work in its portfolio unless otherwise agreed.</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-medium mt-10">6. Third-Party Services</h2>
            <p>OIB may integrate or recommend third-party services (e.g., hosting platforms, AI providers, marketing tools). These services are subject to their own terms and policies. OIB is not responsible for the actions or policies of such third parties.</p>

            <h2 className="text-xl md:text-2xl font-medium mt-10">7. Pricing and Payments</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pricing for OIB’s services will be detailed in official proposals or invoices.</li>
              <li>Payments are due according to the agreed schedule (e.g., upfront, milestone-based, or subscription).</li>
              <li>Late payments may result in suspension of services or termination of the agreement.</li>
              <li>All payments are non-refundable unless otherwise specified in writing.</li>
              <li>Clients are responsible for applicable taxes and fees.</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-medium mt-10">8. Cancellations and Refunds</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clients may request cancellation of services by contacting OIB in writing.</li>
              <li>Work completed up to the date of cancellation is billable and must be settled.</li>
              <li>Refunds are not provided for services already delivered or in progress.</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-medium mt-10">9. Privacy</h2>
            <p>Your use of OIB’s services is also governed by our Privacy Policy, which explains how we handle your personal and business information.</p>

            <h2 className="text-xl md:text-2xl font-medium mt-10">10. Limitation of Liability</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Market or third-party factors beyond our control</li>
            </ul>
            <p>OIB provides guidance, execution, and support, but the ultimate success of a startup depends on external factors and client decisions.</p>

            <h2 className="text-xl md:text-2xl font-medium mt-10">11. Disclaimers</h2>
            <p>OIB services are provided "as is" and "as available." We do not guarantee specific outcomes, financial success, or business results. Clients should seek independent professional, legal, or financial advice where necessary.</p>

            <h2 className="text-xl md:text-2xl font-medium mt-10">12. Termination</h2>
            <p>OIB reserves the right to suspend or terminate services with or without notice if:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clients violate these Terms of Service</li>
              <li>Payments are not received</li>
              <li>Client conduct is unlawful, harmful, or damaging to OIB’s reputation</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-medium mt-10">13. Governing Law</h2>
            <p>These Terms of Service shall be governed by and construed in accordance with the laws of India (or your operating jurisdiction), without regard to conflict of law provisions.</p>

            <h2 className="text-xl md:text-2xl font-medium mt-10">14. Contact Us</h2>
            <p>For any questions about these Terms of Service, please contact us at:<br />
            📧 oneinabillion@myoib.com</p>

            <p className="mt-10 text-sm text-muted-foreground">© 2025 OIB (One in a Billion) – Rare Meets Real</p>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;


