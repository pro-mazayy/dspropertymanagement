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
    <section className="py-32 lg:py-48 relative overflow-hidden">
      {/* Rich Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0d0d0d] to-[#080808]" />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23d1ff1a" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      
      {/* Glow Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-destructive/10 rounded-full blur-[200px]" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-20"
        >
          <span className="inline-block px-4 py-2 mb-6 text-xs font-bold tracking-[0.2em] text-primary uppercase border border-primary/30 bg-primary/5">
            THE HARD TRUTH
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-white">
            ARE YOU AN OWNER OR A <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-orange-400">GLORIFIED HOTEL CLERK?</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-3xl">
            Success in short-term rentals isn't about "hosting." It's about <span className="text-white font-semibold">Cold, Hard Data</span> and <span className="text-white font-semibold">Ruthless Execution.</span> If you aren't dominating, you're losing.
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
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500/20 to-red-600/10 flex items-center justify-center border border-red-500/30">
                <AlertCircle className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-red-400 tracking-wide">THE LEGACY TRAP</h3>
            </div>

            {problems.map((problem) => (
              <motion.div
                key={problem.label}
                variants={itemVariants}
                className="group p-6 md:p-8 border border-white/5 bg-white/[0.02] hover:bg-red-500/[0.03] hover:border-red-500/20 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0 bg-red-500/10 border border-red-500/20">
                    <problem.icon className="w-5 h-5 text-red-400/70 group-hover:text-red-400 transition-all" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white/90 mb-2 tracking-wide">{problem.label}</h4>
                    <p className="text-white/50 group-hover:text-white/70 transition-colors leading-relaxed text-sm md:text-base">{problem.description}</p>
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
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/40 neon-glow-sm">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-primary tracking-wide neon-text-glow">DREAMSTATE DOMINATION</h3>
            </div>

            {solutions.map((solution) => (
              <motion.div
                key={solution.label}
                variants={itemVariants}
                className="group p-6 md:p-8 border border-primary/20 bg-primary/[0.03] hover:bg-primary/[0.08] hover:border-primary/40 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0 bg-primary/10 border border-primary/30">
                    <solution.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-all" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white/90 mb-2 tracking-wide">{solution.label}</h4>
                    <p className="text-white/50 group-hover:text-white/70 transition-colors leading-relaxed text-sm md:text-base">{solution.description}</p>
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

