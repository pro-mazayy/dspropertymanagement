import { motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background grain-overlay">
      {/* Background Image / Texture */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay grayscale"
          style={{ backgroundImage: 'url("/C:/Users/HP PC/.gemini/antigravity/brain/d4e41df3-fa25-4cb3-a5b0-6ae2c6ea22ec/premium_miami_luxury_listing_bw_2_1768322168186.png")' }}
        />
        <div className="absolute inset-0 mesh-gradient opacity-60" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] animate-pulse delay-1000" />
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
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-primary/20 bg-primary/5 mb-10 headline-aggressive text-xs tracking-widest text-primary"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            MARKET DOMINATION: 2026 STRATEGY EXPOSED
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl headline-aggressive mb-8">
            <span className="block text-white opacity-90">WE DON'T JUST</span>
            <span className="block text-white">MANAGE. WE</span>
            <span className="block text-neon-gradient neon-text-glow">
              WEAPONIZE.
            </span>
          </h1>

          {/* Subheadline - Problem Centric */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-tight"
          >
            Stop settling for <span className="text-white font-bold underline decoration-destructive">mediocre management</span> and "vanity" bookings. We deploy aggressive AI-driven ROI strategies that turn your property into a <span className="text-primary font-black italic">high-yield cash-printing machine.</span>
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
              className="border-white/20 text-white font-bold text-xl px-10 py-8 rounded-none hover:bg-white/5 transition-all"
            >
              <a href="#case-studies" className="flex items-center gap-2">
                <Play className="w-5 h-5 fill-current" />
                WATCH THE CASE STUDIES
              </a>
            </Button>
          </motion.div>

          {/* Proof Bar / Trust Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-12 border-t border-white/5 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
          >
            <div className="flex items-center gap-2 text-white font-bold tracking-tighter">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span>#1 RATED IN MIAMI</span>
            </div>
            <div className="flex items-center gap-2 text-white font-bold tracking-tighter">
              <Zap className="w-5 h-5 text-primary" />
              <span>ROI GUARANTEED</span>
            </div>
            <div className="flex items-center gap-2 text-white font-bold tracking-tighter">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span>$2.5M+ GENERATED</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

