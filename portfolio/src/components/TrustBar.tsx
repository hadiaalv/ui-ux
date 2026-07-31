"use client";

export default function TrustBar() {
  const platforms = ["Shopify", "BigCommerce", "WordPress", "Figma", "Adobe XD", "Webflow"];

  return (
    <section className="bg-[#f8fbff] py-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#2b6cb0]">
          Platforms &amp; Tools I Work With
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {platforms.map((name) => (
            <span key={name} className="text-lg font-semibold tracking-tight text-[#5f7693] transition-colors hover:text-[#143f78] md:text-xl">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
