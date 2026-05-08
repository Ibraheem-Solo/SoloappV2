import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Code, Paintbrush, Share2, Camera, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const services = [
  {
    icon: <Code size={36} />,
    title: "Web Design & Development",
    tagline: "Websites designed to convert visitors into paying customers.",
    color: "from-purple-600/20 to-blue-600/10",
    borderColor: "hover:border-purple-500/50",
    iconColor: "text-purple-400",
    benefits: [
      "Custom-designed for your brand and audience",
      "Mobile-first, blazing fast performance",
      "SEO-optimized from the ground up",
      "Conversion-focused layouts and CTAs",
      "WhatsApp and social media integrations",
    ],
    process: ["Discovery & Strategy", "Wireframe & Design", "Development", "Testing & QA", "Launch & Handoff"],
    deliverables: ["Complete website (all pages)", "Mobile responsive design", "Basic SEO setup", "1 month of post-launch support", "Source files & documentation"],
  },
  {
    icon: <Paintbrush size={36} />,
    title: "Branding & Graphic Design",
    tagline: "Identities that make your brand impossible to forget.",
    color: "from-pink-600/20 to-purple-600/10",
    borderColor: "hover:border-pink-500/50",
    iconColor: "text-pink-400",
    benefits: [
      "Logo design that stands out in any context",
      "Complete brand identity system",
      "Brand guidelines document",
      "Print and digital collateral",
      "Consistent visual language across all touchpoints",
    ],
    process: ["Brand Discovery", "Research & Concept", "Design Concepts", "Revisions", "Final Delivery"],
    deliverables: ["Primary & secondary logo (all formats)", "Color palette & typography", "Brand guidelines PDF", "Business cards & letterhead", "Social media templates"],
  },
  {
    icon: <Share2 size={36} />,
    title: "Social Media Management",
    tagline: "Content that builds communities and drives engagement.",
    color: "from-blue-600/20 to-cyan-600/10",
    borderColor: "hover:border-blue-500/50",
    iconColor: "text-blue-400",
    benefits: [
      "Strategic content planning and calendars",
      "Professional post design and copywriting",
      "Community management and response",
      "Monthly analytics and performance reports",
      "Paid ad campaign management",
    ],
    process: ["Strategy Session", "Content Planning", "Design & Copy", "Scheduling & Posting", "Reporting & Optimization"],
    deliverables: ["Monthly content calendar", "Branded post designs", "Captions and hashtags", "Analytics report", "Platform management"],
  },
  {
    icon: <Camera size={36} />,
    title: "Photography & Videography",
    tagline: "Visual storytelling that captivates and converts.",
    color: "from-amber-600/20 to-orange-600/10",
    borderColor: "hover:border-amber-500/50",
    iconColor: "text-amber-400",
    benefits: [
      "Professional product and brand photography",
      "Drone aerial shots across The Gambia",
      "Corporate video production",
      "Social media short-form video content",
      "Event coverage and documentation",
    ],
    process: ["Brief & Location Scout", "Pre-production Planning", "Shoot Day(s)", "Post-production & Editing", "Final Delivery"],
    deliverables: ["High-resolution edited photos", "Edited video files (multiple formats)", "Raw footage archive", "Licensed music where applicable", "Social-ready cut-downs"],
  },
  {
    icon: <TrendingUp size={36} />,
    title: "Digital Marketing",
    tagline: "Campaigns that bring the right customers to your door.",
    color: "from-green-600/20 to-teal-600/10",
    borderColor: "hover:border-green-500/50",
    iconColor: "text-green-400",
    benefits: [
      "Google Ads and Meta Ads campaigns",
      "SEO strategy and implementation",
      "Email marketing and automation",
      "Lead generation funnels",
      "Monthly ROI reporting",
    ],
    process: ["Audit & Strategy", "Campaign Setup", "Creative Production", "Launch & Monitor", "Optimize & Report"],
    deliverables: ["Marketing strategy document", "Ad creatives and copy", "Campaign setup and management", "Monthly performance reports", "Lead tracking dashboard"],
  },
];

export default function Services() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative py-28 px-6 md:px-12 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full glass-panel text-sm text-white/70 mb-6">
              What We Do
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Services Built for{" "}
              <span className="text-gradient">Real Results</span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Every service we offer is designed with one goal in mind — to help your business grow online. No fluff, no filler. Just results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl space-y-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ delay: i * 0.05 }}
              className={`glass-panel rounded-3xl overflow-hidden border border-white/5 ${service.borderColor} transition-all duration-300`}
            >
              <div className={`bg-gradient-to-r ${service.color} p-10`}>
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center ${service.iconColor} shrink-0`}>
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{service.title}</h2>
                    <p className="text-white/70 text-lg">{service.tagline}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">Benefits</h4>
                    <ul className="space-y-3">
                      {service.benefits.map((b, j) => (
                        <li key={j} className="flex items-start gap-3 text-white/75 text-sm">
                          <CheckCircle size={16} className={`${service.iconColor} shrink-0 mt-0.5`} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">Our Process</h4>
                    <ol className="space-y-3">
                      {service.process.map((step, j) => (
                        <li key={j} className="flex items-center gap-3 text-white/75 text-sm">
                          <span className={`w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold ${service.iconColor} shrink-0`}>
                            {j + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">Deliverables</h4>
                    <ul className="space-y-3">
                      {service.deliverables.map((d, j) => (
                        <li key={j} className="flex items-start gap-3 text-white/75 text-sm">
                          <ArrowRight size={16} className={`${service.iconColor} shrink-0 mt-0.5`} />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <Link href="/contact">
                    <Button className="bg-white/15 hover:bg-white/25 text-white border border-white/20 rounded-xl px-8 py-3 transition-all hover:scale-105">
                      Get a Quote for This Service
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20 pointer-events-none" />
        <div className="container mx-auto max-w-3xl relative z-10">
          <motion.div {...fadeUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Not Sure What You Need?</h2>
            <p className="text-xl text-white/60 mb-10">
              Book a free 30-minute strategy call. We'll help you figure out exactly what will move the needle for your business.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-solotech text-white rounded-full px-10 py-6 text-lg hover:scale-105 transition-transform">
                Book a Free Call
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
