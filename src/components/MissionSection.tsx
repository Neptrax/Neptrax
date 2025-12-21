import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate, Variants } from 'framer-motion';
import {
  Globe,
  User,
  Search,
  TrendingUp,
  Megaphone,
  Briefcase,
  Beaker,
  Archive,
  PackageCheck,
  Focus,
  MessagesSquare,
  ClipboardList,
  ChevronRight,
  Cpu,
  ShoppingBag,
  ShieldCheck,
  Plane,
  Home,
  Layers,
  ArrowRight
} from 'lucide-react';
import ScrollReveal1 from './ScrollReveal1';

const Counter = ({ from, to, duration = 2, suffix = "" }: { from: number, to: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(from);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: duration,
        onUpdate: (value) => setCount(Math.floor(value)),
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [from, to, duration, isInView]);

  return (
    <span ref={nodeRef} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

interface EnhancedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const EnhancedButton: React.FC<EnhancedButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = ''
}) => {
  const ref = useRef(null);

  const baseStyles = "relative inline-flex items-center justify-center gap-2 font-black transition-all overflow-hidden rounded-full group select-none";
  
  const variants = {
    primary: "bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] hover:opacity-90 text-white shadow-2xl shadow-blue-600/30",
    secondary: "bg-white/5 hover:bg-white/10 border border-white/10 text-white backdrop-blur-sm"
  };
  
  const sizes = {
    sm: "px-6 py-2.5 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-xl"
  };

  const shimmerVariants: Variants = {
    initial: { x: "-150%" },
    hover: { 
      x: ["-150%", "350%"],
      transition: { 
        duration: 1.0, 
        ease: "easeInOut" 
      }
    }
  };

  return (
    <motion.button
      ref={ref}
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <motion.div
        variants={shimmerVariants}
        initial="initial"
        className="absolute inset-0 w-1/2 h-full bg-white/20 -skew-x-[45deg] pointer-events-none z-20"
      />
      
      <div className="absolute inset-0 w-1/2 h-full bg-white/10 -skew-x-[45deg] -translate-x-full group-hover:translate-x-[350%] transition-transform duration-1000 ease-in-out pointer-events-none z-10" />
      
      <span className="relative z-30 flex items-center gap-3">
        {children}
        <ArrowRight 
          size={size === 'lg' ? 24 : 18} 
          className="group-hover:translate-x-1.5 transition-transform duration-300" 
        />
      </span>
    </motion.button>
  );
};

// Galactic Orbit Configuration
const techInner = [
  { name: 'React', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'HTML5', logo: 'https://cdn.simpleicons.org/html5/E34F26' },
  { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'PHP', logo: 'https://cdn.simpleicons.org/php/777BB4' },
  { name: 'MySQL', logo: 'https://cdn.simpleicons.org/mysql/4479A1' },
];

const techOuter = [
  { name: 'WordPress', logo: 'https://cdn.simpleicons.org/wordpress/21759B' },
  { name: 'WooCommerce', logo: 'https://cdn.simpleicons.org/woocommerce/96588A' },
  { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'Git', logo: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'Claude', logo: 'https://cdn.simpleicons.org/anthropic/D97757' },
  { name: 'n8n', logo: 'https://cdn.simpleicons.org/n8n/FF6D5A' },
  { name: 'Cloudflare', logo: 'https://cdn.simpleicons.org/cloudflare/F38020' },
  { name: 'Laravel', logo: 'https://cdn.simpleicons.org/laravel/FF2D20' },
  { name: 'jQuery', logo: 'https://cdn.simpleicons.org/jquery/0769AD' }
];

