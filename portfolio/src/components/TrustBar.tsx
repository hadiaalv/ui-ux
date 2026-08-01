"use client";

export default function TrustBar() {
  const platforms = ["Shopify", "BigCommerce", "WordPress", "Figma", "Adobe XD", "Webflow"];

  return (
    <section className="bg-[#f4faff] px-6 py-10 md:px-16">
      <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-[#dceffd] bg-white/95 px-6 py-8 shadow-[0_12px_30px_rgba(20,63,120,0.05)]">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          Platforms &amp; Tools We Work With
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          {platforms.map((name) => (
            <span
              key={name}
              className="rounded-full border border-[#dceffd] bg-[#f5faff] px-4 py-2 text-sm font-semibold tracking-tight text-[#4f6382] shadow-sm transition-colors hover:text-navy md:text-base"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
