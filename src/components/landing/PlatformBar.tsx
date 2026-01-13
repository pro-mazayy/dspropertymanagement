import { motion } from "framer-motion";

const platforms = [
  {
    name: "Airbnb",
    logo: (
      <svg viewBox="0 0 32 32" className="w-8 h-8 fill-current">
        <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.392 3.42-6.72 3.63l-.24.01c-3.48 0-6.358-2.416-6.358-6.478 0-1.541.32-2.981 1.013-4.389l.103-.2a2818.17 2818.17 0 017.204-14.898L11.249 4.27C12.537 1.963 13.992 1 16 1zm0 2.4c-1.232 0-2.046.551-2.97 2.204l-.136.257c-2.039 3.996-5.461 10.9-7.49 15.16l-.071.15c-.482.979-.766 1.841-.832 2.7l-.001.249c0 2.508 1.761 4.078 3.958 4.078 1.487 0 3.012-.885 4.904-2.846l.244-.258.423-.45.42-.45c.422-.445.845-.445 1.267 0l.42.45.424.451.244.258c1.892 1.961 3.417 2.845 4.904 2.845 2.197 0 3.957-1.57 3.957-4.078 0-.909-.286-1.89-.838-3.08l-.066-.139C24.015 15.823 20.6 8.89 18.528 4.888l-.208-.414c-.812-1.543-1.423-2.074-2.32-2.074zm0 2.133c1.789 0 3.24 1.45 3.24 3.24s-1.451 3.24-3.24 3.24-3.24-1.45-3.24-3.24 1.451-3.24 3.24-3.24z" />
      </svg>
    )
  },
  {
    name: "Booking.com",
    logo: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
        <path d="M0 4.63v14.74h6.08c3.15 0 5.42-1.48 5.42-4.14 0-1.87-1.12-3.15-2.9-3.6 1.42-.44 2.37-1.52 2.37-3.04 0-2.45-2.06-3.96-5.07-3.96H0zm2.25 1.95h3.45c1.89 0 2.92.83 2.92 2.12 0 1.28-1.03 2.1-2.92 2.1H2.25V6.58zm0 6.17h3.82c2 0 3.17.9 3.17 2.32 0 1.43-1.17 2.34-3.17 2.34H2.25v-4.66zm10.74-8.12v14.74h2.25V4.63h-2.25zm5.17 0v14.74h5.84v-1.95h-3.59V4.63h-2.25z" />
      </svg>
    )
  },
  {
    name: "VRBO",
    logo: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
        <path d="M12 0L2 6v12l10 6 10-6V6L12 0zM4 7.24l8-4.8 8 4.8v9.52l-8 4.8-8-4.8V7.24z M12 16.5c2.48 0 4.5-2.02 4.5-4.5S14.48 7.5 12 7.5 7.5 9.52 7.5 12 9.52 16.5 12 16.5zm0-7c1.38 0 2.5 1.12 2.5 2.5S13.38 14.5 12 14.5 9.5 13.38 9.5 12 10.62 9.5 12 9.5z" />
      </svg>
    )
  },
  {
    name: "Expedia",
    logo: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
        <path d="M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm0 21.6A9.6 9.6 0 1121.6 12 9.61 9.61 0 0112 21.6z M15.6 7.2L12 10.8 8.4 7.2 7.2 8.4 10.8 12l-3.6 3.6 1.2 1.2 3.6-3.6 3.6 3.6 1.2-1.2-3.6-3.6 3.6-3.6z" />
      </svg>
    )
  },
  {
    name: "Marriott",
    logo: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6s4.298-9.6 9.6-9.6 9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6z M8.4 7.2v9.6h2.4v-4.8l2.4 4.8 2.4-4.8v4.8h2.4V7.2h-3.6L12 13.2 9.6 7.2H8.4z" />
      </svg>
    )
  },
];

export function PlatformBar() {
  return (
    <section className="py-12 bg-secondary/30 border-y border-border/50 overflow-hidden">
      <div className="container mx-auto px-6 mb-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest"
        >
          Dominating Every Major Platform
        </motion.p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        <div className="flex animate-marquee">
          {/* First set */}
          {[...platforms, ...platforms].map((platform, index) => (
            <div
              key={`${platform.name}-${index}`}
              className="flex items-center gap-4 mx-12 whitespace-nowrap"
            >
              <span className="text-4xl">{platform.logo}</span>
              <span className="text-2xl md:text-3xl font-bold text-muted-foreground/60 hover:text-foreground transition-colors">
                {platform.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
