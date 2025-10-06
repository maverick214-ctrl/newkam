import { Mail, MapPin, Linkedin, GraduationCap, Code, Briefcase, Award, Users, Lightbulb, Database, Cpu, Box, FileCode, GitBranch } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

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

    return () => observer.disconnect();
  }, []);

  const TechBadge = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mr-2 mb-2 hover:bg-purple-200 transition-colors">
      {children}
    </span>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-pink-50 to-purple-100 pt-24 pb-40">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className={`relative max-w-6xl mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Avatar placeholder */}
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-xl animate-float">
            <span className="text-white text-5xl font-bold">K</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-4 tracking-tight drop-shadow-sm">
            Khushboo Shukla
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-light mb-6 tracking-wide">
            B.Tech Computer Science Engineering Student
          </p>
          <p className="text-lg md:text-xl text-purple-700 font-medium mb-10 tracking-wide">
            Aspiring Software Developer | Java • Python • C++
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-gray-700">
            <a href="mailto:khushbooshukla047@gmail.com" className="flex items-center gap-2 hover:text-purple-600 hover:scale-105 transition-all duration-300 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <Mail size={18} />
              <span>khushbooshukla047@gmail.com</span>
            </a>
            <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <MapPin size={18} />
              <span>Ujjain (M.P.), 456001</span>
            </div>
            <a href="https://www.linkedin.com/in/khushboo-shukla-96745b315/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-purple-600 hover:scale-105 transition-all duration-300 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <Linkedin size={18} />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>

        {/* Decorative wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white" fillOpacity="0.9"/>
          </svg>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-20 px-6 -mt-16 relative z-10">
        <div className="max-w-4xl mx-auto observe">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-purple-100">
            <div className="flex items-center justify-center mb-6">
              <Lightbulb className="text-purple-600 mr-3" size={36} />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wider">
                Professional Summary
              </h2>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center font-light">
              Motivated B.Tech Computer Science graduate skilled in programming languages like Java, Python, and C++.
              Experienced in software development and eager to apply my knowledge in a dynamic team environment.
              Passionate about emerging technologies, particularly Java, AI, and data analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 observe">
            <div className="flex items-center justify-center mb-4">
              <GraduationCap className="text-purple-600 mr-3" size={40} />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wider">
                Education
              </h2>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            <div className="observe bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-500 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">B.Tech (CSE)</h3>
              <p className="text-purple-700 font-semibold mb-2 text-lg">Mahakal Institute of Technology, Ujjain</p>
              <p className="text-gray-600 flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-purple-500 rounded-full"></span>
                2022 – Present | <span className="font-semibold text-purple-700">CGPA: 8.10</span> (up to 6th sem)
              </p>
            </div>

            <div className="observe bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-pink-500 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Senior Secondary</h3>
              <p className="text-purple-700 font-semibold mb-2 text-lg">Lokmanya Tilak Vidya Vihar HSS</p>
              <p className="text-gray-600 flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-pink-500 rounded-full"></span>
                2021 – 2022 | <span className="font-semibold text-purple-700">Grade: 78.4%</span>
              </p>
            </div>

            <div className="observe bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-400 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Secondary</h3>
              <p className="text-purple-700 font-semibold mb-2 text-lg">Lokmanya Tilak Vidya Vihar HSS</p>
              <p className="text-gray-600 flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-purple-400 rounded-full"></span>
                2019 – 2020 | <span className="font-semibold text-purple-700">Grade: 87.3%</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 observe">
            <div className="flex items-center justify-center mb-4">
              <Code className="text-purple-600 mr-3" size={40} />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wider">
                Projects
              </h2>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            <div className="observe bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-600 hover:-translate-y-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Box className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Library Management System</h3>
                  <div className="mb-4">
                    <TechBadge>Java</TechBadge>
                    <TechBadge>NetBeans</TechBadge>
                    <TechBadge>JavaDB</TechBadge>
                    <TechBadge>UML</TechBadge>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Designed a role-based console system handling 500+ records. Implemented core features like search, checkout,
                    and renewals using OOAD principles.
                  </p>
                </div>
              </div>
            </div>

            <div className="observe bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-pink-600 hover:-translate-y-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Cpu className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">GeminiParser: AI-Powered Resume Analysis Tool</h3>
                  <div className="mb-4">
                    <TechBadge>Python</TechBadge>
                    <TechBadge>Flask</TechBadge>
                    <TechBadge>spaCy</TechBadge>
                    <TechBadge>Gemini API</TechBadge>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Built a full-stack web app parsing and scoring resumes, improving candidate selection efficiency by 20%.
                  </p>
                </div>
              </div>
            </div>

            <div className="observe bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-500 hover:-translate-y-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <FileCode className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Email Fraud Detection</h3>
                  <div className="mb-4">
                    <TechBadge>Python</TechBadge>
                    <TechBadge>Pandas</TechBadge>
                    <TechBadge>Django</TechBadge>
                    <TechBadge>Flask</TechBadge>
                    <TechBadge>ML</TechBadge>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Engineered an ML system to classify fraudulent emails with 90% accuracy, including REST API integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internship */}
      <section className="py-20 px-6 bg-gradient-to-br from-white to-purple-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 observe">
            <div className="flex items-center justify-center mb-4">
              <Briefcase className="text-purple-600 mr-3" size={40} />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wider">
                Internship
              </h2>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          <div className="observe bg-white rounded-3xl p-8 shadow-xl border-l-4 border-purple-600 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Briefcase className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">C++ Intern</h3>
                <p className="text-purple-700 font-semibold mb-2 text-lg">Jobsense, Ujjain</p>
                <p className="text-gray-600 mb-4 font-medium">August 2023 – September 2023</p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Optimized C++ tools improving runtime by 15% and enhanced team software reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 observe">
            <div className="flex items-center justify-center mb-4">
              <Cpu className="text-purple-600 mr-3" size={40} />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wider">
                Skills & Tools
              </h2>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="observe bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <FileCode className="text-purple-600" size={28} />
                <h3 className="text-xl font-bold text-purple-700">Languages</h3>
              </div>
              <div>
                <TechBadge>C++</TechBadge>
                <TechBadge>Java</TechBadge>
                <TechBadge>Python</TechBadge>
                <TechBadge>HTML</TechBadge>
                <TechBadge>CSS</TechBadge>
                <TechBadge>JavaScript</TechBadge>
              </div>
            </div>

            <div className="observe bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <Box className="text-purple-600" size={28} />
                <h3 className="text-xl font-bold text-purple-700">Frameworks & APIs</h3>
              </div>
              <div>
                <TechBadge>Django</TechBadge>
                <TechBadge>Flask</TechBadge>
                <TechBadge>spaCy</TechBadge>
                <TechBadge>Google Gemini API</TechBadge>
              </div>
            </div>

            <div className="observe bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-purple-600" size={28} />
                <h3 className="text-xl font-bold text-purple-700">Databases</h3>
              </div>
              <div>
                <TechBadge>MySQL</TechBadge>
                <TechBadge>JavaDB (Derby)</TechBadge>
              </div>
            </div>

            <div className="observe bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <GitBranch className="text-purple-600" size={28} />
                <h3 className="text-xl font-bold text-purple-700">Tools</h3>
              </div>
              <div>
                <TechBadge>IntelliJ</TechBadge>
                <TechBadge>NetBeans</TechBadge>
                <TechBadge>StarUML</TechBadge>
                <TechBadge>Git</TechBadge>
              </div>
            </div>

            <div className="observe bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="text-purple-600" size={28} />
                <h3 className="text-xl font-bold text-purple-700">Concepts</h3>
              </div>
              <div>
                <TechBadge>OOPS</TechBadge>
                <TechBadge>DBMS</TechBadge>
                <TechBadge>Data Structures</TechBadge>
                <TechBadge>Algorithms</TechBadge>
                <TechBadge>SDLC</TechBadge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 observe">
            <div className="flex items-center justify-center mb-4">
              <Award className="text-purple-600 mr-3" size={40} />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wider">
                Certifications
              </h2>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            <div className="observe bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <Award className="text-purple-600 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Java Programming</h3>
                  <p className="text-purple-700 font-semibold">Scalar Academy | January 2024 – July 2024</p>
                </div>
              </div>
            </div>

            <div className="observe bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-pink-500 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <Award className="text-purple-600 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Data Science Workshop</h3>
                  <p className="text-purple-700 font-semibold">Mahakal Institute of Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extracurricular */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 observe">
            <div className="flex items-center justify-center mb-4">
              <Users className="text-purple-600 mr-3" size={40} />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wider">
                Extracurricular
              </h2>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          <div className="observe bg-white rounded-3xl p-8 shadow-xl text-center border-l-4 border-purple-500">
            <Users className="text-purple-600 mx-auto mb-4" size={40} />
            <p className="text-gray-700 text-lg font-medium">
              Volunteer, Swavalambi Bharat Abhiyan (SBA), Ujjain
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-20 w-40 h-40 bg-pink-300 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h3 className="text-3xl font-bold mb-6 tracking-wide">Khushboo Shukla</h3>
          <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
            <a href="mailto:khushbooshukla047@gmail.com" className="flex items-center gap-2 hover:text-purple-300 transition-all duration-300 hover:scale-105">
              <Mail size={18} />
              <span>khushbooshukla047@gmail.com</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Ujjain (M.P.), 456001</span>
            </div>
            <a href="https://www.linkedin.com/in/khushboo-shukla-96745b315/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-purple-300 transition-all duration-300 hover:scale-105">
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="h-px w-32 bg-purple-400 mx-auto mb-6"></div>
          <p className="text-purple-200 text-sm font-light">
            © 2025 Khushboo Shukla. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
