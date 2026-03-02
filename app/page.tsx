"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "REST API Token Authentication",
    desc: "REST API menggunakan CodeIgniter 4 dengan autentikasi token, CRUD item, validasi timestamp dan JSON response.",
    stack: ["CI4", "REST API", "MySQL"],
    link: "https://github.com/siipaakygy/RES-API-Token-Based-Auth",
  },
  {
    title: "Website Pergudangan",
    desc: "Sistem manajemen pergudangan dengan CodeIgniter 4 + AdminLTE dengan approval supervisor dan notifikasi stok.",
    stack: ["CodeIgniter4", "AdminLTE", "MySQL"],
    link: "https://github.com/siipaakygy/sistem-pergudangan",
  },
  {
    title: "Backend Presensi Siswa",
    desc: "REST API backend presensi siswa menggunakan Laravel dengan database MySQL.",
    stack: ["Laravel", "REST API", "MySQL"],
    link: "https://github.com/siipaakygy/UKL_BE_Presensi",
  },
  {
    title: "Website Perpustakaan",
    desc: "Sistem manajemen perpustakaan berbasis PHP Native dengan fitur peminjaman dan pengembalian buku.",
    stack: ["PHP", "MySQL"],
    link: "https://github.com/siipaakygy/Perpus_php_native",
  },
  {
    title: "Website Toko Online",
    desc: "Website e-commerce menggunakan Laravel dengan fitur produk dan keranjang belanja.",
    stack: ["Laravel", "MySQL"],
    link: "https://github.com/siipaakygy/Toko-online",
  },
  {
    title: "Frontend Web Musik",
    desc: "UI website pemutar musik menggunakan TypeScript dengan interface modern.",
    stack: ["TypeScript", "HTML", "CSS"],
    link: "https://github.com/siipaakygy/Frontend-Web-Musik",
  },
];

export default function Home() {
  return (
    <main className="bg-[#020617] text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-black/40 border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="font-bold text-xl">Asyfa</h1>

          <div className="space-x-8 text-sm hidden md:block">
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
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/profile.jpg"
            width={180}
            height={180}
            alt="profile"
            className="rounded-full border-4 border-gray-700 mb-6"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl font-bold mb-4"
        >
          Asyfa' Miftahul Huda
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-400 text-xl mb-6"
        >
          Backend Developer | Laravel Enthusiast
        </motion.p>

        <div className="space-x-4">
          <a
            href="#projects"
            className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600"
          >
            View Projects
          </a>

          <a
            href="/CV.pdf"
            className="border border-gray-400 px-6 py-3 rounded-xl hover:bg-white hover:text-black"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-28">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-6"
        >
          About Me
        </motion.h2>

        <p className="text-gray-400 leading-relaxed text-lg">
          Saya adalah Backend Developer yang berfokus pada pengembangan sistem
          server-side menggunakan Laravel, CodeIgniter, dan MySQL. Berpengalaman
          membangun REST API, merancang database, serta memastikan sistem
          berjalan dengan performa tinggi dan struktur kode yang clean.
        </p>

      </section>

      {/* TECH STACK */}
      <section id="skills" className="bg-gray-900 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Tech Stack</h2>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Backend */}
            <div className="group bg-gray-950/70 p-8 rounded-2xl border border-gray-800 
            hover:border-purple-500 hover:-translate-y-2 hover:shadow-purple-500/20 
            hover:shadow-2xl transition-all duration-300">

              <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-400">
                Backend
              </h3>

              <ul className="space-y-2 text-gray-400">
                <li>PHP</li>
                <li>Laravel</li>
                <li>CodeIgniter 4</li>
                <li>REST API</li>
                <li>MySQL</li>
              </ul>

            </div>

            {/* Frontend */}
            <div className="group bg-gray-950/70 p-8 rounded-2xl border border-gray-800 
            hover:border-purple-500 hover:-translate-y-2 hover:shadow-purple-500/20 
            hover:shadow-2xl transition-all duration-300">

              <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-400">
                Frontend
              </h3>

              <ul className="space-y-2 text-gray-400">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
              </ul>

            </div>

            {/* Tools */}
            <div className="group bg-gray-950/70 p-8 rounded-2xl border border-gray-800 
            hover:border-purple-500 hover:-translate-y-2 hover:shadow-purple-500/20 
            hover:shadow-2xl transition-all duration-300">

              <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-400">
                Tools
              </h3>

              <ul className="space-y-2 text-gray-400">
                <li>Git & GitHub</li>
                <li>Postman</li>
                <li>VS Code</li>
                <li>XAMPP</li>
              </ul>

            </div>

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
              whileHover={{ scale: 1.05 }}
              className="group bg-[#0f172a] border border-gray-800 p-6 rounded-xl
              hover:border-purple-500 hover:-translate-y-2
              hover:shadow-purple-500/20 hover:shadow-2xl
              transition-all duration-300"
            >

              <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.desc}
              </p>

              <div className="flex gap-2 flex-wrap mb-4">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded text-sm
                    hover:bg-blue-500 hover:text-white transition"
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