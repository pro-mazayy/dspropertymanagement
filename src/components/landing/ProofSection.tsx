import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingUp, Star, Heart } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: 42,
    suffix: "%",
    label: "Avg ROI Increase",
    description: "Our properties outperform market average",
  },
  {
    icon: Star,
    value: 4.9,
    suffix: "/5",
    label: "Guest Rating",
    description: "Consistently exceptional reviews",
  },
  {
    icon: Heart,
    value: 0,
    suffix: "%",
    label: "Host Stress",
    description: "We handle everything for you",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {Number.isInteger(value) ? Math.floor(count) : count.toFixed(1)}
      {suffix}
    </span>
  );
}

export function ProofSection() {
  return (
    <section id="proof" className="py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[250px]" />
      </div>

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
            BY THE NUMBERS
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            RESULTS THAT{" "}
            <span className="text-primary">SPEAK</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Numbers don't lie. Here's what Dreamstate Property Management delivers.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center p-10 bg-white border border-gray-200 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-primary group-hover:text-black transition-colors" />
              </div>

              <div className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {stat.label}
              </h3>

              <p className="text-gray-600">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
