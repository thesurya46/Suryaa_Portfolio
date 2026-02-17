import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Clock, MapPin, Activity } from 'lucide-react';
import { downloadResume } from '../utils/resumeDownload';
import profilePhoto from '@/assets/0a062a220b68b7fd04f9bc8bd6a7cf16acdc6ad8.png';

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0F19]">
      <canvas ref={canvasRef} className="particle-canvas" />

      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-20" />

      {/* Real-Time Status Bar - Top Right */}
      <motion.div
        className="absolute top-4 right-4 md:top-6 md:right-6 z-20 flex flex-col items-end gap-2 md:gap-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Status Widget */}
        <div className="flex items-center gap-3 glass px-4 py-2 rounded-full border border-[#00F5FF]/30 bg-[#0B0F19]/40 backdrop-blur-md">
          <div className="relative">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-500 animate-ping opacity-75" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">Status</span>
            <span className="text-xs text-white font-bold tracking-wide">ONLINE</span>
          </div>
        </div>

        {/* Time Widget */}
        <div className="glass px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-[#00F5FF]/30 bg-[#0B0F19]/40 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-end">
              <span className="text-xs md:text-sm text-white font-mono font-bold tracking-widest">
                {formatTime(currentTime)}
              </span>
              <span className="text-[10px] text-[#00F5FF] font-medium tracking-wide">
                {formatDate(currentTime)}
              </span>
            </div>
            <div className="h-6 w-[1px] bg-white/10" />
            <div className="flex items-center gap-1.5 text-gray-400">
              <MapPin className="w-3 h-3 text-[#7B2EFF]" />
              <span className="text-[10px] uppercase tracking-wide">Odisha, IN</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Profile Photo with Cyan Glow */}
          <motion.div
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-[#00F5FF] mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="absolute inset-0 bg-[#00F5FF]/20 animate-pulse" />
            <img
              src={profilePhoto}
              alt="Surya"
              className="w-full h-full object-cover relative z-10"
            />
            <div className="absolute inset-0 ring-4 ring-[#00F5FF]/30 rounded-full animate-pulse" />
          </motion.div>

          {/* Name & Title */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Surya Snata
            <span className="text-[#00F5FF] block md:inline md:ml-4">Panigrahi</span>
          </motion.h1>

          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#00F5FF]" />
            <span className="text-lg md:text-xl text-[#00F5FF] font-mono tracking-widest uppercase">
              Data Scientist & Developer
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#00F5FF]" />
          </motion.div>

          <motion.p
            className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Crafting intelligent solutions through <span className="text-white font-medium">Data Science</span> and <span className="text-white font-medium">Modern Web Technologies</span>.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a
              href="#projects"
              className="group relative px-8 py-3.5 bg-gradient-to-r from-[#00F5FF] to-[#7B2EFF] text-white rounded-lg flex items-center gap-2 overflow-hidden w-full sm:w-auto justify-center"
            >
              <span className="relative z-10 font-medium tracking-wide">View Work</span>
              <div className="absolute inset-0 bg-[#00F5FF] opacity-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </a>

            <button
              onClick={(e) => {
                e.preventDefault();
                downloadResume();
              }}
              className="group px-8 py-3.5 bg-transparent border border-white/20 text-white rounded-lg hover:bg-white/5 transition-all w-full sm:w-auto"
            >
              <span className="font-medium tracking-wide">Download Resume</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-[10px] uppercase tracking-widest text-[#00F5FF]">Scroll</span>
          <ChevronDown className="w-5 h-5 text-white animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
}