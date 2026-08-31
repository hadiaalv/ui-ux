"use client";

import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Sparkles, LayoutGrid, PenTool, Palette, ShoppingBag, BarChart3, MonitorSmartphone, Code2, Globe, Search, Gauge, Layers3, Figma, Database, ShieldCheck, Stars } from "lucide-react";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

type Service = {
  slug: string;
  title: string;
  category: string;
  description: string;
  features: readonly string[];
  tools: readonly string[];
};

type SectionContent = {
  intro: string;
  focusAreas: string[];
  pillars: Array<{ title: string; text: string; icon: typeof Palette }>;
  process: Array<{ number: string; title: string; text: string }>;
  deliverables: string[];
  faq: Array<{ question: string; answer: string }>;
};

const serviceBlueprints: Record<string, SectionContent> = {
  "ui-ux-design": {
    intro: "We turn user ambiguity into clear journeys, simple navigation, and interfaces people actually enjoy using.",
    focusAreas: ["Research-backed insights", "Conversion-focused flows", "Branded, premium interfaces"],
    pillars: [
      { title: "UX Research", text: "We map user needs, friction, and opportunities before design begins.", icon: Search },
      { title: "Wireframing", text: "We shape structure and hierarchy to make the experience feel effortless.", icon: LayoutGrid },
      { title: "Interface Design", text: "We create polished interfaces with clarity, rhythm, and conversion in mind.", icon: PenTool },
    ],
    process: [
      { number: "01", title: "Discover", text: "We audit the audience, behaviour, and business objective." },
      { number: "02", title: "Map", text: "We shape the journey and priority touchpoints." },
      { number: "03", title: "Design", text: "We test wireframes, concepts, and visual direction." },
      { number: "04", title: "Refine", text: "We iterate for usability, consistency, and performance." },
    ],
    deliverables: ["User flows", "High-fidelity screens", "Prototype validation", "Design system foundations"],
    faq: [
      { question: "What does a UX project include?", answer: "Most projects include discovery, user flows, wireframes, high-fidelity design, prototype feedback, and delivery assets for production." },
      { question: "Can you work with an existing brand?", answer: "Yes. We often refine a brand system rather than start from zero, especially when the product already has traction." },
      { question: "How do you validate decisions?", answer: "We use user insights, stakeholder feedback, and usability checkpoints so design decisions stay grounded in behavior." },
    ],
  },
  "website-development": {
    intro: "We build websites that look premium, load quickly, and give teams a platform they can grow with over time.",
    focusAreas: ["Performance-first builds", "Modern frontend architecture", "Flexible content foundations"],
    pillars: [
      { title: "Frontend Experience", text: "We craft responsive interfaces that feel polished across device sizes and browsers.", icon: MonitorSmartphone },
      { title: "Technical Build", text: "We keep code clean, scalable, and ready for the next phase of growth.", icon: Code2 },
      { title: "Launch Support", text: "We align performance, accessibility, and SEO from the start to reduce rework.", icon: Gauge },
    ],
    process: [
      { number: "01", title: "Plan", text: "We map layout, content, and technical scope around business goals." },
      { number: "02", title: "Build", text: "We turn the approved structure into a dependable, polished site." },
      { number: "03", title: "Optimize", text: "We tune performance, accessibility, and content structure." },
      { number: "04", title: "Launch", text: "We support release and the next round of improvements." },
    ],
    deliverables: ["Responsive website architecture", "CMS or custom content setup", "Performance optimization", "Ongoing enhancement support"],
    faq: [
      { question: "Do you build custom websites or use templates?", answer: "We favor custom builds when the project needs flexibility, better performance, and a sharper brand fit; templates are used only when they truly fit the brief." },
      { question: "Can the website be upgraded later?", answer: "Yes. We build with a clear structure so new pages, features, or integrations can be added without breaking the experience." },
      { question: "Do you handle hosting and support?", answer: "We can support launch, technical QA, and post-launch improvements depending on the scope and preferred setup." },
    ],
  },
  "graphic-design": {
    intro: "We design visuals that make brands feel memorable, premium, and credible across every touchpoint.",
    focusAreas: ["Brand expression", "Campaign creativity", "Visual systems for real-world use"],
    pillars: [
      { title: "Brand Identity", text: "We create identity systems that feel distinct and scale cleanly across channels.", icon: Palette },
      { title: "Marketing Creative", text: "We design campaigns, social suites, and launch assets that hold attention.", icon: Stars },
      { title: "Typography & Layout", text: "We use composition, hierarchy, and typography to guide the eye with purpose.", icon: Layers3 },
    ],
    process: [
      { number: "01", title: "Direction", text: "We define the visual tone, message, and aesthetic foundation." },
      { number: "02", title: "Explore", text: "We create concepts and compositions around the core idea." },
      { number: "03", title: "Refine", text: "We adjust details for clarity, polish, and brand consistency." },
      { number: "04", title: "Deliver", text: "We package assets ready for digital and print use." },
    ],
    deliverables: ["Brand visuals", "Social media graphics", "Campaign creatives", "Print-ready assets"],
    faq: [
      { question: "What kinds of design projects do you handle?", answer: "We work on branding, marketing assets, presentation design, social kits, print materials, and visual systems for digital presence." },
      { question: "Do you create full brand identities?", answer: "Yes. We can develop identity systems including logo direction, typography, palette, and marketing collateral." },
      { question: "Can you adapt assets for multiple platforms?", answer: "Absolutely. Each design is built to scale across digital, print, and social formats without losing brand coherence." },
    ],
  },
  "e-commerce-development": {
    intro: "We design commerce experiences that guide shoppers clearly from discovery to purchase without friction.",
    focusAreas: ["Conversion journeys", "Product storytelling", "Smooth cart and checkout flows"],
    pillars: [
      { title: "Store Architecture", text: "We shape catalogue structure, discovery paths, and product hierarchy around real buying behavior.", icon: ShoppingBag },
      { title: "Checkout Flow", text: "We reduce friction by simplifying decisions, trust signals, and purchase steps.", icon: ShieldCheck },
      { title: "Data & Growth", text: "We connect tracking and reporting so performance can be tuned beyond launch day.", icon: BarChart3 },
    ],
    process: [
      { number: "01", title: "Audit", text: "We review your catalogue, categories, and user journeys." },
      { number: "02", title: "Structure", text: "We design the storefront logic around customer intent." },
      { number: "03", title: "Build", text: "We implement the store and optimize key conversion moments." },
      { number: "04", title: "Scale", text: "We refine analytics, offers, and product experience based on real results." },
    ],
    deliverables: ["Store UX and catalogue planning", "Conversion-focused product pages", "Payment and app integration", "Analytics setup"],
    faq: [
      { question: "Can you build on Shopify or other commerce platforms?", answer: "Yes. We support Shopify and other ecommerce setups depending on your catalogue complexity, growth plans, and technical requirements." },
      { question: "What do you optimize for?", answer: "We focus on better product discovery, clearer trust signals, faster browsing, and smoother conversion paths from landing page to checkout." },
      { question: "Can you improve an existing store?", answer: "Absolutely. We can review an existing store, identify friction, and redesign the experience without losing the foundation already working for the business." },
    ],
  },
  "shopify-development": {
    intro: "We tailor Shopify storefronts around your catalogue, customer journey, and brand so the store feels premium and sells better.",
    focusAreas: ["Theme customization", "Conversion-focused sections", "Storefront flexibility"],
    pillars: [
      { title: "Theme Development", text: "We customize the design language, sections, and product presentation to match your brand.", icon: Globe },
      { title: "Store Features", text: "We build better product discovery, cart flows, and merchandising experiences.", icon: ShoppingBag },
      { title: "Optimization", text: "We improve speed, clarity, and store performance for higher-quality customer experiences.", icon: Gauge },
    ],
    process: [
      { number: "01", title: "Strategy", text: "We map the product hierarchy and browsing logic around customer intent." },
      { number: "02", title: "Theme", text: "We craft the storefront direction and custom sections." },
      { number: "03", title: "Integrate", text: "We connect apps, product features, and merchandising logic." },
      { number: "04", title: "Improve", text: "We refine the customer journey and performance after launch." },
    ],
    deliverables: ["Custom Shopify sections", "Collection and product page design", "App integrations", "Ongoing storefront improvements"],
    faq: [
      { question: "Do you work with existing Shopify stores?", answer: "Yes. We often improve or rebuild store sections, product templates, and conversion paths while preserving what already works." },
      { question: "Can you add custom features?", answer: "Yes. We can bring in custom sections, filters, product modules, and integrations based on your products and growth needs." },
      { question: "Is Shopify right for my business?", answer: "It is a strong fit for growing stores that want flexibility, manageable operations, and a strong storefront experience without the complexity of a fully custom platform." },
    ],
  },
  "digital-marketing": {
    intro: "We turn brand attention into measurable momentum through strategy, channel planning, and sharper creative decisions.",
    focusAreas: ["Audience targeting", "Integrated campaigns", "Clear reporting and iteration"],
    pillars: [
      { title: "Strategy", text: "We align message, product, and funnel stage so campaigns have a clear job to do.", icon: BarChart3 },
      { title: "Content Direction", text: "We shape campaign assets and offers around the conversations your audience actually cares about.", icon: PenTool },
      { title: "Performance", text: "We track the right signals and adjust based on real channel behavior.", icon: Gauge },
    ],
    process: [
      { number: "01", title: "Research", text: "We audit market position, audience intent, and current funnel performance." },
      { number: "02", title: "Position", text: "We define the core message, offers, and content direction." },
      { number: "03", title: "Launch", text: "We put campaign assets and channels into motion with clear measurement." },
      { number: "04", title: "Optimize", text: "We adapt creative and targeting based on live results." },
    ],
    deliverables: ["Campaign strategy", "Landing page direction", "Creative briefs", "Reporting dashboards"],
    faq: [
      { question: "What channels do you focus on?", answer: "We typically assess the most effective mix of SEO, paid media, social, content, and landing pages based on your business goals and audience." },
      { question: "Do you only work on paid ads?", answer: "No. We look at the full funnel, including brand positioning, content, site experience, and conversion steps so campaigns have a stronger base to perform from." },
      { question: "How do you measure success?", answer: "We align success metrics to the real business goal, such as leads, purchases, engagement, or qualified traffic, and review them consistently." },
    ],
  },
  seo: {
    intro: "We improve your visibility with technical clarity, better content structure, and a stronger foundation for long-term organic growth.",
    focusAreas: ["Technical health", "On-page clarity", "Search intent alignment"],
    pillars: [
      { title: "Technical SEO", text: "We improve crawlability, structure, speed, and the technical details that affect discovery.", icon: Database },
      { title: "Content Strategy", text: "We align content with search intent so the message meets the user’s need precisely.", icon: Search },
      { title: "Performance Review", text: "We track visibility, ranking signals, and opportunities for sustainable growth.", icon: BarChart3 },
    ],
    process: [
      { number: "01", title: "Audit", text: "We review the current technical health, content gaps, and ranking landscape." },
      { number: "02", title: "Prioritize", text: "We identify the highest-impact opportunities for visibility and conversions." },
      { number: "03", title: "Improve", text: "We implement practical recommendations around content and technical foundations." },
      { number: "04", title: "Report", text: "We review results and adapt the roadmap with evidence." },
    ],
    deliverables: ["Technical SEO audits", "On-page optimization", "Content gap review", "Search performance reporting"],
    faq: [
      { question: "How long does SEO take to show results?", answer: "SEO builds momentum over time. We focus on sustainable gains rather than quick spikes that do not last." },
      { question: "Do you work on both technical and content improvements?", answer: "Yes. Technical health and content structure need to work together for SEO to become more effective and long-term." },
      { question: "Can you help with a new website launch?", answer: "Absolutely. We can implement SEO foundations before and during launch so the website is visible from day one." },
    ],
  },
  "social-media-marketing": {
    intro: "We build a stronger social presence through content that feels intentional, useful, and aligned with the brand story.",
    focusAreas: ["Platform strategy", "Brand voice", "Consistent content with momentum"],
    pillars: [
      { title: "Content Planning", text: "We build an editorial rhythm that keeps your brand visible without feeling repetitive.", icon: Layers3 },
      { title: "Creative Direction", text: "We design concepts that fit the platform, audience, and business objective.", icon: Figma },
      { title: "Community Growth", text: "We focus on more than posting — we create stronger relevance and engagement over time.", icon: Stars },
    ],
    process: [
      { number: "01", title: "Listen", text: "We map audience behavior, brand voice, and content gaps." },
      { number: "02", title: "Plan", text: "We build platform-specific concepts and recurring themes." },
      { number: "03", title: "Create", text: "We produce content that is aligned, consistent, and easy to use." },
      { number: "04", title: "Refine", text: "We review what resonates and adjust the next cycle with evidence." },
    ],
    deliverables: ["Content calendars", "Creative concepts", "Campaign assets", "Reporting and optimization"],
    faq: [
      { question: "Do you manage the full social presence?", answer: "We can support strategy, content planning, creatives, and reporting depending on whether you need end-to-end execution or a sharper direction to improve what you already do." },
      { question: "What platforms do you work on?", answer: "We typically advise based on where your audience actually spends time, and we design for platform-specific performance rather than posting the same content everywhere." },
      { question: "Can you improve engagement quality?", answer: "Yes. We focus on the mix of message, creative, and consistency, not just vanity metrics, so the content earns better interaction and more relevant attention." },
    ],
  },
  "content-creation": {
    intro: "We produce thoughtful content that helps your brand sound clear, credible, and memorable across the customer journey.",
    focusAreas: ["Brand voice", "Storytelling", "Content systems that scale"],
    pillars: [
      { title: "Copy Direction", text: "We turn complex offers into language that is clear, useful, and persuasive.", icon: PenTool },
      { title: "Campaign Storytelling", text: "We create content themes that support launches, thought leadership, and sales moments.", icon: Sparkles },
      { title: "Content Systems", text: "We build repeatable content structures so teams can publish with consistency.", icon: Layers3 },
    ],
    process: [
      { number: "01", title: "Clarify", text: "We define the audience, message, and tone behind the content." },
      { number: "02", title: "Shape", text: "We build the angles, editorial structure, and deliverables." },
      { number: "03", title: "Craft", text: "We write and produce polished content for your channels and campaigns." },
      { number: "04", title: "Scale", text: "We review what’s resonating and build out the next wave of content with purpose." },
    ],
    deliverables: ["Website copy", "Landing page messaging", "Social content", "Campaign storytelling"],
    faq: [
      { question: "Do you write only website copy?", answer: "No. We can help with website messaging, campaigns, blog content, social copy, product storytelling, and pitch material depending on your goals." },
      { question: "Can content fit an existing brand?", answer: "Yes. We work from your current positioning and refine the tone and language so the content feels consistent with the brand rather than generic." },
      { question: "How do you keep the content useful?", answer: "We write with purpose: understanding the audience, the offer, and the action we want them to take next." },
    ],
  },
};

