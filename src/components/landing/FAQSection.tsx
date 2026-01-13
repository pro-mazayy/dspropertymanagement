import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes Dreamstate different from other property managers?",
    answer:
      "We don't just manage properties—we weaponize them for maximum yield. Our algorithmic approach to pricing, AI-driven guest communication, and military-precision operations deliver 42% higher ROI on average. We treat your property like a high-performance asset, not just another listing.",
  },
  {
    question: "How quickly can you onboard my property?",
    answer:
      "Our elite onboarding process takes 7-14 days from contract signing to first booking. This includes professional photography, listing optimization across all major platforms, dynamic pricing setup, and integration with our 24/7 guest support system. We move fast because every day offline is money lost.",
  },
  {
    question: "What are your management fees?",
    answer:
      "Our fee structure is performance-based—we only win when you win. We charge a competitive percentage of booking revenue, typically 15-25% depending on property type and services required. No hidden fees, no setup costs. Book a call to get your personalized quote.",
  },
  {
    question: "How do you handle guest issues and emergencies?",
    answer:
      "Our AI-powered guest support system operates 24/7/365, handling 90% of inquiries automatically within 60 seconds. For emergencies, our local response team is on-call and can dispatch within 30 minutes. You sleep soundly while we handle everything.",
  },
  {
    question: "Which platforms do you list properties on?",
    answer:
      "We dominate every major platform: Airbnb, VRBO, Booking.com, Expedia, Marriott Homes & Villas, and direct booking channels. Our multi-platform strategy maximizes visibility while our channel manager prevents double-bookings and optimizes pricing across all channels.",
  },
  {
    question: "Can I still use my property for personal stays?",
    answer:
      "Absolutely. Your property, your rules. Block off dates anytime through our owner portal. We'll coordinate cleaning and preparation so your property is guest-ready whether you're hosting paying guests or your own family.",
  },
  {
    question: "What markets do you operate in?",
    answer:
      "We currently operate in premium markets across the United States. If your property is in a high-demand vacation rental market, we want to talk. We're selective about the properties we onboard because we only take on assets we can dominate with.",
  },
  {
    question: "How do I track my property's performance?",
    answer:
      "Our real-time owner dashboard gives you complete visibility: bookings, revenue, expenses, guest reviews, and market comparisons. Monthly reports break down every dollar earned and spent. Full transparency, always.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-6 text-xs font-bold tracking-[0.2em] text-primary uppercase border border-primary/30 bg-primary/5">
            INTEL BRIEFING
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gray-900">
            FREQUENTLY ASKED{" "}
            <span className="text-primary">QUESTIONS</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about deploying Dreamstate for your property portfolio.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-gray-200 px-6 data-[state=open]:border-primary/40 data-[state=open]:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-display text-lg md:text-xl font-semibold py-6 text-gray-900 hover:text-primary transition-colors [&[data-state=open]]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base md:text-lg pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? We're ready to answer.
          </p>
          <a
            href="#calculator"
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline underline-offset-4"
          >
            Book a Strategy Call
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
