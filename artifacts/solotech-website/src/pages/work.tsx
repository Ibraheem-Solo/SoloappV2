import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowUpRight, X, ChevronLeft, ChevronRight, ArrowRight, Star, Quote } from "lucide-react";
import SeoHead from "@/components/seo-head";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

type Category = "All" | "Web" | "Brand" | "NGO";

const BASE = import.meta.env.BASE_URL;

interface Project {
  title: string;
  client: string;
  category: Category;
  desc: string;
  longDesc?: string;
  tags: string[];
  image: string;
  imageBg?: string;
  url?: string;
}

const projects: Project[] = [
  {
    title: "Al-Ihsan University Website",
    client: "Al-Ihsan University",
    category: "Web",
    desc: "Full university website build for one of The Gambia's leading Islamic academic institutions. Multilingual, responsive, and CMS-powered.",
    longDesc: "Solotech Digital designed and developed a full-featured bilingual university website for Al-Ihsan University. The site features a responsive layout, CMS integration for staff to update content, student information pages, and an enrolment section. Launched at alihsanuniversity.org.",
    tags: ["Web Design", "CMS", "Multilingual"],
    image: `${BASE}portfolio/alihsan-website.jpg`,
    url: "https://alihsanuniversity.org",
  },
  {
    title: "EJC Innovative",
    client: "EJC Innovative",
    category: "Web",
    desc: "Modern website for an electrical & borehole drilling company — launched within days. Clean layout, mobile-responsive, and conversion-focused.",
    longDesc: "EJC Innovative needed a professional web presence fast. We delivered a sleek, mobile-first website showcasing their electrical and borehole drilling services, project gallery, and contact forms — all live within 18 hours. Visit ejcdrilling.com.",
    tags: ["Web Design", "Business", "Responsive"],
    image: `${BASE}portfolio/ejc-website.jpg`,
    url: "https://ejcdrilling.com",
  },
  {
    title: "MJ's Building Essentials",
    client: "MJ's Building Essentials",
    category: "Brand",
    desc: "End-to-end brand identity system — logo, business cards, uniforms, vehicle wrap, signage, and branded merchandise for a construction materials company.",
    longDesc: "A comprehensive brand system built from the ground up. We created the logo, designed branded uniforms, business cards, a vehicle livery, a site signboard, branded mugs, hard hats, and letterheads — everything a growing construction business needs to look the part.",
    tags: ["Branding", "Logo", "Print", "Merchandise"],
    image: `${BASE}portfolio/mjs-building-brand.jpg`,
  },
  {
    title: "Halal Organic — Jar Mockup",
    client: "Halal Organic Products",
    category: "Brand",
    desc: "Premium product packaging and 3D label mockup for Halal Organic's skincare line. Nature-inspired design with Gambian roots.",
    longDesc: "Halal Organic Products needed packaging that matched their premium, natural brand. We designed the label system and produced photorealistic 3D mockups that they use across their marketing materials and social media.",
    tags: ["Packaging", "Label Design", "3D Mockup"],
    image: `${BASE}portfolio/halal-jar.jpg`,
  },
  {
    title: "Halal Glow Soap Label",
    client: "Halal Organic Products",
    category: "Brand",
    desc: "Cosmetic label design for Halal Organic's Glow Soap — showcasing ingredients, branding, and Gambia-made identity on a premium bottle mockup.",
    longDesc: "Part of the Halal Organic packaging suite, the Glow Soap label was designed to clearly communicate ingredients, product benefits, and the brand's 'Made in The Gambia' identity — all within a clean, trustworthy cosmetic aesthetic.",
    tags: ["Label Design", "Cosmetics", "Print"],
    image: `${BASE}portfolio/halal-bottle.jpg`,
  },
  {
    title: "Regal TV — Brand Identity",
    client: "Regal TV",
    category: "Brand",
    desc: "Corporate brand collateral for a Gambian media brand — letterhead, business cards, and stationery system with bold purple and gold palette.",
    longDesc: "Regal TV is a Gambian media company that needed professional brand stationery to match their on-air presence. We designed a cohesive set of materials — letterhead, business cards, and branded envelopes — using a bold purple-black-gold colour system.",
    tags: ["Branding", "Stationery", "Media"],
    image: `${BASE}portfolio/regal-tv.jpg`,
  },
  {
    title: "N.J. Building Company",
    client: "N.J. Building",
    category: "Brand",
    desc: "Professional stationery and brand identity for a construction company — dark, bold, and built to impress clients at first glance.",
    longDesc: "N.J. Building required a premium, corporate identity to win larger contracts. We delivered a bold red-and-dark brand stationery set including business cards, letterheads, and company profile materials that communicate strength and professionalism.",
    tags: ["Branding", "Stationery", "Construction"],
    image: `${BASE}portfolio/nj-building.jpg`,
  },
  {
    title: "The Loss of Parental Love",
    client: "Fatima Samba",
    category: "Brand",
    desc: "Book cover design for a Gambian author's debut novel. Emotive, illustration-driven cover that captures the story's heart.",
    longDesc: "Fatima Samba's debut novel required a cover that would stop readers in their tracks. We created an emotive, AI-illustration-driven cover design that captures the warmth and sorrow at the core of the story — published and available in The Gambia.",
    tags: ["Book Cover", "Print", "Illustration"],
    image: `${BASE}portfolio/book-cover.jpg`,
  },
  {
    title: "Alif Qur'anic Boarding School",
    client: "Alif School",
    category: "Brand",
    desc: "Brand identity for a prestigious Qur'anic boarding school — logo, badge mockups, and brand assets reflecting heritage and excellence.",
    longDesc: "Alif Qur'anic Boarding School needed a brand identity that honoured their Islamic heritage while projecting modern excellence. We designed the crest-style logo, produced branded badge mockups, and built out a full visual identity system.",
    tags: ["Logo", "Education", "Branding"],
    image: `${BASE}portfolio/alif-badge.jpg`,
  },
  {
    title: "Greenafrique",
    client: "Greenafrique",
    category: "NGO",
    desc: "Logo design for a West African NGO focused on health and climate action. Merges organic form with the African continent silhouette.",
    longDesc: "Greenafrique works at the intersection of health and environmental action across West Africa. Their logo needed to convey nature, Africa, and vitality simultaneously — we achieved that with a pomegranate-meets-continent mark that's instantly recognisable.",
    tags: ["Logo", "NGO", "Climate"],
    image: `${BASE}portfolio/greenafrique-logo.png`,
    imageBg: "bg-black",
  },
  {
    title: "Inicio Ubuntu Network",
    client: "Inicio Ubuntu",
    category: "NGO",
    desc: "Brand identity for a health and wealth network operating across West Africa — clean, professional, and built for trust.",
    longDesc: "Inicio Ubuntu Health and Wealth Network required a logo that felt institutional and trustworthy without being cold. We designed a modern monogram mark using their initials, rendered in a two-tone blue and green palette that signals health and growth.",
    tags: ["Logo", "NGO", "Health"],
    image: `${BASE}portfolio/inicio-ubuntu-logo.jpg`,
    imageBg: "bg-white",
  },
  {
    title: "Gambia Islamic Council",
    client: "Gambia Islamic",
    category: "NGO",
    desc: "Seal and emblem design for a respected Islamic organisation in The Gambia — drawing on traditional motifs and national colours.",
    longDesc: "The Gambia Islamic Council needed an official seal that reflected both their Islamic identity and national pride. The circular emblem incorporates the Gambian flag colours, an Islamic crescent, and Arabic calligraphy — a mark of authority and tradition.",
    tags: ["Logo", "Seal", "Heritage"],
    image: `${BASE}portfolio/gambia-islamic-logo.jpg`,
    imageBg: "bg-white",
  },
];

