import { Twitter, Instagram } from 'lucide-react';

const CONTACT_EMAIL = 'contact@neptrax.com';
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`;

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },

  ];

  const infoLinks = [
    { id: 'about', label: 'About' },
    { id: 'privacy', label: 'Privacy' },
    { id: 'security', label: 'Security' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/Neptraxdigital', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/neptraxdigital/', label: 'Instagram' },
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
              <span className="text-2xl font-bold bg-gradient-to-r from-[#22d3ee] via-[#0ea5e9] to-[#5391f5] bg-clip-text text-transparent">
                Neptrax
              </span>
            </button>
            <a
              href={GMAIL_COMPOSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-start text-[#94a3b8] hover:text-[#2563eb] text-sm transition-colors group"
              title="Open in Gmail"
            >
              {CONTACT_EMAIL}
              <svg
                className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#f1f5f9] mb-3">Quick Links</h3>
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
            <h3 className="text-xl font-bold text-[#f1f5f9] mb-3">Info</h3>
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
            <h3 className="text-xl font-bold text-[#f1f5f9] mb-3">Connect</h3>
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
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col items-center justify-center text-center">
          <p className="text-[#94a3b8] text-sm">© 2017-2026 Neptrax, All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}