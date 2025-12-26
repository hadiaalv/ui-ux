export default function ContactPage() {
  return (
    <section className="py-20 max-w-xl">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-[#112240] text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded bg-[#112240] text-white"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full p-3 rounded bg-[#112240] text-white"
        />
        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
}
