
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene, QuantumComputerScene } from './components/QuantumScene';
import { SurfaceCodeDiagram, TransformerDecoderDiagram, PerformanceMetricDiagram } from './components/Diagrams';
import { ArrowDown, Menu, X, FileText, User, Users, GraduationCap, MapPin, Smartphone, Wifi, Globe, Search, BarChart } from 'lucide-react';

const AuthorCard = ({ name, role, delay }: { name: string, role: string, delay: string }) => {
  return (
    <div className="flex flex-col group animate-fade-in-up items-center p-8 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-xs hover:border-nobel-gold/50" style={{ animationDelay: delay }}>
      <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mb-4 text-stone-400 group-hover:bg-nobel-gold group-hover:text-white transition-colors">
         <User size={32} />
      </div>
      <h3 className="font-serif text-xl text-stone-900 text-center mb-3">{name}</h3>
      <div className="w-12 h-0.5 bg-nobel-gold mb-4 opacity-60"></div>
      <p className="text-xs text-stone-500 font-bold uppercase tracking-widest text-center leading-relaxed">{role}</p>
    </div>
  );
};

const StatCard = ({ icon: Icon, value, label }: { icon: any, value: string, label: string }) => (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg border border-stone-100 shadow-sm hover:shadow-md transition-all">
        <Icon className="text-nobel-gold mb-3" size={28} />
        <span className="text-2xl font-serif font-bold text-stone-800 mb-1">{value}</span>
        <span className="text-xs text-stone-500 uppercase tracking-wider text-center">{label}</span>
    </div>
);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-stone-800 selection:bg-nobel-gold selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F9F8F4]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-nobel-gold rounded-full flex items-center justify-center text-white font-serif font-bold text-xl shadow-sm pb-1">Y</div>
            <span className={`font-serif font-bold text-lg tracking-wide transition-opacity ${scrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
              Yemen Market Study <span className="font-normal text-stone-500">2024</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
            <a href="#introduction" onClick={scrollToSection('introduction')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Context</a>
            <a href="#methodology" onClick={scrollToSection('methodology')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Methodology</a>
            <a href="#results" onClick={scrollToSection('results')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Results</a>
            <a href="#author" onClick={scrollToSection('author')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Author</a>
          </div>

          <button className="md:hidden text-stone-900 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F9F8F4] flex flex-col items-center justify-center gap-8 text-xl font-serif animate-fade-in">
            <a href="#introduction" onClick={scrollToSection('introduction')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Context</a>
            <a href="#methodology" onClick={scrollToSection('methodology')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Methodology</a>
            <a href="#results" onClick={scrollToSection('results')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Results</a>
            <a href="#author" onClick={scrollToSection('author')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Author</a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(249,248,244,0.92)_0%,rgba(249,248,244,0.6)_50%,rgba(249,248,244,0.3)_100%)]" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-3 py-1 border border-nobel-gold text-nobel-gold text-xs tracking-[0.2em] uppercase font-bold rounded-full backdrop-blur-sm bg-white/30">
            Doctorate's Thesis • March 2024
          </div>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-8 text-stone-900 drop-shadow-sm max-w-5xl mx-auto">
            Consumer Behavior Towards Online Business
            <span className="italic font-normal text-stone-600 text-2xl md:text-4xl block mt-6">
              The Role of Social Media Engagement in the Yemeni Market
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-stone-700 font-light leading-relaxed mb-12">
            An exploratory study utilizing Structural Equation Modeling to understand how social media drives online shopping adoption in a developing economy.
          </p>
          
          <div className="flex justify-center">
             <a href="#introduction" onClick={scrollToSection('introduction')} className="group flex flex-col items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors cursor-pointer">
                <span>EXPLORE RESEARCH</span>
                <span className="p-2 border border-stone-300 rounded-full group-hover:border-stone-900 transition-colors bg-white/50">
                    <ArrowDown size={16} />
                </span>
             </a>
          </div>
        </div>
      </header>

      <main>
        {/* Introduction / Context */}
        <section id="introduction" className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">CONTEXT</div>
              <h2 className="font-serif text-4xl mb-6 leading-tight text-stone-900">The Yemeni Landscape</h2>
              <div className="w-16 h-1 bg-nobel-gold mb-6"></div>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  Yemen faces unique challenges including political instability and infrastructure limitations. Despite this, a digital transformation is underway, driven by high mobile penetration and social media usage.
              </p>
              <div className="flex flex-col gap-4 mt-8">
                  <div className="flex items-center gap-3 text-stone-600">
                      <MapPin className="text-nobel-gold" size={20} />
                      <span className="font-medium">Yemen (Sanaa, Aden, Taiz)</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-600">
                      <Users className="text-nobel-gold" size={20} />
                      <span className="font-medium">Population: ~30 Million</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-600">
                      <Globe className="text-nobel-gold" size={20} />
                      <span className="font-medium">Internet Penetration: ~27%</span>
                  </div>
              </div>
            </div>
            <div className="md:col-span-8">
                <div className="text-lg text-stone-600 leading-relaxed space-y-6 mb-12">
                    <p>
                        <span className="text-5xl float-left mr-3 mt-[-8px] font-serif text-nobel-gold">Y</span>emen presents a unique landscape for e-commerce. Despite conflict and slow internet speeds (median 9 Mbps mobile), the country is witnessing a surge in digitalization. Social media platforms like Facebook have become de-facto marketplaces where commerce thrives despite infrastructure hurdles.
                    </p>
                    <p>
                        This study investigates how <strong>Social Media Engagement (SME)</strong> influences consumer cognition and behavior. It applies an adapted <strong>Conceptual Framework</strong> combining social cognition theories with technology adoption models to understand the Yemeni consumer's journey from awareness to adoption.
                    </p>
                </div>
                
                {/* Fast Facts Grid based on PDF data */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <StatCard icon={Users} value="3.6M" label="Facebook Users" />
                    <StatCard icon={Smartphone} value="93.7%" label="Mobile Usage" />
                    <StatCard icon={Wifi} value="9 Mbps" label="Mobile Speed" />
                    <StatCard icon={Search} value="EFA/CFA" label="Analysis Method" />
                </div>
            </div>
          </div>
        </section>

        {/* Methodology & Demographics */}
        <section id="methodology" className="py-24 bg-white border-t border-stone-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 text-stone-600 text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-200">
                            <FileText size={14}/> METHODOLOGY
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">Research Design</h2>
                        <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                           The study employed a quantitative approach with a sample of <strong>395 respondents</strong> collected between May and October 2022. The survey instrument was rigorously translated (English to Arabic) and back-translated to ensure cultural validity.
                        </p>
                        
                        <h4 className="font-serif text-lg text-stone-800 mb-3 mt-8">Adapted Scales</h4>
                        <ul className="space-y-3 text-stone-600 mb-8">
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-nobel-gold mt-2"></div>
                                <div>
                                    <span className="font-bold text-stone-700">Social Media Engagement</span>
                                    <p className="text-sm text-stone-500">Adapted from Ni et al. (2020). (α=0.847)</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-nobel-gold mt-2"></div>
                                <div>
                                    <span className="font-bold text-stone-700">Online Consumer Behavior</span>
                                    <p className="text-sm text-stone-500">Adapted from Ansari (2019). Measured Awareness (α=0.780), Social Cognition (α=0.863), & Perception (α=0.901).</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-nobel-gold mt-2"></div>
                                <div>
                                    <span className="font-bold text-stone-700">UTAUT Extended</span>
                                    <p className="text-sm text-stone-500">Adapted from Venkatesh et al. (2012). Focused on Price Value (α=0.873), Usability (α=0.848), & Adoption (α=0.902).</p>
                                </div>
                            </li>
                        </ul>

                        <div className="flex gap-4 text-sm font-medium text-stone-400">
                            <span className="flex items-center gap-1"><BarChart size={14}/> EFA Analysis</span>
                            <span className="flex items-center gap-1"><BarChart size={14}/> CFA Validation</span>
                            <span className="flex items-center gap-1"><BarChart size={14}/> SEM Modeling</span>
                        </div>
                    </div>
                    <div>
                        <SurfaceCodeDiagram />
                    </div>
                </div>
            </div>
        </section>

        {/* Conceptual Framework */}
        <section className="py-24 bg-stone-900 text-stone-100 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                {/* Decorative background pattern */}
                <div className="w-96 h-96 rounded-full bg-stone-600 blur-[100px] absolute top-[-100px] left-[-100px]"></div>
                <div className="w-96 h-96 rounded-full bg-nobel-gold blur-[100px] absolute bottom-[-100px] right-[-100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 gap-16 items-center">
                     <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-800 text-nobel-gold text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-700">
                            THE MODEL
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">Structural Equation Model</h2>
                        <p className="text-lg text-stone-400 mb-12 leading-relaxed">
                            The study establishes a significant pathway (Fit Indices: CFI=0.912, RMSEA=0.049) where Social Media Engagement enhances Social Cognition, which triggers Awareness. This Awareness then positively influences perception and usability, ultimately driving Price Value and Adoption.
                        </p>
                     </div>
                     <div className="flex justify-center w-full">
                        <TransformerDecoderDiagram />
                     </div>
                </div>
            </div>
        </section>

        {/* Results */}
        <section id="results" className="py-24 bg-[#F9F8F4]">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">Key Findings</h2>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        The analysis confirmed that traditional demographic variables like Age and Gender have limited impact on online shopping behavior in Yemen. However, experiential and economic factors played a significant role.
                    </p>
                </div>

                {/* Demographic Insights Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
                     <div className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <Globe className="text-nobel-gold" />
                            <h3 className="font-serif text-xl text-stone-800">The "Travel Effect"</h3>
                        </div>
                        <p className="text-stone-600 mb-4">
                            Individuals who have traveled abroad showed significantly higher scores in Awareness, Usability, and Adoption Intention (p &lt; 0.001). Exposure to global markets increases digital readiness.
                        </p>
                        <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                            <div className="h-full bg-nobel-gold w-[85%]"></div>
                        </div>
                        <p className="text-xs text-stone-400 mt-2 text-right">Significance: High</p>
                     </div>

                     <div className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <Users className="text-nobel-gold" />
                            <h3 className="font-serif text-xl text-stone-800">Employment Impact</h3>
                        </div>
                        <p className="text-stone-600 mb-4">
                            Unemployed individuals exhibited significantly lower scores in Awareness and Adoption Intention (p &lt; 0.025) compared to employed individuals, highlighting the economic barrier to entry.
                        </p>
                        <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                            <div className="h-full bg-stone-400 w-[65%]"></div>
                        </div>
                        <p className="text-xs text-stone-400 mt-2 text-right">Significance: Moderate</p>
                     </div>
                </div>

                <div className="max-w-5xl mx-auto">
                    <PerformanceMetricDiagram />
                </div>
            </div>
        </section>

        {/* Impact / Conclusion */}
        <section className="py-24 bg-white border-t border-stone-200">
             <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-5 relative">
                    <div className="aspect-square bg-[#F5F4F0] rounded-xl overflow-hidden relative border border-stone-200 shadow-inner">
                        <QuantumComputerScene />
                        <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-stone-400 font-serif italic">Digital Connectivity in Emerging Markets</div>
                    </div>
                </div>
                <div className="md:col-span-7 flex flex-col justify-center">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">CONCLUSION</div>
                    <h2 className="font-serif text-4xl mb-6 text-stone-900">Implications for Business</h2>
                    <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                        Businesses in Yemen should prioritize social media as a tool not just for marketing, but for cognitive engagement. By improving the usability of their platforms and clearly communicating price value, they can significantly boost adoption rates.
                    </p>
                    <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                        The study suggests that online business perception is malleable; building trust through social proof and user-friendly experiences is key to overcoming initial hesitation in the market, especially for those without prior international exposure.
                    </p>
                    
                    <div className="p-6 bg-[#F9F8F4] border border-stone-200 rounded-lg border-l-4 border-l-nobel-gold">
                        <p className="font-serif italic text-xl text-stone-800 mb-4">
                            "Social media engagement sets the foundation by influencing social cognition, which, in turn, enhances awareness of online shopping."
                        </p>
                        <span className="text-sm font-bold text-stone-500 tracking-wider uppercase">— Dr. Nasr Murshed, PhD Thesis (2024)</span>
                    </div>
                </div>
             </div>
        </section>

        {/* Authors */}
        <section id="author" className="py-24 bg-[#F5F4F0] border-t border-stone-300">
           <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">THE RESEARCHER</div>
                    <h2 className="font-serif text-3xl md:text-5xl mb-4 text-stone-900">Dr. Nasr Abdulaziz Ghaleb Murshed</h2>
                    <p className="text-stone-500 max-w-2xl mx-auto">Department of Business, Istanbul Aydin University</p>
                </div>
                
                <div className="flex justify-center">
                    <AuthorCard 
                        name="Dr. Nasr A. G. Murshed" 
                        role="PhD, Business Management" 
                        delay="0s" 
                    />
                </div>
                
                <div className="text-center mt-12 space-y-2">
                    <p className="text-stone-500 font-serif">Advisor: Prof. Dr. Erginbay UĞURLU</p>
                    <p className="text-stone-400 text-sm">Institute of Graduate Studies, March 2024</p>
                </div>
           </div>
        </section>

      </main>

      <footer className="bg-stone-900 text-stone-400 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <div className="text-white font-serif font-bold text-2xl mb-2">Yemen Market Study</div>
                <p className="text-sm">Visualizing PhD Thesis: "Consumer Behaviour Towards Online Business..."</p>
            </div>
             <div className="flex gap-6 text-sm">
                <a href="#" className="hover:text-white transition-colors">Abstract</a>
                <a href="#" className="hover:text-white transition-colors">Methodology</a>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
        </div>
        <div className="text-center mt-12 text-xs text-stone-600">
            © 2024 Dr. Nasr Abdulaziz Ghaleb Murshed. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