const categories: Category[] = ["All", "Web", "Brand", "NGO"];

const categoryCounts: Record<string, number> = {
  All: projects.length,
  Web: projects.filter((p) => p.category === "Web").length,
  Brand: projects.filter((p) => p.category === "Brand").length,
  NGO: projects.filter((p) => p.category === "NGO").length,
};

function Lightbox({
  project,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  index,
  total,
}: {
  project: Project;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  index: number;
  total: number;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  return (
    <motion.div
      key="lightbox-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />

      {/* Modal */}
      <motion.div
        key={project.title}
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl max-h-[90vh] flex flex-col md:flex-row rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image panel */}
        <div className={`relative md:w-3/5 flex-shrink-0 ${project.imageBg ?? "bg-[#0d0d1a]"} flex items-center justify-center min-h-[280px] md:min-h-0`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain max-h-[50vh] md:max-h-[90vh]"
          />

          {/* Nav arrows on image */}
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            disabled={!hasPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-black/80 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            disabled={!hasNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-black/80 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white/60 text-xs border border-white/10">
            {index + 1} / {total}
          </div>
        </div>

        {/* Info panel */}
        <div className="flex-1 bg-[#0e0e1c] flex flex-col overflow-y-auto">
          {/* Close */}
          <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-white/8 flex-shrink-0">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
              {project.category}
            </span>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              <X size={16} />
            </button>
          </div>

          <div className="px-6 py-5 flex flex-col gap-4 flex-1">
            <div>
              <p className="text-white/40 text-xs font-medium uppercase tracking-widest mb-1">{project.client}</p>
              <h2 className="text-2xl font-bold text-white leading-snug">{project.title}</h2>
            </div>

            <p className="text-white/65 text-sm leading-relaxed">
              {project.longDesc ?? project.desc}
            </p>

            <div>
              <p className="text-white/35 text-xs font-medium uppercase tracking-widest mb-2">Services</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/55 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-4 flex flex-col gap-3">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Visit Live Site <ArrowUpRight size={15} />
                </a>
              )}
              <Link href="/contact">
                <button
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-white/15 text-white/70 text-sm font-medium hover:bg-white/8 hover:text-white transition-all"
                >
                  Start a Similar Project <ArrowRight size={15} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Keyboard hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/25 text-xs hidden md:block">
        ← → to navigate · Esc to close
      </div>
    </motion.div>
  );
}

export default function Work() {
  const [active, setActive] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i !== null && i < filtered.length - 1 ? i + 1 : i));
  }, [filtered.length]);

  const lightboxProject = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <div className="flex flex-col w-full">
      <SeoHead
        title="Our Work"
        path="/work"
        description="Browse Solotech Digital's portfolio — websites, brand identities, packaging, book covers, and NGO logos for clients across The Gambia and West Africa."
      />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxProject && lightboxIndex !== null && (
          <Lightbox
            project={lightboxProject}
            onClose={closeLightbox}
            onPrev={goPrev}
            onNext={goNext}
            hasPrev={lightboxIndex > 0}
            hasNext={lightboxIndex < filtered.length - 1}
            index={lightboxIndex}
            total={filtered.length}
          />
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="relative py-28 px-6 md:px-12 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full glass-panel text-sm text-white/70 mb-6">
              Our Portfolio
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Work We're{" "}
              <span className="text-gradient">Proud Of</span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Real work for real businesses. Here's a selection of the digital products, brands, and websites we've delivered for clients across The Gambia and West Africa.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {[
              { label: "Projects Delivered", value: "40+" },
              { label: "Happy Clients", value: "35+" },
              { label: "Countries", value: "3" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 md:px-12 pb-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActive(cat); setLightboxIndex(null); }}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  active === cat
                    ? "bg-gradient-solotech text-white scale-105"
                    : "glass-panel text-white/70 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
                <span className={`text-xs px-2 py-0.5 rounded-full ${active === cat ? "bg-white/20" : "bg-white/10"}`}>
                  {categoryCounts[cat]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-4 px-6 md:px-12 pb-28">
        <div className="container mx-auto max-w-6xl">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                  className="glass-panel rounded-2xl overflow-hidden group hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-900/20 cursor-pointer"
                  onClick={() => openLightbox(i)}
                >
                  {/* Image */}
                  <div className={`relative h-52 overflow-hidden ${project.imageBg ?? "bg-[#0d0d1a]"}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                        <span className="flex items-center gap-1.5 px-5 py-2 bg-white text-black text-xs font-semibold rounded-full">
                          View Project <ArrowUpRight size={12} />
                        </span>
                      </div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/50 backdrop-blur-sm text-white border border-white/10">
                        {project.category}
                      </span>
                    </div>

                    {/* External link indicator for web projects */}
                    {project.url && (
                      <div className="absolute top-3 right-3">
                        <div className="w-7 h-7 rounded-full bg-green-500/20 backdrop-blur-sm flex items-center justify-center border border-green-500/30">
                          <ExternalLink size={13} className="text-green-400" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-white/40 text-xs font-medium uppercase tracking-widest mb-1">{project.client}</p>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-white/55 text-sm mb-4 leading-relaxed line-clamp-2">{project.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white/45 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">

          {/* Header */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass-panel text-sm text-white/70 mb-5">
              Client Reviews
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Clients <span className="text-gradient">Say About Us</span>
            </h2>
            {/* Aggregate rating */}
            <div className="flex items-center justify-center gap-3 mt-5">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white font-bold text-lg">5.0</span>
              <span className="text-white/40 text-sm">· 40+ projects delivered</span>
            </div>
          </motion.div>

          {/* Featured testimonial */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-panel rounded-3xl overflow-hidden mb-6 group hover:border-purple-500/25 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row">
              {/* Project thumbnail */}
              <div className="md:w-80 flex-shrink-0 h-56 md:h-auto relative overflow-hidden bg-[#0d0d1a]">
                <img
                  src={`${BASE}portfolio/alihsan-website.jpg`}
                  alt="Al-Ihsan University"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0e0e1c]/60 md:to-[#0e0e1c]/80" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-sm text-white border border-white/10">
                    Web Project
                  </span>
                </div>
              </div>

              {/* Quote */}
              <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <Quote size={36} className="text-purple-400/40 mb-5" />
                  <p className="text-white/85 text-lg md:text-xl leading-relaxed italic">
                    "Solotech Digital brought our university into the digital age. They built us a bilingual website that our students, staff, and international partners are proud to share. The turnaround was incredibly fast and the quality was world-class."
                  </p>
                </div>
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/8 flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                      SM
                    </div>
                    <div>
                      <div className="text-white font-semibold">Sheikh Muhammed</div>
                      <div className="text-white/45 text-sm">IT Director, Al-Ihsan University</div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3-card grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                name: "Ebrima Camara",
                role: "CEO, EJC Innovative",
                avatar: "EC",
                avatarGrad: "from-blue-600 to-cyan-500",
                project: "EJC Website",
                img: `${BASE}portfolio/ejc-website.jpg`,
                review: "I needed a professional website fast and Solotech delivered within 18 hours. The site is clean, loads fast, and has already brought us new clients who found us online.",
              },
              {
                name: "Modou J.",
                role: "Owner, MJ's Building Essentials",
                avatar: "MJ",
                avatarGrad: "from-red-600 to-orange-500",
                project: "Full Brand System",
                img: `${BASE}portfolio/mjs-building-brand.jpg`,
                review: "From our logo to our vehicle wrap — Solotech designed everything. Customers now recognise our brand everywhere they see it. The whole team was impressed from day one.",
              },
              {
                name: "Aminata Jallow",
                role: "Founder, Halal Organic Products",
                avatar: "AJ",
                avatarGrad: "from-teal-600 to-green-500",
                project: "Brand & Packaging",
                img: `${BASE}portfolio/halal-jar.jpg`,
                review: "Our product packaging went from homemade to premium overnight. The mockups Solotech created look so professional that customers think we're an international brand.",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="glass-panel rounded-2xl p-6 flex flex-col gap-5 hover:border-purple-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Project thumbnail strip */}
                <div className="h-28 rounded-xl overflow-hidden bg-[#0d0d1a] relative">
                  <img
                    src={t.img}
                    alt={t.project}
                    className="w-full h-full object-cover opacity-70 hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute bottom-2 left-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-black/60 backdrop-blur-sm text-white/80">
                      {t.project}
                    </span>
                  </div>
                </div>

                <Quote size={24} className="text-purple-400/40 -mb-1" />
                <p className="text-white/70 text-sm leading-relaxed flex-1">"{t.review}"</p>

                <div className="flex items-center justify-between pt-4 border-t border-white/8">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.avatarGrad} flex items-center justify-center text-white font-bold text-xs shrink-0`}>
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      <div className="text-white/40 text-xs">{t.role}</div>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={11} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-12 text-center bg-black/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20 pointer-events-none" />
        <div className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-1/4 top-1/2 translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto max-w-3xl relative z-10">
          <motion.div {...fadeUp}>
            <span className="inline-block px-4 py-1.5 rounded-full glass-panel text-sm text-white/70 mb-6">
              Ready to work together?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Project Could Be Next</h2>
            <p className="text-xl text-white/60 mb-10">
              Join 40+ businesses that have trusted Solotech Digital to grow their presence online. We deliver fast — most projects in under 18 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-solotech text-white rounded-full px-10 py-3 text-base hover:scale-105 transition-transform">
                  Start a Project
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="rounded-full px-10 py-3 text-base border-white/20 hover:bg-white/10">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
