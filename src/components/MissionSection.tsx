import React from 'react';
import {
  Globe,
  User,
  Search,
  TrendingUp,
  Megaphone,
  Briefcase,
  Zap,
  Beaker,
  Archive,
  PackageCheck,
  Focus,
  MessagesSquare,
  ClipboardList,
} from 'lucide-react';

import ScrollReveal from './ScrollReveal';

export default function MissionSection() {
  const features = [
    {
      icon: Briefcase,
      title: 'Business Website',
      description:
        'Every business needs a solid foundation online. We build professional, easy-to-navigate websites that clearly showcase what you offer, making it simple for potential customers to understand your value and take the next step.',
      image: '/design/business.png',
    },
    {
      icon: User,
      title: 'Personal Portfolio',
      description: 'Your work is your story. Don’t just list it "Present it". We create stunning, Iconic portfolios that do more than display your projects, they capture your unique style and build a personal brand that makes you impossible to forget.',
      image: '/design/personal.png',
    },
    {
      icon: Search,
      title: 'On-Page SEO',
      description: 'What good is a beautiful website if no one can find it? We meticulously optimize every page from content to code to rank higher on Google, helping you attract a steady stream of the right customers, Neptrax is where great designs meets strategic growth with.',
      image: '/design/seo.png',
    },
    {
      icon: TrendingUp,
      title: 'SEO Audit & Strategy',
      description: 'Feeling lost in the search results? We provide a deep-dive analysis of your current site and competitors, delivering a clear, actionable roadmap to climb the rankings and dominate your niche. Your path to growth starts here with Better data and Clear direction..',
      image: '/design/seo2.png',
    },
    {
      icon: Megaphone,
      title: 'Marketing Website',
      description: 'Stop letting visitors leave empty-handed. We design and build high-converting landing pages and sales funnels focused on a single goal: turning viewers into leads and customers. Maximize your ROI with a website built for action.',
      image: '/design/market.png',
    },
    {
      icon: Globe,
      title: 'Brand Endorsement',
      description: 'Your digital presence is your modern-day handshake. We build websites that go beyond looks, creating a genuine connection with your audience by authentically communicating your values, building lasting trust, and turning visitors into believers.',
      image: '/design/brand.png',
    },
  ];

  const benefits = [
    {
      title: 'Local Expertise',
      description:
        "Leverage our deep, country-wide expertise to drive growth and connect with customers across the United States..",
    },
    {
      title: 'Proven Results',
      description:
        'We deliver measurable success in digital traffic, qualified leads, and revenue growth.',
    },
    {
      title: 'Tailored Strategys',
      description: 'Get a custom digital strategy designed to solve your unique business challenges.',
    },
    {
      title: 'Dedicated Partnership',
      description: "Stay informed and in control with transparent communication every step of the way.",
    },
    {
      title: 'Smart Investment',
      description:
        'Achieve outstanding digital quality and results without stretching your budget.',
    },
    {
      title: 'Digital Transformation',
      description: 'We provide integrated solutions from web development to social media management.',
    },
  ];

  return (
    <section className="bg-[#28282B] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Image + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <ScrollReveal direction="left" delay={0} depth={2}>
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <div className="rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(37,99,235,0.3)]">
                  <img
                    src = '/home.png'
                    alt="Jeton Project"
                    className="w-full h-[540px] object-cover transition-all duration-500 group-hover:brightness-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150}>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                We build smarter, smoother experiences from the first click, turning interactions into meaningful results.
              </h2>

              <div className="bg-[#1e293b]/50 rounded-2xl p-8 mb-8 border border-white/10">
                <p className="text-white text-lg italic mb-4">
                  "Neptrax delivered beyond expectations. The website feels modern, fast, and truly professional in every way. It changed how clients see our brand."
                </p>
                <p className="text-[#94a3b8] text-sm">— Oliver Hayes, CEO at PixelReach Studios</p>
              </div>

              {/* REPLACED: Ultra-Premium Glass Gradient Version */}
              <div className="grid grid-cols-2 gap-6">
                <ScrollReveal direction="zoom" delay={300}>
                  <div className="
  relative rounded-2xl p-6 text-center overflow-hidden
  backdrop-blur-2xl bg-white/5
  border border-white/20
  transition-all duration-500
  hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(80,70,255,0.5)]
">
                    {/* Glossy overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 opacity-40 pointer-events-none"></div>

                    {/* Subtle glow layer */}
                    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#2563eb]/25 to-[#8b5cf6]/25 blur-4xl opacity-60"></div>

                    <div className="relative z-10">
                      <div className="font-['inter'] text-4xl font-extrabold bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent mb-2">
                        97%
                      </div>
                      <div className="text-[#cbd5e1] text-sm tracking-wide">Client Retention</div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="zoom" delay={400}>
                  <div className="
  relative rounded-2xl p-6 text-center overflow-hidden
  backdrop-blur-2xl bg-white/5
  border border-white/20
  transition-all duration-500
  hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(80,70,255,0.5)]
">
                    {/* Glossy overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 opacity-40 pointer-events-none"></div>

                    {/* Subtle glow layer */}
                    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#2563eb]/25 to-[#8b5cf6]/25 blur-4xl opacity-60"></div>

                    <div className="relative z-10">
                      <div className="font-['inter'] text-4xl font-extrabold bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent mb-2">
                        100+
                      </div>
                      <div className="text-[#cbd5e1] text-sm tracking-wide">Projects Delivered</div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Section Intro */}
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#2563eb] to-[#3b82f6] bg-clip-text text-transparent mb-4">
              Streamline Your Website Management
            </h2>
            <p className="text-white text-lg max-w-3xl mx-auto">
              Take full control of your digital presence. Simplify content management, collaborate with clarity, and accelerate your business with our intuitive workflows.
            </p>
          </div>
        </ScrollReveal>

