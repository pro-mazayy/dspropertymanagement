import { motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80")' }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        {/* Lime accent gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[200px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[180px] animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[70rem] mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2 border border-primary/40 bg-black/40 backdrop-blur-sm mb-10 text-xs font-bold tracking-widest text-primary"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            MARKET DOMINATION: 2026 STRATEGY EXPOSED
          </motion.div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8">
            <span className="block text-white/90">WE DON'T JUST</span>
            <span className="block text-white">MANAGE. WE</span>
            <span className="block text-primary neon-text-glow">
              WEAPONIZE.
            </span>
          </h1>

          {/* Subheadline - Problem Centric */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/80 max-w-4xl mx-auto mb-12 leading-tight"
          >
            Stop settling for <span className="text-white font-bold underline decoration-destructive decoration-2">mediocre management</span> and "vanity" bookings. We deploy aggressive AI-driven ROI strategies that turn your property into a <span className="text-primary font-black">high-yield cash-printing machine.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary text-black font-black text-xl px-12 py-8 rounded-none hover:scale-105 transition-all shadow-[0_0_30px_rgba(209,255,26,0.4)] hover:shadow-[0_0_50px_rgba(209,255,26,0.6)]"
            >
              <a href="#calculator" className="flex items-center gap-3">
                SEE YOUR DOMINATION POTENTIAL
                <ArrowRight className="w-6 h-6 stroke-[3px]" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/50 bg-black/30 text-white font-bold text-xl px-10 py-8 rounded-none hover:bg-primary/20 hover:border-primary transition-all backdrop-blur-sm group"
            >
              <a href="#case-studies" className="flex items-center gap-2">
                <Play className="w-5 h-5 fill-primary text-primary group-hover:scale-110 transition-transform" />
                <span className="text-white group-hover:text-primary transition-colors">WATCH THE CASE STUDIES</span>
              </a>
            </Button>
          </motion.div>

          {/* Proof Bar / Trust Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-12 border-t border-white/10 flex flex-wrap justify-center items-center gap-8 md:gap-16"
          >
            <div className="flex items-center gap-2 text-white/80 font-bold tracking-tighter hover:text-primary transition-colors">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span>#1 RATED IN MIAMI</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 font-bold tracking-tighter hover:text-primary transition-colors">
              <Zap className="w-5 h-5 text-primary" />
              <span>ROI GUARANTEED</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 font-bold tracking-tighter hover:text-primary transition-colors">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span>$2.5M+ GENERATED</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