export default function MissionSection() {
  const features = [
    {
      icon: Briefcase,
      title: 'Business Website',
      description: 'Every business needs a solid foundation online. We build professional, easy-to-navigate websites that clearly showcase what you offer, making it simple for customers to understand your value.',
      image: '/design/business.png',
    },
    {
      icon: User,
      title: 'Personal Portfolio',
      description: 'Your work is your story. Don’t just list it—Present it. We create stunning portfolios that capture your unique style and build a personal brand that makes you impossible to forget.',
      image: '/design/personal.png',
    },
    {
      icon: Search,
      title: 'On-Page SEO',
      description: 'What good is a beautiful website if no one can find it? We meticulously optimize every page from content to code to rank higher on Google, helping you attract the right customers.',
      image: '/design/seo.png',
    },
    {
      icon: TrendingUp,
      title: 'SEO Strategy',
      description: 'Feeling lost in search results? We provide deep-dive analysis of your current site and competitors, delivering a clear roadmap to climb rankings and dominate your niche.',
      image: '/design/seo2.png',
    },
    {
      icon: Megaphone,
      title: 'Marketing Website',
      description: 'Stop letting visitors leave empty-handed. We design high-converting landing pages and sales funnels focused on a single goal: turning viewers into leads and customers.',
      image: '/design/market.png',
    },
    {
      icon: Globe,
      title: 'Brand Endorsement',
      description: 'Your digital presence is your handshake. We build websites that go beyond looks, creating a genuine connection by authentically communicating your values and building trust.',
      image: '/design/brand.png',
    },
  ];

  const benefits = [
    { title: 'Local Expertise', description: 'Leverage our deep, country-wide expertise to drive growth across the United States.' },
    { title: 'Proven Results', description: 'We deliver measurable success in digital traffic, qualified leads, and revenue growth.' },
    { title: 'Tailored Strategy', description: 'Get a custom digital strategy designed to solve your unique business challenges.' },
    { title: 'Dedicated Partnership', description: 'Stay informed and in control with transparent communication every step of the way.' },
    { title: 'Smart Investment', description: 'Achieve outstanding digital quality and results without stretching your budget.' },
    { title: 'Digital Transformation', description: 'Integrated solutions from web development to full social media management.' },
  ];

  const flowFeatures = [
    { icon: Beaker, title: "Project Mapping", desc: "Break down complex projects into clear, actionable tasks for a seamless workflow." },
    { icon: Archive, title: "Intelligent Progress", desc: "Automatically file away completed milestones maintaining a focused workspace." },
    { icon: PackageCheck, title: "Deployment Ready", desc: "Receive final deliverables that are ready for instant global implementation." },
    { icon: Focus, title: "Project Lens", desc: "Customize your view to highlight immediate priorities and filter out irrelevant noise." },
    { icon: MessagesSquare, title: "Team Dialogue", desc: "Embed discussions and feedback within specific tasks to enhance collaboration." },
    { icon: ClipboardList, title: "Faster Delivery", desc: "Use structured templates to accelerate delivery while maintaining high standards." }
  ];

  const clients = [
    {
      icon: Cpu,
      title: 'SaaS & Tech',
      description: 'Scaling digital platforms with robust infrastructure and cutting-edge UX/UI design for the next generation of software.'
    },
    {
      icon: ShoppingBag,
      title: 'E-commerce',
      description: 'High-conversion storefronts that blend aesthetic appeal with seamless checkout experiences to maximize your ROI.'
    },
    {
      icon: ShieldCheck,
      title: 'Financial Services',
      description: 'Secure, modern, and trust-driven digital experiences for fintech startups and established banking institutions.'
    },
    {
      icon: Plane,
      title: 'Travel & Hospitality',
      description: 'Seamless booking and management systems that elevate customer experiences and operational efficiency.'
    },
    {
      icon: Home,
      title: 'Real Estate',
      description: 'Immersive property listings and lead generation systems that showcase architectural excellence and drive inquiries.'
    },
    {
      icon: Layers,
      title: 'Creative Agencies',
      description: 'Strategic partnerships with fellow creators to deliver top-tier development and technical expertise for diverse client lists.'
    }
  ];

  const innerRadius = 'clamp(80px, 10vw, 95px)';
  const outerRadius = 'clamp(165px, 22vw, 190px)';

  return (
    <>
      <section className="bg-[#0d1117] text-white overflow-hidden">
        
        {/* 1. Hero / Projects Showcase Section */}
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-40 bg-[#0d1117]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal1 direction="right" duration={0.8}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 aspect-[4/3] shadow-2xl">
                  <img
                    src="/home.png"
                    alt="Modern Office"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/60 to-transparent"></div>
                </div>
              </div>
            </ScrollReveal1>

            <div className="flex flex-col space-y-8">
              <ScrollReveal1 direction="left">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#f1f5f9]">
                  Smoother Client Experience
                </h2>
              </ScrollReveal1>

              <ScrollReveal1 direction="down" delay={200}>
                <div className="glass-card p-8 rounded-3xl relative overflow-hidden group border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb]/0 via-[#2563eb]/5 to-[#1e3a8a]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
                  
                  <p className="text-xl md:text-2xl font-medium italic text-[#abbcd4] mb-6 leading-relaxed relative z-10 transform transition-all duration-500 ease-out hover:scale-[1.02]">
                    "Neptrax delivered beyond expectations. The website feels modern, fast, and truly professional. It changed how clients see our brand."
                  </p>
                  <div className="flex items-center gap-4 relative z-10">
                    <div>
                      <h4 className="font-bold text-lg text-[#f1f5f9]">Oliver Hayes</h4>
                      <p className="text-[#94a3b8] text-sm font-medium">CEO at PixelReach Studios</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal1>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <ScrollReveal1 direction="zoom" delay={400}>
                  <div className="relative p-6 rounded-2xl overflow-hidden group hover:border-[#2563eb]/30 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/90 via-[#0d1117]/70 to-[#1e3a8a]/90 backdrop-blur-sm border border-white/10 rounded-2xl" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb]/0 via-[#2563eb]/10 to-[#2563eb]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
                    <div className="relative z-10">
                      <div className="text-4xl md:text-5xl font-black text-[#2563eb] mb-1 transform transition-all duration-500 group-hover:scale-105">
                        <Counter from={0} to={97} suffix="%" />
                      </div>
                      <div className="text-[#94a3b8] font-bold uppercase tracking-widest text-[10px] md:text-xs">Client Retention</div>
                    </div>
                  </div>
                </ScrollReveal1>

                <ScrollReveal1 direction="zoom" delay={500}>
                  <div className="relative p-6 rounded-2xl overflow-hidden group hover:border-[#2563eb]/30 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/90 via-[#0d1117]/70 to-[#1e3a8a]/90 backdrop-blur-sm border border-white/10 rounded-2xl" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb]/0 via-[#2563eb]/10 to-[#2563eb]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
                    <div className="relative z-10">
                      <div className="text-4xl md:text-5xl font-black text-[#2563eb] mb-1 transform transition-all duration-500 group-hover:scale-105">
                        <Counter from={0} to={100} suffix="+" />
                      </div>
                      <div className="text-[#94a3b8] font-bold uppercase tracking-widest text-[10px] md:text-xs">Global Projects</div>
                    </div>
                  </div>
                </ScrollReveal1>
              </div>
            </div>
          </div>
        </div>
          
        {/* 2. Streamline Your Digital Flow */}
        <div className="py-1 bg-[#0d1117]">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal1 direction="up">
              <div className="text-center mb-24">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#f1f5f9]">Streamline Your <span className="text-[#2563eb]">Digital Flow</span></h2>
                <p className="text-[#abbcd4] text-lg max-w-2xl mx-auto">
                  Take full control of your digital presence with tools designed for speed, clarity, and precision.
                </p>
              </div>
            </ScrollReveal1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {flowFeatures.map((item, i) => (
                <ScrollReveal1 key={i} direction="up" delay={i * 100}>
                  <div className="group p-8 rounded-3xl glass-card hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-[#2563eb]/30">
                    <div className="w-14 h-14 rounded-2xl bg-[#2563eb]/10 flex items-center justify-center text-[#2563eb] mb-6 group-hover:bg-gradient-to-r group-hover:from-[#2563eb] group-hover:to-[#1e3a8a] group-hover:text-white transition-all duration-500">
                      <item.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors text-[#f1f5f9]">{item.title}</h3>
                    <p className="text-[#94a3b8] leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </ScrollReveal1>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Our Premium Expertise Section */}
        <div className="bg-[#0d1117] py-32">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal1 direction="up">
              <div className="text-center mb-24">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#f1f5f9]">Our <span className="text-[#2563eb]">Expertise</span></h2>
              </div>
            </ScrollReveal1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <ScrollReveal1 key={idx} direction="up" delay={idx * 100}>
                  <div className="group h-full flex flex-col glass-card rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 border border-white/5 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.3)]">
                    <div className="h-48 overflow-hidden relative">
                      <img src={feature.image} alt={feature.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="p-8 flex-grow flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/20">
                          <feature.icon size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-[#f1f5f9]">{feature.title}</h3>
                      </div>
                      <p className="text-[#94a3b8] text-sm leading-relaxed mb-8 flex-grow">{feature.description}</p>
                      <a href="services" className="inline-flex items-center gap-2 text-[#2563eb] font-bold group/link">
                        Learn More <ChevronRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </ScrollReveal1>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Why Choose Neptrax? */}
        <div className="py-4 relative bg-[#0d1117]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2563eb]/5 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <ScrollReveal1 direction="up">
              <div className="text-center mb-24">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#f1f5f9]">Why Choose Neptrax?</h2>
                <p className="text-[#2563eb] font-bold uppercase tracking-[0.3em] text-xs">Global Standards • Fast Execution</p>
              </div>
            </ScrollReveal1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <ScrollReveal1 
                  key={i} 
                  direction={i % 2 === 0 ? "right" : "left"} 
                  delay={i * 50}
                >
                  <div className="p-8 rounded-2xl glass-card border border-white/5 hover:border-[#2563eb]/40 transition-colors group">
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-8 bg-[#2563eb] group-hover:h-12 transition-all rounded-full shrink-0"></div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 group-hover:text-white transition-colors text-[#f1f5f9]">{benefit.title}</h4>
                        <p className="text-[#94a3b8] text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal1>
              ))}
            </div>
          </div>
        </div>

        {/* 5. Enhanced Outcomes Section */}
        <div className="py-24 bg-[#0d1117] relative">
          <div className="bg-white/5 rounded-[1rem] mx-6 mb-16 overflow-hidden relative border border-white/5 py-16">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563eb]/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Left Content */}
                <ScrollReveal1 direction="right">
                  <div className="space-y-12 pl-8">
                    <div className="space-y-6">
                      <h2 className="text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-[#f1f5f9]">
                        Enhanced <br /><span className="text-gradient">Outcomes</span>
                      </h2>
                      <div className="flex gap-6 items-center">
                        <p className="text-[#2563eb] font-black uppercase tracking-[0.5em] text-sm md:text-base">
                          Fast • Functional • Effective
                        </p>
                      </div>
                    </div>

                    <p className="text-[#abbcd4] text-xl md:text-2xl leading-relaxed font-medium max-w-xl">
                      Delivering functional, high-end digital solutions through precise engineering and creative strategy.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pt-6">
                      <div className="space-y-2">
                        <p className="text-5xl font-black text-white"><Counter from={0} to={100} suffix="+" /></p>
                        <p className="text-xs text-[#94a3b8] uppercase font-black tracking-[0.2em]">Sites Built</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-5xl font-black text-white">24/7</p>
                        <p className="text-xs text-[#94a3b8] uppercase font-black tracking-[0.2em]">Support</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-5xl font-black text-white"><Counter from={0} to={50} suffix="+" /></p>
                        <p className="text-xs text-[#94a3b8] uppercase font-black tracking-[0.2em]">Verified Reviews</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal1>

                {/* Right Side: Galactic Orbit Animation */}
                <div className="relative flex items-center justify-center min-h-[500px]">
                  <div className="galactic-container">
                    <div className="galactic-anchor">
                      <img src="/logo.png" alt="Company Logo" />
                    </div>

                    <div className="orbit-ring ring-inner">
                      {techInner.map((tech, i) => {
                        const angle = i * (360 / techInner.length);
                        return (
                          <div 
                            key={tech.name} 
                            className="orbit-node"
                            style={{ transform: `rotate(${angle}deg) translateY(${innerRadius})` } as any}
                          >
                            <div style={{ transform: `rotate(${-angle}deg)` }}>
                              <div className="orbit-icon">
                                <img src={tech.logo} alt={tech.name} />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="orbit-ring ring-outer">
                      {techOuter.map((tech, i) => {
                        const angle = i * (360 / techOuter.length);
                        return (
                          <div 
                            key={tech.name} 
                            className="orbit-node"
                            style={{ transform: `rotate(${angle}deg) translateY(${outerRadius})` } as any}
                          >
                            <div style={{ transform: `rotate(${-angle}deg)` }}>
                              <div className="orbit-icon">
                                <img src={tech.logo} alt={tech.name} />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6. About Neptrax Section */}
        <div className="py-4 max-w-full mx-auto px-12 mb-16 bg-[#0d1117]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Horizontal Image */}
            <ScrollReveal1 direction="right">
              <div className="relative group overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl aspect-video lg:aspect-auto lg:h-[450px]">
                <div className="absolute inset-0 bg-[#2563eb]/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700 z-10" />
                <img 
                  src="/aboutneptrax.png" 
                  alt="About Neptrax Office" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-40" />
              </div>
            </ScrollReveal1>

            {/* Right: Content */}
            <ScrollReveal1 direction="left" delay={200}>
              <div className="space-y-8">
                <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-[#f1f5f9]">
                  About <span className="text-[#2563eb]">Neptrax</span>
                </h3>
                <p className="text-[#abbcd4] text-lg md:text-xl leading-relaxed">
                  Based in Chicago, Neptrax designs and develops apps, creates custom websites, improves Google rankings, and manages social media. 
                  With 8+ years of experience, our work stays reliable, affordable, and shaped around your business needs, serving clients across 
                  the US and internationally. Whether you're starting out or growing, the process stays simple and smooth.
                </p>
                
                <div className="pt-4">
                  <motion.button 
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.location.href = "/about"}
                    className="px-10 py-5 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] text-white font-black text-xl transition-all shadow-xl shadow-blue-600/30 flex items-center gap-3 group"
                  >
                    Learn More
                    <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </ScrollReveal1>
          </div>
        </div>

      </section>

      {/* Integrated Agency Content */}
      <section className="py-24 sm:py-32 bg-[#111827] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <ScrollReveal1 direction="up" delay={0} duration={0.8}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#f1f5f9] mb-6 tracking-tighter">
                Who We Work With
              </h2>
            </ScrollReveal1>

            <ScrollReveal1 direction="up" delay={150} duration={0.8}>
              <p className="text-[#94a3b8] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                We partner with forward-thinking businesses of all sizes across global industries to redefine digital possibilities.
              </p>
            </ScrollReveal1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {clients.map((client, index) => (
              <ScrollReveal1 
                key={index} 
                direction="up" 
                delay={index * 100} 
                duration={0.6}
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative rounded-3xl p-8 bg-white/[0.02] border border-[#334155] hover:border-[#2563eb] transition-all duration-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)] h-full"
                >
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#2563eb]/5 to-transparent pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
                    <div className="w-16 h-16 rounded-2xl bg-[#2563eb]/10 flex items-center justify-center text-[#2563eb] shrink-0 group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-500 ease-out group-hover:rotate-6 shadow-lg shadow-blue-500/10">
                      <client.icon size={32} />
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-[#f1f5f9] mb-2 group-hover:text-white transition-colors tracking-tight">
                        {client.title}
                      </h3>
                      
                      <p className="text-[#94a3b8] leading-relaxed text-base group-hover:text-slate-300 transition-colors">
                        {client.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                    <div className="w-2 h-2 bg-[#2563eb] rounded-full shadow-[0_0_10px_#2563eb]" />
                  </div>
                </motion.div>
              </ScrollReveal1>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal1 direction="up" delay={0} duration={0.8}>
            <h2 className="text-4xl sm:text-6xl font-black text-[#f1f5f9] mb-6 tracking-tighter leading-tight">
              Ready to Start Your Project?
            </h2>
          </ScrollReveal1>

          <ScrollReveal1 direction="up" delay={150} duration={0.8}>
            <p className="text-[#94a3b8] text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can help your business grow online with world-class digital solutions and precision design.
            </p>
          </ScrollReveal1>

          <ScrollReveal1 direction="up" delay={250} duration={0.8}>
            <EnhancedButton
              onClick={() => window.open('https://cal.com/neptrax', '_blank')}
              variant="primary"
              size="lg"
            >
              Book a Call
            </EnhancedButton>
          </ScrollReveal1>
        </div>
      </section>
    </>
  );
}