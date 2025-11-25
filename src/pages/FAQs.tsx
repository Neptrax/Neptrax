import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

interface FAQsProps {
  onNavigate: (section: string) => void;
}

export default function FAQs({ onNavigate }: FAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What services does your agency offer?',
      answer: 'We specialize in website design, updates, and ongoing maintenance. We also help brands grow their online presence and boost engagement through strategy, design, and performance optimization.',
    },
    {
      question: 'Can you redesign an existing website?',
      answer: 'Absolutely! We love transforming outdated websites into modern, high-performing digital experiences that align with your brand\'s goals.',
    },
    {
      question: 'Do you provide ongoing website maintenance?',
      answer: 'Yes, we offer full maintenance plans from content updates and bug fixes to security checks ensuring your site stays fast, secure, and up-to-date.',
    },
    {
      question: 'How do you help increase online sales?',
      answer: 'We combine user-centered design with marketing insights to improve conversions, enhance user experience, and grow audience engagement across platforms.',
    },
    {
      question: 'Can you work with my existing brand identity?',
      answer: 'Definitely. We can update your site while preserving your existing brand style or help you evolve it with a fresh, consistent digital look.',
    },
    {
      question: 'How long does it take to complete a project?',
      answer: 'Timelines vary by project scope, but most website designs or updates are completed within 2–6 weeks. We\'ll share a clear schedule before starting.',
    },
    {
      question: 'Do you offer custom solutions or templates?',
      answer: 'Every project is custom-built. We tailor designs and features to your goals, ensuring your website looks unique and performs effectively.',
    },
    {
      question: 'What platforms or technologies do you use?',
      answer: 'We work with modern web technologies such as React, Next.js, WordPress, and Shopify depending on your business needs and goals.',
    },
    {
      question: 'Do you provide content or branding support?',
      answer: 'Yes, we can assist with content strategy, copywriting, and brand assets to ensure your website communicates your message clearly and professionally.',
    },
    {
      question: 'How can I get started?',
      answer: 'Simply reach out through our Contact page we\'ll schedule a quick chat to understand your goals and craft a tailored plan for your brand.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1117] to-[#1a1f2e] pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#f1f5f9] to-[#60a5fa] bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Everything you need to know about our services and approach
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br from-[#1e293b] via-[#1e3a8a] to-[#1e293b] transition-opacity duration-500 ${
                openIndex === index ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'
              }`}></div>
              
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              <div className="relative p-6 border border-white/10 rounded-2xl backdrop-blur-sm bg-black/20">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-start justify-between text-left group/btn"
                >
                  <span className="text-lg font-bold text-[#f1f5f9] pr-6 flex-1 leading-relaxed">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 ml-4 p-2 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1e40af] group-hover/btn:from-[#1e40af] group-hover/btn:to-[#1e3a8a] transition-all duration-300 transform group-hover/btn:scale-110">
                    {openIndex === index ? (
                      <Minus size={18} className="text-white" />
                    ) : (
                      <Plus size={18} className="text-white" />
                    )}
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    openIndex === index 
                      ? 'max-h-96 opacity-100 translate-y-0' 
                      : 'max-h-0 opacity-0 -translate-y-4'
                  }`}
                >
                  <div className="pt-4 mt-4 border-t border-white/10">
                    <p className="text-[#cbd5e1] leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#0f172a] animate-gradient-x"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          
          <div className="relative p-12 text-center">
            <h3 className="text-3xl font-bold text-[#f1f5f9] mb-4">
              Still Have Questions?
            </h3>
            <p className="text-[#cbd5e1] text-lg mb-8 max-w-2xl mx-auto">
              We're here to help. Reach out and we'll get back to you promptly.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-[#f1f5f9] font-semibold hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:scale-105 transition-all duration-300 group"
            >
              <span>Contact Us</span>
              <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14m-7-7l7 7-7 7"/>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}