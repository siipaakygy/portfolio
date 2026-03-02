"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const projects = [
  {
    title: "REST API Token Authentication",
    desc: "REST API menggunakan CodeIgniter 4 dengan autentikasi token, CRUD item dan JSON response.",
    stack: ["CodeIgniter4", "REST API", "MySQL"],
    link: "https://github.com/siipaakygy/RES-API-Token-Based-Auth",
  },
  {
    title: "Website Pergudangan",
    desc: "Sistem manajemen pergudangan dengan CodeIgniter 4 + AdminLTE.",
    stack: ["CodeIgniter4", "AdminLTE", "MySQL"],
    link: "https://github.com/siipaakygy/sistem-pergudangan",
  },
  {
    title: "Backend Presensi Siswa",
    desc: "REST API backend presensi siswa menggunakan Laravel.",
    stack: ["Laravel", "REST API", "MySQL"],
    link: "https://github.com/siipaakygy/UKL_BE_Presensi",
  },
  {
    title: "Website Perpustakaan",
    desc: "Sistem perpustakaan berbasis PHP Native.",
    stack: ["PHP", "MySQL"],
    link: "https://github.com/siipaakygy/Perpus_php_native",
  },
  {
    title: "Website Toko Online",
    desc: "Website e-commerce dengan Laravel.",
    stack: ["Laravel", "MySQL"],
    link: "https://github.com/siipaakygy/Toko-online",
  },
  {
    title: "Frontend Web Musik",
    desc: "UI website pemutar musik dengan TypeScript.",
    stack: ["TypeScript", "HTML", "CSS"],
    link: "https://github.com/siipaakygy/Frontend-Web-Musik",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export default function Home() {
  return (
    <main className="bg-[#020617] text-white min-h-screen scroll-smooth overflow-x-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-indigo-900 via-black to-purple-900 opacity-40 blur-3xl"></div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-black/40 border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="font-bold text-xl">Asyfa</h1>

          <div className="space-x-8 hidden md:block">
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#skills" className="hover:text-blue-400">Skills</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <Image
            src="/profile.jpg"
            width={180}
            height={180}
            alt="profile"
            className="rounded-full border-4 border-gray-700 shadow-xl mb-6"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold mb-4"
        >
          Asyfa' Miftahul Huda
        </motion.h1>

        <p className="text-xl text-blue-400 font-semibold mb-6">
          <Typewriter
            words={[
              "Backend Developer",
              "Laravel Enthusiast",
              "REST API Developer",
              "Fullstack Learner"
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
          />
        </p>

        <div className="space-x-4">

          <a
            href="#projects"
            className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600 transition"
          >
            View Projects
          </a>

          <a
            href="/CV.pdf"
            className="border border-gray-400 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
          >
            Download CV
          </a>

        </div>

        {/* SCROLL INDICATOR */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-16 text-gray-400 text-sm"
        >
          ↓ Scroll
        </motion.div>

      </section>

      {/* ABOUT */}
      <motion.section
        id="about"
        className="max-w-5xl mx-auto px-6 py-28"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
      >

        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        <p className="text-gray-400 text-lg leading-relaxed">
          Saya adalah Backend Developer yang fokus pada Laravel,
          CodeIgniter dan pengembangan REST API. Berpengalaman
          membangun sistem backend yang scalable, aman, dan
          maintainable dengan desain database yang optimal.
        </p>

      </motion.section>

      {/* SKILLS */}
      <section id="skills" className="bg-gray-900 py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold mb-16 text-center">
            Tech Stack
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                title: "Backend",
                items: ["PHP", "Laravel", "CodeIgniter 4", "REST API", "MySQL"],
              },
              {
                title: "Frontend",
                items: ["HTML", "CSS", "JavaScript", "React"],
              },
              {
                title: "Tools",
                items: ["Git", "GitHub", "Postman", "VS Code"],
              },
            ].map((stack, i) => (

              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-gray-950/60 backdrop-blur-xl p-8 rounded-2xl border border-gray-800
                hover:border-blue-500 hover:shadow-blue-500/20 hover:shadow-2xl transition"
              >

                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  {stack.title}
                </h3>

                <ul className="space-y-2 text-gray-400">
                  {stack.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-28">

        <h2 className="text-4xl font-bold mb-16 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, i) => (

            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              whileHover={{ scale: 1.05 }}
              className="bg-[#0f172a]/70 backdrop-blur-xl border border-gray-800 p-6 rounded-xl
              hover:border-blue-500 hover:shadow-blue-500/20 hover:shadow-2xl transition"
            >

              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.desc}
              </p>

              <div className="flex gap-2 flex-wrap mb-4">

                {project.stack.map((tech, i) => (

                  <span
                    key={i}
                    className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <a
                href={project.link}
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                View Repository →
              </a>

            </motion.div>

          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#0f172a] py-28">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold mb-6">
            Contact Me
          </h2>

          <p className="text-gray-400 mb-8">
            Tertarik bekerja sama atau ingin berdiskusi?
          </p>

          <div className="space-y-3 text-lg">
            <p>Email: asyfa.m.huda@gmail.com</p>
            <p>GitHub: github.com/siipaakygy</p>
            <p>LinkedIn: linkedin.com/in/asyfa-miftahul-huda-100971375</p>
            <p>Location: Malang, Jawa Timur</p>
          </div>

        </div>

      </section>

      <footer className="text-center py-6 border-t border-gray-800 text-gray-500">
        © {new Date().getFullYear()} Asyfa Miftahul Huda
      </footer>

    </main>
  );
}