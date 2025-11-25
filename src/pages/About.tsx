import { Target, Users, Lightbulb } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Approach',
      description: 'Collaborative, transparent, and performance-driven. We work closely with our clients to understand their goals and deliver solutions that exceed expectations.',
    },
    {
      icon: Lightbulb,
      title: 'Our Vision',
      description: 'To redefine how small businesses grow online. We believe every business deserves a beautiful, fast, and effective digital presence.',
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A passionate group of designers and developers who live and breathe modern web technologies. We stay ahead of trends to deliver cutting-edge solutions.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d1117] pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1
            className="text-5xl font-bold text-[#f1f5f9] mb-6"
          >
            Our Mission at Neptrax.
          </h1>
          <p className="text-[#94a3b8] text-lg max-w-3xl mx-auto leading-relaxed">
            We're a passionate team of designers and developers dedicated to creating fast, responsive, and beautiful web experiences. Our goal is to help businesses stand out with digital solutions that are simple, effective, and growth-oriented.
          </p>
        </div>

        {/* Chicago Section with Background Image */}
        <div 
          className="relative rounded-2xl p-12 mb-16 overflow-hidden"
          style={{
            backgroundImage: "url('/chicago.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30 z-0"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-[#edf0ef] mb-6">
              Based in Chicago, USA
            </h2>
            <div className="space-y-4 text-[#edf0ef] text-lg leading-relaxed">
              <p>
                We're proudly based in Chicago, serving clients across the U.S. and beyond. Since 2018, we've been helping businesses turn ideas into real digital growth. Over the years, we've partnered with startups, agencies, and established brands to create modern, high-performance solutions that actually move the needle.
              </p>
              <p>
                Rooted in Chicago's culture of innovation and hard work, our team is focused on delivering reliable service, clear communication, and results you can measure. Whether you're building something new or improving what you already have, we're here to support your business every step of the way.
              </p>
            </div>
          </div>
        </div>

        {/* Rest of the content follows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-2xl p-8 hover:bg-[#1e3a8a] hover:scale-105 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#1e3a8a] flex items-center justify-center mb-6">
                <value.icon className="text-[#f1f5f9]" size={28} />
              </div>
              <h3
                className="text-2xl font-bold text-[#f1f5f9] mb-4"
              >
                {value.title}
              </h3>
              <p className="text-[#94a3b8] leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] rounded-2xl p-12 text-center mb-16">
          <h2
            className="text-3xl font-bold text-[#f1f5f9] mb-4"
          >
            Why Choose Neptrax?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-left">
            <div className="bg-[#0d1117]/40 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold text-[#f1f5f9] mb-2">Modern Technology</h4>
              <p className="text-[#94a3b8]">
                We use the latest frameworks and tools to build lightning-fast, scalable websites that perform flawlessly across all devices.
              </p>
            </div>
            <div className="bg-[#0d1117]/40 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold text-[#f1f5f9] mb-2">Client-Focused</h4>
              <p className="text-[#94a3b8]">
                Your success is our success. We prioritize clear communication, timely delivery, and ongoing support to ensure you're always satisfied.
              </p>
            </div>
            <div className="bg-[#0d1117]/40 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold text-[#f1f5f9] mb-2">Design Excellence</h4>
              <p className="text-[#94a3b8]">
                Every pixel matters. We craft beautiful, intuitive interfaces that not only look stunning but provide exceptional user experiences.
              </p>
            </div>
            <div className="bg-[#0d1117]/40 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold text-[#f1f5f9] mb-2">Proven Results</h4>
              <p className="text-[#94a3b8]">
                With 100+ successful projects and 50+ verified reviews, our track record speaks for itself. We deliver websites that drive real business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}