"use client";

import { SiShopify, SiWordpress, SiFigma, SiWebflow, SiBigcommerce, SiAdobe } from "react-icons/si";

export default function TrustBar() {
  const platforms = [
    { name: "Shopify", icon: SiShopify, color: "#95BF47" },
    { name: "BigCommerce", icon: SiBigcommerce, color: "#1F9D8A" },
    { name: "WordPress", icon: SiWordpress, color: "#21759B" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Adobe", icon: SiAdobe, color: "#FF0000" },
    { name: "Webflow", icon: SiWebflow, color: "#4353FF" },
  ];

  return (
    <section className="bg-[#f4faff] px-6 py-8 md:px-16 md:py-10">
      <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-[#dceffd] bg-white/95 px-6 py-7 shadow-[0_12px_30px_rgba(20,63,120,0.05)] md:px-8">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.24em] text-[#2b6cb0] md:text-xs">
          Platforms &amp; Tools We Work With
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {platforms.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className="flex items-center gap-2.5 rounded-full border border-[#dceffd] bg-[#f5faff] px-3.5 py-2.5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#cfe4ff] md:px-4"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg shadow-sm" style={{ color }}>
                <Icon aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold tracking-[-0.02em] text-[#365370] md:text-base">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
