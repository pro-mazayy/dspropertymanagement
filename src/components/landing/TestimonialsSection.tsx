import { motion } from "framer-motion";
import { Star, Quote, ShieldCheck, TrendingUp } from "lucide-react";

const testimonials = [
  {
    name: "JENNIFER MARTINEZ",
    location: "MIAMI EXPEDITION",
    property: "HIGH-YIELD CONDO",
    rating: 5,
    quote: "I was bleeding money with legacy management. Dreamstate Domination executed a 3-month turnaround that skyrocketed my revenue by 85%. This isn't management, it's financial warfare.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=60",
  },
  {
    name: "MICHAEL THOMPSON",
    location: "AUSTIN OPERATIONS",
    property: "REVENUE ASSET",
    rating: 5,
    quote: "The transparency is total. I don't just see bookings; I see the aggressive strategies they deploy in real-time. My portfolio is finally a passive cash-printing machine.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=60",
  },
  {
    name: "SARAH CHEN",
    location: "DENVER TARGET",
    property: "ELITE STUDIO",
    rating: 5,
    quote: "I stopped being a hotel clerk and started being an investor. DS handles the field operations with zero friction, while I focus on scaling my next acquisition.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=60",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-32 lg:py-48 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />

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
            OWNER <br />
            <span className="text-primary neon-text-glow">INTELLIGENCE</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The market doesn't care about your feelings. It cares about <span className="text-white font-bold">results.</span> Hear from the elite owners who chose to dominate.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative p-10 rounded-none bg-black/40 border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden group"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-all" />

              {/* Rating */}
              <div className="flex gap-1 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl font-bold text-white italic leading-relaxed mb-10 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-6 pt-8 border-t border-white/5">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-none object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/10"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary p-1">
                    <ShieldCheck className="w-4 h-4 text-black" />
                  </div>
                </div>
                <div>
                  <p className="font-black text-white headline-aggressive text-lg tracking-wider">{testimonial.name}</p>
                  <div className="flex items-center gap-2 text-primary font-black text-xs tracking-[0.2em] mt-1">
                    <TrendingUp className="w-3 h-3" />
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

