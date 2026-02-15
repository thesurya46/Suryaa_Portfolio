import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';

export function ContactSection() {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={ref} className="min-h-screen py-24 px-6 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl gradient-text mb-16 text-center"
          style={{ fontFamily: 'Sora, sans-serif' }}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3
                className="text-3xl text-white mb-6"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Let's Connect
              </h3>
              <p
                className="text-gray-400 text-lg leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <motion.a
                href="mailto:work.suryasnata@gmail.com"
                className="flex items-center gap-4 glass-strong p-4 rounded-xl hover:neon-glow-blue transition-all duration-300 group"
                whileHover={{ x: 10 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#00F5FF]/20 to-[#00F5FF]/10 rounded-lg flex items-center justify-center group-hover:neon-glow-blue">
                  <Mail className="w-6 h-6 text-[#00F5FF]" />
                </div>
                <div>
                  <p
                    className="text-white font-semibold"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    Email
                  </p>
                  <p
                    className="text-gray-400 text-sm"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    work.suryasnata@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/suryasnata-panigrahi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass-strong p-4 rounded-xl hover:neon-glow-purple transition-all duration-300 group"
                whileHover={{ x: 10 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#7B2EFF]/20 to-[#7B2EFF]/10 rounded-lg flex items-center justify-center group-hover:neon-glow-purple">
                  <Linkedin className="w-6 h-6 text-[#7B2EFF]" />
                </div>
                <div>
                  <p
                    className="text-white font-semibold"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    LinkedIn
                  </p>
                  <p
                    className="text-gray-400 text-sm"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    @suryasnata-panigrahi
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/thesurya46"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass-strong p-4 rounded-xl hover:neon-glow-blue transition-all duration-300 group"
                whileHover={{ x: 10 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#00F5FF]/20 to-[#7B2EFF]/10 rounded-lg flex items-center justify-center group-hover:neon-glow-blue">
                  <Github className="w-6 h-6 text-[#00F5FF]" />
                </div>
                <div>
                  <p
                    className="text-white font-semibold"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    GitHub
                  </p>
                  <p
                    className="text-gray-400 text-sm"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    @thesurya46
                  </p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-4 glass-strong p-4 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#00F5FF]/20 to-[#7B2EFF]/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#00F5FF]" />
                </div>
                <div>
                  <p
                    className="text-white font-semibold"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    Location
                  </p>
                  <p
                    className="text-gray-400 text-sm"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Keonjhar, Odisha
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="glass-strong rounded-2xl p-8 neon-glow-blue"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-[#00F5FF]/30 rounded-xl px-4 py-3 text-white placeholder-transparent focus:border-[#00F5FF] focus:outline-none transition-all duration-300 peer"
                  placeholder="Your Name"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                <label
                  className="absolute left-4 -top-6 text-[#00F5FF] text-sm transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-6 peer-focus:text-[#00F5FF]"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-[#00F5FF]/30 rounded-xl px-4 py-3 text-white placeholder-transparent focus:border-[#00F5FF] focus:outline-none transition-all duration-300 peer"
                  placeholder="Your Email"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                <label
                  className="absolute left-4 -top-6 text-[#00F5FF] text-sm transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-6 peer-focus:text-[#00F5FF]"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Your Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-[#00F5FF]/30 rounded-xl px-4 py-3 text-white placeholder-transparent focus:border-[#00F5FF] focus:outline-none transition-all duration-300 peer resize-none"
                  placeholder="Your Message"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                <label
                  className="absolute left-4 -top-6 text-[#00F5FF] text-sm transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:-top-6 peer-focus:text-[#00F5FF]"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Your Message
                </label>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-[#00F5FF] to-[#7B2EFF] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-xl transition-all duration-300 ripple-button"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}