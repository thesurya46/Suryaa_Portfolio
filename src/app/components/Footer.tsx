import { motion } from 'motion/react';
import { Heart, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-12 px-6 overflow-hidden border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#00F5FF]/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Animated Divider Line */}
        <motion.div
          className="h-0.5 bg-gradient-to-r from-transparent via-[#00F5FF] to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />

        {/* Let's Connect Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3
            className="text-2xl text-center gradient-text mb-6"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Let's Connect
          </h3>
          
          <div className="flex justify-center items-center gap-6">
            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/__.thesurya.__?igsh=Z2p4cXFzcTA3OG1p"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-14 h-14 glass rounded-full flex items-center justify-center border border-[#00F5FF]/30 hover:border-[#00F5FF] transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="w-6 h-6 text-[#00F5FF] group-hover:text-white transition-colors duration-300" />
              <div className="absolute inset-0 rounded-full neon-glow-cyan opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            </motion.a>

            {/* X (Twitter) */}
            <motion.a
              href="https://x.com/__thsurya__"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-14 h-14 glass rounded-full flex items-center justify-center border border-[#7B2EFF]/30 hover:border-[#7B2EFF] transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* X Logo SVG */}
              <svg
                className="w-5 h-5 text-[#7B2EFF] group-hover:text-white transition-colors duration-300"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <div className="absolute inset-0 rounded-full neon-glow-purple opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            </motion.a>
          </div>
        </motion.div>

        <div className="flex flex-col items-center gap-4">
          {/* Copyright */}
          <motion.p
            className="text-gray-400 text-center flex items-center gap-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Designed & Built with
            <Heart className="w-4 h-4 text-[#00F5FF] fill-[#00F5FF] animate-pulse" />
            by Surya Snata Panigrahi
          </motion.p>

          {/* Year */}
          <motion.p
            className="text-gray-500 text-sm"
            style={{ fontFamily: 'Inter, sans-serif' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} All rights reserved
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            className="flex items-center gap-2 text-xs text-gray-600"
            style={{ fontFamily: 'Inter, sans-serif' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span>Built with</span>
            <span className="text-[#00F5FF]">React</span>
            <span>•</span>
            <span className="text-[#7B2EFF]">Tailwind CSS</span>
            <span>•</span>
            <span className="text-[#00F5FF]">Motion</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}