import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Code2 } from 'lucide-react';

const projects = [
  {
    title: 'QR-Forge',
    description: 'Advanced QR code generator powered by LLMs that creates customized QR codes instantly with user-defined naming. Features AI-driven design suggestions and real-time preview.',
    tags: ['Python', 'HTML', 'CSS', 'LLM', 'AI'],
    gradient: 'from-[#00F5FF] to-[#0088FF]',
    icon: '⚡',
  },
  {
    title: 'Human AI Memory Continuity System',
    description: 'Sophisticated AI system that maintains conversational context and memory across sessions. Implements advanced memory management for seamless human-AI interactions.',
    tags: ['TypeScript', 'Python', 'JavaScript', 'HTML', 'CSS'],
    gradient: 'from-[#7B2EFF] to-[#B02EFF]',
    icon: '🧠',
  },
  {
    title: 'AI for Quality Chatbot',
    description: 'Intelligent chatbot focused on quality assurance and testing workflows. Automates testing processes and provides real-time insights using advanced NLP.',
    tags: ['Python', 'AI/ML', 'NLP', '.gitattributes'],
    gradient: 'from-[#00F5FF] to-[#7B2EFF]',
    icon: '🤖',
  },
  {
    title: 'Love in Rotation',
    description: 'Interactive 3D web experience featuring stunning rotation animations and particle effects. Built with pure vanilla JavaScript and advanced CSS 3D transforms.',
    tags: ['JavaScript', 'HTML', 'CSS', '3D Graphics', 'Animations'],
    gradient: 'from-[#FF006E] to-[#7B2EFF]',
    icon: '💝',
  },
  {
    title: 'Computer Vision Analytics',
    description: 'Real-time object detection and tracking system using OpenCV and Python. Implements LLM-powered scene understanding and automated video analysis.',
    tags: ['Python', 'OpenCV', 'LLM', 'Computer Vision'],
    gradient: 'from-[#00F5FF] to-[#00FFB3]',
    icon: '👁️',
  },
  {
    title: 'Urban Skill Exchange',
    description: 'Innovative platform developed at IIT Bhubaneswar for connecting individuals to exchange skills and knowledge within urban communities. Features user profiles, skill matching algorithms, and real-time communication.',
    tags: ['HTML', 'JavaScript', 'CSS', 'TypeScript', 'JSX', 'JSON'],
    gradient: 'from-[#7B2EFF] to-[#0088FF]',
    icon: '🌆',
  },
  {
    title: 'Data Analytics Dashboard',
    description: 'Interactive dashboard for visualizing complex datasets with real-time insights and predictive analytics. Features dynamic charts and customizable widgets.',
    tags: ['Python', 'Pandas', 'Tableau', 'Django'],
    gradient: 'from-[#00FFB3] to-[#00F5FF]',
    icon: '📊',
  },
  {
    title: 'ML Model Deployment',
    description: 'End-to-end machine learning pipeline with model training, evaluation, and deployment using Hugging Face. Includes automated monitoring and retraining.',
    tags: ['Python', 'Hugging Face', 'Flask', 'MySQL'],
    gradient: 'from-[#B02EFF] to-[#7B2EFF]',
    icon: '🚀',
  },
  {
    title: 'Financial Analysis Tool',
    description: 'Comprehensive tool for financial data processing and visualization with automated reporting features. Provides real-time market insights and predictions.',
    tags: ['Python', 'Pandas', 'Seaborn', 'Excel'],
    gradient: 'from-[#00F5FF] to-[#7B2EFF]',
    icon: '💰',
  },
];

export function ProjectsSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="projects" ref={ref} className="min-h-screen py-24 px-6 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl gradient-text mb-4 text-center"
          style={{ fontFamily: 'Sora, sans-serif' }}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto"
          style={{ fontFamily: 'Inter, sans-serif' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A collection of innovative solutions spanning AI, computer vision, web development, and data analytics
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group glass-strong rounded-2xl overflow-hidden tilt-card animated-border"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                e.currentTarget.style.setProperty('--rotate-x', `${rotateX}deg`);
                e.currentTarget.style.setProperty('--rotate-y', `${rotateY}deg`);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.setProperty('--rotate-x', '0deg');
                e.currentTarget.style.setProperty('--rotate-y', '0deg');
              }}
            >
              {/* Project Header with Gradient */}
              <div
                className={`h-2 bg-gradient-to-r ${project.gradient}`}
                style={{
                  boxShadow: '0 4px 20px rgba(0, 245, 255, 0.3)',
                }}
              />
              
              <div className="p-6">
                {/* Icon with Emoji */}
                <div className="mb-4 flex items-center justify-between">
                  <div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, rgba(0, 245, 255, 0.2), rgba(123, 46, 255, 0.2))`,
                      boxShadow: '0 0 20px rgba(0, 245, 255, 0.2)',
                    }}
                  >
                    <Code2 className="w-7 h-7 text-[#00F5FF]" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00F5FF]/10 to-[#7B2EFF]/10 group-hover:from-[#00F5FF]/20 group-hover:to-[#7B2EFF]/20 transition-all duration-300" />
                  </div>
                  
                  {/* Large Emoji Icon */}
                  <motion.div
                    className="text-4xl"
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    {project.icon}
                  </motion.div>
                </div>

                {/* Title */}
                <h3
                  className="text-xl text-white mb-3 group-hover:text-[#00F5FF] transition-colors duration-300"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="text-gray-400 mb-4 text-sm leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-white/5 border border-[#00F5FF]/30 rounded-full text-[#00F5FF]"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}