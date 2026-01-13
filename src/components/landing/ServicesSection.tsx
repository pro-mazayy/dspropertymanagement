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
    <section id="services" className="py-32 lg:py-48 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px]" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-2 mb-6 text-xs font-bold tracking-[0.2em] text-primary uppercase border border-primary/40 bg-primary/10">
            OUR ARSENAL
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-white">
            STRATEGIC <br />
            <span className="text-primary neon-text-glow">ROI WEAPONS</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Traditional management is a relic. We deploy <span className="text-white font-semibold">three core strategic weapons</span> to ensure your assets achieve total market surrender and peak yield under the Dreamstate Domination protocol.
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
              className={`group relative p-8 md:p-10 border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${service.highlight
                ? "bg-gradient-to-br from-primary/15 to-primary/5 border-primary/40 hover:border-primary"
                : "bg-white/5 backdrop-blur-sm border-white/10 hover:border-primary/50 hover:bg-white/10"
                } ${index === 0 ? "lg:col-span-2" : ""}`}
            >
              {/* Hover Glow */}
              {service.highlight && (
                <div className="absolute inset-0 bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              )}

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 flex items-center justify-center mb-8 border transition-all duration-500 ${service.highlight
                    ? "bg-primary/20 border-primary/50 group-hover:bg-primary group-hover:border-primary"
                    : "bg-white/10 border-white/20 group-hover:border-primary group-hover:bg-primary/20"
                    }`}
                >
                  <service.icon
                    className={`w-7 h-7 transition-colors duration-500 ${service.highlight ? "text-primary group-hover:text-black" : "text-white group-hover:text-primary"
                      }`}
                  />
                </div>

                <h3 className="font-display text-xl md:text-2xl font-bold mb-4 text-white tracking-wide">
                  {service.title}
                </h3>

                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
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

