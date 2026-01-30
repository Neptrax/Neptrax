
import React, { useEffect, useState, useRef, useCallback } from 'react';
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
import './mission.mobile.css';

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
    primary: "bg-blue-600 hover:bg-blue-500 text-white shadow-2xl shadow-blue-600/30",
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

const techInner = [
  { name: 'React', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'HTML5', logo: 'https://cdn.simpleicons.org/html5/E34F26' },
  { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'PHP', logo: 'https://cdn.simpleicons.org/php/777BB4' },
  { name: 'MySQL', logo: 'https://cdn.simpleicons.org/mysql/4479A1' },
];

const techOuter = [
  { name: 'WordPress', logo: 'https://cdn.simpleicons.org/wordpress/21759B' },
  { name: 'Shopify', logo: 'https://cdn.simpleicons.org/shopify/95BF47' },
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
      description: 'We build professional, easy to navigate websites that clearly showcase Products & Services your business offer, making it simple for customers to understand your value.',
      image: '/design/business.png',
    },
    {
      icon: User,
      title: 'Personal Portfolio',
      description: 'Your work is your story. Don’t just list it Present it. We create stunning portfolios that capture your unique style and build a personal brand that makes you impossible to forget.',
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
      description: 'Feeling lost in search results? We provide deep dive analysis of your current site and competitors, delivering a clear roadmap to climb rankings and dominate your niche.',
      image: '/design/seo2.png',
    },
    {
      icon: Megaphone,
      title: 'Marketing Website',
      description: 'Stop letting visitors leave empty handed. We design high converting landing pages and sales funnels focused on a single goal: turning viewers into leads and customers.',
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
    { title: 'Local Expertise', description: 'Leverage our deep, country wide expertise to drive growth across the United States.' },
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
      description: 'Scaling digital platforms with robust infrastructure and cutting edge UX/UI design for the next generation of software.'
    },
    {
      icon: ShoppingBag,
      title: 'E-commerce',
      description: 'High conversion storefronts that blend aesthetic appeal with seamless checkout experiences to maximize your ROI.'
    },
    {
      icon: ShieldCheck,
      title: 'Financial Services',
      description: 'Secure, modern, and trust driven digital experiences for fintech startups and established banking institutions.'
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

  // --- Mobile Slider Logic Refined ---
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  // Ref to track transition status synchronously to prevent rapid swipe glitches
  const isTransitioningRef = useRef(false);
  const autoSlideTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  // Prepare slides with clones for infinite loop (Last, ...Originals, First)
  const sliderFeatures = [
    { ...features[features.length - 1], id: 'clone-last' },
    ...features.map((f, i) => ({ ...f, id: `feature-${i}` })),
    { ...features[0], id: 'clone-first' }
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNext = useCallback(() => {
    // Block if already transitioning to prevent index overflow
    if (isTransitioningRef.current) return;
    
    // Safety check for bounds
    setCurrentSlide(prev => {
      if (prev >= sliderFeatures.length - 1) return prev;
      
      isTransitioningRef.current = true;
      setIsTransitioning(true);
      return prev + 1;
    });
  }, [sliderFeatures.length]);

  const handlePrev = useCallback(() => {
    if (isTransitioningRef.current) return;
    
    setCurrentSlide(prev => {
      if (prev <= 0) return prev;
      
      isTransitioningRef.current = true;
      setIsTransitioning(true);
      return prev - 1;
    });
  }, []);

  // Handle infinite loop reset and transition lock cleanup
  const handleTransitionEnd = () => {
    isTransitioningRef.current = false;
    setIsTransitioning(false);

    if (currentSlide === 0) {
      // Jump from Clone Last to Real Last
      setCurrentSlide(sliderFeatures.length - 2);
    } else if (currentSlide === sliderFeatures.length - 1) {
      // Jump from Clone First to Real First
      setCurrentSlide(1);
    }
  };

  // Safety Unlock: Ensure lock is released even if transitionEnd fails to fire (e.g. tab switch)
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        if (isTransitioningRef.current) {
          isTransitioningRef.current = false;
          setIsTransitioning(false);
        }
      }, 600); // slightly longer than CSS transition (0.5s)
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Robust Auto-slide
  useEffect(() => {
    if (!isMobile) return;

    const startTimer = () => {
      if (autoSlideTimerRef.current) clearInterval(autoSlideTimerRef.current);
      autoSlideTimerRef.current = setInterval(() => {
        // Only slide if not currently interacting
        if (!isTransitioningRef.current) {
          handleNext();
        }
      }, 4000);
    };

    startTimer();
    return () => {
      if (autoSlideTimerRef.current) clearInterval(autoSlideTimerRef.current);
    };
  }, [isMobile, handleNext]);

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.targetTouches[0].clientX;
    // Pause auto-slide on touch
    if (autoSlideTimerRef.current) clearInterval(autoSlideTimerRef.current);
  };
  
  const onTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const threshold = 50;
    
    if (Math.abs(distance) > threshold) {
      if (distance > 0) handleNext();
      else handlePrev();
    }
    
    // Reset touch values
    touchStart.current = 0;
    touchEnd.current = 0;
    
    // Resume auto-slide
    if (autoSlideTimerRef.current) clearInterval(autoSlideTimerRef.current);
    autoSlideTimerRef.current = setInterval(() => {
      if (!isTransitioningRef.current) handleNext();
    }, 4000);
  };

  return (
    <div className="mission-section-root">
      <section className="bg-[#0d1117] text-white overflow-hidden mission-main-section">
        
        {/* 1. Hero / Projects Showcase Section */}
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-40 bg-[#0d1117] mission-hero-grid">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal1 direction="right" duration={0.8}>
              <div className="relative group mission-image-wrapper">
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

            <div className="flex flex-col space-y-8 mission-hero-content">
              <ScrollReveal1 direction="left">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#f1f5f9]">
                  Smoother Client Experiences
                </h2>
              </ScrollReveal1>

              <ScrollReveal1 direction="down" delay={200}>
                <div className="glass-card p-8 rounded-3xl relative overflow-hidden group border-white/10 mission-testimonial">
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

              <div className="grid grid-cols-2 gap-6 pt-4 mission-stats-grid">
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
        <div className="py-2 bg-[#0d1117] mission-flow-section">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal1 direction="up">
              <div className="text-center mb-24">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#f1f5f9]">Streamline Your <span className="text-[#2563eb]">Digital Flow</span></h2>
                <p className="text-[#abbcd4] text-lg max-w-2xl mx-auto">
                  Take full control of your digital presence with tools designed for speed, clarity, and precision.
                </p>
              </div>
            </ScrollReveal1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mission-flow-grid">
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
        <div 
          className="bg-[#0d1117] py-24 mission-expertise-section" 
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="max-w-7xl mx-auto px-6 overflow-hidden">
            <ScrollReveal1 direction="up">
              <div className="text-center mb-24">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#f1f5f9]">Our <span className="text-[#2563eb]">Expertise</span></h2>
              </div>
            </ScrollReveal1>

            {/* Slider / Grid Container */}
            <div 
              ref={sliderRef}
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mission-expertise-grid ${isMobile && isTransitioning ? 'smooth-transition' : 'no-transition'}`}
              style={isMobile ? { transform: `translateX(-${currentSlide * 100}%)` } : {}}
              onTransitionEnd={handleTransitionEnd}
            >
              {/* If Mobile, render sliderFeatures (with clones). If Desktop, render features (standard). */}
              {(isMobile ? sliderFeatures : features).map((feature, idx) => {
                const Content = (
                   <div className="group h-full flex flex-col glass-card rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 border border-white/5 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.3)]">
                    <div className="h-48 overflow-hidden relative">
                      <img src={feature.image} alt={feature.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="p-8 flex-grow flex flex-col" style={{
                      background: 'linear-gradient(to bottom right, rgba(15, 23, 42, 0.9) 0%, rgba(14, 20, 33, 0.85) 20%, rgba(13, 17, 23, 0.8) 35%, rgba(13, 17, 23, 0.7) 50%, rgba(14, 18, 26, 0.75) 60%, rgba(16, 22, 38, 0.8) 70%, rgba(20, 32, 64, 0.85) 80%, rgba(25, 45, 101, 0.9) 90%, rgba(30, 58, 138, 0.9) 100%)'
                    }}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/20">
                          <feature.icon size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-[#f1f5f9]">{feature.title}</h3>
                      </div>
                      <p className="text-[#94a3b8] text-sm leading-relaxed mb-8 flex-grow">{feature.description}</p>
                      <a href="#" className="inline-flex items-center gap-2 text-[#2563eb] font-bold group/link">
                        Learn More <ChevronRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                      </a>
                    </div>
                  </div>
                );

                return isMobile ? (
                  <div key={idx} className="w-full flex-shrink-0">
                    {Content}
                  </div>
                ) : (
                  <ScrollReveal1 key={idx} direction="up" delay={idx * 100}>
                    {Content}
                  </ScrollReveal1>
                );
              })}
            </div>
            
            {/* Pagination Dots */}
            {isMobile && (
              <div className="expertise-dots">
                {features.map((_, idx) => {
                  // Determine if this dot is active based on currentSlide accounting for infinite loop clones
                  const realIndex = (currentSlide === 0) ? features.length - 1 : (currentSlide === features.length + 1) ? 0 : currentSlide - 1;
                  const isActive = realIndex === idx;

                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        if (isTransitioningRef.current) return;
                        // Avoid redundant transition if already on this slide (mentally mapped to real indices)
                        if (realIndex === idx) return;

                        isTransitioningRef.current = true;
                        setIsTransitioning(true);
                        setCurrentSlide(idx + 1);
                      }}
                      className={`expertise-dot ${isActive ? 'active' : ''}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* 4. Why Choose Neptrax? */}
        <div className="py-12 relative bg-[#0d1117] mission-why-section">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2563eb]/5 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <ScrollReveal1 direction="up">
              <div className="text-center mb-24">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#f1f5f9]">Why Choose Neptrax?</h2>
                <p className="text-[#2563eb] font-bold uppercase tracking-[0.3em] text-xs">Global Standards • Fast Execution</p>
              </div>
            </ScrollReveal1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mission-benefits-grid">
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
        <div className="py-32 bg-[#0d1117] relative border-t border-white/5 mission-outcomes-section">
          <div className="bg-white/5 rounded-[1rem] mx-6 mb-16 overflow-hidden relative border border-white/5 py-32 mission-outcomes-container">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563eb]/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center outcomes-grid">
                
                {/* Left Content */}
                <ScrollReveal1 direction="right">
                  <div className="space-y-8 md:space-y-12 pl-8 outcomes-content">
                    <div className="space-y-6">
                      <h2 className="text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-[#f1f5f9]">
                        Enhanced <br /><span className="text-gradient">Outcomes</span>
                      </h2>
                      
                      {/* Mobile View: Single Line Tagline */}
                      <div className="md:hidden mt-2">
                         <p className="text-[#2563eb] font-black uppercase tracking-[0.2em] text-sm text-center">
                          Fast • Functional
                        </p>
                      </div>

                      {/* Desktop View: Single Line Tagline */}
                      <div className="hidden md:flex gap-6 items-center">
                        <p className="text-[#2563eb] font-black uppercase tracking-[0.5em] text-base">
                          Fast • Functional • Effective
                        </p>
                      </div>
                    </div>

                    {/* Description: Hidden on mobile */}
                    <p className="hidden md:block text-[#abbcd4] text-xl md:text-2xl leading-relaxed font-medium max-w-xl">
                      Delivering functional, high end digital solutions through precise engineering and creative strategy.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pt-2 md:pt-6 outcomes-stats">
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
                <div className="relative flex items-center justify-center min-h-[500px] mission-orbit-wrapper">
                  <div className="galactic-container">
                    <div className="galactic-anchor">
                        <img src="/logo.png" alt="Neptrax" className="w-8 h-8" />
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
        <div className="py-2 max-w-full mx-auto px-6 md:px-12 mb-16 bg-[#0d1117] border-none md:border-t md:border-white/5 mission-about-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center about-grid">
            {/* Left: Horizontal Image */}
            <ScrollReveal1 direction="right">
              <div className="relative group overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl aspect-video lg:aspect-auto lg:h-[450px] about-image-wrapper">
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
              <div className="space-y-8 about-content">
                <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-[#f1f5f9]">
                  About <span className="text-[#2563eb]">Neptrax</span>
                </h3>
                <p className="text-[#abbcd4] text-lg md:text-xl leading-relaxed">
                  Based in Chicago, Neptrax designs and develops apps, creates custom websites, improves Google rankings, and manages social media. 
                  With 8+ years of experience, our work stays reliable, affordable, and shaped around your business needs, serving clients across 
                  the US and internationally. Whether you're starting out or growing, the process stays simple and smooth.
                </p>
                
                <div className="pt-4 about-cta">
                  <motion.button 
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
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

      {/* 7. Who We Work With (Agency Integration) */}
      <section className="py-24 sm:py-32 bg-[#111827] relative overflow-hidden mission-clients-section">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 clients-header">
            <ScrollReveal1 direction="up" delay={0} duration={0.8}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#f1f5f9] mb-6 tracking-tighter">
                Who We Work With
              </h2>
            </ScrollReveal1>

            <ScrollReveal1 direction="up" delay={150} duration={0.8}>
              <p className="text-[#94a3b8] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                We partner with forward thinking businesses of all sizes across global industries to redefine digital possibilities.
              </p>
            </ScrollReveal1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 clients-grid">
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

      {/* 8. Ready to Start Your Project? (Agency Integration) */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] relative overflow-hidden mission-cta-section">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 cta-container">
          <ScrollReveal1 direction="up" delay={0} duration={0.8}>
            <h2 className="text-4xl sm:text-6xl font-black text-[#f1f5f9] mb-6 tracking-tighter leading-tight">
              Ready to Start Your Project?
            </h2>
          </ScrollReveal1>

          <ScrollReveal1 direction="up" delay={150} duration={0.8}>
            <p className="text-[#94a3b8] text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can help your business grow online with world class digital solutions and precision design.
            </p>
          </ScrollReveal1>

          <ScrollReveal1 direction="up" delay={250} duration={0.8}>
            <EnhancedButton
              onClick={() => window.open('https://cal.com/neptrax', '_blank')}
              variant="primary"
              size="lg"
              className="cta-btn"
            >
              Book a Call
            </EnhancedButton>
          </ScrollReveal1>
        </div>
      </section>
    </div>
  );
}