{/* Features List */}
<div className="py-20">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <ScrollReveal direction="up" delay={0}>
      <div className="flex lg:flex-col gap-4">
        <Beaker className="text-[#2563eb]" size={28} />
        <div>
          <h3 className="text-[#f1f5f9] font-semibold block text-xl">Project Mapping</h3>
          <p className="text-[#94a3b8] mt-2">
            Break down complex projects into clear, actionable tasks for a seamless workflow.
          </p>
        </div>
      </div>
    </ScrollReveal>

    <ScrollReveal direction="up" delay={100}>
      <div className="flex lg:flex-col gap-4">
        <Archive className="text-[#2563eb]" size={28} />
        <div>
          <h3 className="text-[#f1f5f9] font-semibold block text-xl">Intelligent Progress Tracking</h3>
          <p className="text-[#94a3b8] mt-2">
            Automatically file away completed milestones maintaining a focused workspace.
          </p>
        </div>
      </div>
    </ScrollReveal>

    <ScrollReveal direction="up" delay={200}>
      <div className="flex lg:flex-col gap-4">
        <PackageCheck className="text-[#2563eb]" size={28} />
        <div>
          <h3 className="text-[#f1f5f9] font-semibold block text-xl">Assets Ready for Deployment</h3>
          <p className="text-[#94a3b8] mt-2">Receive final deliverables that are ready for instant implementation.</p>
        </div>
      </div>
    </ScrollReveal>

    <ScrollReveal direction="up" delay={300}>
      <div className="flex lg:flex-col gap-4">
        <Focus className="text-[#2563eb]" size={28} />
        <div>
          <h3 className="text-[#f1f5f9] font-semibold block text-xl">Project Lens</h3>
          <p className="text-[#94a3b8] mt-2">Customize your view to highlight immediate priorities and filter out irrelevant information.</p>
        </div>
      </div>
    </ScrollReveal>

    <ScrollReveal direction="up" delay={400}>
      <div className="flex lg:flex-col gap-4">
        <MessagesSquare className="text-[#2563eb]" size={28} />
        <div>
          <h3 className="text-[#f1f5f9] font-semibold block text-xl">Team Dialogue</h3>
          <p className="text-[#94a3b8] mt-2">Embed discussions and feedback within specific tasks to enhance collaboration.</p>
        </div>
      </div>
    </ScrollReveal>

    <ScrollReveal direction="up" delay={500}>
      <div className="flex lg:flex-col gap-4">
        <ClipboardList className="text-[#2563eb]" size={28} />
        <div>
          <h3 className="text-[#f1f5f9] font-semibold block text-xl">Faster Delivery</h3>
          <p className="text-[#94a3b8] mt-2">Use structured templates to accelerate delivery while maintaining high standards.</p>
        </div>
      </div>
    </ScrollReveal>
  </div>
</div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 100} depth={1}>
              <div className="bg-[#1e293b]/50 rounded-2xl p-6 hover:bg-[#1e3a8a]/30 transition-all border border-white/10 hover:border-[#2563eb]/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1e3a8a] flex items-center justify-center mb-4">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-[#94a3b8] text-sm mb-4 leading-relaxed">{feature.description}</p>

                <div className="rounded-lg overflow-hidden border border-white/10">
                  <img src={feature.image} alt={feature.title} className="w-full h-32 object-cover" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Why Choose Section */}
        <ScrollReveal direction="up" delay={0}>
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-4">Why Choose Neptrax?</h2>
            <p className="text-white/80 text-lg text-center mb-12">World-Class Expertise. Fast & Professional Execution.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 80} depth={1}>
                  <div className="bg-[#1e293b]/50 rounded-xl p-6 border border-white/10 hover:border-[#2563eb]/50 transition-all h-full">
                    <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
                    <p className="text-[#94a3b8] text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Outcome Highlight */}
        <ScrollReveal direction="zoom" delay={0}>
          <div className="text-center py-20 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-[#2563eb] rounded-full blur-[100px] opacity-30"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-5xl font-bold text-white mb-6">Enhanced Outcomes</h2>
              <h3 className="text-3xl font-bold text-white mb-8">Fast, Functional & Effective</h3>

              <div className="flex justify-center mb-8">
                <div className="relative">
                  <Zap size={120} className="text-[#2563eb] animate-pulse" strokeWidth={2} />
                  <div className="absolute inset-0 blur-xl bg-[#2563eb]/50"></div>
                </div>
              </div>

              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                From responsive design to solid SEO foundations, we elevate and streamline your entire online presence.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24">
          <ScrollReveal direction="left" delay={0} depth={2}>
            <div className="relative">
              <img 
                src="/about.png" 
                alt="About Neptrax" 
                className="w-full h-auto rounded-2xl" 
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 mix-blend-overlay pointer-events-none"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150}>
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">About Neptrax</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                From coast to coast, we create websites, grow your rankings, and take social media off your plate. Our services won’t drain your budget, our support team is always there, and yes we actually reply. Whether you're beginning or leveling up, Neptrax helps you get it done smoothly and simply.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}