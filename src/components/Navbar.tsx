import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed z-50 transition-all duration-300 ${
          isMobile
            ? 'top-4 left-4 right-4 rounded-full'
            : 'top-0 left-0 right-0'
        } ${
          scrolled
            ? 'bg-white/200 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
        style={{
          background: scrolled
            ? 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px) saturate(180%)' : 'none',
          backgroundColor: scrolled ? 'rgba(13, 17, 23, 0.4)' : 'transparent',
        }}
      >
        <div className={`${
          isMobile
            ? 'px-4 py-2 flex items-center justify-between w-full'
            : 'max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between'
        }`}>
          <button
            onClick={() => handleNavigate('home')}
            className={`flex items-center gap-2 sm:gap-3 hover:opacity-90 transition-opacity ${
              isMobile ? '' : 'md:ml-12'
            } group`}
          >
            <div className="relative">
              <img
                src="/logo.png"
                alt="Neptrax"
                className={`transition-transform duration-300 group-hover:scale-110 ${
                  isMobile ? 'h-8 w-8' : 'h-10 w-10 sm:h-12 sm:w-12'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className={`font-bold bg-gradient-to-r from-[#22d3ee] via-[#0ea5e9] to-[#5391f5] bg-clip-text text-transparent ${
              isMobile ? 'text-lg' : 'text-xl sm:text-2xl'
            }`}>
              Neptrax
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`relative text-sm lg:text-base font-medium transition-all duration-300 group ${
                  activeSection === item.id
                    ? 'text-[#2563eb]'
                    : 'text-[#e2e8f0] hover:text-white'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2563eb] to-[#3b82f6] transition-all duration-300 group-hover:w-full ${
                    activeSection === item.id ? 'w-full' : ''
                  }`}
                />
              </button>
            ))}
            <button
              onClick={() => window.open('https://cal.com/neptrax', '_blank')}
              className="relative px-4 lg:px-6 py-2.5 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] text-white font-medium text-sm lg:text-base hover:scale-105 transition-all duration-300 overflow-hidden group"
            >
              <span className="relative z-10">Book a Call</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 shadow-[0_0_20px_rgba(37,99,235,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden transition-all duration-300 ${
              isMobile
                ? 'p-1.5 hover:opacity-80'
                : 'p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={isMobile ? 20 : 24} className="text-white" />
            ) : (
              <Menu size={isMobile ? 20 : 24} className="text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-gradient-to-br from-[#0d1117]/95 to-[#1e293b]/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-50 transform transition-transform duration-300 ease-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          backdropFilter: 'blur(16px) saturate(180%)',
          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        }}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
            <span className="text-xl font-bold bg-gradient-to-r from-[#2e69e8] to-[#3b6fc4] bg-clip-text text-transparent">
              Menu
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-colors duration-300"
              aria-label="Close menu"
            >
              <X size={24} className="text-white" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 px-6 py-8 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`w-full text-left px-4 py-4 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm border ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-[#2563eb]/30 to-[#1e3a8a]/30 text-[#60a5fa] border-[#2563eb]/40 shadow-lg shadow-blue-500/20'
                    : 'text-[#cbd5e1] border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu CTA */}
          <div className="px-6 py-6 border-t border-white/10">
            <button
              onClick={() => window.open('https://cal.com/neptrax', '_blank')}
              className="w-full px-6 py-4 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] text-white font-medium text-base hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Book a Call</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}