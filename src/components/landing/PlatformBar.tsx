import { motion } from "framer-motion";

const platforms = [
  { name: "Airbnb", logo: "🏠" },
  { name: "Booking.com", logo: "🌐" },
  { name: "VRBO", logo: "🏡" },
  { name: "Expedia", logo: "✈️" },
  { name: "Marriott Homes", logo: "🏨" },
];

export function PlatformBar() {
  return (
    <section className="py-12 bg-secondary/30 border-y border-border/50 overflow-hidden">
      <div className="container mx-auto px-6 mb-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest"
        >
          Dominating Every Major Platform
        </motion.p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        <div className="flex animate-marquee">
          {/* First set */}
          {[...platforms, ...platforms].map((platform, index) => (
            <div
              key={`${platform.name}-${index}`}
              className="flex items-center gap-4 mx-12 whitespace-nowrap"
            >
              <span className="text-4xl">{platform.logo}</span>
              <span className="text-2xl md:text-3xl font-bold text-muted-foreground/60 hover:text-foreground transition-colors">
                {platform.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
