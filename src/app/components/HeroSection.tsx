import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Clock, MapPin } from 'lucide-react';
import { downloadResume } from '../utils/resumeDownload';
import profilePhoto from 'figma:asset/0a062a220b68b7fd04f9bc8bd6a7cf16acdc6ad8.png';

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time to 12-hour format with AM/PM
  const formatTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutesStr} ${ampm}`;
  };

  // Format date
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      hue: number;
    }> = [];

    // Create aesthetic dual-color particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1,
        hue: Math.random() > 0.5 ? 190 : 280, // Cyan or Purple
      });
    }

    let animationFrameId: number;

    const animate = () => {
      // Smooth fade effect
      ctx.fillStyle = 'rgba(11, 15, 25, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with gradient effect
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 4
        );
        
        if (particle.hue === 190) {
          // Cyan particles
          gradient.addColorStop(0, 'rgba(0, 245, 255, 0.8)');
          gradient.addColorStop(0.5, 'rgba(0, 200, 255, 0.4)');
          gradient.addColorStop(1, 'rgba(0, 150, 200, 0)');
        } else {
          // Purple particles
          gradient.addColorStop(0, 'rgba(123, 46, 255, 0.8)');
          gradient.addColorStop(0.5, 'rgba(150, 80, 255, 0.4)');
          gradient.addColorStop(1, 'rgba(100, 50, 200, 0)');
        }
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles with gradient lines
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const lineGradient = ctx.createLinearGradient(
              particle.x,
              particle.y,
              otherParticle.x,
              otherParticle.y
            );
            
            const alpha = 0.3 * (1 - distance / 150);
            lineGradient.addColorStop(0, `rgba(0, 245, 255, ${alpha})`);
            lineGradient.addColorStop(0.5, `rgba(80, 150, 220, ${alpha * 0.8})`);
            lineGradient.addColorStop(1, `rgba(123, 46, 255, ${alpha})`);
            
            ctx.strokeStyle = lineGradient;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg">
      <canvas ref={canvasRef} className="particle-canvas" />
      
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 gradient-mesh pointer-events-none" />
      
      {/* Real-Time Status Bar - Top Right */}
      <motion.div
        className="absolute top-4 right-4 md:top-6 md:right-6 z-20 flex items-center gap-2 md:gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Profile Photo */}
        <motion.div
          className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-[#00F5FF] glass"
          whileHover={{ scale: 1.1 }}
          animate={{
            boxShadow: [
              '0 0 20px rgba(0, 245, 255, 0.5)',
              '0 0 30px rgba(123, 46, 255, 0.5)',
              '0 0 20px rgba(0, 245, 255, 0.5)',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <img
            src={profilePhoto}
            alt="Surya"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Status Card */}
        <motion.div
          className="glass px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-[#00F5FF]/30 backdrop-blur-lg"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex flex-col gap-0.5 md:gap-1">
            {/* Time */}
            <div className="flex items-center gap-1.5 md:gap-2">
              <Clock className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#00F5FF]" />
              <span
                className="text-[10px] md:text-xs text-white font-medium"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {formatTime(currentTime)}
              </span>
            </div>
            {/* Date */}
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-[10px] md:text-xs text-[#00F5FF]">📅</span>
              <span
                className="text-[9px] md:text-xs text-gray-300"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {formatDate(currentTime)}
              </span>
            </div>
            {/* Location */}
            <div className="flex items-center gap-1.5 md:gap-2">
              <MapPin className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#7B2EFF]" />
              <span
                className="text-[9px] md:text-xs text-gray-400"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Keonjhar, Odisha
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* 3D AI Orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#00F5FF]/20 to-[#7B2EFF]/20 blur-3xl pulse-glow" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl gradient-text mb-6"
            style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '0.1em', fontWeight: '300' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Surya Snata Panigrahi
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-[#00F5FF] mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Data Enthusiast
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Student passionate about transforming data into actionable insights
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-[#00F5FF] to-[#7B2EFF] rounded-full overflow-hidden ripple-button"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="relative z-10 text-white font-semibold flex items-center gap-2">
                View Projects
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <div className="absolute inset-0 neon-glow-cyan opacity-50" />
            </a>

            <button
              onClick={(e) => {
                e.preventDefault();
                downloadResume();
              }}
              className="group px-8 py-4 glass rounded-full border border-[#00F5FF]/30 hover:border-[#00F5FF] transition-all duration-300 animated-border cursor-pointer"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="text-white font-semibold">Download Resume</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 scroll-indicator cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <ChevronDown className="w-8 h-8 text-[#00F5FF]" />
        </motion.button>
      </div>
    </section>
  );
}