import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  BrainCircuit,
  Check,
  ChevronDown,
  Flame,
  Gem,
  Menu,
  Play,
  Shield,
  Sparkles,
  WandSparkles,
  X,
  Zap,
} from "lucide-react";
import { Reveal } from "./components/Reveal";
import { SectionHeader } from "./components/SectionHeader";
import heroImage from "./assets/dragons/forge-hero.png";
import frostDragon from "./assets/dragons/frost-dragon.png";
import emberDragon from "./assets/dragons/ember-dragon.png";
import celestialDragon from "./assets/dragons/celestial-dragon.png";

const navItems = ["Features", "Demo", "Gallery", "Pricing", "FAQ"];

const demoImages = {
  Obsidian: heroImage,
  Frost: frostDragon,
  Celestial: celestialDragon,
};

const generationSteps = [
  "Style selected",
  "Lore expanded",
  "Composition tuned",
  "Production prompt ready",
];

const features = [
  {
    icon: WandSparkles,
    title: "Mythic Prompt Engine",
    copy: "Transform rough ideas into production-ready prompts.",
  },
  {
    icon: BrainCircuit,
    title: "Style Memory",
    copy: "Keep worlds, characters, and styles consistent.",
  },
  {
    icon: Shield,
    title: "Commercial Guardrails",
    copy: "Team approvals, privacy controls, and commercial rights.",
  },
  {
    icon: Zap,
    title: "Realtime Variations",
    copy: "Generate endless variants without losing quality.",
  },
];

const gallery = [
  {
    image: frostDragon,
    title: " Frostborne",
    meta: "Crystalline scales, frozen citadels, northern auroras",
  },
  {
    image: emberDragon,
    title: "Ember King",
    meta: "Molten armor, volcanic kingdoms, infernal fire",
  },
  {
    image: celestialDragon,
    title: "Celestial Archon",
    meta: "Golden scales, cosmic skies, divine starlight",
  },
];
const stats = [
  ["40+", "fantasy styles"],
  ["1.8s", "preview generation"],
  ["4K", "commercial exports"],
  ["100%", "private ownership"],
];

const testimonials = [
  {
    quote:
      "DragonForge reduced our creature concept cycle from weeks to a single afternoon. Every iteration stayed aligned with our campaign world and visual style.",
    name: "Mira Vale",
    role: "Creative Director, Obsidian North",
  },
  {
    quote:
      "Unlike generic image tools, DragonForge understands fantasy art direction. It feels built specifically for worldbuilders and concept artists.",
    name: "Jon Bellamy",
    role: "Founder, Tabletop Foundry",
  },
  {
    quote:
      "We generate launch artwork, social campaigns, and promotional assets in a fraction of the time without sacrificing quality.",
    name: "Asha Ren",
    role: "VP Brand, Mythrail Games",
  },
];

const pricing = [
  {
    name: "Apprentice",
    price: "$19",
    copy: "For solo creators exploring worlds.",
    features: [
      "1,200 image credits",
      "Private gallery",
      "Prompt enhancer",
      "HD exports",
    ],
  },
  {
    name: "Forge",
    price: "$59",
    copy: "For studios and serious campaigns.",
    featured: true,
    features: [
      "8,000 image credits",
      "Style memory",
      "Team workspaces",
      "4K commercial exports",
    ],
  },
  {
    name: "Elder",
    price: "Custom",
    copy: "For publishers with production needs.",
    features: [
      "Dedicated capacity",
      "SAML SSO",
      "Legal review tools",
      "Priority model tuning",
    ],
  },
];

