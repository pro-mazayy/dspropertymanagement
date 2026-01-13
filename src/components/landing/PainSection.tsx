import { motion } from "framer-motion";
import { X, Check, Skull, AlertCircle, TrendingDown, Clock3, Ban, Target, Rocket, Award } from "lucide-react";

const problems = [
  { icon: Skull, label: "The 2AM Nightmare", description: "Getting woken up by guests complaining about a leaky faucet or lost keys while you're trying to sleep." },
  { icon: TrendingDown, label: "The Revenue Leak", description: "Lazy pricing and empty calendars are bleeding your ROI dry every single night." },
  { icon: Clock3, label: "The Time Vacuum", description: "Spending your weekends managing cleaners and answering repetitive guest questions. You're a slave to your property." },
  { icon: Ban, label: "Hidden Fee Vampire", description: "Traditional agencies sucking 20-30% of your revenue for 'standard' management while doing the bare minimum." },
];

const solutions = [
  { icon: Target, label: "Algorithm-Driven ROI", description: "Our AI adjusts pricing every 15 minutes to squeeze every dollar out of the market. We don't guess, we dominate." },
  { icon: Rocket, label: "Bulletproof Operations", description: "Vetted crews, autonomous turnovers, and 24/7 hyper-responsive support. You get the check, we do the work." },
  { icon: Award, label: "Elite Market Status", description: "We transform properties into 5-star 'Superhost' magnets that rank #1 in search results automatically." },
  { icon: Check, label: "Zero-Risk Guarantee", description: "Performance-based fees only. If we don't hit our revenue targets, we don't get paid. High stakes, high rewards." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100
    } as const
  },
} as const;

export function PainSection() {
  return (
    <section className="py-32 lg:py-48 section-dark grain-overlay relative overflow-hidden">
      {/* Background Image / Texture */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-soft-light grayscale"
          style={{ backgroundImage: 'url("/C:/Users/HP PC/.gemini/antigravity/brain/d4e41df3-fa25-4cb3-a5b0-6ae2c6ea22ec/modern_architecture_night_exterior_miami_bw_2_1768322183830.png")' }}
        />
        <div className="absolute inset-0 mesh-gradient opacity-40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-24"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl headline-aggressive mb-8">
            ARE YOU AN OWNER OR A <br />
            <span className="text-destructive font-black underline">GLORIFIED HOTEL CLERK?</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
            Success in short-term rentals isn't about "hosting." It's about <span className="text-white font-bold">Cold, Hard Data</span> and <span className="text-white font-bold">Ruthless Execution.</span> If you aren't dominating, you're losing.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Problems Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-14 h-14 rounded-none bg-destructive/20 flex items-center justify-center border border-destructive/30">
                <AlertCircle className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-2xl font-black headline-aggressive text-destructive tracking-widest">THE LEGACY TRAP</h3>
            </div>

            {problems.map((problem) => (
              <motion.div
                key={problem.label}
                variants={itemVariants}
                className="group p-8 border border-white/5 bg-white/[0.02] hover:bg-destructive/[0.03] hover:border-destructive/30 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 flex items-center justify-center shrink-0">
                    <problem.icon className="w-8 h-8 text-destructive/50 group-hover:text-destructive group-hover:scale-110 transition-all" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">{problem.label}</h4>
                    <p className="text-muted-foreground group-hover:text-white/80 transition-colors leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Solutions Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-14 h-14 rounded-none bg-primary/20 flex items-center justify-center border border-primary/30">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-black headline-aggressive text-primary tracking-widest">DREAMSTATE DOMINATION</h3>
            </div>

            {solutions.map((solution) => (
              <motion.div
                key={solution.label}
                variants={itemVariants}
                className="group p-8 border border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 neon-glow-sm transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 flex items-center justify-center shrink-0">
                    <solution.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-all" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">{solution.label}</h4>
                    <p className="text-white/70 group-hover:text-white transition-colors leading-relaxed">{solution.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

