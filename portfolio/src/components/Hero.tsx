import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-20 gap-10">
      
      {/* LEFT TEXT */}
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-blue-400">Hassan Riaz</span>
        </h1>
        <p className="text-gray-300 mb-6">
          A seasoned UI/UX graphic designer with over 10 years of experience. I specialize in creating stunning websites, intuitive icons, and a wide range of graphic elements. I bring designs to life using Adobe Illustrator, Adobe XD, Adobe Photos
        </p>
        <a
          href="/projects"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          View Projects
        </a>
      </div>

      {/* RIGHT IMAGE */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/profile.png"
          alt="Profile"
          width={300}
          height={300}
          className="rounded-full border-4 border-blue-400"
        />
      </div>
    </section>
  );
}
