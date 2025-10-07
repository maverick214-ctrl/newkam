import { Mail, MapPin, Linkedin, GraduationCap, Code, Briefcase, Award, Users, Sparkles, Zap, Github, ExternalLink, ArrowUpRight, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.observe').forEach((el) => observer.observe(el));

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const TechBadge = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 text-violet-700 rounded-lg text-xs font-medium hover:from-violet-500/20 hover:to-purple-500/20 transition-all duration-300 hover:scale-105">
      {children}
    </span>
  );

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Cursor follower effect */}
      <div
        className="pointer-events-none fixed w-96 h-96 rounded-full bg-gradient-to-r from-violet-300/20 to-purple-300/20 blur-3xl transition-all duration-500 ease-out z-0"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

        <div className={`relative z-10 max-w-5xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-violet-200 rounded-full mb-8 shadow-lg hover:shadow-xl transition-shadow">
            <Sparkles className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-medium text-violet-700">Open to opportunities</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Khushboo</span>
            <br />
            <span className="text-slate-800">Shukla</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-4 font-light">
            B.Tech Computer Science Engineering Student
          </p>

          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
            Crafting elegant solutions with <span className="text-violet-600 font-semibold">Java</span>, <span className="text-violet-600 font-semibold">Python</span> & <span className="text-violet-600 font-semibold">C++</span>
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:khushbooshukla047@gmail.com"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-violet-600 text-white rounded-xl font-medium hover:bg-violet-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/khushboo-shukla-96745b315/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-medium hover:border-violet-600 hover:text-violet-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-sm text-slate-500">
            <MapPin className="w-4 h-4" />
            <span>Ujjain, Madhya Pradesh</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-slate-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto observe">
          <div className="bg-white rounded-3xl p-10 md:p-16 shadow-2xl border border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full blur-3xl opacity-50"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-slate-800">About Me</h2>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">
                Motivated B.Tech Computer Science graduate skilled in programming languages like Java, Python, and C++.
                Experienced in software development and eager to apply my knowledge in a dynamic team environment.
                Passionate about emerging technologies, particularly Java, AI, and data analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 observe">
            <h2 className="text-5xl font-bold text-slate-800 mb-4">Education</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            {[
              {
                degree: "B.Tech (CSE)",
                institution: "Mahakal Institute of Technology, Ujjain",
                period: "2022 – Present",
                grade: "CGPA: 8.10 (up to 6th sem)",
                color: "from-violet-500 to-purple-600"
              },
              {
                degree: "Senior Secondary",
                institution: "Lokmanya Tilak Vidya Vihar HSS",
                period: "2021 – 2022",
                grade: "Grade: 78.4%",
                color: "from-purple-500 to-pink-600"
              },
              {
                degree: "Secondary",
                institution: "Lokmanya Tilak Vidya Vihar HSS",
                period: "2019 – 2020",
                grade: "Grade: 87.3%",
                color: "from-pink-500 to-rose-600"
              }
            ].map((item, index) => (
              <div key={index} className="observe group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-violet-300">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{item.degree}</h3>
                    <p className="text-lg text-violet-600 font-semibold mb-2">{item.institution}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                      <span>{item.period}</span>
                      <span className="font-bold text-violet-700">{item.grade}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 observe">
            <h2 className="text-5xl font-bold text-slate-800 mb-4">Featured Projects</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Library Management System",
                description: "Designed a role-based console system handling 500+ records. Implemented core features like search, checkout, and renewals using OOAD principles.",
                tech: ["Java", "NetBeans", "JavaDB", "UML"],
                icon: Code,
                gradient: "from-violet-500 to-purple-600"
              },
              {
                title: "GeminiParser: AI Resume Analyzer",
                description: "Built a full-stack web app parsing and scoring resumes, improving candidate selection efficiency by 20%.",
                tech: ["Python", "Flask", "spaCy", "Gemini API"],
                icon: Zap,
                gradient: "from-purple-500 to-pink-600"
              },
              {
                title: "Email Fraud Detection",
                description: "Engineered an ML system to classify fraudulent emails with 90% accuracy, including REST API integration.",
                tech: ["Python", "Pandas", "Django", "Flask", "ML"],
                icon: Sparkles,
                gradient: "from-pink-500 to-rose-600"
              }
            ].map((project, index) => (
              <div key={index} className="observe group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-violet-300 hover:-translate-y-2">
                <div className={`inline-flex w-14 h-14 bg-gradient-to-br ${project.gradient} rounded-2xl items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <project.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-violet-600 transition-colors">{project.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <TechBadge key={i}>{tech}</TechBadge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 observe">
            <h2 className="text-5xl font-bold text-slate-800 mb-4">Experience</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="observe max-w-4xl mx-auto">
            <div className="group bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-violet-300">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">C++ Intern</h3>
                  <p className="text-lg text-violet-600 font-semibold mb-2">Jobsense, Ujjain</p>
                  <p className="text-slate-500 mb-4 font-medium">August 2023 – September 2023</p>
                  <p className="text-slate-600 leading-relaxed">
                    Optimized C++ tools improving runtime by 15% and enhanced team software reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 observe">
            <h2 className="text-5xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Languages", items: ["C++", "Java", "Python", "HTML", "CSS", "JavaScript"] },
              { title: "Frameworks", items: ["Django", "Flask", "spaCy", "Gemini API"] },
              { title: "Databases", items: ["MySQL", "JavaDB (Derby)"] },
              { title: "Tools", items: ["IntelliJ", "NetBeans", "StarUML", "Git"] },
              { title: "Concepts", items: ["OOPS", "DBMS", "DSA", "Algorithms", "SDLC"] }
            ].map((category, index) => (
              <div key={index} className="observe bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-violet-300">
                <h3 className="text-xl font-bold text-slate-800 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <TechBadge key={i}>{item}</TechBadge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 observe">
            <h2 className="text-5xl font-bold text-slate-800 mb-4">Certifications</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Java Programming", org: "Scalar Academy", period: "January 2024 – July 2024" },
              { name: "Data Science Workshop", org: "Mahakal Institute of Technology", period: "" }
            ].map((cert, index) => (
              <div key={index} className="observe group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-violet-300">
                <div className="flex gap-4">
                  <Award className="w-10 h-10 text-violet-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{cert.name}</h3>
                    <p className="text-violet-600 font-semibold">{cert.org}</p>
                    {cert.period && <p className="text-sm text-slate-500 mt-1">{cert.period}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurricular */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto observe">
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-12 text-center border border-violet-200 shadow-xl">
            <Users className="w-16 h-16 text-violet-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Community Involvement</h2>
            <p className="text-lg text-slate-600">
              Volunteer, Swavalambi Bharat Abhiyan (SBA), Ujjain
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-slate-900 text-white py-20 px-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-4 gradient-text">Khushboo Shukla</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                B.Tech Computer Science student crafting innovative solutions and pushing the boundaries of technology.
              </p>
              <div className="flex gap-3">
                <a href="mailto:khushbooshukla047@gmail.com" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-violet-600 transition-all duration-300 hover:scale-110 border border-white/10" aria-label="Email">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/khushboo-shukla-96745b315/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-violet-600 transition-all duration-300 hover:scale-110 border border-white/10" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {["Education", "Projects", "Skills", "Certifications"].map((item, index) => (
                  <li key={index}>
                    <a href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">Contact</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                  <a href="mailto:khushbooshukla047@gmail.com" className="hover:text-white transition-colors">
                    khushbooshukla047@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Ujjain (M.P.), 456001</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>© 2025 Khushboo Shukla. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
