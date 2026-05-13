import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Wrench, Monitor, Wifi, MessageCircle, ArrowUpRight, Zap,
  Shield, Headphones, CheckCircle, Settings, Globe, Clock,
  ChevronRight, Cpu, ServerCrash, LifeBuoy, PlugZap
} from "lucide-react";
import SeoHead from "@/components/seo-head";

const WHATSAPP = "2207532757";
const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const supportServices = [
  {
    icon: <ServerCrash size={28} />,
    title: "Website Troubleshooting",
    desc: "Fast diagnosis and fixes for broken pages, slow load times, errors, and downtime.",
    color: "hover:border-[#592C72]/60",
    accent: "bg-[#592C72]/15 border-[#592C72]/30 text-[#9CB633]",
  },
  {
    icon: <Wrench size={28} />,
    title: "Website Maintenance",
    desc: "Regular updates, content changes, plugin maintenance, and ongoing site care.",
    color: "hover:border-[#9CB633]/50",
    accent: "bg-[#9CB633]/10 border-[#9CB633]/25 text-[#9CB633]",
  },
  {
    icon: <Monitor size={28} />,
    title: "Device & Software Setup",
    desc: "Setup, configuration, and installation of devices, apps, and software tools.",
    color: "hover:border-purple-500/50",
    accent: "bg-purple-500/10 border-purple-500/25 text-purple-400",
  },
  {
    icon: <Wifi size={28} />,
    title: "Connectivity & Network Support",
    desc: "Internet, Wi-Fi, and networking troubleshooting for homes and businesses.",
    color: "hover:border-blue-500/50",
    accent: "bg-blue-500/10 border-blue-500/25 text-blue-400",
  },
  {
    icon: <Headphones size={28} />,
    title: "Technical Assistance",
    desc: "Expert hands-on technical help for any digital problem you're facing.",
    color: "hover:border-[#592C72]/60",
    accent: "bg-[#592C72]/15 border-[#592C72]/30 text-[#9CB633]",
  },
  {
    icon: <LifeBuoy size={28} />,
    title: "Digital Consultation",
    desc: "Strategy and guidance on tools, platforms, workflows, and digital transformation.",
    color: "hover:border-amber-500/50",
    accent: "bg-amber-500/10 border-amber-500/25 text-amber-400",
  },
];

const steps = [
  {
    num: "01",
    icon: <MessageCircle size={24} />,
    title: "Tell Us the Issue",
    desc: "Describe the technical problem or support needed — chat with us on WhatsApp or fill out our request form.",
  },
  {
    num: "02",
    icon: <Cpu size={24} />,
    title: "We Diagnose & Solve",
    desc: "Our team quickly identifies the issue and provides the right solution with minimal disruption to your workflow.",
  },
  {
    num: "03",
    icon: <PlugZap size={24} />,
    title: "Stay Productive",
    desc: "Get back to work with reliable support, modern digital solutions, and peace of mind.",
  },
];

const trustPoints = [
  {
    icon: <Zap size={24} />,
    title: "Fast Response",
    desc: "We respond quickly and work efficiently — minimizing downtime and disruption.",
  },
  {
    icon: <Shield size={24} />,
    title: "Professional Assistance",
    desc: "Experienced team with a proven track record across businesses of all sizes.",
  },
  {
    icon: <Settings size={24} />,
    title: "Modern Solutions",
    desc: "We use the latest tools and approaches to solve your technical challenges.",
  },
  {
    icon: <Globe size={24} />,
    title: "Business-Friendly Support",
    desc: "Flexible, affordable support that fits the needs of businesses and individuals.",
  },
];

