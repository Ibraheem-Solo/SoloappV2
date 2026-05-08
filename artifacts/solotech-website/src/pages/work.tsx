import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

type Category = "All" | "Web" | "Brand" | "Social" | "NGO";

const projects: {
  title: string;
  category: Category;
  desc: string;
  tags: string[];
  gradient: string;
  letter: string;
}[] = [
  {
    title: "Gambia Fresh Market",
    category: "Web",
    desc: "A modern e-commerce platform for a local fresh produce business. Increased online orders by 340% in 3 months.",
    tags: ["E-commerce", "Web Design", "Mobile Responsive"],
    gradient: "from-purple-600 to-blue-600",
    letter: "G",
  },
  {
    title: "West Africa NGO Alliance",
    category: "NGO",
    desc: "Full website redesign for an international NGO serving communities across 6 West African nations.",
    tags: ["NGO", "Web Development", "CMS"],
    gradient: "from-blue-600 to-cyan-600",
    letter: "W",
  },
  {
    title: "Lamin Crafts",
    category: "Brand",
    desc: "Complete brand identity for a Gambian artisan collective — logo, packaging, and brand system.",
    tags: ["Branding", "Logo Design", "Packaging"],
    gradient: "from-pink-600 to-rose-600",
    letter: "L",
  },
  {
    title: "Senegambia Beach Hotel",
    category: "Social",
    desc: "12-month social media strategy and content production that grew their Instagram from 2K to 18K followers.",
    tags: ["Social Media", "Content", "Photography"],
    gradient: "from-amber-600 to-orange-600",
    letter: "S",
  },
  {
    title: "Gambia Tech Hub",
    category: "Web",
    desc: "Tech incubator website with event management, member portal, and startup showcase features.",
    tags: ["Web App", "UI/UX", "Development"],
    gradient: "from-green-600 to-teal-600",
    letter: "G",
  },
  {
    title: "Kairaba Law Firm",
    category: "Brand",
    desc: "Premium brand identity and website for one of Banjul's leading legal practices.",
    tags: ["Law Firm", "Branding", "Web Design"],
    gradient: "from-slate-600 to-zinc-600",
    letter: "K",
  },
  {
    title: "ActionAid Gambia",
    category: "NGO",
    desc: "Campaign microsite and social media content for ActionAid's youth empowerment initiative.",
    tags: ["NGO", "Campaign", "Social Media"],
    gradient: "from-red-600 to-pink-600",
    letter: "A",
  },
  {
    title: "Atlantik Fashion",
    category: "Brand",
    desc: "African fashion brand identity with lookbook, social templates, and e-commerce integration.",
    tags: ["Fashion", "Branding", "E-commerce"],
    gradient: "from-violet-600 to-purple-600",
    letter: "A",
  },
  {
    title: "Brikama Youth FC",
    category: "Social",
    desc: "Content strategy and design system for a local football club's digital presence across platforms.",
    tags: ["Sports", "Social Media", "Design"],
    gradient: "from-lime-600 to-green-600",
    letter: "B",
  },
];

const categories: Category[] = ["All", "Web", "Brand", "Social", "NGO"];

export default function Work() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="flex flex-col w-full">
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
              Every project is a story of transformation. Here's a selection of the digital experiences we've built for brands across The Gambia and West Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 md:px-12 pb-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                data-testid={`filter-${cat.toLowerCase()}`}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? "bg-gradient-solotech text-white scale-105"
                    : "glass-panel text-white/70 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-8 px-6 md:px-12 pb-24">
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
                  transition={{ delay: i * 0.05 }}
                  className="glass-panel rounded-2xl overflow-hidden group hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                  data-testid={`project-card-${i}`}
                >
                  {/* Project Visual */}
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-7xl font-black text-white/20 select-none">{project.letter}</div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <ExternalLink size={14} className="text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-4 leading-relaxed">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white/50 text-xs"
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
        <div className="container mx-auto max-w-3xl relative z-10">
          <motion.div {...fadeUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Project Could Be Next</h2>
            <p className="text-xl text-white/60 mb-10">
              Join 40+ businesses that have trusted Solotech Digital to grow their presence online.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-solotech text-white rounded-full px-10 py-6 text-lg hover:scale-105 transition-transform">
                  Start a Project
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg border-white/20 hover:bg-white/10">
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
