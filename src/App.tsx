import { Phone, Mail, CheckCircle, Calendar, Headphones, Share2, TrendingUp, Mic, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#1a1a1a]' : 'bg-[#fef3e2]'}`}>
      {/* Hero Section */}
      <section
        className="relative text-white overflow-hidden bg-gradient-to-br from-[#f59e6a] to-[#e87545]"
      >

        <div className="relative z-10">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex justify-between items-center">
              <div className="flex-1"></div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-center animate-fadeIn">McFall Podcast Productions</h1>
              <div className="flex-1 flex justify-end">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-3 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 border border-white/20 animate-fadeIn delay-500"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun className="w-6 h-6 transition-transform duration-300 hover:rotate-180" /> : <Moon className="w-6 h-6 transition-transform duration-300 hover:rotate-180" />}
                </button>
              </div>
            </div>
          </nav>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-10 lg:pt-0 lg:pb-17">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-0 animate-fadeInUp">
                A Complete Podcast Partner
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed animate-fadeInUp delay-200">
                From editing and publishing to growth and monetization strategy—we handle it all so your podcast sounds as world-class as your ideas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp delay-300">
                <a
                  href="https://calendly.com/l-mcfall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#fab12f] hover:bg-[#fa812f] text-[#2a3a4a] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Book a Call
                </a>
                <a
                  href="mailto:l.nickoloff.mcfall@gmail.com"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white/20"
                >
                  <Mail className="w-5 h-5" />
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Top Podcasts */}
      <section className={`py-20 ${darkMode ? 'bg-[#1a1a1a]' : 'bg-[#fef3e2]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-[#2a3a4a]'} mb-4 text-center animate-fadeInUp`}>Trusted by Top Podcasts</h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} text-center mb-12 animate-fadeInUp delay-100`}>We've helped leading voices build, grow, and scale their shows</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`${darkMode ? 'bg-[#2a2a2a]' : 'bg-white'} p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-center group animate-fadeInUp`}>
              <a
                href="https://podcasts.apple.com/us/podcast/the-school-of-greatness/id596047499"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="/images/School of Greatness.jpg"
                    alt="The School of Greatness"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-[#2a3a4a]'} mb-1 group-hover:text-[#fa812f] transition-colors duration-300`}>The School of Greatness</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>with Lewis Howes</p>
              </a>
            </div>

            <div className={`${darkMode ? 'bg-[#2a2a2a]' : 'bg-white'} p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-center group animate-fadeInUp`}>
              <a
                href="https://podcasts.apple.com/us/podcast/well-beyond-40/id911502027"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="/images/Well Beyond 40 Podcast.jpeg"
                    alt="Well Beyond 40"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-[#2a3a4a]'} mb-1 group-hover:text-[#fa812f] transition-colors duration-300`}>Well Beyond 40</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>with JJ Virgin</p>
              </a>
            </div>

            <div className={`${darkMode ? 'bg-[#2a2a2a]' : 'bg-white'} p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-center group animate-fadeInUp`}>
              <a
                href="https://podcasts.apple.com/us/podcast/the-big-shift-the-business-of-making-a-difference/id977754152"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="/images/The Big Shift.jpg"
                    alt="The Big Shift"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-[#2a3a4a]'} mb-1 group-hover:text-[#fa812f] transition-colors duration-300`}>The Big Shift</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>with Bill Baren</p>
              </a>
            </div>

            <div className={`${darkMode ? 'bg-[#2a2a2a]' : 'bg-white'} p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-center group animate-fadeInUp`}>
              <a
                href="https://podcasts.apple.com/us/podcast/bound-by-art-a-tattoo-artists-survival-guide/id1777930586"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="/images/Bound By Art.jpg"
                    alt="Bound By Art"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-[#2a3a4a]'} mb-1 group-hover:text-[#fa812f] transition-colors duration-300`}>Bound By Art</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>with Missi Blue</p>
                 <div className={`${darkMode ? 'bg-[#2a2a2a]' : 'bg-white'} p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-center group animate-fadeInUp`}>
              <a
                href="https://podcasts.apple.com/us/podcast/the-school-of-greatness/id596047499"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="/images/School of Greatness.jpg"
                    alt="The School of Greatness"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-[#2a3a4a]'} mb-1 group-hover:text-[#fa812f] transition-colors duration-300`}>The School of Greatness</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>with Lewis Howes</p>
              </a>
            </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-20 ${darkMode ? 'bg-[#0f0f0f]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-[#2a3a4a]'} mb-12 text-center animate-fadeInUp`}>What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`${darkMode ? 'bg-[#2a2a2a]' : 'bg-white'} p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fadeInUp border-l-4 border-[#fa812f]`}>
              <div className="mb-4">
                <svg className="w-12 h-12 text-[#fa812f] opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed mb-6 italic`}>
                "Lauren has an extraordinary ability to align creative, technical, and operational teams, ensuring clear communication and efficient workflows. Her leadership on our podcast helped it surpass 23 million downloads by streamlining production with automation and AI tools, cutting creation time significantly. With her organizational skill, technical expertise, and calm, solutions-oriented approach, Lauren has had a lasting impact on our growth and success."
              </p>
              <p className={`${darkMode ? 'text-white' : 'text-[#2a3a4a]'} font-bold text-lg`}>
                - JJ Virgin
              </p>
            </div>

            <div className={`${darkMode ? 'bg-[#2a2a2a]' : 'bg-white'} p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fadeInUp delay-200 border-l-4 border-[#fa812f]`}>
              <div className="mb-4">
                <svg className="w-12 h-12 text-[#fa812f] opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed mb-6 italic`}>
                "Working with Scott will make you wish he were a full-time employee at your company. He is one of the most hardworking and dedicated contractors I've ever worked with. You'd be crazy to not bring him onto any project your team is tackling."
              </p>
              <p className={`${darkMode ? 'text-white' : 'text-[#2a3a4a]'} font-bold text-lg`}>
                - Adam L. (School of Greatness)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className={`py-20 ${darkMode ? 'bg-[#0f0f0f]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-[#2a3a4a]'} mb-12 text-center animate-fadeInUp`}>What Sets Us Apart</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className={`${darkMode ? 'bg-[#2a2a2a]' : 'bg-white'} p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fadeInUp`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#fa812f] rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-[#2a3a4a]'} mb-2`}>US-Based Team Working 9am–6pm ET</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed`}>Work with a dedicated team in your timezone for seamless communication.</p>
                </div>
              </div>
            </div>

            <div className={`${darkMode ? 'bg-[#2a2a2a]' : 'bg-white'} p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fadeInUp`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#fa812f] rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-[#2a3a4a]'} mb-2`}>Guaranteed Communication</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed`}>Multiple touchpoints daily for peace of mind, with advance notice for any time off.</p>
                </div>
              </div>
            </div>

            <div className={`${darkMode ? 'bg-[#2a2a2a]' : 'bg-white'} p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fadeInUp`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#fa812f] rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-[#2a3a4a]'} mb-2`}>AI-Powered, Human-Perfected</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed`}>We combine smart AI tools with careful review by our US-based team of college-educated, native English speakers.</p>
                </div>
              </div>
            </div>

            <div className={`${darkMode ? 'bg-[#2a2a2a]' : 'bg-white'} p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fadeInUp`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#fa812f] rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-[#2a3a4a]'} mb-2`}>Proven Experience with Top Voices</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed`}>Worked with industry leaders like JJ Virgin & Lewis Howes.</p>
                </div>
              </div>
            </div>

            <div className={`${darkMode ? 'bg-[#2a2a2a]' : 'bg-white'} p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fadeInUp`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#fa812f] rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-[#2a3a4a]'} mb-2`}>Brand-First Approach</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed`}>We immerse ourselves in your voice & tone to maintain authentic consistency.</p>
                </div>
              </div>
            </div>

            <div className={`${darkMode ? 'bg-[#2a2a2a]' : 'bg-white'} p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fadeInUp`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#fa812f] rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-[#2a3a4a]'} mb-2`}>Strategic Partnership</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed`}>This isn't just editing. It's strategic partnership to grow your podcast.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results We Deliver */}
      <section className={`py-10 ${darkMode ? 'bg-[#0f0f0f]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-[#2a3a4a]'} mb-5 text-center animate-fadeInUp`}>Results We Deliver</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className={`${darkMode ? 'bg-[#2a2a2a]' : 'bg-white'} p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-center animate-fadeInUp delay-100 group`}>
              <h3 className="text-5xl font-bold text-[#fa812f] mb-4 transition-transform duration-300 group-hover:scale-110">50%</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                Reduction in project creation time by introducing Asana best practices
              </p>
            </div>

            <div className={`${darkMode ? 'bg-[#2a2a2a]' : 'bg-white'} p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-center animate-fadeInUp delay-300 group`}>
              <h3 className="text-5xl font-bold text-[#fa812f] mb-4 transition-transform duration-300 group-hover:scale-110">27%</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                Increased watch time on Youtube in one month
              </p>
            </div>
            
            <div className={`${darkMode ? 'bg-[#2a2a2a]' : 'bg-white'} p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-center animate-fadeInUp delay-200 group`}>
              <h3 className="text-5xl font-bold text-[#fa812f] mb-4 transition-transform duration-300 group-hover:scale-110">15.8M+</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                Podcast downloads produced since 2020
              </p>
            </div>

            <div className={`${darkMode ? 'bg-[#2a2a2a]' : 'bg-white'} p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-center animate-fadeInUp delay-400 group`}>
              <h3 className="text-5xl font-bold text-[#fa812f] mb-4 transition-transform duration-300 group-hover:scale-110">60%</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                Expanded Facebook reach in one month, maximizing exposure for podcast-driven posts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className={`py-20 ${darkMode ? 'bg-[#1a1a1a]' : 'bg-[#fef3e2]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-[#2a3a4a]'} mb-4 text-center animate-fadeInUp`}>Our Services</h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} text-center mb-12 max-w-3xl mx-auto animate-fadeInUp delay-100`}>
            End-to-end podcast production services to help you launch, grow, and monetize your show
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#f59e6a] to-[#e87545] p-8 rounded-2xl text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp delay-200 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#fab12f] rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Launch & Pre-Production</h3>
                  <p className="text-gray-200 leading-relaxed">
                    We take care of guest outreach, scheduling, and interview prep—so you show up ready to shine.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#f59e6a] to-[#e87545] p-8 rounded-2xl text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp delay-200 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#fab12f] rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Headphones className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Editing & Post-Production</h3>
                  <p className="text-gray-200 leading-relaxed">
                    Crystal-clear audio and polished video. Distractions removed, branded intros/outros added, captions and graphics included.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#f59e6a] to-[#e87545] p-8 rounded-2xl text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp delay-200 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#fab12f] rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Share2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Publishing & Promotion</h3>
                  <p className="text-gray-200 leading-relaxed">
                    We upload and distribute across platforms (Apple, Spotify, etc.), plus create SEO show notes and custom social assets (2 reels + 1 graphic per episode).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#f59e6a] to-[#e87545] p-8 rounded-2xl text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp delay-200 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#fab12f] rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Growth & Monetization</h3>
                  <p className="text-gray-200 leading-relaxed">
                    From sponsorships and host-read ads to premium content and programmatic monetization, we help your podcast generate revenue while growing its reach with strategy ideation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className={`py-20 ${darkMode ? 'bg-[#0f0f0f]' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-[#2a3a4a]'} mb-6 animate-fadeInUp`}>Pricing Designed Around You</h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 leading-relaxed animate-fadeInUp delay-100`}>
            Every podcast is different. That's why we don't force flat rates. Instead, we design custom packages that match your production needs, release schedule, and growth goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fadeInUp delay-200">
            <div className={`flex items-center gap-2 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <CheckCircle className="w-6 h-6 text-[#fa812f]" />
              <span>Competitive rates</span>
            </div>
            <div className={`flex items-center gap-2 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <CheckCircle className="w-6 h-6 text-[#fa812f]" />
              <span>Flexible add-ons</span>
            </div>
            <div className={`flex items-center gap-2 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <CheckCircle className="w-6 h-6 text-[#fa812f]" />
              <span>Audio-only or Audio + Video options</span>
            </div>
          </div>
          <a
            href="mailto:l.nickoloff.mcfall@gmail.com"
            className="inline-flex items-center gap-2 bg-[#fa812f] hover:bg-[#dd0303] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fadeInUp delay-300"
          >
            <Mail className="w-5 h-5" />
            Request a Custom Quote
          </a>
        </div>
      </section>

      {/* Turnaround */}
      <section className={`py-20 ${darkMode ? 'bg-[#1a1a1a]' : 'bg-[#fef3e2]'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-[#2a3a4a]'} mb-6`}>Turnaround You Can Count On</h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
            Your audience expects consistency. We'll align on turnaround timelines and work ahead of schedule so you never miss a release. Our mission is to <span className={`font-semibold ${darkMode ? 'text-white' : 'text-[#2a3a4a]'}`}>deliver early, not just on time</span>.
          </p>
        </div>
      </section>

      {/* Content Distribution Graph */}
      <section className={`py-20 ${darkMode ? 'bg-[#0f0f0f]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-[#2a3a4a]'} mb-4 text-center animate-fadeInUp`}>Maximize Your Reach Across All Platforms</h3>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} text-center mb-12 max-w-3xl mx-auto animate-fadeInUp delay-100`}>
              One recording becomes multiple touchpoints. We transform your podcast into content optimized for every major platform.
            </p>

            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
                {/* Audio Content */}
                <div className="flex-1 w-full animate-slideInLeft">
                  <div className="bg-gradient-to-br from-[#4a90e2] to-[#2563eb] p-8 rounded-2xl text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <Headphones className="w-16 h-16 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold mb-4">AUDIO</h4>
                    <p className="text-sm text-white/90 mb-6">Full podcast episodes optimized for listening</p>
                    <div className="space-y-3">
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 hover:translate-x-1">
                        <p className="font-semibold">Apple Podcasts</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 hover:translate-x-1">
                        <p className="font-semibold">Spotify</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 hover:translate-x-1">
                        <p className="font-semibold">YouTube Music</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 hover:translate-x-1">
                        <p className="font-semibold">Amazon Music</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="flex-shrink-0 animate-scaleIn delay-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#9333ea] to-[#7c3aed] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <Share2 className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Video Content */}
                <div className="flex-1 w-full animate-slideInRight">
                  <div className="bg-gradient-to-br from-[#fa812f] to-[#dd0303] p-8 rounded-2xl text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 7l-7 5 7 5V7z"/>
                      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                    </svg>
                    <h4 className="text-2xl font-bold mb-4">VIDEO</h4>
                    <p className="text-sm text-white/90 mb-6">Clips, reels, and full episodes for visual platforms</p>
                    <div className="space-y-3">
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 hover:translate-x-1">
                        <p className="font-semibold">YouTube</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 hover:translate-x-1">
                        <p className="font-semibold">Instagram Reels</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 hover:translate-x-1">
                        <p className="font-semibold">TikTok</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 hover:translate-x-1">
                        <p className="font-semibold">Facebook</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} font-medium`}>
                  Every episode is optimized for each platform's unique format and audience expectations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className={`py-20 ${darkMode ? 'bg-[#1a1a1a]' : 'bg-[#fef3e2]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-[#2a3a4a]'} mb-4 text-center animate-fadeInUp`}>Meet the Team</h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} text-center mb-16 max-w-3xl mx-auto animate-fadeInUp delay-100`}>
            At McFall Podcast Productions, we're more than a production company—we're a strategic partner for your voice, brand, and growth.
          </p>

          <div className="space-y-16">
            {/* Lauren McFall */}
            <div className={`${darkMode ? 'bg-[#2a2a2a]' : 'bg-white'} rounded-2xl shadow-sm p-8 lg:p-12 hover:shadow-lg transition-all duration-300 animate-fadeInUp`}>
              <div className="md:flex md:items-start md:gap-12">
                <div className="flex justify-center md:justify-start mb-6 md:mb-0 flex-shrink-0">
                  <div className="w-56 h-56 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                    <img
                      src="/images/lauren.png"
                      alt="Lauren McFall"
                      className="w-full h-full object-cover object-[50%_10%] hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-[#2a3a4a]'} mb-2`}>Lauren McFall</h3>
                  <p className="text-lg text-[#fa812f] font-semibold mb-4">Co-Founder & Executive Producer</p>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-4`}>
                    Lauren brings a unique edge to podcast production with dual master's degrees in Psychology and Marketing. This combination means she not only understands how to create content that resonates emotionally with your audience, but also how to position and promote your podcast for maximum reach and impact.
                  </p>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-4`}>
                    With over a decade of production experience and a track record of supporting top voices like JJ Virgin, Lauren specializes in streamlining the entire process—from guest booking and prep to editing, publishing, and growth strategy.
                  </p>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    She leads a dedicated U.S.-based team of producers and editors who combine AI-powered tools with meticulous human review, ensuring your show sounds polished, professional, and on-brand every time.
                  </p>
                </div>
              </div>
            </div>

            {/* Scott McFall */}
            <div className={`${darkMode ? 'bg-[#2a2a2a]' : 'bg-white'} rounded-2xl shadow-sm p-8 lg:p-12 hover:shadow-lg transition-all duration-300 animate-fadeInUp`}>
              <div className="md:flex md:items-start md:gap-12">
                <div className="flex justify-center md:justify-start mb-6 md:mb-0 flex-shrink-0">
                  <div className="w-56 h-56 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                    <img
                        src="/images/Scott headshot.png"
                        alt="Scott McFall"
                        className="w-full h-full object-cover object-[50%_30%] hover:scale-105 transition-transform duration-300"
                     />

                  </div>
                </div>
                <div className="flex-1">
                  <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-[#2a3a4a]'} mb-2`}>Scott McFall</h3>
                  <p className="text-lg text-[#fa812f] font-semibold mb-4">Co-Founder & Director of Editing & AI Innovation</p>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-4`}>
                    Scott is the technical backbone of our productions, blending years of hands-on editing expertise with a forward-looking mastery of AI-driven tools. As Co-Founder and Lead Editor, he ensures every episode is not only clean, balanced, and broadcast-ready, but also enhanced through the latest innovations in post-production technology.
                  </p>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-4`}>
                    With a background in sound design, advanced editing, and workflow automation, Scott's specialty lies in taking raw recordings and transforming them into compelling, immersive listening experiences. His integration of AI into the editing process accelerates production timelines without sacrificing the human touch, allowing for both precision and creativity in every cut.
                  </p>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    Whether it's finessing audio for clarity, building efficient systems, or pushing the boundaries of what technology can do for podcasting, Scott makes sure each show delivers at the highest level of quality—consistently, and on time.
                  </p>
                </div>
              </div>
            </div>

            {/* Wayne Redden */}
            <div className={`${darkMode ? 'bg-[#2a2a2a]' : 'bg-white'} rounded-2xl shadow-sm p-8 lg:p-12 hover:shadow-lg transition-all duration-300 animate-fadeInUp`}>
              <div className="md:flex md:items-start md:gap-12">
                <div className="flex justify-center md:justify-start mb-6 md:mb-0 flex-shrink-0">
                  <div className="w-56 h-56 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                    <img
                      src="/images/Wayne headshot.png"
                      alt="Wayne Redden"
                      className="w-full h-full object-cover object-[50%_10%] transform [scale:1.10] hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-[#2a3a4a]'} mb-2`}>Wayne Redden</h3>
                  <p className="text-lg text-[#fa812f] font-semibold mb-4">Assistant Editor</p>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-4`}>
                    Wayne brings a trained musician's ear and a meticulous approach to every episode as our Podcast Editor. A Berklee College of Music graduate with a Bachelor's degree in Music, Wayne combines his formal training with hands-on post-production expertise to ensure each episode is balanced, clear, and professional.
                  </p>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    He supports the production team by refining audio, smoothing edits, and maintaining consistent sound quality, allowing shows to shine without technical distractions. Wayne's musical background and attention to detail make him an essential part of the team, helping every podcast reach its full sonic potential.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className={`text-xl ${darkMode ? 'text-white' : 'text-[#2a3a4a]'} font-semibold`}>
              When you work with McFall Podcast Productions, you're not just getting technical support—you're gaining a partner who knows how to grow, engage, and monetize an audience.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#f59e6a] to-[#e87545] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Podcast?</h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Let's talk about how we can make your show sound as professional as the message behind it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/l-mcfall"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#fab12f] hover:bg-[#fa812f] text-[#2a3a4a] px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Book a Call
            </a>
            <a
              href="mailto:l.nickoloff.mcfall@gmail.com"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-4 rounded-lg font-semibold text-lg transition-colors border border-white/20"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-[#0f0f0f]' : 'bg-[#2a3a4a]'} text-white py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">McFall Podcast Productions</h3>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-300'} mb-6`}>Your Complete Podcast Partner</p>
          <p className={`${darkMode ? 'text-gray-500' : 'text-gray-400'} text-sm mt-8`}>&copy; {new Date().getFullYear()} McFall Podcast Productions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