const heroVisuals: Record<string, { theme: string; badge: string; accent: string; chips: string[] }> = {
  "ui-ux-design": { theme: "from-[#edf5ff] via-white to-[#f5f9ff]", badge: "UX Systems", accent: "#2b6cb0", chips: ["User journeys", "Wireframes", "Prototypes"] },
  "website-development": { theme: "from-[#edf5ff] via-white to-[#f3f7ff]", badge: "Front-end build", accent: "#143f78", chips: ["Responsive UI", "CMS", "Performance"] },
  "graphic-design": { theme: "from-[#fff8f2] via-white to-[#f3f8ff]", badge: "Visual direction", accent: "#2b6cb0", chips: ["Campaign art", "Brand assets", "Print layouts"] },
  "e-commerce-development": { theme: "from-[#f4f9ff] via-white to-[#edf3ff]", badge: "Commerce UX", accent: "#143f78", chips: ["Shop experience", "Checkouts", "Merchandising"] },
  "shopify-development": { theme: "from-[#eef6ff] via-white to-[#f7fbff]", badge: "Shopify design", accent: "#2b6cb0", chips: ["Custom sections", "Product pages", "Storefront UX"] },
  "digital-marketing": { theme: "from-[#f5f9ff] via-white to-[#edf5ff]", badge: "Growth strategy", accent: "#143f78", chips: ["Campaigns", "SEO", "Analytics"] },
  seo: { theme: "from-[#eff7ff] via-white to-[#f4f9ff]", badge: "Search visibility", accent: "#2b6cb0", chips: ["Technical SEO", "Content", "Ranking"] },
  "social-media-marketing": { theme: "from-[#f4f8ff] via-white to-[#fffaf5]", badge: "Brand presence", accent: "#143f78", chips: ["Content pillars", "Creative", "Engagement"] },
  "content-creation": { theme: "from-[#f3f8ff] via-white to-[#f9f5ff]", badge: "Content systems", accent: "#2b6cb0", chips: ["Messaging", "Copy", "Storytelling"] },
  "web-design": { theme: "from-[#edf5ff] via-white to-[#f6f9ff]", badge: "Web direction", accent: "#2b6cb0", chips: ["Art direction", "Layouts", "Brand sites"] },
  "branding-and-identity": { theme: "from-[#f3f8ff] via-white to-[#f8fbff]", badge: "Brand systems", accent: "#143f78", chips: ["Logo", "Identity", "Guidelines"] },
  "wordpress-development": { theme: "from-[#f3f6ff] via-white to-[#eef7ff]", badge: "CMS builds", accent: "#143f78", chips: ["WordPress", "Custom themes", "Support"] },
};

