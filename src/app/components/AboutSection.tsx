import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export function AboutSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" ref={ref} className="min-h-screen py-24 px-6 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-5xl md:text-6xl gradient-text mb-16 text-center"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Main About Card */}
            <motion.div
              className="glass-strong rounded-2xl p-8 neon-glow-blue"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3
                className="text-2xl text-[#00F5FF] mb-4"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Who I Am
              </h3>
              <p
                className="text-gray-300 leading-relaxed mb-4"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                I'm a passionate student and data enthusiast dedicated to uncovering insights from complex datasets. 
                With a strong foundation in programming and data analysis, I transform raw data into meaningful stories.
              </p>
              <p
                className="text-gray-300 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                My journey in tech is driven by curiosity and a commitment to continuous learning. I enjoy building 
                full-stack applications and creating innovative solutions to real-world problems.
              </p>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              className="glass-strong rounded-2xl p-8 neon-glow-purple"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3
                className="text-2xl text-[#7B2EFF] mb-6"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-6 h-6 text-[#00F5FF] mt-1" />
                  <div>
                    <p className="text-white font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Student
                    </p>
                    <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Pursuing excellence in Computer Science
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-[#00F5FF] mt-1" />
                  <div>
                    <p className="text-white font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Data Enthusiast
                    </p>
                    <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Passionate about analytics & visualization
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-[#00F5FF] mt-1" />
                  <div>
                    <p className="text-white font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Full Stack Developer
                    </p>
                    <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Building end-to-end solutions
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating Skill Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3
              className="text-2xl text-center text-[#00F5FF] mb-8"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Expertise Highlights
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Data Analysis',
                'Full Stack Development',
                'Python Programming',
                'Database Management',
                'Data Visualization',
                'Machine Learning',
                'Problem Solving',
                'Team Collaboration',
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="glass px-6 py-3 rounded-full border border-[#00F5FF]/30 hover:border-[#00F5FF] hover:neon-glow-blue transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <span
                    className="text-white"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
