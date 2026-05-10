import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code, Paintbrush, Share2, Camera, TrendingUp, CheckCircle, Star, Zap, Award, Heart, Globe, Quote, ChevronDown, X, Shield, Headphones, Globe2, Palette, MessageSquare, BarChart3, RefreshCw, Lock } from "lucide-react";
import SeoHead from "@/components/seo-head";

const PRO_MONTHLY_PRICE = 2000;
const PRO_ANNUAL_PRICE = 18000;
const PRO_ANNUAL_MONTHLY_EQUIV = Math.round(PRO_ANNUAL_PRICE / 12);
const ANNUAL_SAVINGS = PRO_MONTHLY_PRICE * 12 - PRO_ANNUAL_PRICE;

const proDetails = [
  { icon: <Globe2 size={18} />, label: "Custom Domain", desc: "We register and connect a professional .com or .gm domain for your brand." },
  { icon: <Palette size={18} />, label: "Multi-Page Premium Website", desc: "Home, About, Services, Portfolio, Contact — up to 8 custom pages." },
  { icon: <MessageSquare size={18} />, label: "Copywriting & Branding", desc: "Professional copy for every page plus a basic brand colour & font system." },
  { icon: <MessageSquare size={18} />, label: "WhatsApp Integration", desc: "Floating WhatsApp button + click-to-chat linked to your business number." },
  { icon: <RefreshCw size={18} />, label: "Ongoing Support & Edits", desc: "Up to 4 content or design change requests per month included." },
  { icon: <Shield size={18} />, label: "SSL Security Certificate", desc: "Your site ships with HTTPS encryption — trusted by browsers and Google." },
  { icon: <BarChart3 size={18} />, label: "Basic SEO Setup", desc: "Meta titles, descriptions, sitemap, and Google Analytics integration." },
  { icon: <Headphones size={18} />, label: "Priority Support", desc: "Dedicated WhatsApp support line with next-day response guarantee." },
  { icon: <Lock size={18} />, label: "Hosting Included", desc: "Fast, reliable managed hosting on our servers for the full year." },
];

