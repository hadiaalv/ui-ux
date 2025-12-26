import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-6 md:px-16 bg-[#0a192f]">
      <h1 className="text-xl font-bold text-white">Hadia.dev</h1>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
