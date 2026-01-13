import { motion } from "framer-motion";
import { Search, MessageSquare, Wrench, TrendingUp, RefreshCw, BarChart3, ShieldCheck, Globe } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "ALGORITHMIC YIELD MAXIMIZATION",
    description: "Our proprietary AI doesn't just 'price' your property. It executes thousands of micro-adjustments daily to exploit market inefficiencies and crush your local competition.",
    highlight: true,
  },
  {
    icon: Search,
    title: "PSYCHOLOGICAL LISTING WEAPONRY",
    description: "Multi-point A/B testing on every description, title, and image. We use high-conversion psychological triggers that force guests to stop scrolling and click 'Book Now'.",
    highlight: false,
  },
  {
    icon: ShieldCheck,
    title: "0% RISK INFRASTRUCTURE",
    description: "Military-grade screening processes and comprehensive damage protection. We protect your asset like it's our own, ensuring zero headaches and total security.",
    highlight: false,
  },
  {
    icon: RefreshCw,
    title: "DOMINANT OMNI-CHANNEL SYNC",
    description: "Instantaneous synchronization across 50+ global booking channels. One master calendar, zero overlaps, and maximum visibility on every platform that matters.",
    highlight: true,
  },
  {
    icon: Globe,
    title: "GLOBAL CONCIERGE NETWORK",
    description: "24/7 elite guest communication in 5+ languages. We provide a 'Presidential' experience that secures 5-star reviews and ensures high-frequency repeat bookings.",
    highlight: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ServicesSection() {
  return (
    <section id="services" className="py-32 lg:py-48 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl headline-aggressive mb-8">
            OUR STRATEGIC <br />
            <span className="text-primary neon-text-glow">ROI WEAPONS</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Traditional management is a relic. We deploy three core strategic weapons to ensure your assets achieve total market surrender and peak yield under the Dreamstate Domination protocol.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`group relative p-10 rounded-none border border-white/5 transition-all duration-500 hover:border-primary/40 ${service.highlight
                ? "bg-primary/[0.03] md:col-span-1 lg:row-span-1"
                : "bg-card/40"
                } ${index === 0 ? "lg:col-span-2" : ""}`}
            >
              {/* Glow effect for highlighted cards */}
              {service.highlight && (
                <div className="absolute inset-0 bg-primary/[0.02] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              )}

              <div className="relative z-10">
                <div
                  className={`w-16 h-16 rounded-none flex items-center justify-center mb-10 border transition-all duration-500 ${service.highlight
                    ? "bg-primary/20 border-primary/30 group-hover:bg-primary group-hover:border-primary"
                    : "bg-secondary border-white/10 group-hover:border-primary/50"
                    }`}
                >
                  <service.icon
                    className={`w-8 h-8 transition-colors duration-500 ${service.highlight ? "text-primary group-hover:text-black" : "text-white/50 group-hover:text-primary"
                      }`}
                  />
                </div>

                <h3 className="text-2xl font-black mb-6 text-white headline-aggressive tracking-wider">
                  {service.title}
                </h3>

                <p className="text-muted-foreground group-hover:text-white/80 transition-colors leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

