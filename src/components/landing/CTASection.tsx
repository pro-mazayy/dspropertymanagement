import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldAlert, Zap, Clock, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-32 lg:py-48 relative overflow-hidden">
      {/* Premium Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-black" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80")' }}
        />
        {/* Animated Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[200px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[180px] animate-pulse delay-1000" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-6xl mx-auto"
        >
          {/* Warning Badge with Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-red-500/10 border border-red-500/30 mb-10"
          >
            <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
            <ShieldAlert className="w-5 h-5 text-red-400" />
            <span className="text-sm font-black text-red-400 tracking-[0.3em] uppercase">FINAL MARKET WARNING</span>
          </motion.div>

          {/* Main Headline with Stagger Animation */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-[10rem] font-bold tracking-tighter leading-[0.85] mb-8"
          >
            <span className="block text-white">STOP ASKING.</span>
            <span className="block text-primary neon-text-glow mt-2">START DOMINATING.</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Your competition is <span className="text-red-400 font-semibold">bleeding money</span>. The market is wide open. 
            <span className="block mt-2 text-white font-bold">The question is: are you ready to take it?</span>
          </motion.p>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 py-8 border-y border-white/10"
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-3xl md:text-4xl font-display font-bold text-white">128%</span>
              </div>
              <span className="text-sm text-gray-500 uppercase tracking-wider">Avg ROI Increase</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-3xl md:text-4xl font-display font-bold text-white">500+</span>
              </div>
              <span className="text-sm text-gray-500 uppercase tracking-wider">Properties Dominated</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-3xl md:text-4xl font-display font-bold text-white">24/7</span>
              </div>
              <span className="text-sm text-gray-500 uppercase tracking-wider">Elite Support</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button
              asChild
              size="lg"
              className="relative bg-primary text-black font-black text-xl md:text-2xl px-10 md:px-16 py-10 md:py-14 rounded-none hover:scale-105 transition-all shadow-[0_0_60px_rgba(209,255,26,0.5)] group overflow-hidden"
            >
              <a href="#calculator" className="flex items-center gap-4">
                <span className="relative z-10">DEPLOY THE SYSTEM</span>
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform relative z-10" />
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-primary/50 bg-primary/10 text-primary font-bold text-lg md:text-xl px-10 md:px-14 py-10 md:py-14 rounded-none hover:bg-primary/20 hover:border-primary transition-all group"
            >
              <a href="tel:+1234567890" className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-primary group-hover:animate-pulse" />
                DIRECT LINE
              </a>
            </Button>
          </motion.div>

          {/* Scarcity Trigger with Enhanced Design */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-16"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20">
              <Zap className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-gray-300 font-semibold tracking-wide">
                ONLY <span className="text-primary font-black text-lg">2 SLOTS</span> REMAINING FOR <span className="text-white font-bold">Q1 2026</span> IN MIAMI
              </span>
              <Zap className="w-5 h-5 text-primary animate-pulse" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

