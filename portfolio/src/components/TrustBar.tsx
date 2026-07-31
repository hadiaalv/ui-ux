"use client";

export default function TrustBar() {
  const platforms = [
    "Shopify",
    "BigCommerce",
    "WordPress",
    "Figma",
    "Adobe XD",
    "Webflow",
  ];

  return (
    <section className="bg-white border-b border-gray-100 py-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs font-semibold tracking-widest text-gray-400 uppercase mb-6">
          Platforms &amp; Tools I Work With
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {platforms.map((name) => (
            <span
              key={name}
              className="text-gray-400 font-bold text-lg md:text-xl tracking-tight hover:text-navy transition-colors"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