const defaultFaq = [
  { question: "How do we begin?", answer: "We start by learning the business context, goals, and what the work needs to help people do more clearly or easily." },
  { question: "Do you work in partnership with our team?", answer: "Yes. We work closely with founders, marketing teams, and internal stakeholders to keep direction grounded and momentum high." },
  { question: "Can you support the work after launch?", answer: "Absolutely. We can continue with refinements, new content, performance checks, or the next set of improvements after delivery." },
];

export default function ServicePageContent({ service }: { service: Service }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const blueprint = serviceBlueprints[service.slug] ?? serviceBlueprints["ui-ux-design"];
  const visual = heroVisuals[service.slug] ?? heroVisuals["ui-ux-design"];

  const finalFaqs = useMemo(
    () => [...(blueprint.faq ?? []), ...defaultFaq].slice(0, 4),
    [blueprint.faq]
  );

  const heroBlocks = [
    { label: "Project goals", value: service.description },
    { label: "Scope", value: service.features[0] },
    { label: "Output", value: service.tools[0] },
  ];

  return (
    <main className="bg-[#f7f9fc] text-[#0f172a]">
      <section className={`relative overflow-hidden border-b border-slate-200 bg-gradient-to-br ${visual.theme} px-6 pb-20 pt-10 md:px-10 md:pb-24 md:pt-12`}>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(117,183,255,0.18),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d5e8ff] bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-[#2b6cb0] shadow-sm">
              <Sparkles size={12} /> {service.category}
            </span>
            <h1 className="mt-6 max-w-xl text-4xl font-black leading-[0.95] tracking-[-0.06em] text-[#0d1b2d] md:text-6xl lg:text-[5rem]">
              {service.title}
              <span className="block text-[#2b6cb0]">with clarity.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">{service.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="primary-button px-6 py-3.5 text-sm md:text-base">
                Start a project
                <ArrowRight size={18} />
              </Link>
              <Link href="/projects" className="secondary-button px-6 py-3.5 text-sm md:text-base">
                See selected work
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              {visual.chips.map((chip) => (
                <span key={chip} className="rounded-full border border-[#dfeafc] bg-white/80 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-700 shadow-sm">
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="absolute -left-6 top-8 h-32 w-32 rounded-full bg-[#bfe0ff]/60 blur-3xl" />
            <div className="absolute -bottom-4 right-2 h-40 w-40 rounded-full bg-[#daeaff]/70 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#dfeafc] bg-white p-5 shadow-[0_25px_80px_rgba(20,63,120,0.08)]">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#143f78]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                </div>
                <span className="rounded-full border border-[#dfeafc] bg-[#eef5ff] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#2b6cb0]">
                  {visual.badge}
                </span>
              </div>

              <div className="rounded-[1.5rem] border border-[#eaf2ff] bg-[#f8fbff] p-4">
                <div className="grid gap-3 sm:grid-cols-3">
                  {heroBlocks.map((block) => (
                    <div key={block.label} className="rounded-[1.2rem] border border-[#e7f0ff] bg-white p-3 shadow-sm">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">{block.label}</p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-[#0d1b2d]">{block.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-[1.3rem] border border-[#e7f0ff] bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Focus</p>
                      <h3 className="mt-2 text-xl font-bold text-[#0d1b2d]">{service.title}</h3>
                    </div>
                    <div className="rounded-full bg-[#eef5ff] p-2 text-[#2b6cb0]">
                      <Layers3 size={18} />
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    {blueprint.focusAreas.map((area) => (
                      <div key={area} className="flex items-center justify-between rounded-2xl border border-[#edf4ff] bg-[#f9fbff] px-3 py-2.5 text-sm text-slate-600">
                        <span>{area}</span>
                        <Check size={15} className="text-[#2b6cb0]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2b6cb0]">What makes this service valuable</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="section-shell rounded-[2rem] p-8">
              <h2 className="text-3xl font-black tracking-[-0.05em] text-[#0d1b2d] md:text-4xl">Why it matters.</h2>
              <p className="mt-5 text-base leading-8 text-slate-600">{blueprint.intro}</p>
              <div className="mt-8 space-y-4">
                {blueprint.deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-3 border-b border-slate-200 pb-3 text-sm font-medium text-slate-700">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#eef5ff] text-[#2b6cb0]">
                      <Check size={14} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {blueprint.pillars.map(({ title, text, icon: Icon }) => (
                <motion.div key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="section-shell rounded-[1.8rem] p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef5ff] text-[#2b6cb0] ring-1 ring-[#d7ebff]">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[#0d1b2d]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2b6cb0]">How we work</p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-[#0d1b2d] md:text-5xl">A clear path from brief to result.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-600">Every engagement follows a direct process so decisions stay calm, strategic, and measurable.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {blueprint.process.map(({ number, title, text }) => (
              <motion.div key={number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="rounded-[1.8rem] border border-[#eaf2ff] bg-[#f8fbff] p-5 shadow-[0_18px_50px_rgba(20,63,120,0.04)]">
                <span className="text-sm font-bold text-[#2b6cb0]">{number}</span>
                <h3 className="mt-8 text-xl font-bold text-[#0d1b2d]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f3f8ff] px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2b6cb0]">Tools we use</p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-[#0d1b2d] md:text-4xl">Selected for performance, clarity, and craft.</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {service.tools.map((tool) => (
                <span key={tool} className="rounded-full border border-[#dfeafc] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#143f78] shadow-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2b6cb0]">Questions</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-[#0d1b2d] md:text-5xl">Before we begin.</h2>
          <div className="mt-10 space-y-3">
            {finalFaqs.map((faq, index) => (
              <div key={faq.question} className="overflow-hidden rounded-[1.4rem] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(20,63,120,0.04)]">
                <button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left text-base font-semibold text-[#0d1b2d] md:px-6">
                  {faq.question}
                  <ChevronDown size={18} className={`shrink-0 text-[#2b6cb0] transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                {openFaq === index && <p className="border-t border-slate-200 px-5 pb-5 pt-4 text-sm leading-7 text-slate-600 md:px-6">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-24 md:px-10 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(117,183,255,0.12),transparent_36%)]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2b6cb0]">Ready when you are</p>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.06em] text-[#0d1b2d] md:text-6xl">Let&apos;s shape the next step.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">Whether you need a sharper website, clearer UX, or a stronger brand presence, we can turn the brief into something durable and premium.</p>
          <Link href="/contact" className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#143f78] px-7 py-3.5 font-bold text-white shadow-[0_12px_30px_rgba(20,63,120,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0f2f5f]">
            Book a discovery call
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
