import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Calendar, DollarSign, Target, Zap } from "lucide-react";

const caseStudies = [
  {
    title: "DOWNTOWN MIAMI AUDIT",
    type: "LUXURY ASSET",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=60",
    beforeOccupancy: "52%",
    afterOccupancy: "89%",
    beforeRevenue: "$2,100/mo",
    afterRevenue: "$4,800/mo",
    increase: "+128%",
  },
  {
    title: "BEACHFRONT LIQUIDATION",
    type: "HIGH-YIELD VILLA",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=60",
    beforeOccupancy: "38%",
    afterOccupancy: "76%",
    beforeRevenue: "$5,200/mo",
    afterRevenue: "$12,400/mo",
    increase: "+138%",
  },
  {
    title: "MOUNTAIN ASCENSION",
    type: "SCARCE ASSET",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&auto=format&fit=crop&q=60",
    beforeOccupancy: "45%",
    afterOccupancy: "82%",
    beforeRevenue: "$3,100/mo",
    afterRevenue: "$6,900/mo",
    increase: "+122%",
  },
];

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-32 lg:py-48 bg-secondary/10 relative overflow-hidden">
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
            VERIFIED <br />
            <span className="text-primary neon-text-glow">FIELD PROOF</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We don't do "marketing." We deploy strategic revenue systems. See the <span className="text-white font-bold">raw data</span> from our most recent successful liquidations.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative rounded-none overflow-hidden bg-card/40 border border-white/5 hover:border-primary/40 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Increase Badge */}
                <div className="absolute top-6 right-6 px-4 py-2 bg-primary text-black font-black text-xs headline-aggressive flex items-center gap-2 shadow-2xl">
                  <TrendingUp className="w-4 h-4 stroke-[3px]" />
                  {study.increase} ROI BOOST
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-primary" />
                  <p className="text-xs font-black headline-aggressive text-primary tracking-widest">{study.type}</p>
                </div>
                <h3 className="text-2xl font-black text-white mb-8 headline-aggressive">{study.title}</h3>

                {/* Before/After Grid */}
                <div className="grid grid-cols-2 gap-6 p-6 bg-black/40 border border-white/5">
                  {/* Before */}
                  <div className="space-y-4">
                    <p className="text-[10px] font-black text-destructive uppercase tracking-[0.3em]">LEGACY STATE</p>
                    <div className="flex items-center gap-2 opacity-50">
                      <Calendar className="w-4 h-4 text-white" />
                      <span className="text-sm text-white font-bold">{study.beforeOccupancy}</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-50">
                      <DollarSign className="w-4 h-4 text-white" />
                      <span className="text-sm text-white font-bold">{study.beforeRevenue}</span>
                    </div>
                  </div>

                  {/* After */}
                  <div className="space-y-4 border-l border-white/10 pl-6">
                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">DOMINATED STATE</p>
                    <div className="flex items-center gap-2 text-primary">
                      <Zap className="w-4 h-4 fill-current" />
                      <span className="text-lg text-white font-black">{study.afterOccupancy}</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary">
                      <DollarSign className="w-4 h-4 stroke-[3px]" />
                      <span className="text-lg text-white font-black">{study.afterRevenue}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Arrow */}
              <div className="absolute bottom-8 right-8 w-12 h-12 bg-primary flex items-center justify-center translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                <ArrowUpRight className="w-6 h-6 text-black stroke-[3px]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

