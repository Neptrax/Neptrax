import { Lock, Shield, Eye, AlertTriangle, FileCheck, RefreshCw } from 'lucide-react';

export default function Security() {
  return (
    <div className="min-h-screen bg-[#0d1117] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#f1f5f9] mb-4">
            Security Policy
          </h1>
          <p className="text-[#94a3b8] text-lg">
            Your security is our top priority
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-[#1e293b] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <div className="text-[#94a3b8] space-y-4 leading-relaxed">
              <p>
                At <strong className="text-[#f1f5f9]">Neptrax</strong>, we take information security seriously. Our platform and infrastructure are designed to protect your data through multiple, independently reinforced layers of defense.
              </p>
            </div>
          </div>

          <div className="bg-[#1e293b] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1e3a8a] flex items-center justify-center">
                <Lock className="text-[#f1f5f9]" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[#f1f5f9]">
                Data Encryption
              </h2>
            </div>
            <div className="text-[#94a3b8] space-y-4 leading-relaxed">
              <p>
                All data transmitted between your browser and our servers is encrypted using the latest <strong className="text-[#f1f5f9]">SSL/TLS</strong> protocols.
              </p>
              <p>
                We regularly update our certificates and perform integrity checks to ensure communication remains secure at all times.
              </p>
            </div>
          </div>

          <div className="bg-[#1e293b] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1e3a8a] flex items-center justify-center">
                <Shield className="text-[#f1f5f9]" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[#f1f5f9]">
                Secure Infrastructure
              </h2>
            </div>
            <div className="text-[#94a3b8] space-y-4 leading-relaxed">
              <p>
                Neptrax's web servers and databases operate on <strong className="text-[#f1f5f9]">professionally managed, security-hardened environments</strong>.
              </p>
              <p>
                Continuous monitoring, patching, and automated backups ensure resilience against downtime and breaches.
              </p>
            </div>
          </div>

          <div className="bg-[#1e293b] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1e3a8a] flex items-center justify-center">
                <Eye className="text-[#f1f5f9]" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[#f1f5f9]">
                Access Control & Authentication
              </h2>
            </div>
            <div className="text-[#94a3b8] space-y-4 leading-relaxed">
              <p>
                Only authorized Neptrax personnel have access to sensitive system areas, and every login attempt is monitored and logged.
              </p>
              <p>
                Strict <strong className="text-[#f1f5f9]">multi-factor authentication</strong> and <strong className="text-[#f1f5f9]">role-based permissions</strong> protect critical assets from unauthorized access.
              </p>
            </div>
          </div>

          <div className="bg-[#1e293b] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1e3a8a] flex items-center justify-center">
                <FileCheck className="text-[#f1f5f9]" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[#f1f5f9]">
                Regular Security Audits
              </h2>
            </div>
            <div className="text-[#94a3b8] space-y-4 leading-relaxed">
              <p>
                We perform internal and third-party <strong className="text-[#f1f5f9]">vulnerability assessments</strong> and <strong className="text-[#f1f5f9]">penetration tests</strong> to identify potential risks early.
              </p>
              <p>
                Detected vulnerabilities are resolved promptly as part of our proactive security cycle.
              </p>
            </div>
          </div>

          <div className="bg-[#1e293b] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1e3a8a] flex items-center justify-center">
                <AlertTriangle className="text-[#f1f5f9]" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[#f1f5f9]">
                Incident Response
              </h2>
            </div>
            <div className="text-[#94a3b8] space-y-4 leading-relaxed">
              <p>
                In the unlikely event of a security issue, Neptrax maintains a <strong className="text-[#f1f5f9]">documented response protocol</strong> to contain, assess, and resolve threats immediately while notifying affected users where appropriate.
              </p>
            </div>
          </div>

          <div className="bg-[#1e293b] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1e3a8a] flex items-center justify-center">
                <RefreshCw className="text-[#f1f5f9]" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[#f1f5f9]">
                Continuous Improvement
              </h2>
            </div>
            <div className="text-[#94a3b8] space-y-4 leading-relaxed">
              <p>
                Security is not a one-time setup — it's an ongoing commitment.
              </p>
              <p>
                We consistently evolve our systems, update best practices, and train our team to anticipate and defend against emerging threats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
