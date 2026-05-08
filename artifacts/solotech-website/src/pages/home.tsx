import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code, Paintbrush, Share2, Camera, TrendingUp, CheckCircle, Star, Zap, Award, Heart, Globe, Quote } from "lucide-react";
import SeoHead from "@/components/seo-head";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <SeoHead
        path="/"
        title={undefined}
        description="Solotech Digital designs websites, brands, and digital content that help businesses in The Gambia and West Africa stand out, attract customers, and grow online."
      />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-10 pb-20 px-6 md:px-12">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm font-medium mb-8">
              <span className="text-yellow-400">⚡</span>
              <span className="text-white/90">Launch Your Website in 24 Hours</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              We Build Digital Experiences <br className="hidden md:block" />
              <span className="text-gradient">That Drive Growth</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12">
              Solotech Digital designs websites, brands, and digital content that help businesses stand out, attract customers, and grow online.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-solotech text-white rounded-full px-8 py-6 text-lg w-full sm:w-auto hover:scale-105 transition-transform">
                  Start a Project
                </Button>
              </Link>
              <Link href="/work">
                <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg w-full sm:w-auto border-white/20 hover:bg-white/10">
                  View Our Work
                </Button>
              </Link>
            </div>
            
            <div className="mt-20 pt-10 border-t border-white/10 flex flex-wrap justify-center gap-12 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">120+</div>
                <div className="text-white/60">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">40+</div>
                <div className="text-white/60">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2 flex justify-center"><Star className="text-yellow-400 fill-yellow-400 mr-2" /> 5.0</div>
                <div className="text-white/60">Client Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LaunchPad Section */}
      <section className="py-24 px-6 md:px-12 bg-black/40 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Solotech LaunchPad</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Need a professional website fast? We build clean, modern business websites in just 24 hours.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold mb-2">Starter Package</h3>
              <div className="text-3xl font-bold text-gradient mb-6">D5,000</div>
              <ul className="space-y-4 mb-8">
                {['1-page professional website', 'Mobile responsive', 'Delivered in 24 hours', 'Perfect for startups & small businesses'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <CheckCircle className="text-purple-500 shrink-0 w-5 h-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl py-6">
                  Get Started
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-3xl border-purple-500/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-gradient-solotech text-white text-xs font-bold px-4 py-1 rounded-bl-xl">POPULAR</div>
              <h3 className="text-2xl font-bold mb-2">Pro Package</h3>
              <div className="text-3xl font-bold text-gradient mb-6">D18,000<span className="text-lg text-white/50 font-normal">/year</span></div>
              <ul className="space-y-4 mb-8">
                {['Custom domain included', 'Multi-page premium website', 'Copywriting & branding assistance', 'WhatsApp integration', 'Ongoing support & edits'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <CheckCircle className="text-blue-500 shrink-0 w-5 h-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button className="w-full bg-gradient-solotech text-white rounded-xl py-6 hover:opacity-90">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

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
              { name: "Ousman Jallow", role: "CEO, Gambia Tech Hub", review: "Solotech delivered our website in record time. Clean, modern, and professional — exactly what we needed to showcase our work to international partners." },
              { name: "Fatou Ceesay", role: "Founder, Lamin Crafts", review: "They transformed our brand completely. Our customers keep complimenting the new look. Sales have increased since the rebrand — the results speak for themselves." },
              { name: "Ibrahim Touray", role: "Director, West Africa NGO Alliance", review: "Working with Solotech was seamless from start to finish. They understood our mission and delivered a website that represents our organization with pride." },
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
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {t.name.split(" ").map(n => n[0]).join("")}
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
              <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-lg w-full sm:w-auto">
                Start a Project
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg w-full sm:w-auto border-white/20 bg-black/50 backdrop-blur-sm">
                Launch My Website
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