export default function Home() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [showProDetails, setShowProDetails] = useState(false);

  const proPrice = isAnnual ? PRO_ANNUAL_PRICE : PRO_MONTHLY_PRICE;
  const proLabel = isAnnual ? "/year" : "/month";

  return (
    <div className="flex flex-col w-full">
      <SeoHead
        path="/"
        title={undefined}
        description="Solotech Digital designs websites, brands, and digital content that help businesses in The Gambia and West Africa stand out, attract customers, and grow online."
      />
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center pt-10 pb-20 px-6 md:px-12 overflow-hidden">
        {/* Space background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        {/* Purple glow behind image */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] h-[80%] bg-purple-600/25 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left — Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Online indicator */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel text-sm font-medium mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-green-400 font-semibold">We're online now</span>
                <span className="text-white/40">— ready to start your project</span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm font-medium mb-8 ml-2">
                <span className="text-yellow-400">⚡</span>
                <span className="text-white/90">Launch Your Website in 24 Hours</span>
              </div>

              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-6 leading-[1.08]">
                Web, Media &amp; Branding<br />
                That Helps <span className="text-gradient">Businesses Grow</span>
              </h1>

              <p className="text-lg md:text-xl text-white/65 max-w-xl mb-10 leading-relaxed">
                Solotech Digital crafts websites, brands, and content that help businesses across The Gambia and West Africa stand out, attract customers, and grow online.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-solotech text-white rounded-full px-10 py-3 text-base hover:scale-105 transition-transform">
                    Start a Project
                  </Button>
                </Link>
                <Link href="/work">
                  <Button size="lg" variant="outline" className="rounded-full px-10 py-3 text-base border-white/20 hover:bg-white/10">
                    View Our Work
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">120+</div>
                  <div className="text-white/50 text-sm">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">40+</div>
                  <div className="text-white/50 text-sm">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1 flex items-center gap-1"><Star className="text-yellow-400 fill-yellow-400 w-6 h-6" /> 5.0</div>
                  <div className="text-white/50 text-sm">Client Rating</div>
                </div>
              </div>
            </motion.div>

            {/* Right — Person image */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="relative hidden lg:flex items-end justify-center"
            >
              {/* Subtle ring */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-purple-600/15 border border-purple-500/20 blur-sm" />
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute top-8 left-4 glass-panel px-4 py-3 rounded-2xl z-20 border-purple-500/30"
              >
                <div className="text-xs text-white/50 mb-0.5">Latest project</div>
                <div className="text-sm font-semibold text-white">Delivered in 18hrs ⚡</div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-16 right-0 glass-panel px-4 py-3 rounded-2xl z-20 border-green-500/30"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Star size={14} className="text-green-400 fill-green-400" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50">Client review</div>
                    <div className="text-sm font-semibold text-white">5 Stars ✨</div>
                  </div>
                </div>
              </motion.div>
              <img
                src={`${import.meta.env.BASE_URL}hero-person.png`}
                alt="Solotech Digital team member"
                className="relative z-10 h-[600px] xl:h-[680px] w-auto object-contain drop-shadow-2xl"
                style={{ filter: "drop-shadow(0 0 60px rgba(123,47,190,0.35))" }}
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Client Logos Marquee */}
      <section className="py-14 border-y border-white/[0.06] overflow-hidden relative" style={{ background: "rgba(0,0,0,0.5)" }}>
        <div className="text-center mb-10">
          <p className="text-white/20 text-[10px] font-semibold uppercase tracking-[0.35em]">
            Trusted by organisations across The Gambia &amp; West Africa
          </p>
        </div>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #06060f 10%, transparent)" }} />
        <div className="absolute inset-y-0 right-0 w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #06060f 10%, transparent)" }} />

        <div
          className="flex gap-16 items-center animate-marquee"
          style={{ width: "max-content" }}
        >
          {[
            { src: `${import.meta.env.BASE_URL}client-alif.jpg`,            name: "Alif Qur'anic Boarding School"         },
            { src: `${import.meta.env.BASE_URL}client-gambia-islamic.jpg`,  name: "Gambia Islamic Institute"              },
            { src: `${import.meta.env.BASE_URL}client-inicio-ubuntu.jpg`,   name: "Inicio Ubuntu Health & Wealth Network" },
            { src: `${import.meta.env.BASE_URL}client-alihsan.jpg`,         name: "Al-Ihsan University"                   },
            { src: `${import.meta.env.BASE_URL}client-halal.png`,           name: "Halal Organic Products"                },
            { src: `${import.meta.env.BASE_URL}client-greenafrique.png`,    name: "Greenafrique"                          },
            { src: `${import.meta.env.BASE_URL}client-alif.jpg`,            name: "Alif Qur'anic Boarding School"         },
            { src: `${import.meta.env.BASE_URL}client-gambia-islamic.jpg`,  name: "Gambia Islamic Institute"              },
            { src: `${import.meta.env.BASE_URL}client-inicio-ubuntu.jpg`,   name: "Inicio Ubuntu Health & Wealth Network" },
            { src: `${import.meta.env.BASE_URL}client-alihsan.jpg`,         name: "Al-Ihsan University"                   },
            { src: `${import.meta.env.BASE_URL}client-halal.png`,           name: "Halal Organic Products"                },
            { src: `${import.meta.env.BASE_URL}client-greenafrique.png`,    name: "Greenafrique"                          },
          ].map((logo, i) => (
            <div
              key={i}
              title={logo.name}
              className="shrink-0 flex items-center justify-center transition-all duration-300 hover:opacity-100"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-14 w-auto max-w-[140px] object-contain"
                style={{
                  filter: "grayscale(1) brightness(0.55) contrast(1.1)",
                  transition: "filter 0.3s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.filter = "grayscale(1) brightness(0.75) contrast(1.1)")}
                onMouseLeave={e => (e.currentTarget.style.filter = "grayscale(1) brightness(0.55) contrast(1.1)")}
              />
            </div>
          ))}
        </div>
      </section>

      {/* LaunchPad Section */}
      <section className="py-24 px-6 md:px-12 bg-black/40 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Solotech LaunchPad</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Need a professional website fast? We build clean, modern business websites in just 24 hours.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium transition-colors ${!isAnnual ? "text-white" : "text-white/40"}`}>Monthly</span>
            <button
              data-testid="billing-toggle"
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none ${isAnnual ? "bg-gradient-to-r from-purple-600 to-blue-600" : "bg-white/15"}`}
            >
              <motion.div
                className="absolute top-1 w-6 h-6 rounded-full bg-white shadow-md"
                animate={{ left: isAnnual ? "calc(100% - 28px)" : "4px" }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium transition-colors ${isAnnual ? "text-white" : "text-white/40"}`}>Annual</span>
              {isAnnual && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-xs font-bold px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30"
                >
                  Save D{ANNUAL_SAVINGS.toLocaleString()}
                </motion.span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-3xl flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-1">Starter Package</h3>
              <p className="text-white/50 text-sm mb-6">One-time fee — no subscription</p>
              <div className="text-4xl font-bold text-gradient mb-1">D5,000</div>
              <p className="text-white/40 text-sm mb-8">One-time payment</p>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "1-page professional website",
                  "Mobile responsive design",
                  "Delivered in 24 hours",
                  "Perfect for startups & small businesses",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <CheckCircle className="text-purple-500 shrink-0 w-5 h-5 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full py-3 px-8 transition-all hover:scale-[1.02]">
                  Get Started
                </Button>
              </Link>
            </motion.div>

            {/* Pro Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-3xl border-purple-500/50 relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 bg-gradient-solotech text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">POPULAR</div>

              <h3 className="text-2xl font-bold mb-1">Pro Package</h3>
              <p className="text-white/50 text-sm mb-6">Full website + ongoing support</p>

              {/* Animated Price */}
              <div className="mb-1 flex items-end gap-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={proPrice}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="text-4xl font-bold text-gradient"
                  >
                    D{proPrice.toLocaleString()}
                  </motion.div>
                </AnimatePresence>
                <span className="text-white/50 text-lg font-normal mb-1">{proLabel}</span>
              </div>

              {/* Savings / Monthly equiv */}
              <div className="h-6 mb-8">
                <AnimatePresence mode="wait">
                  {isAnnual ? (
                    <motion.div
                      key="annual-info"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-3"
                    >
                      <span className="text-white/40 text-sm line-through">D{(PRO_MONTHLY_PRICE * 12).toLocaleString()}/year</span>
                      <span className="text-green-400 text-sm font-semibold">You save D{ANNUAL_SAVINGS.toLocaleString()}</span>
                    </motion.div>
                  ) : (
                    <motion.p
                      key="monthly-info"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-white/40 text-sm"
                    >
                      D{(PRO_MONTHLY_PRICE * 12).toLocaleString()}/year — switch to annual to save D{ANNUAL_SAVINGS.toLocaleString()}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <ul className="space-y-3 mb-6 flex-1">
                {[
                  "Custom domain included",
                  "Multi-page premium website",
                  "Copywriting & branding assistance",
                  "WhatsApp integration",
                  "Ongoing support & edits",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <CheckCircle className="text-blue-500 shrink-0 w-5 h-5 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* What's included toggle */}
              <button
                data-testid="pro-details-toggle"
                onClick={() => setShowProDetails(true)}
                className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors mb-4 font-medium"
              >
                <ChevronDown size={16} />
                See everything that's included
              </button>

              <Link href="/contact">
                <Button className="w-full bg-gradient-solotech text-white rounded-full py-3 px-8 hover:opacity-90 transition-all hover:scale-[1.02]">
                  Get Pro — D{proPrice.toLocaleString()}{proLabel}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pro Details Modal */}
      <AnimatePresence>
        {showProDetails && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowProDetails(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />
            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
              className="fixed bottom-0 left-0 right-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-xl w-full z-50 glass-panel rounded-t-3xl md:rounded-3xl border border-purple-500/30 max-h-[85vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-[#0a0a14]/90 backdrop-blur-xl p-6 border-b border-white/10 flex items-start justify-between rounded-t-3xl">
                <div>
                  <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1">Pro Package</div>
                  <h3 className="text-2xl font-bold text-white">Everything That's Included</h3>
                  <p className="text-white/50 text-sm mt-1">
                    {isAnnual
                      ? `D${PRO_ANNUAL_PRICE.toLocaleString()}/year — saving you D${ANNUAL_SAVINGS.toLocaleString()} vs monthly`
                      : `D${PRO_MONTHLY_PRICE.toLocaleString()}/month — switch to annual to save D${ANNUAL_SAVINGS.toLocaleString()}`}
                  </p>
                </div>
                <button
                  data-testid="pro-details-close"
                  onClick={() => setShowProDetails(false)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors shrink-0 ml-4"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {proDetails.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm mb-0.5">{item.label}</div>
                      <div className="text-white/55 text-sm leading-relaxed">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="sticky bottom-0 bg-[#0a0a14]/90 backdrop-blur-xl p-6 border-t border-white/10">
                <Link href="/contact" onClick={() => setShowProDetails(false)}>
                  <Button className="w-full bg-gradient-solotech text-white rounded-full py-3 px-8 text-base hover:opacity-90 transition-all hover:scale-[1.02]">
                    Get Pro — D{proPrice.toLocaleString()}{proLabel}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Services Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Expertise</h2>
            <p className="text-xl text-white/60">Comprehensive digital solutions for modern brands.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Code size={32} />, title: "Web Development", desc: "Websites designed to convert visitors into paying customers." },
              { icon: <Paintbrush size={32} />, title: "Branding & Design", desc: "Identities that make your brand impossible to forget." },
              { icon: <Share2 size={32} />, title: "Social Media", desc: "Content that builds communities and drives engagement." },
              { icon: <Camera size={32} />, title: "Photo & Video", desc: "Visual storytelling that captivates and converts." },
              { icon: <TrendingUp size={32} />, title: "Digital Marketing", desc: "Campaigns that bring the right customers to your door." }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 rounded-2xl group hover:border-purple-500/50 transition-colors cursor-pointer"
              >
                <div className="mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-300 origin-left">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-white/60">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 md:px-12 bg-black/40 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Solotech?</h2>
            <p className="text-xl text-white/60">Built different. Delivering results.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <Zap size={28} />, title: "Fast Delivery", desc: "We move quickly without cutting corners. Most projects delivered ahead of schedule — including websites in 24 hours." },
              { icon: <Award size={28} />, title: "Creative Excellence", desc: "We hold our work to a global standard. Every pixel, every word, every interaction is considered and crafted." },
              { icon: <Heart size={28} />, title: "Affordable Professional Solutions", desc: "World-class quality doesn't have to break the bank. We price fairly so every ambitious business can access premium digital services." },
              { icon: <Globe size={28} />, title: "Built for African Businesses", desc: "We understand the African market deeply — the culture, the customers, the platforms. We design for real people in real contexts." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 rounded-2xl flex gap-6 items-start group hover:border-purple-500/40 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 group-hover:bg-purple-500/30 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <div className="flex justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Sh.Dr Baba Sankung Ceesay", role: "President, Al-Ihsan University", avatar: "BSC", review: "Solotech Digital brought our university into the digital age. They built us a bilingual website that our students, staff, and international partners are proud to share. The quality was world-class." },
              { name: "Abdoulie Ebrima Jammeh", role: "CEO, EJC Drilling Company", avatar: "AEJ", review: "I needed a professional website fast and Solotech delivered within 18 hours. The site is clean, loads fast, and has already brought us new clients who found us online." },
              { name: "Fatima Sonko", role: "Founder, Halal Organic Products", avatar: "FS", review: "Our product packaging went from homemade to premium overnight. The mockups Solotech created look so professional that customers think we're an international brand." },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-8 rounded-2xl flex flex-col gap-6"
              >
                <Quote size={32} className="text-purple-400/50" />
                <p className="text-white/75 leading-relaxed flex-1">"{t.review}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-xs shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-white/50 text-xs">{t.role}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={12} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Ready to Grow Your Business Online?</h2>
          <p className="text-2xl text-white/70 mb-10">Let's build something powerful together.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-10 py-3 text-base w-full sm:w-auto">
                Start a Project
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="rounded-full px-10 py-3 text-base w-full sm:w-auto border-white/20 bg-black/50 backdrop-blur-sm">
                Launch My Website
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
