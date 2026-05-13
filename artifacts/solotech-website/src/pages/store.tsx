import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShoppingBag, MessageCircle, Package, Shirt, Coffee, Gift, Star, ArrowUpRight, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import SeoHead from "@/components/seo-head";

const BASE = import.meta.env.BASE_URL;

const WHATSAPP_NUMBER = "2207532757";

function whatsappLink(product: string, variant?: string) {
  const msg = encodeURIComponent(
    `Hi Solotech Digital! I'm interested in ordering: *${product}*${variant ? ` (${variant})` : ""}. Please let me know the details.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

const originals = [
  {
    id: 1,
    name: "Solotech Hoodie",
    tagline: "Signature heavyweight pullover",
    price: "D850",
    badge: "Bestseller",
    image: `${BASE}store-hoodie.png`,
    icon: <Shirt size={28} />,
    colors: ["#1a1a1a", "#592C72", "#9CB633"],
    colorNames: ["Midnight Black", "Deep Purple", "Lime Edition"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Premium 400gsm fleece. Embroidered logo. Dropped shoulders. Built for creators.",
    gradient: "from-[#592C72]/30 to-[#9CB633]/10",
    glowColor: "#592C72",
  },
  {
    id: 2,
    name: "Solotech T-Shirt",
    tagline: "Oversized graphic tee",
    price: "D450",
    badge: "New",
    image: `${BASE}store-tshirt.png`,
    icon: <Shirt size={28} />,
    colors: ["#0d0d0d", "#ffffff", "#592C72"],
    colorNames: ["Black", "White", "Purple"],
    sizes: ["S", "M", "L", "XL"],
    description: "100% organic cotton. Screen-printed design. Relaxed fit for the modern creative.",
    gradient: "from-[#9CB633]/20 to-[#592C72]/10",
    glowColor: "#9CB633",
  },
  {
    id: 3,
    name: "Canvas Tote Bag",
    tagline: "Heavy-duty carry",
    price: "D250",
    badge: null,
    image: `${BASE}store-tote.png`,
    icon: <ShoppingBag size={28} />,
    colors: ["#e8dcc8", "#1a1a1a"],
    colorNames: ["Natural", "Black"],
    sizes: null,
    description: "12oz waxed canvas. Double-stitched handles. Screen-printed Solotech mark.",
    gradient: "from-amber-900/20 to-[#592C72]/10",
    glowColor: "#9CB633",
  },
  {
    id: 4,
    name: "Solotech Mug",
    tagline: "Studio ceramic mug",
    price: "D200",
    badge: null,
    image: `${BASE}store-mug.png`,
    icon: <Coffee size={28} />,
    colors: ["#0d0d0d", "#ffffff"],
    colorNames: ["Matte Black", "Ceramic White"],
    sizes: null,
    description: "11oz ceramic. Dishwasher safe. Wrap-around print with the Solotech insignia.",
    gradient: "from-slate-800/40 to-[#592C72]/10",
    glowColor: "#592C72",
  },
  {
    id: 5,
    name: "Solotech Cap",
    tagline: "6-panel structured cap",
    price: "D350",
    badge: "Limited",
    image: `${BASE}store-cap.png`,
    icon: <Sparkles size={28} />,
    colors: ["#1a1a1a", "#592C72"],
    colorNames: ["Black", "Purple"],
    sizes: ["One Size"],
    description: "Adjustable snapback. Embroidered wordmark. UV-resistant fabric. Built to last.",
    gradient: "from-[#592C72]/20 to-[#9CB633]/10",
    glowColor: "#592C72",
  },
];

const customServices = [
  {
    icon: <Package size={22} />,
    image: `${BASE}store-custom-merch.png`,
    title: "Company Merchandise",
    desc: "Branded apparel, bags, and accessories for your entire team. Minimum order: 10 units.",
    tag: "From D3,500",
  },
  {
    icon: <Star size={22} />,
    image: `${BASE}store-custom-event.png`,
    title: "Event Branding Kits",
    desc: "Custom event merch packages — T-shirts, banners, lanyards, programs. Delivered on time.",
    tag: "Custom Quote",
  },
  {
    icon: <Gift size={22} />,
    image: `${BASE}store-custom-gifts.png`,
    title: "Corporate Gift Sets",
    desc: "Premium curated gift sets for clients, partners, and employees. Personalised packaging included.",
    tag: "From D1,200",
  },
  {
    icon: <ShoppingBag size={22} />,
    image: `${BASE}store-custom-packaging.png`,
    title: "Branded Packaging",
    desc: "Custom boxes, bags, tissue paper, stickers, and labels for your products. Minimum: 50 units.",
    tag: "Custom Quote",
  },
];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ProductCard({ product }: { product: typeof originals[0] }) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[1] ?? product.sizes[0] : null);
  const [hovered, setHovered] = useState(false);

  const orderLabel = `${product.name}${selectedColor !== null ? ` — ${product.colorNames[selectedColor]}` : ""}${selectedSize ? `, Size ${selectedSize}` : ""}`;

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative group rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm overflow-hidden flex flex-col"
    >
      {/* Glow on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ boxShadow: `0 0 60px 0 ${product.glowColor}30` }}
      />

      {/* Card gradient bg */}
      <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} pointer-events-none rounded-2xl`} />

      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 right-4 z-10">
          <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#9CB633]/20 text-[#9CB633] border border-[#9CB633]/30">
            {product.badge}
          </span>
        </div>
      )}

      {/* Image area */}
      <div className="relative z-10 h-52 border-b border-white/5 overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        <img src={`${BASE}logo.png`} alt="Solotech Digital" className="absolute top-3 left-3 h-6 w-auto opacity-75 drop-shadow-lg" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col gap-4 flex-1">
        <div>
          <p className="text-[#9CB633] text-[10px] font-bold uppercase tracking-widest mb-1">{product.tagline}</p>
          <h3 className="text-white text-xl font-bold">{product.name}</h3>
          <p className="text-white/50 text-sm mt-2 leading-relaxed">{product.description}</p>
        </div>

        {/* Color swatches */}
        <div className="flex flex-col gap-2">
          <p className="text-white/40 text-xs uppercase tracking-wider">Color: <span className="text-white/70">{product.colorNames[selectedColor]}</span></p>
          <div className="flex gap-2">
            {product.colors.map((color, i) => (
              <button
                key={i}
                onClick={() => setSelectedColor(i)}
                className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${selectedColor === i ? "border-[#9CB633] scale-110" : "border-white/20 hover:border-white/50"}`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Sizes */}
        {product.sizes && (
          <div className="flex flex-col gap-2">
            <p className="text-white/40 text-xs uppercase tracking-wider">Size</p>
            <div className="flex flex-wrap gap-1.5">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 rounded-md text-xs font-medium border transition-all duration-200 ${
                    selectedSize === size
                      ? "border-[#9CB633] text-[#9CB633] bg-[#9CB633]/10"
                      : "border-white/15 text-white/50 hover:border-white/40 hover:text-white/80"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Price + CTA */}
        <div className="mt-auto pt-4 border-t border-white/8 flex items-center justify-between gap-3">
          <span className="text-2xl font-bold text-white">{product.price}</span>
          <a href={whatsappLink(orderLabel)} target="_blank" rel="noopener noreferrer" className="flex-1">
            <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-[#9CB633]/50 text-[#9CB633] text-sm font-semibold hover:bg-[#9CB633]/10 hover:border-[#9CB633] transition-all duration-200 group/btn">
              <MessageCircle size={15} />
              Order on WhatsApp
              <ArrowUpRight size={13} className="opacity-0 -translate-x-1 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-200" />
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function CustomServiceCard({ service, delay }: { service: typeof customServices[0]; delay: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <FadeIn delay={delay}>
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="group relative rounded-2xl border border-white/8 bg-white/[0.03] hover:border-[#592C72]/50 transition-all duration-300 flex flex-col h-full overflow-hidden"
      >
        {/* Image */}
        <div className="relative h-44 overflow-hidden border-b border-white/5">
          <motion.img
            src={service.image}
            alt={service.title}
            animate={{ scale: hovered ? 1.06 : 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          <img src={`${BASE}logo.png`} alt="Solotech Digital" className="absolute top-3 left-3 h-6 w-auto opacity-75 drop-shadow-lg" />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col gap-3 flex-1">
          <div className="w-9 h-9 rounded-xl bg-[#592C72]/20 border border-[#592C72]/30 flex items-center justify-center text-[#9CB633] group-hover:bg-[#592C72]/30 transition-colors duration-300">
            {service.icon}
          </div>
          <div>
            <h3 className="text-white font-bold text-base mb-1">{service.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
          </div>
          <div className="mt-auto flex items-center justify-between pt-2">
            <span className="text-[#9CB633] text-xs font-semibold">{service.tag}</span>
            <a href={whatsappLink(service.title)} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white border border-white/10 hover:border-white/30 px-3 py-1.5 rounded-lg transition-all duration-200">
                Enquire <ArrowUpRight size={11} />
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </FadeIn>
  );
}

export default function Store() {
  return (
    <>
      <SeoHead
        title="Store | Solotech Digital"
        description="Minimal branded merchandise and custom creative products designed for modern creators, businesses, and digital culture."
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-[#592C72]/20 blur-[100px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-[#9CB633]/15 blur-[80px] pointer-events-none animate-pulse" style={{ animationDelay: "1s" }} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#9CB633]/30 bg-[#9CB633]/8 text-[#9CB633] text-xs font-bold uppercase tracking-widest mb-8"
          >
            <ShoppingBag size={12} />
            Solotech Store
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6" style={{ letterSpacing: "0.02em" }}>
            Creative{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #9CB633 0%, #592C72 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
              }}
            >
              Essentials
            </span>
            <br />
            by Solotech
          </h1>

          <p className="text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Minimal branded merchandise and custom creative products designed for modern creators, businesses, and digital culture.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#originals">
              <Button className="bg-gradient-to-r from-[#592C72] to-[#9CB633] text-white border-0 px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity h-auto">
                Shop Originals
              </Button>
            </a>
            <a href="#custom">
              <Button variant="outline" className="rounded-full border-white/20 text-white/70 hover:text-white hover:border-white/50 px-8 py-3 h-auto">
                Custom Branding <ChevronDown size={15} className="ml-1" />
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-[#9CB633]/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── CATEGORY PILLS ── */}
      <section className="py-6 px-6">
        <div className="container mx-auto max-w-7xl">
          <FadeIn>
            <div className="flex flex-wrap gap-3 justify-center">
              {["All Products", "Hoodies", "T-Shirts", "Tote Bags", "Mugs", "Caps"].map((cat) => (
                <span
                  key={cat}
                  className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 cursor-default ${
                    cat === "All Products"
                      ? "border-[#9CB633]/50 text-[#9CB633] bg-[#9CB633]/10"
                      : "border-white/10 text-white/50 hover:border-white/25 hover:text-white/80"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SOLOTECH ORIGINALS ── */}
      <section id="originals" className="py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <FadeIn className="mb-14">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[#9CB633] text-xs font-bold uppercase tracking-widest mb-3">Solotech Originals</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white">Wear the Brand</h2>
                <p className="text-white/50 mt-2 max-w-xl">
                  Limited-edition pieces built for creators, founders, and digital natives. Every item ships on demand.
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2 text-white/40 text-sm border border-white/10 rounded-full px-4 py-2">
                <MessageCircle size={14} className="text-[#9CB633]" />
                WhatsApp ordering
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {originals.map((product, i) => (
              <FadeIn key={product.id} delay={i * 0.08}>
                <ProductCard product={product} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER BANNER ── */}
      <section className="py-12 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <FadeIn>
            <div className="relative rounded-2xl border border-[#592C72]/30 bg-gradient-to-r from-[#592C72]/15 via-black/30 to-[#9CB633]/10 overflow-hidden px-8 md:px-14 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTYwIDAgTDAgMCAwIDYwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnKSIvPjwvc3ZnPg==')] opacity-40 pointer-events-none" />
              <div className="relative z-10 text-center md:text-left">
                <p className="text-[#9CB633] text-xs font-bold uppercase tracking-widest mb-2">Bulk & Corporate</p>
                <h3 className="text-white text-2xl md:text-3xl font-bold">Need a larger order?</h3>
                <p className="text-white/50 mt-1">We handle bulk merch, corporate gifts, and branded drops for teams of any size.</p>
              </div>
              <a href={whatsappLink("Bulk / Corporate Order")} target="_blank" rel="noopener noreferrer" className="relative z-10 shrink-0">
                <Button className="bg-[#9CB633] text-black font-bold hover:bg-[#b5d13d] transition-colors rounded-full px-8 h-12">
                  Get a Quote <ArrowUpRight size={16} className="ml-1" />
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CUSTOM BRANDING ── */}
      <section id="custom" className="py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <FadeIn className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-[#9CB633] text-xs font-bold uppercase tracking-widest mb-3">Custom Branding</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Your Brand, Printed</h2>
            <p className="text-white/50 text-lg">
              From company merch to event kits and gifting — we handle everything from design to delivery.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {customServices.map((service, i) => (
              <CustomServiceCard key={service.title} service={service} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO ORDER ── */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto max-w-5xl">
          <FadeIn className="text-center mb-14">
            <p className="text-[#9CB633] text-xs font-bold uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-4xl font-bold text-white">Order in 3 Steps</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Pick Your Item", desc: "Browse the store, choose your colour and size, then tap the WhatsApp button.", icon: <ShoppingBag size={20} /> },
              { step: "02", title: "Chat With Us", desc: "We'll confirm your order, share a payment link, and give you a delivery estimate.", icon: <MessageCircle size={20} /> },
              { step: "03", title: "Receive & Enjoy", desc: "Your order is prepared and ready for collection or local delivery within 1–3 business days.", icon: <Package size={20} /> },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.1}>
                <div className="relative rounded-2xl border border-white/8 bg-white/[0.02] p-8 flex flex-col gap-5">
                  <div className="absolute top-6 right-6 text-[#592C72]/30 font-black text-5xl leading-none select-none">{item.step}</div>
                  <div className="w-11 h-11 rounded-xl bg-[#592C72]/20 border border-[#592C72]/30 flex items-center justify-center text-[#9CB633]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-3xl text-center">
          <FadeIn>
            <div className="relative rounded-3xl border border-white/8 bg-gradient-to-br from-[#592C72]/20 to-[#9CB633]/10 p-14 overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#592C72]/30 blur-[60px] pointer-events-none" />
              <div className="relative z-10">
                <p className="text-[#9CB633] text-xs font-bold uppercase tracking-widest mb-4">Ready to Order?</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Something in mind?</h2>
                <p className="text-white/50 mb-8 text-lg">Whether it's a single hoodie or 500 corporate kits — we're just a message away.</p>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Solotech Digital! I'd like to place a store order or enquire about custom branding.")}`} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-[#592C72] to-[#9CB633] text-white border-0 px-10 py-4 rounded-full text-base font-bold hover:opacity-90 transition-opacity h-auto gap-2">
                    <MessageCircle size={18} />
                    Message Us on WhatsApp
                    <ArrowUpRight size={16} />
                  </Button>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
