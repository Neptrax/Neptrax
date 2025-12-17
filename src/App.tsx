import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Security from './pages/Security';
import FAQs from './pages/FAQs';

function App() {
  // Detect initial section from URL or prerendered state
  const getInitialSection = () => {
    // Check if prerendered state exists (for SEO)
    if (typeof window !== 'undefined' && (window as any).__INITIAL_SECTION__) {
      return (window as any).__INITIAL_SECTION__;
    }

    // Detect from URL pathname
    const path = window.location.pathname.replace(/^\/|\/$/g, '');
    const validSections = ['home', 'services', 'portfolio', 'about', 'contact', 'faqs', 'privacy', 'security'];
    return validSections.includes(path) ? path : 'home';
  };

  const [activeSection, setActiveSection] = useState(getInitialSection());

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update URL without page reload
    const path = section === 'home' ? '/' : `/${section}`;
    window.history.pushState({ section }, '', path);
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    // Handle browser back/forward buttons
    const handlePopState = (event: PopStateEvent) => {
      const section = event.state?.section || getInitialSection();
      setActiveSection(section);
    };

    window.addEventListener('popstate', handlePopState);

    // Set initial history state
    window.history.replaceState({ section: activeSection }, '', window.location.pathname);

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const renderPage = () => {
    switch (activeSection) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'privacy':
        return <Privacy />;
      case 'security':
        return <Security />;
      case 'faqs':
        return <FAQs onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;