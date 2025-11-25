import { useState } from 'react';
import { Send, Mail, MessageSquare, User, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactProps {
  onNavigate: (section: string) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! We will get back to you soon.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1117] via-[#111827] to-[#0f172a] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1
            className="text-5xl font-bold text-[#f1f5f9] mb-4"
          >
            Let's Build Something Great Together.
          </h1>
          <p className="text-[#94a3b8] text-lg">
            We'd love to hear from you. Send us a message and we'll get back soon.
          </p>
        </div>

        <div className="bg-[#1e293b] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.3)] mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="flex items-center gap-2 text-[#f1f5f9] font-medium mb-2">
                <User size={18} className="text-[#2563eb]" />
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#0d1117] border border-white/8 rounded-xl text-[#f1f5f9] placeholder-[#94a3b8] focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="flex items-center gap-2 text-[#f1f5f9] font-medium mb-2">
                <Mail size={18} className="text-[#2563eb]" />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#0d1117] border border-white/8 rounded-xl text-[#f1f5f9] placeholder-[#94a3b8] focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="flex items-center gap-2 text-[#f1f5f9] font-medium mb-2">
                <MessageSquare size={18} className="text-[#2563eb]" />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-[#0d1117] border border-white/8 rounded-xl text-[#f1f5f9] placeholder-[#94a3b8] focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] text-[#f1f5f9] font-medium hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send size={18} />
            </button>

            {submitStatus.type && (
              <div
                className={`p-4 rounded-xl flex items-center gap-3 ${
                  submitStatus.type === 'success'
                    ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                    : 'bg-red-500/10 border border-red-500/20 text-red-400'
                }`}
              >
                {submitStatus.type === 'success' ? (
                  <CheckCircle size={20} className="flex-shrink-0" />
                ) : (
                  <AlertCircle size={20} className="flex-shrink-0" />
                )}
                <p className="text-sm">{submitStatus.message}</p>
              </div>
            )}
          </form>

<p className="text-[#94a3b8] text-sm text-center mt-6">
  Or reach out to us directly at{' '}
  <a
    href="https://mail.google.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#2563eb] hover:underline"
  >
    info@neptrax.com
  </a>
</p>
        </div>

        <div className="bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-[#f1f5f9] mb-3">
            Prefer to Talk First?
          </h3>
          <p className="text-[#94a3b8] mb-6">
            Schedule a free consultation call to discuss your project in detail
          </p>
          <button
            onClick={() => window.open('https://cal.com/neptrax', '_blank')}
            className="px-8 py-3 rounded-full bg-[#f1f5f9] text-[#0d1117] font-medium hover:scale-105 transition-all"
          >
            Book a Call
          </button>
        </div>
      </div>
    </div>
  );
}
