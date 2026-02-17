import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, User, Code, Award, Briefcase, Mail, Menu, X, MessageCircle } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Code },
  { name: 'Experience', href: '#experience', icon: Award },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Contact', href: '#contact', icon: Mail },
  { name: 'Ask Q', href: '#ask-question', icon: MessageCircle },
];

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling 100px
      setIsVisible(window.scrollY > 100);

      // Determine active section
      const sections = ['about', 'skills', 'experience', 'projects', 'contact', 'ask-question'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }

      // If at top, set home as active
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            className="hidden md:flex fixed top-8 left-1/2 -translate-x-1/2 z-50 glass-strong rounded-full px-6 py-3 items-center gap-2 neon-glow-blue"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                (item.href === '#' && activeSection === '') ||
                (item.href === `#${activeSection}`);

              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${isActive
                    ? 'bg-gradient-to-r from-[#00F5FF] to-[#7B2EFF] text-white'
                    : 'text-gray-400 hover:text-white'
                    }`}
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.name}</span>
                </motion.a>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Menu Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            className="md:hidden fixed top-6 right-6 z-50 w-12 h-12 glass-strong rounded-full flex items-center justify-center neon-glow-blue"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#00F5FF]" />
            ) : (
              <Menu className="w-6 h-6 text-[#00F5FF]" />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 bg-[#0B0F19]/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              className="flex flex-col items-center justify-center h-full gap-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ delay: 0.1 }}
            >
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive =
                  (item.href === '#' && activeSection === '') ||
                  (item.href === `#${activeSection}`);

                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-4 glass-strong px-8 py-4 rounded-full transition-all duration-300 ${isActive
                        ? 'bg-gradient-to-r from-[#00F5FF] to-[#7B2EFF] text-white neon-glow-cyan'
                        : 'text-gray-400 hover:text-white hover:neon-glow-blue'
                      }`}
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-lg font-medium">{item.name}</span>
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}