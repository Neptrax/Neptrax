import { Shield, Database, FileText, UserCheck, Globe, Info } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0d1117] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#f1f5f9] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#94a3b8] text-lg">
            Your privacy is our priority
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-[#1e293b] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <div className="text-[#94a3b8] space-y-4 leading-relaxed">
              <p>
                At <strong className="text-[#f1f5f9]">Neptrax</strong>, your privacy is our priority. We are dedicated to protecting your personal information and maintaining complete transparency about how we handle your data.
              </p>
            </div>
          </div>

          <div className="bg-[#1e293b] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1e3a8a] flex items-center justify-center">
                <FileText className="text-[#f1f5f9]" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[#f1f5f9]">
                Data Collection
              </h2>
            </div>
            <div className="text-[#94a3b8] space-y-4 leading-relaxed">
              <p>
                We collect only the information you voluntarily provide through our contact forms, such as your <strong className="text-[#f1f5f9]">name</strong>, <strong className="text-[#f1f5f9]">email address</strong>, and <strong className="text-[#f1f5f9]">message details</strong>.
              </p>
              <p>
                Neptrax does <strong className="text-[#f1f5f9]">not</strong> use invasive tracking cookies, third-party analytics, or behavioral data tools that compromise user privacy.
              </p>
              <p>
                All optional analytics, if ever enabled, will remain fully anonymized.
              </p>
            </div>
          </div>

          <div className="bg-[#1e293b] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1e3a8a] flex items-center justify-center">
                <Shield className="text-[#f1f5f9]" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[#f1f5f9]">
                Data Usage
              </h2>
            </div>
            <div className="text-[#94a3b8] space-y-4 leading-relaxed">
              <p>
                Your information is used solely for communication and service delivery purposes — to respond to inquiries, process requests, and provide updates about your projects.
              </p>
              <p>
                Neptrax will <strong className="text-[#f1f5f9]">never share, sell, rent, or trade</strong> your information to outside parties without explicit consent.
              </p>
              <p>
                We uphold a strict internal data access policy to ensure that only authorized personnel can view your information.
              </p>
            </div>
          </div>

          <div className="bg-[#1e293b] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1e3a8a] flex items-center justify-center">
                <Database className="text-[#f1f5f9]" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[#f1f5f9]">
                Data Storage & Retention
              </h2>
            </div>
            <div className="text-[#94a3b8] space-y-4 leading-relaxed">
              <p>
                All data is stored on secure, encrypted servers managed under modern cybersecurity standards.
              </p>
              <p>
                Regular system backups and monitoring are performed to ensure data integrity.
              </p>
              <p>
                We retain your information only as long as required to fulfill its intended purpose, after which it is permanently deleted.
              </p>
            </div>
          </div>

          <div className="bg-[#1e293b] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1e3a8a] flex items-center justify-center">
                <UserCheck className="text-[#f1f5f9]" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[#f1f5f9]">
                Your Rights
              </h2>
            </div>
            <div className="text-[#94a3b8] space-y-4 leading-relaxed">
              <p>
                You have the right to request access, correction, or deletion of your data at any time.
              </p>
              <p>
                Upon receiving a verified request, we promptly update or remove your information from our systems.
              </p>
              <p>
                For privacy-related requests or clarifications, you can contact us directly via our support email or contact form.
              </p>
            </div>
          </div>

          <div className="bg-[#1e293b] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1e3a8a] flex items-center justify-center">
                <Globe className="text-[#f1f5f9]" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[#f1f5f9]">
                Commitment to Transparency
              </h2>
            </div>
            <div className="text-[#94a3b8] space-y-4 leading-relaxed">
              <p>
                Neptrax continuously reviews its data handling processes to comply with evolving global privacy regulations (including GDPR-like frameworks).
              </p>
              <p>
                We are committed to ensuring our users' digital trust through ongoing transparency and strong privacy practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
