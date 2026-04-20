"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";

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
    desc: "REST API backend presensi siswa menggunakan Laravel. Mengelola data siswa dan kehadiran dengan MySQL.",
    stack: ["Laravel", "REST API", "MySQL"],
    link: "https://github.com/siipaakygy/UKL_BE_Presensi",
  },
  {
    title: "Website Perpustakaan",
    desc: "Sistem manajemen perpustakaan berbasis web (PHP Native). Fitur input, pencarian, peminjaman & pengembalian buku.",
    stack: ["PHP", "MySQL"],
    link: "https://github.com/siipaakygy/Perpus_php_native",
  },
  {
    title: "Website Toko Online",
    desc: "Website e-commerce lengkap dengan Laravel. Fitur produk, keranjang belanja, dan transaksi.",
    stack: ["Laravel", "MySQL", "TypeScript"],
    link: "https://github.com/siipaakygy/Toko_online",
  },
  {
    title: "Frontend Web Musik",
    desc: "UI/UX website pemutar musik interaktif menggunakan TypeScript.",
    stack: ["TypeScript", "HTML", "CSS"],
    link: "https://github.com/siipaakygy/Frontend-Web-Musik",
  },
];

const certificates = [
  {
    title: "HTML & CSS",
    issuer: "Dicoding",
    date: "10 Desember 2025",
    filename: "sertifikat-html-css.pdf",
  },
  {
    title: "Dasar Manajemen Proyek",
    issuer: "Dicoding",
    date: "22 September 2025",
    filename: "sertifikat-dasar-manajemen-proyek.pdf",
  },
  {
    title: "Pemrograman Dengan Python",
    issuer: "Dicoding",
    date: "20 September 2025",
    filename: "sertifikat-pemrograman-python.pdf",
  },
  {
    title: "Pemrograman Dengan Haskell",
    issuer: "Dicoding",
    date: "20 September 2025",
    filename: "sertifikat-pemrograman-haskell.pdf",
  },
  {
    title: "Prinsip Pemrograman SOLID",
    issuer: "Dicoding",
    date: "20 September 2025",
    filename: "sertifikat-prinsip-solid.pdf",
  },
  {
    title: "Peserta Design Character Competition",
    issuer: "SMK Telkom Malang",
    date: "17 September 2025",
    filename: "design-character-competition.png",
  },
  {
    title: "Pemrograman Dengan C",
    issuer: "Dicoding",
    date: "17 September 2025",
    filename: "sertifikat-pemrograman-c.pdf",
  },
  {
    title: "Pemrograman Dengan Java",
    issuer: "Dicoding",
    date: "17 September 2025",
    filename: "sertifikat-pemrograman-java.pdf",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="bg-[#020617] text-white min-h-screen scroll-smooth overflow-x-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-indigo-900 via-black to-purple-900 opacity-40 blur-3xl"></div>
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(at_top_right,#4f46e510_0%,transparent_50%)]"></div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-black/70 border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="font-bold text-2xl tracking-tighter">
            Asyfa<span className="text-blue-400">.</span>
          </h1>

          <div className="space-x-8 hidden md:flex">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#education" className="hover:text-blue-400 transition">Education</a>
            <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#certificates" className="hover:text-blue-400 transition">Certificates</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-3xl"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black/95 border-t border-gray-800 py-4"
          >
            <div className="flex flex-col space-y-4 px-6 text-lg">
              <a href="#about" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#skills" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#education" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Education</a>
              <a href="#experience" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Experience</a>
              <a href="#projects" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#certificates" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Certificates</a>
              <a href="#contact" className="hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* HERO - VERSI FRESH GRADUATE */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 3.5 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-3xl"></div>
          <Image
            src="/profile.jpg"
            width={200}
            height={200}
            alt="Asyfa' Miftahul Huda"
            className="rounded-full border-4 border-blue-400 shadow-2xl shadow-blue-500/50 relative z-10"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-7xl font-bold mt-8 tracking-tighter"
        >
          Asyfa&apos; Miftahul Huda
        </motion.h1>

        <p className="text-3xl text-blue-400 font-semibold mt-3 mb-2">
          Junior Backend Developer
        </p>
        <p className="text-xl text-gray-400 mb-8">Fresh Graduate SMK Telkom Malang • Siap Kerja</p>

        <div className="mb-8">
          <Typewriter
            words={["Laravel", "REST API", "PHP", "MySQL", "CodeIgniter"]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
          />
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-2xl font-medium text-lg transition-all active:scale-95 shadow-lg shadow-blue-500/30"
          >
            Lihat Projects Saya
          </a>
          <a
            href="/CV.pdf"
            target="_blank"
            className="border border-gray-300 hover:bg-white hover:text-black px-8 py-4 rounded-2xl font-medium text-lg transition-all active:scale-95"
          >
            Download CV
          </a>
        </div>

        <div className="mt-10 flex items-center gap-2 text-green-400 text-sm font-medium">
          <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
          Sedang mencari kesempatan Junior Backend Developer / Internship
        </div>
      </section>

      {/* ABOUT */}
      <motion.section
        id="about"
        className="max-w-5xl mx-auto px-6 py-28"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
      >
        <h2 className="text-5xl font-bold mb-8">About Me</h2>
        <div className="text-gray-300 text-lg leading-relaxed max-w-3xl">
          Fresh graduate SMK Telkom Malang jurusan Rekayasa Perangkat Lunak dengan spesialisasi{" "}
          <span className="text-blue-400 font-semibold">Laravel</span>. 
          Saya sangat antusias membangun sistem backend yang bersih, scalable, dan aman. 
          Sudah menyelesaikan beberapa proyek nyata selama sekolah dan memiliki 8 sertifikasi dari Dicoding.
          <br /><br />
          Siap bergabung sebagai <strong>Junior Backend Developer</strong> atau <strong>Internship</strong> untuk terus mengasah skill dan berkontribusi maksimal di tim pengembangan.
        </div>
      </motion.section>

      {/* SKILLS */}
      <section id="skills" className="bg-gray-900/70 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">Tech Stack</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Backend", items: ["PHP", "Laravel", "CodeIgniter 4", "REST API", "MySQL"] },
              { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React"] },
              { title: "Tools & Others", items: ["Git", "GitHub", "Postman", "VS Code", "Web Design"] },
            ].map((stack, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -12, scale: 1.03 }}
                className="bg-[#0f172a] backdrop-blur-xl p-8 rounded-3xl border border-gray-700 hover:border-blue-400 transition-all group"
              >
                <h3 className="text-2xl font-semibold mb-6 text-blue-400 group-hover:text-white">{stack.title}</h3>
                <ul className="space-y-3 text-gray-300">
                  {stack.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-blue-400">→</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-3xl font-semibold text-center mb-8">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Teamwork", "Effective Communication", "Creative Thinking", "Problem Solving"].map((skill) => (
                <span key={skill} className="bg-gray-800 text-gray-200 px-6 py-3 rounded-2xl text-sm font-medium hover:bg-blue-500 hover:text-white transition">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <motion.section
        id="education"
        className="max-w-5xl mx-auto px-6 py-28"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
      >
        <h2 className="text-5xl font-bold mb-12 text-center">Pendidikan</h2>
        <div className="bg-gray-900/50 border border-gray-700 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="text-2xl font-semibold">SMK Telkom Malang</h3>
              <p className="text-blue-400">Rekayasa Perangkat Lunak • Expertise: Laravel</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">2023 – 2026 (sedang berjalan)</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* EXPERIENCE */}
      <motion.section
        id="experience"
        className="max-w-5xl mx-auto px-6 py-28 bg-gray-950"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
      >
        <h2 className="text-5xl font-bold mb-12 text-center">Pengalaman</h2>
        <div className="max-w-2xl mx-auto bg-gray-900/70 border border-gray-700 rounded-3xl p-8">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>2025</span>
            <span>Demo Day Of Moklet Idea Challenge</span>
          </div>
          <h3 className="text-2xl font-semibold">Divisi Keamanan</h3>
          <p className="mt-4 text-gray-300">
            Bertanggung jawab menjaga ketertiban dan kelancaran acara, mengatur alur keluar-masuk peserta, serta mengasah kemampuan koordinasi dan kerja sama tim.
          </p>
        </div>
      </motion.section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-28">
        <h2 className="text-5xl font-bold mb-16 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              whileHover={{ scale: 1.04, rotate: 1 }}
              className="group bg-[#0f172a] border border-gray-700 p-7 rounded-3xl hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="h-2 w-12 bg-blue-400 rounded mb-6 group-hover:w-16 transition-all"></div>
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-6 line-clamp-3">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-xs bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-2xl">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-white font-medium"
              >
                Lihat Repository →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="bg-gray-900 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">Sertifikat</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-[#0f172a] border border-gray-700 rounded-3xl overflow-hidden group hover:border-blue-400 transition-all"
              >
                <a
                  href={`/certificates/${cert.filename}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="h-56 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                    {cert.filename.endsWith(".png") ? (
                      <Image
                        src={`/certificates/${cert.filename}`}
                        alt={cert.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="text-center">
                        <div className="text-8xl mb-4">📜</div>
                        <p className="text-blue-400 font-medium text-xl">PDF</p>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <span className="bg-white text-black px-6 py-3 rounded-2xl font-semibold text-sm flex items-center gap-2">
                        👁️ Lihat Sertifikat
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg leading-tight mb-1">{cert.title}</h3>
                    <p className="text-blue-400 text-sm">{cert.issuer} • {cert.date}</p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-28 text-center">
        <h2 className="text-5xl font-bold mb-6">Mari Bekerja Sama</h2>
        <p className="text-gray-400 max-w-md mx-auto mb-12">
          Terbuka untuk kesempatan kerja Junior Backend Developer, Fullstack Developer, atau magang. 
          Saya siap belajar cepat dan berkontribusi maksimal!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-2xl mx-auto">
          <div className="bg-gray-900 p-6 rounded-3xl">
            <p className="text-blue-400 text-sm mb-1">Email</p>
            <a href="mailto:asyfa.m.huda@gmail.com" className="block hover:underline">asyfa.m.huda@gmail.com</a>
          </div>
          <div className="bg-gray-900 p-6 rounded-3xl">
            <p className="text-blue-400 text-sm mb-1">GitHub</p>
            <a href="https://github.com/siipaakygy" target="_blank" className="block hover:underline">github.com/siipaakygy</a>
          </div>
          <div className="bg-gray-900 p-6 rounded-3xl">
            <p className="text-blue-400 text-sm mb-1">LinkedIn</p>
            <a href="https://www.linkedin.com/in/asyfa-miftahul-huda-100971375/" target="_blank" className="block hover:underline">Asyfa&apos; Miftahul Huda</a>
          </div>
        </div>
        <p className="mt-12 text-gray-500">Malang, Jawa Timur • +62 813-5888-0579</p>
      </section>

      <footer className="text-center py-8 border-t border-gray-800 text-gray-500 text-sm">
        © {new Date().getFullYear()} Asyfa&apos; Miftahul Huda • Fresh Graduate Junior Backend Developer
      </footer>
    </main>
  );
}