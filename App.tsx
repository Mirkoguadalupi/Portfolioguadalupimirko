
import React, { useState, useEffect } from 'react';
import { EXPERIENCES, EDUCATION, CASE_STUDIES } from './constants';

interface NavItemProps {
  href: string;
  label: string;
  icon: string;
  active: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, label, icon, active }) => (
  <a 
    href={href} 
    className={`flex items-center space-x-3 px-5 py-3 rounded-xl transition-all duration-300 group ${
      active 
        ? 'bg-[#d0b276] text-black shadow-lg shadow-[#d0b276]/20' 
        :

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'education', 'cases', 'contact'];
      const current = sections.find(s => {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top >= -300 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Navigation Sidebar */}
      <nav className="lg:w-72 lg:h-screen lg:fixed left-0 top-0 glass border-r border-white/5 z-50 p-8 hidden lg:flex flex-col">
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-2xl gold-gradient p-0.5 mb-5 rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="bg-[#0a0a0a] w-full h-full rounded-2xl flex items-center justify-center text-gold text-2xl font-black font-display">
              MG
            </div>
          </div>
          <h1 className="text-lg font-bold font-display tracking-tight text-white uppercase leading-tight">
            Mirko<br/>Guadalupi
          </h1>
        </div>
        
        <div className="space-y-3 flex-1 overflow-y-auto">
          <NavItem href="#home" label="Home" icon="fa-home" active={activeSection === 'home'} />
          <NavItem href="#about" label="Chi Sono" icon="fa-user" active={activeSection === 'about'} />
          <NavItem href="#experience" label="Esperienza" icon="fa-briefcase" active={activeSection === 'experience'} />
          <NavItem href="#education" label="Formazione" icon="fa-graduation-cap" active={activeSection === 'education'} />
          <NavItem href="#cases" label="Portfolio" icon="fa-folder-open" active={activeSection === 'cases'} />
          <NavItem href="#contact" label="Contatti" icon="fa-paper-plane" active={activeSection === 'contact'} />
        </div>

        <div className="pt-8 border-t border-white/5 text-[10px] text-gray-500 uppercase tracking-widest text-center">
          Digital Marketing Specialist
        </div>
      </nav>

      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-50 glass p-5 flex justify-between items-center border-b border-white/5">
        <span className="font-display font-black text-gold">M. GUADALUPI</span>
        <div className="flex space-x-5 text-white/70">
          <a href="#home"><i className="fa fa-home"></i></a>
          <a href="#contact"><i className="fa fa-envelope"></i></a>
        </div>
      </header>

      {/* Main Content */}
      <main className="lg:ml-72 flex-1">
        
        {/* HERO - Back to original text-only style */}
        <section id="home" className="min-h-screen flex items-center px-8 md:px-20 py-20 relative overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#d0b276] rounded-full blur-[150px] opacity-10"></div>
          <div className="max-w-4xl z-10 reveal">
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-sm mb-6 block">Digital Strategist</span>
            <h1 className="text-6xl md:text-8xl font-black font-display leading-[0.95] text-white mb-10 tracking-tighter">
              DESIGNING<br/><span className="text-transparent bg-clip-text gold-gradient">THE FUTURE</span><br/>OF BRANDS.
            </h1>
            <p className="text-xl text-gray-400 max-w-xl mb-12 leading-relaxed">
              Specializzato in marketing digitale, content strategy e brand positioning. Trasformo dati e creatività in connessioni reali.
            </p>
            <div className="flex flex-wrap gap-5">
              <a href="#cases" className="px-10 py-4 gold-gradient text-black font-bold rounded-full hover:scale-105 transition-all shadow-xl shadow-gold/20">Vedi Progetti</a>
              <a href="#contact" className="px-10 py-4 border border-white/10 hover:border-gold hover:text-gold rounded-full transition-all">Lavoriamo insieme</a>
            </div>
          </div>
        </section>

        {/* ABOUT - Back to text left, image right */}
        <section id="about" className="py-32 px-8 md:px-20 glass">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-display font-black text-white uppercase tracking-tighter">About Me</h2>
              <div className="h-1 w-20 gold-gradient"></div>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>Nato a Firenze nel 1996, unisco <span className="text-white font-bold">creatività e analisi</span> per costruire identità brand chiare e riconoscibili.</p>
                <p>Lavoro su strategie digitali, pianificazione editoriale e branding, interpretando i dati per costruire soluzioni efficaci orientate ai risultati.</p>
              </div>
              <div className="grid grid-cols-2 gap-5 pt-5">
                <div className="accent-glass p-6 rounded-3xl">
                  <i className="fa fa-chart-line text-gold text-2xl mb-4"></i>
                  <h4 className="text-white font-bold mb-2">Strategy</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Performance & Data</p>
                </div>
                <div className="accent-glass p-6 rounded-3xl">
                  <i className="fa fa-pen-nib text-gold text-2xl mb-4"></i>
                  <h4 className="text-white font-bold mb-2">Creative</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Graphics & Video</p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-2 gold-gradient opacity-20 blur-xl group-hover:opacity-40 transition-all rounded-[40px]"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=800" 
                alt="Mirko Profile" 
                className="rounded-[40px] border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </section>

        {/* EXPERIENCE - Maintains alternating layout */}
        <section id="experience" className="py-32 px-8 md:px-20">
          <h2 className="text-4xl font-display font-black text-white uppercase tracking-tighter mb-24 text-center">Work Experience</h2>
          <div className="space-y-32 max-w-6xl mx-auto">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center group`}>
                <div className={`lg:w-2/3 space-y-6 text-center ${i % 2 === 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                  <div className={`flex items-center space-x-4 ${i % 2 !== 0 ? 'lg:flex-row-reverse lg:space-x-reverse' : ''}`}>
                    <span className="text-gold font-black text-4xl opacity-30 group-hover:opacity-100 transition-opacity duration-500">0{i+1}</span>
                    <div className="h-px bg-white/10 flex-1"></div>
                  </div>
                  <h3 className="text-3xl font-bold text-white uppercase leading-tight tracking-tight group-hover:text-gold transition-colors duration-500">{exp.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{exp.description}</p>
                </div>
                <div className="lg:w-1/3 w-full max-w-[280px] overflow-hidden rounded-[2.5rem] border border-white/5 shadow-2xl shadow-black/50 group-hover:border-gold/20 transition-all duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={exp.image} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                      alt={exp.title} 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION - Maintains grid and logos */}
        <section id="education" className="py-32 px-8 md:px-20 glass">
          <h2 className="text-4xl font-display font-black text-white uppercase tracking-tighter mb-20">Education</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {EDUCATION.map((edu, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-6 p-8 accent-glass rounded-[32px] hover:bg-gold/10 transition-all border-l-4 border-l-gold group">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-white/5 p-3 flex items-center justify-center border border-white/10 group-hover:border-gold/30 transition-all overflow-hidden">
                    <img 
                      src={edu.logo} 
                      alt={`${edu.inst} logo`} 
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-1 uppercase tracking-tight">{edu.title}</h4>
                  <p className="text-gold font-medium mb-2">{edu.inst}</p>
                  <div className="text-gray-500 text-[10px] font-mono tracking-[0.3em] uppercase">
                    {edu.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="cases" className="py-32 px-8 md:px-20">
          <h2 className="text-4xl font-display font-black text-white uppercase tracking-tighter mb-20 text-center">Case Studies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CASE_STUDIES.map((item, i) => (
              <div key={i} className="case-card flex flex-col glass rounded-3xl overflow-hidden group hover:border-gold/50 transition-all">
                <div className="h-56 overflow-hidden">
                  <img src={item.img} className="case-image w-full h-full object-cover" alt={item.title} />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h4 className="text-xl font-bold text-white mb-3 uppercase tracking-tighter h-14 overflow-hidden">{item.title}</h4>
                  <p className="text-gray-500 text-sm mb-8 flex-1 leading-relaxed">{item.desc}</p>
                  <a href="#" className="inline-flex items-center text-gold font-bold text-sm uppercase tracking-widest hover:text-white transition-colors">
                    Apri Progetto <i className="fa fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-32 px-8 md:px-20 mb-20">
          <div className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-[50px] border border-white/10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 gold-gradient"></div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 font-display">Let's connect</h2>
            <p className="text-gray-400 mb-16 text-lg max-w-lg mx-auto leading-relaxed">
              Pronto per elevare la tua presenza digitale? Scrivimi per fissare un colloquio conoscitivo.
            </p>
            
            <div className="space-y-10 mb-16">
              <div className="group">
                <span className="text-[10px] text-gray-600 uppercase tracking-[0.4em] font-bold block mb-3">Email Me</span>
                <a href="mailto:mirko.guadalupi@outlook.it" className="text-xl md:text-3xl font-black text-white hover:text-gold transition-colors block break-all font-display tracking-tight">
                  mirko.guadalupi@outlook.it
                </a>
              </div>
              <div className="group">
                <span className="text-[10px] text-gray-600 uppercase tracking-[0.4em] font-bold block mb-3">Call Me</span>
                <a href="tel:+393204103378" className="text-xl md:text-3xl font-black text-white hover:text-gold transition-colors block font-display tracking-tight">
                  +39 320 410 3378
                </a>
              </div>
            </div>

            <div className="flex justify-center space-x-6">
              <a href="https://linkedin.com" className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-500">
                <i className="fa-brands fa-linkedin-in text-xl"></i>
              </a>
              <a href="mailto:mirko.guadalupi@outlook.it" className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-500">
                <i className="fa fa-envelope text-xl"></i>
              </a>
            </div>
          </div>
        </section>

        <footer className="py-12 border-t border-white/5 text-center text-gray-600">
          <p className="text-[10px] uppercase tracking-[0.5em] font-bold">
            Mirko Guadalupi — Digital Strategist &copy; {new Date().getFullYear()}
          </p>
        </footer>

      </main>
    </div>
  );
};
const [activePdf, setActivePdf] = useState(null);

export default App;
