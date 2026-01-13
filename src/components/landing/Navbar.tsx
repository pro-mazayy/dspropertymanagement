import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "STRATEGY", href: "#services" },
  { label: "PROOF", href: "#case-studies" },
  { label: "ROI CALCULATOR", href: "#calculator" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = (window.scrollY / documentHeight) * 100;
      setScrollProgress(Math.min(scrolled, 100));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled 
        ? "bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 shadow-lg" 
        : "bg-gradient-to-b from-black/50 to-transparent py-6"
        }`}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-primary neon-glow-sm transition-all duration-150 ease-out" style={{ width: `${scrollProgress}%` }} />
      
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-500 shadow-lg">
            <ShieldAlert className="w-5 h-5 text-black -rotate-45 group-hover:-rotate-90 transition-transform duration-500" />
          </div>
          <span className="font-display text-2xl font-bold tracking-tight">
            <span className="text-primary">DREAM</span>
            <span className={isScrolled ? "text-gray-900" : "text-white"}>STATE</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-xs font-bold tracking-[0.2em] transition-all hover:text-primary hover:translate-y-[-1px] ${
                isScrolled ? "text-gray-600" : "text-white/80"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            asChild
            className="bg-primary text-black font-bold text-sm rounded-none hover:scale-105 transition-all px-8 py-6 shadow-lg hover:shadow-xl"
          >
            <a href="#calculator">DEPLOY ANALYSIS</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 transition-colors ${isScrolled ? "text-gray-900" : "text-white"}`}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 top-[72px] bg-white/98 backdrop-blur-3xl md:hidden z-40 border-t border-gray-200"
          >
            <div className="container mx-auto px-6 py-12 flex flex-col gap-8 h-full">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-black headline-aggressive text-charcoal-light hover:text-primary transition-colors py-4 border-b border-gray-200"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-auto pb-12">
                <Button
                  asChild
                  className="bg-primary text-black font-black w-full py-10 rounded-none text-xl"
                >
                  <a href="#calculator" onClick={() => setIsMobileMenuOpen(false)}>
                    DEPLOY ANALYSIS NOW
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