export default function FixIT() {
  return (
    <>
      <SeoHead
        path="/services/fixit"
        title="Solotech FixIT — Modern Tech Support & Digital Solutions"
        description="Fast and reliable technical support, troubleshooting, website fixes, digital setup, and modern IT solutions for businesses and individuals in The Gambia."
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-24">
        {/* Orbs */}
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -40, 25, 0], scale: [1, 1.15, 0.9, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[8%] left-[6%] w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(89,44,114,0.45) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        <motion.div
          animate={{ x: [0, -40, 20, 0], y: [0, 30, -35, 0], scale: [0.9, 1.1, 1, 0.9] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[8%] right-[6%] w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(156,182,51,0.4) 0%, rgba(156,182,51,0.06) 60%, transparent 80%)", filter: "blur(55px)" }}
        />

        {/* Animated grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(156,182,51,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(156,182,51,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-3xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#9CB633]/30 bg-[#9CB633]/8 mb-6">
            <Zap size={12} className="text-[#9CB633]" />
            <span className="text-[#9CB633] text-xs font-bold uppercase tracking-widest">Solotech FixIT</span>
            <span className="ml-1 text-[10px] bg-[#9CB633]/20 text-[#9CB633] px-2 py-0.5 rounded-full font-semibold">⚡ Fast Support</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tight">
            Modern Tech Support<br />
            <span style={{ background: "linear-gradient(135deg, #9CB633 0%, #592C72 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              for Businesses & Individuals
            </span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            We help businesses, brands, and individuals solve technical problems quickly through reliable support, troubleshooting, maintenance, and digital assistance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={waLink("Hi Solotech FixIT! I need technical support.")} target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-[#592C72] to-[#9CB633] text-white border-0 px-8 py-3 rounded-full text-base font-bold hover:opacity-90 transition-opacity h-auto gap-2">
                <MessageCircle size={18} />
                Request Support
              </Button>
            </a>
            <a href={waLink("Hi! I'd like to chat about Solotech FixIT services.")} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/8 hover:border-white/40 rounded-full px-8 py-3 text-base font-semibold h-auto gap-2">
                <MessageCircle size={16} className="text-[#9CB633]" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>

          <p className="mt-6 text-white/25 text-xs tracking-wider">Fast response · Reliable support · Modern solutions</p>
        </motion.div>
      </section>

      {/* ── SUPPORT SERVICES ── */}
      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mb-16 text-center max-w-2xl mx-auto">
            <p className="text-[#9CB633] text-xs font-bold uppercase tracking-widest mb-3">What We Fix</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Support Services</h2>
            <p className="text-white/50 text-lg">From websites to devices and networks — we handle the technical so you can focus on what matters.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {supportServices.map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative rounded-2xl border border-white/8 bg-white/[0.02] p-7 flex flex-col gap-4 transition-all duration-300 ${s.color} hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(89,44,114,0.15)]`}
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${s.accent} group-hover:scale-110 transition-transform duration-300`}>
                  {s.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                </div>
                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight size={16} className="text-[#9CB633]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW FIXIT WORKS ── */}
      <section className="py-24 px-6 md:px-12 bg-black/30">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
            <p className="text-[#9CB633] text-xs font-bold uppercase tracking-widest mb-3">Our Process</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">How FixIT Works</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connecting line (desktop) */}
            <div className="absolute top-[2.75rem] left-[16.5%] right-[16.5%] h-px hidden md:block pointer-events-none"
              style={{ background: "linear-gradient(90deg, transparent, rgba(156,182,51,0.4), rgba(89,44,114,0.4), transparent)" }} />

            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center gap-5 group"
              >
                {/* Step icon circle */}
                <div className="relative z-10 w-14 h-14 rounded-full border border-[#9CB633]/40 bg-[#0a0a14] flex items-center justify-center text-[#9CB633] group-hover:border-[#9CB633] group-hover:bg-[#9CB633]/10 transition-all duration-300 shadow-[0_0_20px_rgba(156,182,51,0.1)] group-hover:shadow-[0_0_30px_rgba(156,182,51,0.25)]">
                  {step.icon}
                </div>
                <div className="absolute top-0 right-6 text-[#592C72]/20 font-black text-4xl leading-none select-none">{step.num}</div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 hover:border-[#592C72]/40 transition-colors w-full">
                  <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE FIXIT ── */}
      <section className="py-24 px-6 md:px-12 relative overflow-hidden">
        {/* Background orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(89,44,114,0.12) 0%, transparent 70%)", filter: "blur(80px)" }} />

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-[#9CB633] text-xs font-bold uppercase tracking-widest mb-3">Why FixIT</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Reliable Digital Support<br />When You Need It</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {trustPoints.map((t, i) => (
              <motion.div
                key={t.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex items-start gap-5 p-7 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-[#592C72]/50 hover:bg-[#592C72]/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#592C72]/20 border border-[#592C72]/35 flex items-center justify-center text-[#9CB633] shrink-0 group-hover:bg-[#592C72]/30 transition-colors">
                  {t.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{t.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <div className="relative rounded-3xl border border-white/8 bg-gradient-to-br from-[#592C72]/20 to-[#9CB633]/10 p-14 overflow-hidden">
              {/* Orbs */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-32 bg-[#592C72]/35 blur-[70px] pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#9CB633]/15 blur-[60px] rounded-full pointer-events-none" />

              <div className="relative z-10">
                <p className="text-[#9CB633] text-xs font-bold uppercase tracking-widest mb-4">Get Help Now</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Need Immediate Assistance?</h2>
                <p className="text-white/50 mb-8 text-lg">Our team is ready to help you solve technical issues quickly and professionally.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href={waLink("Hi Solotech FixIT! I need immediate technical support.")} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-[#592C72] to-[#9CB633] text-white border-0 px-10 py-4 rounded-full text-base font-bold hover:opacity-90 transition-opacity h-auto gap-2">
                      <MessageCircle size={18} />
                      Request Support
                    </Button>
                  </a>
                  <a href={waLink("Hi! I'd like to chat with Solotech FixIT.")} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/8 hover:border-white/40 rounded-full px-10 py-4 text-base font-semibold h-auto gap-2">
                      Chat on WhatsApp
                      <ArrowUpRight size={16} />
                    </Button>
                  </a>
                </div>
                <p className="mt-6 text-white/25 text-xs tracking-wider">Fast response · Reliable support · Modern solutions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
