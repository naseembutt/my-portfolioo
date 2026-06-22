import React from "react";

export default function App() {
  return (
    <div className="bg-[#0f1115] text-[#dbdfeb] min-h-screen font-sans antialiased selection:bg-purple-500/30 selection:text-purple-200">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Navbar */}
      <nav className="relative z-10 p-6 flex justify-between items-center max-w-5xl mx-auto backdrop-blur-md bg-[#13161c]/40 sticky top-0 border-b border-gray-800/40 rounded-b-2xl px-8">
        <h1 className="text-xl font-semibold tracking-wide bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Naseem Butt
        </h1>
        <div className="space-x-6 text-sm font-medium text-gray-400">
          <a
            href="#projects"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 max-w-3xl mx-auto text-center py-28 px-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-300 text-xs font-medium tracking-wide mb-6 backdrop-blur-sm animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
          Open to Opportunities
        </div>

        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
          Crafting digital ideas into{" "}
          <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
            MERN Reality.
          </span>
        </h2>

        <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light">
          Hi, I build elegant, functional, and seamless web experiences with
          MongoDB, Express, React, and Node.js.
        </p>

        <a
          href="#projects"
          className="relative group overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-3.5 rounded-xl font-medium tracking-wide shadow-lg shadow-purple-900/20 transition-all duration-300 inline-block hover:-translate-y-0.5"
        >
          Explore My Work
        </a>
      </header>

      {/* Skills Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-5 py-12">
        <h3 className="text-xs font-semibold tracking-widest text-purple-400/80 uppercase text-center mb-8">
          Technical Toolkit
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {["React.js", "JavaScript", "Tailwind CSS", "Node / Express"].map(
            (skill) => (
              <div
                key={skill}
                className="bg-[#141820]/60 border border-gray-800/60 p-4 rounded-xl text-center backdrop-blur-sm hover:border-purple-500/40 hover:bg-[#161b24] transition-all duration-300 group"
              >
                <p className="text-gray-300 font-medium group-hover:text-white transition-colors">
                  {skill}
                </p>
              </div>
            ),
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative z-10 max-w-4xl mx-auto px-5 py-20"
      >
        <div className="flex flex-col items-center mb-12">
          <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
            Selected Creations
          </h3>
          <div className="h-0.5 w-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Monthly Expenses */}
          <div className="bg-[#13161c]/80 border border-gray-800/50 p-6 rounded-2xl shadow-xl hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 group">
            <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
              Web App
            </span>
            <h4 className="text-lg font-semibold mt-2 mb-2 text-white group-hover:text-emerald-300 transition-colors">
              Monthly Expenses
            </h4>
            <p className="text-gray-400 text-sm mb-6 font-light leading-relaxed">
              A clean interface to track and manage your monthly financial
              expenses efficiently.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/naseembutt/monthly-expenses-"
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Source Code →
              </a>
              <a
                href="https://naseembutt.github.io/monthly-expenses-/"
                className="text-xs text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
              >
                Live Link ↗
              </a>
            </div>
          </div>

          {/* Typing Test */}
          <div className="bg-[#13161c]/80 border border-gray-800/50 p-6 rounded-2xl shadow-xl hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 group">
            <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
              Vanilla JS
            </span>
            <h4 className="text-lg font-semibold mt-2 mb-2 text-white group-hover:text-emerald-300 transition-colors">
              Typing Test Engine
            </h4>
            <p className="text-gray-400 text-sm mb-6 font-light leading-relaxed">
              High-accuracy calculation layout designed to track typing errors
              and WPM metrics instantly.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/naseembutt/Typing-test"
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Source Code →
              </a>
              <a
                href="https://naseembutt.github.io/Typing-test/"
                className="text-xs text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
              >
                Live Link ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 max-w-2xl mx-auto px-5 py-24 text-center border-t border-gray-800/40"
      >
        <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
          Let's Connect
        </h3>
        <p className="text-gray-400 text-sm max-w-sm mx-auto mb-8 font-light">
          Available immediately for onboarding, internships, or freelancing
          scopes.
        </p>
        <a
          href="mailto:naseembuttnova@gmail.com"
          className="inline-block text-sm bg-[#141820] border border-gray-800 hover:border-purple-500/50 px-6 py-3 rounded-xl font-medium tracking-wide text-purple-300 hover:text-white transition-all duration-300"
        >
          naseembuttnova@gmail.com
        </a>
      </section>
    </div>
  );
}
