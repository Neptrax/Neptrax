import { Twitter, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
    { id: 'services', label: 'Services' },
  ];

  const infoLinks = [
    { id: 'about', label: 'About' },
    { id: 'privacy', label: 'Privacy' },
    { id: 'security', label: 'Security' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://x.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  ];

  return (
    <footer className="bg-[#0d1117] border-t border-white/8 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity mb-3"
            >
              <img src="/logo.png" alt="Neptrax" className="h-12 w-12" />
              <span
                className="text-2xl font-bold bg-gradient-to-r from-[#2563eb] to-[#3b82f6] bg-clip-text text-transparent"
              >
                Neptrax
              </span>
            </button>
            <a
              href="https://gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-start text-[#94a3b8] hover:text-[#2563eb] text-sm transition-colors"
            >
              info@neptrex.com
            </a>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#f1f5f9] mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-[#94a3b8] hover:text-[#2563eb] text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#f1f5f9] mb-3">
              Info
            </h3>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-[#94a3b8] hover:text-[#2563eb] text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#f1f5f9] mb-3">
              Connect
            </h3>
            {/* Icons in flex row */}
            <div className="flex gap-4 items-center mb-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center text-[#94a3b8] hover:text-[#2563eb] hover:bg-[#1e3a8a] transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
{/* bark.com image on its own line */}
<a
  href="https://bark.com"
  target="_blank"
  rel="noopener noreferrer"
  className="block mt-2"
>
  <img
    src="/bark.png"
    alt="bark.com"
    className="h-10 w-22"
  />
</a>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col items-center justify-center text-center">
          <p className="text-[#94a3b8] text-sm">
            © 2025 Neptrax. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
