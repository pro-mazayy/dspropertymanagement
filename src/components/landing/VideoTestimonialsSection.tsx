import { motion } from "framer-motion";
import { Play, Star, Quote } from "lucide-react";
import { useState } from "react";

const videoTestimonials = [
  {
    id: 1,
    name: "Marcus Chen",
    role: "Portfolio Owner, 12 Properties",
    location: "Austin, TX",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quote: "Dreamstate increased my portfolio revenue by 67% in the first year. Their algorithmic pricing is game-changing.",
    rating: 5,
    metrics: { revenue: "+67%", occupancy: "94%" },
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Luxury Vacation Home Owner",
    location: "Miami Beach, FL",
    thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quote: "I went from stressed-out host to completely hands-off. They handle everything while I collect checks.",
    rating: 5,
    metrics: { revenue: "+52%", occupancy: "89%" },
  },
  {
    id: 3,
    name: "David Rodriguez",
    role: "Real Estate Investor",
    location: "Denver, CO",
    thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quote: "The ROI speaks for itself. Dreamstate treats my properties like high-performance assets.",
    rating: 5,
    metrics: { revenue: "+78%", occupancy: "96%" },
  },
];

function VideoCard({
  testimonial,
  onPlay,
}: {
  testimonial: (typeof videoTestimonials)[0];
  onPlay: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative bg-white border border-gray-200 overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
    >
      {/* Video Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={testimonial.thumbnail}
          alt={testimonial.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
        />
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <button
            onClick={onPlay}
            className="w-16 h-16 md:w-20 md:h-20 bg-primary flex items-center justify-center group-hover:scale-110 transition-transform neon-glow"
          >
            <Play className="w-8 h-8 text-black fill-current ml-1" />
          </button>
        </div>
        {/* Metrics Badge */}
        <div className="absolute top-4 right-4 flex gap-2">
          <span className="px-3 py-1 bg-black/70 backdrop-blur-sm text-primary text-xs font-bold">
            {testimonial.metrics.revenue} REV
          </span>
          <span className="px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-xs font-bold">
            {testimonial.metrics.occupancy} OCC
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Quote */}
        <div className="relative mb-4">
          <Quote className="absolute -top-2 -left-1 w-6 h-6 text-primary/30" />
          <p className="text-gray-700 pl-6 italic leading-relaxed">
            "{testimonial.quote}"
          </p>
        </div>

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 text-primary fill-current"
            />
          ))}
        </div>

        {/* Author */}
        <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
          <div className="w-12 h-12 overflow-hidden bg-gray-100">
            <img
              src={testimonial.thumbnail}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-display font-bold text-gray-900">
              {testimonial.name}
            </h4>
            <p className="text-sm text-gray-600">
              {testimonial.role}
            </p>
            <p className="text-xs text-primary">{testimonial.location}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function VideoModal({
  videoUrl,
  onClose,
}: {
  videoUrl: string;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-4xl aspect-video bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={`${videoUrl}?autoplay=1`}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
}

export function VideoTestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <section
        id="video-testimonials"
        className="py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 mb-6 text-xs font-bold tracking-[0.2em] text-primary uppercase border border-primary/30 bg-primary/5">
              FIELD PROOF
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              HEAR FROM{" "}
              <span className="text-primary">OPERATORS</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Real property owners. Real results. Real revenue transformations.
            </p>
          </motion.div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoTestimonials.map((testimonial) => (
              <VideoCard
                key={testimonial.id}
                testimonial={testimonial}
                onPlay={() => setActiveVideo(testimonial.videoUrl)}
              />
            ))}
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-12"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gray-900">
                500+
              </div>
              <div className="text-sm text-gray-600">
                Properties Managed
              </div>
            </div>
            <div className="w-px h-12 bg-gray-300 hidden md:block" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gray-900">
                $50M+
              </div>
              <div className="text-sm text-gray-600">
                Revenue Generated
              </div>
            </div>
            <div className="w-px h-12 bg-gray-300 hidden md:block" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary">
                4.9★
              </div>
              <div className="text-sm text-gray-600">
                Average Rating
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <VideoModal
          videoUrl={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </>
  );
}
