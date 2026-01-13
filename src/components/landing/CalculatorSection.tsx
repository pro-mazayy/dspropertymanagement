import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, MapPin, Bed, DollarSign, ArrowRight, CheckCircle, Loader2, ShieldCheck, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export function CalculatorSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    bedrooms: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [estimate, setEstimate] = useState<number | null>(null);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateEstimate = (bedrooms: number): number => {
    const baseRate = 2200; // Aggressive but realistic
    const perBedroom = 1200;
    const monthlyEstimate = baseRate + (bedrooms * perBedroom);
    return monthlyEstimate;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error: dbError } = await supabase.from("leads").insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        property_address: formData.address,
        bedrooms: parseInt(formData.bedrooms),
      });

      if (dbError) throw dbError;

      const monthlyEstimate = calculateEstimate(parseInt(formData.bedrooms));
      setEstimate(monthlyEstimate);
      setIsSubmitted(true);

      toast({
        title: "STRATEGIC AUDIT INITIATED",
        description: "Your revenue optimization data has been received.",
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "SYSTEM OVERLOAD",
        description: "Please try again or contact our field office directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="calculator" className="py-32 lg:py-48 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[250px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl headline-aggressive mb-8">
              DEPLOY THE <br />
              <span className="text-primary neon-text-glow">REVENUE AUDIT</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
              Stop guessing. Our proprietary algorithm cross-references thousands of local data points to reveal the <span className="text-white font-bold">hidden equity</span> in your property. No fluff, no BS. Just data.
            </p>

            {/* Guarantee Badge */}
            <div className="inline-flex items-center gap-6 p-6 border-2 border-primary/30 bg-primary/5 mb-10">
              <ShieldCheck className="w-12 h-12 text-primary shrink-0" />
              <div>
                <p className="text-lg font-black headline-aggressive text-primary">THE 128% GUARANTEE</p>
                <p className="text-sm text-white/70 italic">If we can't beat your current revenue, we don't get paid. Period.</p>
              </div>
            </div>

            <ul className="space-y-4">
              {[
                "Instant Competitor Undercutting Analysis",
                "Dynamic Seasonal Peak Mapping",
                "Maximized Occupancy Projection",
                "Direct Lead Generation Strategy"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/80 font-medium">
                  <Zap className="w-5 h-5 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Calculator Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Scientific Overlay Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary/40" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-primary/40" />

            <div className="p-8 md:p-12 bg-card/60 border border-white/10 backdrop-blur-3xl relative z-10">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-xs font-black headline-aggressive tracking-widest text-primary">FULL NAME</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="IDENTIFY YOURSELF"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-black/40 border-white/10 rounded-none h-14 focus:border-primary transition-all text-lg"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-xs font-black headline-aggressive tracking-widest text-primary">SECURE EMAIL</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="COMMAND@CENTER.COM"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-black/40 border-white/10 rounded-none h-14 focus:border-primary transition-all text-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="address" className="text-xs font-black headline-aggressive tracking-widest text-primary">PROPERTY LOCATION</Label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                      <Input
                        id="address"
                        name="address"
                        type="text"
                        placeholder="TARGET ADDRESS"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="bg-black/40 border-white/10 rounded-none h-14 pl-12 focus:border-primary transition-all text-lg underline decoration-primary/30"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-xs font-black headline-aggressive tracking-widest text-primary">DIRECT LINE</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(xxx) xxx-xxxx"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="bg-black/40 border-white/10 rounded-none h-14 focus:border-primary transition-all text-lg"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="bedrooms" className="text-xs font-black headline-aggressive tracking-widest text-primary">BATTLE STATIONS (BEDROOMS)</Label>
                      <Input
                        id="bedrooms"
                        name="bedrooms"
                        type="number"
                        min="1"
                        max="20"
                        placeholder="2"
                        value={formData.bedrooms}
                        onChange={handleChange}
                        required
                        className="bg-black/40 border-white/10 rounded-none h-14 focus:border-primary transition-all text-lg"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-black font-black text-2xl py-10 rounded-none headline-aggressive hover:scale-[1.02] transition-all shadow-[0_0_40px_rgba(209,255,26,0.3)] animate-pulse-glow"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-8 h-8 animate-spin" />
                    ) : (
                      "CALCULATE DOMINATION"
                    )}
                  </Button>
                </form>
              ) : (
                /* Success State */
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-24 h-24 mx-auto mb-8 rounded-none bg-primary flex items-center justify-center rotate-45"
                  >
                    <Target className="w-12 h-12 text-black -rotate-45" />
                  </motion.div>

                  <h3 className="text-4xl font-black headline-aggressive text-white mb-6">
                    AUDIT COMPLETE
                  </h3>

                  <div className="mb-10 p-8 border border-primary/20 bg-primary/5">
                    <div className="flex items-center justify-center gap-2 text-6xl md:text-7xl font-black text-primary headline-aggressive">
                      <DollarSign className="w-12 h-12 stroke-[3px]" />
                      {estimate?.toLocaleString()}
                    </div>
                    <p className="text-xl text-primary font-black mt-2 tracking-widest uppercase">Targeted Monthly Yield</p>
                  </div>

                  <p className="text-lg text-white/80 mb-10 leading-relaxed">
                    Data has been verified. Our market analysts are preparing the <span className="text-primary font-bold">128% Strategy Packet</span> for <span className="font-black text-white">{formData.name}</span>. Expect deployment within 24 hours.
                  </p>

                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", address: "", bedrooms: "" });
                      setEstimate(null);
                    }}
                    variant="link"
                    className="text-primary font-black headline-aggressive tracking-widest hover:scale-110 transition-transform"
                  >
                    Analyze New Target Property
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

