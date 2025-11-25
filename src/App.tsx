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
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
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
