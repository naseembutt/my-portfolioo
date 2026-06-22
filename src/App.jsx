import React from "react";

export default function App() {
  return (
    <div className="bg-[#0f1115] text-[#dbdfeb] min-h-screen font-sans antialiased selection:bg-purple-500/30 selection:text-purple-200">
      {/* Glow Effects (Aesthetic background blurs) */}
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
          <div className="bg-[#141820]/60 border border-gray-800/60 p-4 rounded-xl text-center backdrop-blur-sm hover:border-purple-500/40 hover:bg-[#161b24] transition-all duration-300 group">
            <p className="text-gray-300 font-medium group-hover:text-white transition-colors">
              React.js
            </p>
          </div>
          <div className="bg-[#141820]/60 border border-gray-800/60 p-4 rounded-xl text-center backdrop-blur-sm hover:border-purple-500/40 hover:bg-[#161b24] transition-all duration-300 group">
            <p className="text-gray-300 font-medium group-hover:text-white transition-colors">
              JavaScript
            </p>
          </div>
          <div className="bg-[#141820]/60 border border-gray-800/60 p-4 rounded-xl text-center backdrop-blur-sm hover:border-emerald-500/40 hover:bg-[#161b24] transition-all duration-300 group">
            <p className="text-gray-300 font-medium group-hover:text-white transition-colors">
              Tailwind CSS
            </p>
          </div>
          <div className="bg-[#141820]/60 border border-gray-800/60 p-4 rounded-xl text-center backdrop-blur-sm hover:border-indigo-500/40 hover:bg-[#161b24] transition-all duration-300 group">
            <p className="text-gray-300 font-medium group-hover:text-white transition-colors">
              Node / Express
            </p>
          </div>
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

        {/* 8 Projects Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Project 1: Who Pays the Bill */}
          <div className="bg-[#13161c]/80 border border-gray-800/50 p-6 rounded-2xl shadow-xl hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 group">
            <span className="text-[10px] uppercase font-bold tracking-wider text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">
              React App
            </span>
            <h4 className="text-lg font-semibold mt-2 mb-2 text-white group-hover:text-purple-300 transition-colors">
              Who Pays the Bill
            </h4>
            <p className="text-gray-400 text-sm mb-6 font-light leading-relaxed">
              A smart application leveraging clean state logic to organically
              select a bill payer.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Source Code →
              </a>
              <a
                href="https://storeeappp-hy98mdgy7-naseembutts-projects.vercel.app/"
                className="text-xs text-purple-400 hover:text-purple-300 font-medium transition-colors"
              >
                Live Link ↗
              </a>
            </div>
          </div>

          {/* Project 2: Typing Test Engine */}
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
                href="#"
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Source Code →
              </a>
              <a
                href="#"
                className="text-xs text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
              >
                Live Link ↗
              </a>
            </div>
          </div>

          {/* Project 3: React News App */}
          <div className="bg-[#13161c]/80 border border-gray-800/50 p-6 rounded-2xl shadow-xl hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 group">
            <span className="text-[10px] uppercase font-bold tracking-wider text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
              React & API
            </span>
            <h4 className="text-lg font-semibold mt-2 mb-2 text-white group-hover:text-blue-300 transition-colors">
              React News App
            </h4>
            <p className="text-gray-400 text-sm mb-6 font-light leading-relaxed">
              A dynamic news application fetching and displaying real-time
              global updates from fresh media channels.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Source Code →
              </a>
              <a
                href="https://newsreactt.vercel.app/"
                className="text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                Live Link ↗
              </a>
            </div>
          </div>

          {/* Project 4: Project Three */}
          <div className="bg-[#13161c]/80 border border-gray-800/50 p-6 rounded-2xl shadow-xl hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 group">
            <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
              Frontend App
            </span>
            <h4 className="text-lg font-semibold mt-2 mb-2 text-white group-hover:text-indigo-300 transition-colors">
              E-Commerce Store / App
            </h4>
            <p className="text-gray-400 text-sm mb-6 font-light leading-relaxed">
              A modern user interface developed with optimized styling and
              layout controls.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Source Code →
              </a>
              <a
                href="https://propjectthree.vercel.app/"
                className="text-xs text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
              >
                Live Link ↗
              </a>
            </div>
          </div>

          {/* Project 5: React Navigation Hub */}
          <div className="bg-[#13161c]/80 border border-gray-800/50 p-6 rounded-2xl shadow-xl hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1 group">
            <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
              React UI
            </span>
            <h4 className="text-lg font-semibold mt-2 mb-2 text-white group-hover:text-amber-300 transition-colors">
              React Navigation Hub
            </h4>
            <p className="text-gray-400 text-sm mb-6 font-light leading-relaxed">
              A clean, fully responsive navigation and layout workflow designed
              for seamless user routing.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Source Code →
              </a>
              <a
                href="https://projectreactnav.vercel.app/"
                className="text-xs text-amber-400 hover:text-amber-300 font-medium transition-colors"
              >
                Live Link ↗
              </a>
            </div>
          </div>

          {/* Project 6: Responsive Web Interface */}
          <div className="bg-[#13161c]/80 border border-gray-800/50 p-6 rounded-2xl shadow-xl hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 group">
            <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
              Frontend Framework
            </span>
            <h4 className="text-lg font-semibold mt-2 mb-2 text-white group-hover:text-cyan-300 transition-colors">
              Responsive Web Interface
            </h4>
            <p className="text-gray-400 text-sm mb-6 font-light leading-relaxed">
              An optimized layout showcasing custom component architecture and
              clean styling design.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Source Code →
              </a>
              <a
                href="https://projecttwoo.vercel.app/"
                className="text-xs text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                Live Link ↗
              </a>
            </div>
          </div>

          {/* Project 7: jQuery Dynamic Engine */}
          <div className="bg-[#13161c]/80 border border-gray-800/50 p-6 rounded-2xl shadow-xl hover:border-pink-500/30 transition-all duration-300 hover:-translate-y-1 group">
            <span className="text-[10px] uppercase font-bold tracking-wider text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded">
              jQuery / JS
            </span>
            <h4 className="text-lg font-semibold mt-2 mb-2 text-white group-hover:text-pink-300 transition-colors">
              jQuery Dynamic Engine
            </h4>
            <p className="text-gray-400 text-sm mb-6 font-light leading-relaxed">
              An interactive UI module utilizing jQuery for smooth animations,
              event handling, and dynamic element manipulation.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/naseembutt/jquery"
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Source Code →
              </a>
              <a
                href="https://naseembutt.github.io/jquery/"
                className="text-xs text-pink-400 hover:text-pink-300 font-medium transition-colors"
              >
                Live Link ↗
              </a>
            </div>
          </div>

          {/* Project 8: Interactive Web Module (Folder7) */}
          <div className="bg-[#13161c]/80 border border-gray-800/50 p-6 rounded-2xl shadow-xl hover:border-teal-500/30 transition-all duration-300 hover:-translate-y-1 group">
            <span className="text-[10px] uppercase font-bold tracking-wider text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded">
              Core Frontend
            </span>
            <h4 className="text-lg font-semibold mt-2 mb-2 text-white group-hover:text-teal-300 transition-colors">
              Interactive Web Module
            </h4>
            <p className="text-gray-400 text-sm mb-6 font-light leading-relaxed">
              A clean frontend application focused on structures, fluid layout
              responsiveness, and optimal logic controls.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/naseembutt/folder7"
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Source Code →
              </a>
              <a
                href="https://naseembutt.github.io/folder7/"
                className="text-xs text-teal-400 hover:text-teal-300 font-medium transition-colors"
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
