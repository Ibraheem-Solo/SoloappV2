import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import SeoHead from "@/components/seo-head";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

type Category = "All" | "Web" | "Brand" | "NGO";

const BASE = import.meta.env.BASE_URL;

const projects: {
  title: string;
  client: string;
  category: Category;
  desc: string;
  tags: string[];
  image: string;
  imageBg?: string;
  url?: string;
}[] = [
  {
    title: "Al-Ihsan University Website",
    client: "Al-Ihsan University",
    category: "Web",
    desc: "Full university website build for one of The Gambia's leading Islamic academic institutions. Multilingual, responsive, and CMS-powered.",
    tags: ["Web Design", "CMS", "Multilingual"],
    image: `${BASE}portfolio/alihsan-website.jpg`,
    url: "https://alihsanuniversity.org",
  },
  {
    title: "EJC Innovative",
    client: "EJC Innovative",
    category: "Web",
    desc: "Modern website for an electrical & borehole drilling company — launched within days. Clean layout, mobile-responsive, and conversion-focused.",
    tags: ["Web Design", "Business", "Responsive"],
    image: `${BASE}portfolio/ejc-website.jpg`,
    url: "https://ejcdrilling.com",
  },
  {
    title: "MJ's Building Essentials",
    client: "MJ's Building Essentials",
    category: "Brand",
    desc: "End-to-end brand identity system — logo, business cards, uniforms, vehicle wrap, signage, and branded merchandise for a construction materials company.",
    tags: ["Branding", "Logo", "Print", "Merchandise"],
    image: `${BASE}portfolio/mjs-building-brand.jpg`,
  },
  {
    title: "Halal Organic — Jar Mockup",
    client: "Halal Organic Products",
    category: "Brand",
    desc: "Premium product packaging and 3D label mockup for Halal Organic's skincare line. Nature-inspired design with Gambian roots.",
    tags: ["Packaging", "Label Design", "3D Mockup"],
    image: `${BASE}portfolio/halal-jar.jpg`,
  },
  {
    title: "Halal Glow Soap Label",
    client: "Halal Organic Products",
    category: "Brand",
    desc: "Cosmetic label design for Halal Organic's Glow Soap — showcasing ingredients, branding, and Gambia-made identity on a premium bottle mockup.",
    tags: ["Label Design", "Cosmetics", "Print"],
    image: `${BASE}portfolio/halal-bottle.jpg`,
  },
  {
    title: "Regal TV — Brand Identity",
    client: "Regal TV",
    category: "Brand",
    desc: "Corporate brand collateral for a Gambian media brand — letterhead, business cards, and stationery system with bold purple and gold palette.",
    tags: ["Branding", "Stationery", "Media"],
    image: `${BASE}portfolio/regal-tv.jpg`,
  },
  {
    title: "N.J. Building Company",
    client: "N.J. Building",
    category: "Brand",
    desc: "Professional stationery and brand identity for a construction company — dark, bold, and built to impress clients at first glance.",
    tags: ["Branding", "Stationery", "Construction"],
    image: `${BASE}portfolio/nj-building.jpg`,
  },
  {
    title: "The Loss of Parental Love",
    client: "Fatima Samba",
    category: "Brand",
    desc: "Book cover design for a Gambian author's debut novel. Emotive, illustration-driven cover that captures the story's heart.",
    tags: ["Book Cover", "Print", "Illustration"],
    image: `${BASE}portfolio/book-cover.jpg`,
  },
  {
    title: "Alif Qur'anic Boarding School",
    client: "Alif School",
    category: "Brand",
    desc: "Brand identity for a prestigious Qur'anic boarding school — logo, badge mockups, and brand assets reflecting heritage and excellence.",
    tags: ["Logo", "Education", "Branding"],
    image: `${BASE}portfolio/alif-badge.jpg`,
  },
  {
    title: "Greenafrique",
    client: "Greenafrique",
    category: "NGO",
    desc: "Logo design for a West African NGO focused on health and climate action. Merges organic form with the African continent silhouette.",
    tags: ["Logo", "NGO", "Climate"],
    image: `${BASE}portfolio/greenafrique-logo.png`,
    imageBg: "bg-black",
  },
  {
    title: "Inicio Ubuntu Network",
    client: "Inicio Ubuntu",
    category: "NGO",
    desc: "Brand identity for a health and wealth network operating across West Africa — clean, professional, and built for trust.",
    tags: ["Logo", "NGO", "Health"],
    image: `${BASE}portfolio/inicio-ubuntu-logo.jpg`,
    imageBg: "bg-white",
  },
  {
    title: "Gambia Islamic Council",
    client: "Gambia Islamic",
    category: "NGO",
    desc: "Seal and emblem design for a respected Islamic organisation in The Gambia — drawing on traditional motifs and national colours.",
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

export default function Work() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="flex flex-col w-full">
      <SeoHead
        title="Our Work"
        path="/work"
        description="Browse Solotech Digital's portfolio — websites, brand identities, packaging, book covers, and NGO logos for clients across The Gambia and West Africa."
      />

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
                onClick={() => setActive(cat)}
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
                  className="glass-panel rounded-2xl overflow-hidden group hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-900/20"
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
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-4 py-2 bg-white text-black text-xs font-semibold rounded-full hover:bg-purple-100 transition-colors"
                          >
                            View Live <ArrowUpRight size={12} />
                          </a>
                        )}
                        {!project.url && (
                          <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30">
                            View Project
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/50 backdrop-blur-sm text-white border border-white/10">
                        {project.category}
                      </span>
                    </div>

                    {/* External link icon */}
                    {project.url && (
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <ExternalLink size={13} className="text-white" />
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

      {/* CTA */}
      <section className="py-32 px-6 md:px-12 text-center bg-black/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20 pointer-events-none" />
        {/* Decorative blobs */}
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
