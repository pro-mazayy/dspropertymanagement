import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldAlert, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-32 lg:py-48 section-dark grain-overlay relative overflow-hidden">
      {/* Background Image / Texture */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-soft-light grayscale rotate-180"
          style={{ backgroundImage: 'url("/C:/Users/HP PC/.gemini/antigravity/brain/d4e41df3-fa25-4cb3-a5b0-6ae2c6ea22ec/modern_architecture_night_exterior_miami_bw_2_1768322183830.png")' }}
        />
        <div className="absolute inset-0 mesh-gradient opacity-40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 mb-8">
            <ShieldAlert className="w-5 h-5 text-primary" />
            <span className="text-xs font-black headline-aggressive text-primary tracking-[0.3em]">FINAL MARKET WARNING</span>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl headline-aggressive leading-[0.9] mb-10">
            STOP ASKING. <br />
            <span className="text-primary neon-text-glow">START DOMINATING.</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed">
            Your competition is bleeding. The market is wide open. You can either watch from the sidelines or <span className="text-white font-bold">liquidate your rivals</span> with the Dreamstate Domination system. The choice is yours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              asChild
              size="lg"
              className="bg-primary text-black font-black text-2xl px-12 py-12 rounded-none hover:scale-105 transition-all shadow-[0_0_50px_rgba(209,255,26,0.4)] headline-aggressive group"
            >
              <a href="#calculator" className="flex items-center gap-4">
                DEPLOY THE SYSTEM
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white font-black text-xl px-12 py-12 rounded-none hover:bg-white/5 headline-aggressive"
            >
              <a href="tel:+1234567890" className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-primary" />
                DIRECT FIELD COMMS
              </a>
            </Button>
          </div>

          {/* Scarcity Trigger */}
          <div className="mt-16 flex items-center justify-center gap-4 text-white/40 font-bold text-sm tracking-[0.2em] headline-aggressive">
            <Zap className="w-4 h-4 text-primary animate-pulse" />
            ONLY 2 SLOTS REMAINING FOR Q1 2026 IN MIAMI
          </div>
        </motion.div>
      </div>
    </section>
  );
}

