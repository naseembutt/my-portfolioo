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

      {/* Projects Section - FIXED */}
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
          {/* Project 1: News App */}
          <div className="bg-[#13161c]/80 border border-gray-800/50 p-6 rounded-2xl shadow-xl hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 group">
            <span className="text-[10px] uppercase font-bold text-blue-400">
              React & API
            </span>
            <h4 className="text-lg font-semibold mt-2 text-white">
              React News App
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Fetching real-time global updates.
            </p>
            <a
              href="https://newsreactt.vercel.app/"
              className="text-xs text-blue-400"
            >
              Live Link ↗
            </a>
          </div>

          {/* Project 2: Navigation Hub */}
          <div className="bg-[#13161c]/80 border border-gray-800/50 p-6 rounded-2xl shadow-xl hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1 group">
            <span className="text-[10px] uppercase font-bold text-amber-400">
              React UI
            </span>
            <h4 className="text-lg font-semibold mt-2 text-white">
              React Navigation Hub
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Responsive navigation and routing.
            </p>
            <a
              href="https://projectreactnav.vercel.app/"
              className="text-xs text-amber-400"
            >
              Live Link ↗
            </a>
          </div>

          {/* Project 3: Responsive Interface */}
          <div className="bg-[#13161c]/80 border border-gray-800/50 p-6 rounded-2xl shadow-xl hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 group">
            <span className="text-[10px] uppercase font-bold text-cyan-400">
              Frontend
            </span>
            <h4 className="text-lg font-semibold mt-2 text-white">
              Responsive Web Interface
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Custom component architecture.
            </p>
            <a
              href="https://projecttwoo.vercel.app/"
              className="text-xs text-cyan-400"
            >
              Live Link ↗
            </a>
          </div>

          {/* Project 4: jQuery Engine */}
          <div className="bg-[#13161c]/80 border border-gray-800/50 p-6 rounded-2xl shadow-xl hover:border-pink-500/30 transition-all duration-300 hover:-translate-y-1 group">
            <span className="text-[10px] uppercase font-bold text-pink-400">
              jQuery / JS
            </span>
            <h4 className="text-lg font-semibold mt-2 text-white">
              jQuery Dynamic Engine
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Interactive UI and animations.
            </p>
            <a
              href="https://naseembutt.github.io/jquery/"
              className="text-xs text-pink-400"
            >
              Live Link ↗
            </a>
          </div>
          {/* Project: Monthly Expenses */}
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
        <a href="mailto:naseembuttnova@gmail.com" className="text-purple-300">
          naseembuttnova@gmail.com
        </a>
      </section>
    </div>
  );
}