const faqs = [
  {
    q: "Is DragonForge AI only for dragons?",
    a: "The platform is optimized for dragons, fantasy creatures, environments, and campaign art, with controls tuned for scales, wings, armor, and cinematic fantasy lighting.",
  },
  {
    q: "Can teams keep generations private?",
    a: "Yes. Paid workspaces include private galleries, approval flows, and role-based access for concept, brand, and production teams.",
  },
  {
    q: "Do exports work for commercial projects?",
    a: "Forge and Elder plans include commercial export workflows, source prompt history, and licensing documentation for production handoff.",
  },
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeStyle, setActiveStyle] = useState("Obsidian");
  const [activeFaq, setActiveFaq] = useState(0);

  const demoOutput = useMemo(() => {
    const map = {
      Obsidian:
        "Black dragon, molten gold fractures, obsidian forge, teal arcane rim light, cinematic smoke.",
      Frost:
        "Silver frost dragon, aurora citadel, translucent horns, moonlit mist, crystalline blue glow.",
      Celestial:
        "Ivory gold dragon, astral forge, constellation scales, radiant starlight, elegant regalia.",
    };

    return map[activeStyle];
  }, [activeStyle]);

  return (
    <div className="min-h-screen overflow-hidden bg-[#05070d] text-slate-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05070d]/75 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-md border border-amber-300/40 bg-amber-300/10 text-amber-200 shadow-[0_0_34px_rgba(251,191,36,0.22)]">
              <Flame size={20} />
            </span>
            <span className="font-semibold text-white">DragonForge AI</span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#pricing"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Sign in
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-md bg-amber-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
            >
              Start forging <ArrowRight size={16} />
            </a>
          </div>

          <button
            type="button"
            className="grid size-10 place-items-center rounded-md border border-white/10 text-white lg:hidden"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/10 bg-[#070a12] lg:hidden"
            >
              <div className="mx-auto grid max-w-7xl gap-2 px-4 py-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="rounded-md px-3 py-3 text-sm text-slate-200 hover:bg-white/5"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="top">
        <section className="relative min-h-[760px] overflow-hidden pt-16">
          <img
            src={heroImage}
            alt="Legendary dragon emerging from an AI forge"
            className="absolute inset-0 h-full w-full object-cover object-[64%_center]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,13,0.97)_0%,rgba(5,7,13,0.82)_36%,rgba(5,7,13,0.28)_72%,rgba(5,7,13,0.74)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05070d] to-transparent" />
          <motion.div
            className="pointer-events-none absolute left-[8%] top-32 h-44 w-44 rounded-full bg-teal-400/10 blur-3xl"
            animate={{ scale: [1, 1.22, 1], opacity: [0.45, 0.8, 0.45] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative mx-auto grid min-h-[690px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-amber-300/30 bg-amber-300/10 px-3 py-2 text-sm text-amber-100">
                <Sparkles size={16} /> New model: Wyrmcraft v4
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-white md:text-7xl xl:text-8xl">
                Forge Legendary Dragons with AI
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
                DragonForge AI turns raw fantasy direction into cinematic
                dragons, style-consistent worlds, and commercial-ready artwork
                for creators and studios.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#demo"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-300 px-6 py-4 font-semibold text-slate-950 transition hover:bg-amber-200"
                >
                  Try the forge <Play size={18} fill="currentColor" />
                </a>
                <a
                  href="#gallery"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/8 px-6 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/12"
                >
                  View gallery <ArrowRight size={18} />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="features" className="relative px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Model Stack"
            title="A creative engine built for fantasy production"
            copy="From prompt expansion to export governance, DragonForge brings the control surface serious worldbuilders expect from a modern AI studio."
          />
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.08}>
                <div className="h-full rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 transition hover:border-amber-300/40 hover:bg-white/[0.06]">
                  <feature.icon className="mb-8 text-amber-300" size={28} />
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-300">
                    {feature.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="demo" className="px-4 py-24 sm:px-6 lg:px-8">
          {/* <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]"> */}
          <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <p className="mb-3 text-sm font-semibold uppercase text-amber-300">
                Interactive demo
              </p>
              <h2 className="text-3xl font-semibold text-white md:text-5xl">
                Shape a dragon brief in seconds
              </h2>
              {/* <p className="mt-5 text-lg leading-8 text-slate-300"> */}
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Pick a style, tune the forge, and watch the production prompt
                assemble like a real creative copilot.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-xl border border-white/10 bg-[#0b101a]/95 p-6 shadow-2xl shadow-black/40">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-md bg-teal-300/10 text-teal-200">
                      <Bot size={20} />
                    </span>

                    <div>
                      <p className="font-semibold text-white">Forge Console</p>

                      <p className="text-sm text-slate-400">Wyrmcraft v4</p>
                    </div>
                  </div>

                  <span className="rounded-md border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs text-amber-200">
                    Generating
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {["Obsidian", "Frost", "Celestial"].map((style) => (
                    <button
                      key={style}
                      onClick={() => setActiveStyle(style)}
                      className={`rounded-md border px-4 py-3 text-sm font-semibold transition ${
                        activeStyle === style
                          ? "border-amber-300 bg-amber-300 text-slate-950"
                          : "border-white/10 bg-white/[0.04] text-slate-200 hover:bg-white/[0.08]"
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="rounded-lg border border-white/10 bg-black/30 p-4">
                    <p className="mb-3 text-xs uppercase tracking-wider text-slate-500">
                      Prompt Output
                    </p>

                    <AnimatePresence mode="wait">
                      <motion.p
                        key={demoOutput}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25 }}
                        className="min-h-[140px] text-lg leading-8 text-slate-100"
                      >
                        {demoOutput}
                      </motion.p>
                    </AnimatePresence>
                  </div>

                  <motion.img
                    key={activeStyle}
                    src={demoImages[activeStyle]}
                    alt={activeStyle}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35 }}
                    className="h-full min-h-[260px] rounded-lg border border-white/10 object-cover"
                  />
                </div>

                <div className="mt-5">
                  <p className="mb-3 text-xs uppercase tracking-wider text-slate-500">
                    Generation Pipeline
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {generationSteps.map((step, index) => (
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.12,
                        }}
                        className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] p-3 text-sm text-slate-200"
                      >
                        <Check size={16} className="text-amber-300" />

                        {step}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 rounded-lg border border-white/10 bg-black/20 p-4">
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-slate-400">Dragon Age</span>

                    <span className="text-white">Ancient</span>
                  </div>

                  <input
                    type="range"
                    defaultValue={85}
                    className="w-full accent-amber-300"
                  />
                </div>
              </div>
            </Reveal>

            {/* <Reveal delay={0.12}>
              <div className="rounded-lg border border-white/10 bg-[#0b101a]/95 p-4 shadow-2xl shadow-black/40 md:p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-md bg-teal-300/10 text-teal-200">
                      <Bot size={20} />
                    </span>
                    <div>
                      <p className="font-semibold text-white">Forge Console</p>
                      <p className="text-sm text-slate-400">Live prompt assembler</p>
                    </div>
                  </div>
                  <span className="rounded-md border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">Online</span>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {['Obsidian', 'Frost', 'Celestial'].map((style) => (
                    <button
                      key={style}
                      type="button"
                      onClick={() => setActiveStyle(style)}
                      className={`rounded-md border px-4 py-3 text-sm font-semibold transition ${
                        activeStyle === style
                          ? 'border-amber-300 bg-amber-300 text-slate-950'
                          : 'border-white/10 bg-white/[0.04] text-slate-200 hover:bg-white/[0.08]'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>

                <div className="mt-5 rounded-lg border border-white/10 bg-black/30 p-4">
                  <p className="mb-3 text-xs uppercase text-slate-500">Prompt output</p>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={demoOutput}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      className="min-h-24 text-lg leading-8 text-slate-100"
                    >
                      {demoOutput}
                    </motion.p>
                  </AnimatePresence>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  {['Anatomy lock', 'World memory', '4K render'].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-md bg-white/[0.04] p-3 text-sm text-slate-200">
                      <Check size={16} className="text-amber-300" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal> */}
          </div>
        </section>

        <section id="gallery" className="px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Dragon Gallery"
            title="Premium fantasy imagery, production-ready by default"
            copy="Explore forged styles that feel distinct, consistent, and ready for campaign art, key visuals, and cinematic concept decks."
          />
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
            {gallery.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1}>
                <motion.article
                  whileHover={{ y: -8 }}
                  className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400">{item.meta}</p>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(251,191,36,0.14),rgba(20,184,166,0.08),rgba(239,68,68,0.10))] p-5 md:grid-cols-4 md:p-8">
            {stats.map(([value, label]) => (
              <Reveal key={label}>
                <div className="rounded-md bg-black/20 p-5 text-center">
                  <p className="text-4xl font-semibold text-white">{value}</p>
                  <p className="mt-2 text-sm uppercase text-slate-300">
                    {label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Trusted by creators"
            title="Built for teams that ship fantasy worlds"
            copy="A premium workflow for game studios, tabletop publishers, writers, and marketing teams."
          />
          <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 0.08}>
                <figure className="h-full rounded-lg border border-white/10 bg-white/[0.04] p-6">
                  <Gem className="mb-6 text-teal-200" size={24} />
                  <blockquote className="leading-7 text-slate-200">
                    "{testimonial.quote}"
                  </blockquote>
                  <figcaption className="mt-8">
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      {testimonial.role}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="pricing" className="px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Pricing"
            title="Scale from solo lorecraft to studio production"
            copy="Transparent plans for creators today, with enterprise controls ready when your forge becomes a pipeline."
          />
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
            {pricing.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 0.08}>
                <div
                  className={`relative h-full rounded-lg border p-6 ${plan.featured ? "border-amber-300 bg-amber-300 text-slate-950" : "border-white/10 bg-white/[0.04] text-slate-100"}`}
                >
                  {plan.featured && (
                    <span className="absolute right-5 top-5 rounded-md bg-slate-950 px-3 py-1 text-xs font-semibold text-amber-200">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-2xl font-semibold">{plan.name}</h3>
                  <p
                    className={`mt-3 ${plan.featured ? "text-slate-800" : "text-slate-400"}`}
                  >
                    {plan.copy}
                  </p>
                  <p className="mt-8 text-5xl font-semibold">{plan.price}</p>
                  <p
                    className={`mt-2 text-sm ${plan.featured ? "text-slate-700" : "text-slate-500"}`}
                  >
                    per month
                  </p>
                  <ul className="mt-8 grid gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <BadgeCheck size={18} /> <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#demo"
                    className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 font-semibold ${
                      plan.featured
                        ? "bg-slate-950 text-white hover:bg-slate-800"
                        : "bg-white text-slate-950 hover:bg-slate-200"
                    }`}
                  >
                    Choose plan <ArrowRight size={17} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="faq" className="px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Questions before you enter the forge"
            copy="Short answers for creators and teams evaluating DragonForge AI for real production use."
          />
          <div className="mx-auto max-w-3xl">
            {faqs.map((faq, index) => (
              <Reveal key={faq.q} delay={index * 0.05}>
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                  className="mb-3 w-full rounded-lg border border-white/10 bg-white/[0.04] p-5 text-left"
                >
                  <span className="flex items-center justify-between gap-4">
                    <span className="font-semibold text-white">{faq.q}</span>
                    <ChevronDown
                      className={`shrink-0 text-amber-300 transition ${activeFaq === index ? "rotate-180" : ""}`}
                    />
                  </span>
                  <AnimatePresence>
                    {activeFaq === index && (
                      <motion.span
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="block overflow-hidden"
                      >
                        <span className="block pt-4 leading-7 text-slate-300">
                          {faq.a}
                        </span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-6xl overflow-hidden rounded-lg border border-amber-300/30 bg-[#0d0b10] p-8 text-center shadow-[0_0_80px_rgba(251,191,36,0.10)] md:p-14">
              <p className="mb-3 text-sm font-semibold uppercase text-amber-300">
                Begin the ritual
              </p>
              <h2 className="mx-auto max-w-4xl text-4xl font-semibold text-white md:text-6xl">
                Build your next legendary creature pipeline.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Start with a prompt, end with a polished dragon universe your
                audience can believe in.
              </p>
              <a
                href="#demo"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-amber-300 px-6 py-4 font-semibold text-slate-950 hover:bg-amber-200"
              >
                Launch DragonForge AI <ArrowRight size={18} />
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-sm text-slate-400 md:flex-row md:items-center">
          <div className="flex items-center gap-3 text-white">
            <span className="grid size-9 place-items-center rounded-md border border-amber-300/40 bg-amber-300/10 text-amber-200">
              <Flame size={18} />
            </span>
            DragonForge AI
          </div>
          <p>© 2026 DragonForge AI. Forge Legendary Dragons with AI.</p>
          <div className="flex gap-5">
            <a href="#features" className="hover:text-white">
              Product
            </a>
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
            <a href="#faq" className="hover:text-white">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
