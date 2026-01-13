import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ShieldAlert, Zap, Target } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const quickLinks = [
  { label: "STRATEGY", href: "#services" },
  { label: "FIELD PROOF", href: "#case-studies" },
  { label: "REVENUE AUDIT", href: "#calculator" },
];

const legalLinks = [
  { label: "PRIVACY PROTOCOL", href: "#" },
  { label: "TERMS OF ENGAGEMENT", href: "#" },
  { label: "COOKIE POLICY", href: "#" },
];

export function Footer() {
  return (
    <footer className="py-24 section-obsidian border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-8 group">
              <div className="w-10 h-10 bg-primary flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-500">
                <ShieldAlert className="w-6 h-6 text-black -rotate-45 group-hover:-rotate-90 transition-transform duration-500" />
              </div>
              <span className="text-2xl headline-aggressive tracking-tighter">
                <span className="text-primary">DREAM</span>
                <span className="text-white">STATE</span>
              </span>
            </a>
            <p className="text-muted-foreground mb-8 text-lg font-medium leading-relaxed">
              We don't manage properties. We weaponize assets to dominate the short-term rental market and maximize yield.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-none bg-white/5 flex items-center justify-center text-white/50 hover:text-primary hover:bg-primary/10 transition-all border border-white/5"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black headline-aggressive text-primary mb-8 tracking-widest text-sm uppercase">STRATEGIC LINKS</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-all font-bold text-sm tracking-wide flex items-center gap-2 group"
                  >
                    <Target className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black headline-aggressive text-primary mb-8 tracking-widest text-sm uppercase">FIELD HQ</h4>
            <ul className="space-y-6">
              <li>
                <a
                  href="mailto:info@dreamstate.management"
                  className="flex items-center gap-3 text-white/60 hover:text-primary transition-all font-bold text-sm"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  info@dreamstate.management
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-white/60 hover:text-primary transition-all font-bold text-sm"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/40 font-bold text-sm">
                <MapPin className="w-4 h-4 mt-1 shrink-0 text-primary" />
                <span>
                  123 Property Lane, Suite 100<br />
                  Miami, FL 33101
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-black headline-aggressive text-primary mb-8 tracking-widest text-sm uppercase">PROTOCOLS</h4>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-primary transition-all font-bold text-xs tracking-widest"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-black headline-aggressive text-white/30 tracking-[0.2em]">
            © {new Date().getFullYear()} DREAMSTATE PROPERTY MANAGEMENT. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-4 text-xs font-black headline-aggressive text-primary/50 tracking-[0.2em]">
            <Zap className="w-4 h-4 fill-current" />
            ESTABLISHED 2019 • GLOBAL DEPLOYMENT
          </div>
        </div>
      </div>
    </footer>
  );
}

