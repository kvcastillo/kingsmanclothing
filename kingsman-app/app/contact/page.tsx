export default function Page() {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-20">
      <div className="max-w-3xl mx-auto flex flex-col gap-16">
        {/* HEADER */}
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
            Contact
          </h1>
          <p className="text-gray-500 text-sm tracking-wide">
            For inquiries, collaborations, or support.
          </p>
        </div>

        {/* FORM */}
        <form className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <label className="text-xs tracking-widest uppercase text-gray-400">
              Name
            </label>
            <input
              type="text"
              className="border-b border-gray-300 focus:outline-none focus:border-black py-2 bg-transparent"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs tracking-widest uppercase text-gray-400">
              Email
            </label>
            <input
              type="email"
              className="border-b border-gray-300 focus:outline-none focus:border-black py-2 bg-transparent"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs tracking-widest uppercase text-gray-400">
              Message
            </label>
            <textarea
              rows={4}
              className="border-b border-gray-300 focus:outline-none focus:border-black py-2 bg-transparent resize-none"
            />
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-black text-white py-4 text-sm tracking-widest uppercase hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* FOOTER NOTE */}
        <div className="text-center text-xs text-gray-400 tracking-wide">
          Kingsman Co — Minimal. Refined. Essential.
        </div>
      </div>
    </div>
  );
}
