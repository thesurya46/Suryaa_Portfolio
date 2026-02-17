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
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop', // Matrix/Security
  },
  {
    title: 'Human AI Memory Continuity System',
    description: 'Sophisticated AI system that maintains conversational context and memory across sessions. Implements advanced memory management for seamless human-AI interactions.',
    tags: ['TypeScript', 'Python', 'JavaScript', 'HTML', 'CSS'],
    gradient: 'from-[#7B2EFF] to-[#B02EFF]',
    icon: '🧠',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop', // Coding screen
  },
  {
    title: 'AI for Quality Chatbot',
    description: 'Intelligent chatbot focused on quality assurance and testing workflows. Automates testing processes and provides real-time insights using advanced NLP.',
    tags: ['Python', 'AI/ML', 'NLP', '.gitattributes'],
    gradient: 'from-[#00F5FF] to-[#7B2EFF]',
    icon: '🤖',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2670&auto=format&fit=crop', // AI/Robot
  },
  {
    title: 'Love in Rotation',
    description: 'Interactive 3D web experience featuring stunning rotation animations and particle effects. Built with pure vanilla JavaScript and advanced CSS 3D transforms.',
    tags: ['JavaScript', 'HTML', 'CSS', '3D Graphics', 'Animations'],
    gradient: 'from-[#FF006E] to-[#7B2EFF]',
    icon: '💝',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2670&auto=format&fit=crop', // 3D/Abstract
  },
  {
    title: 'Computer Vision Analytics',
    description: 'Real-time object detection and tracking system using OpenCV and Python. Implements LLM-powered scene understanding and automated video analysis.',
    tags: ['Python', 'OpenCV', 'LLM', 'Computer Vision'],
    gradient: 'from-[#00F5FF] to-[#00FFB3]',
    icon: '👁️',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop', // Data/Vision
  },
  {
    title: 'Urban Skill Exchange',
    description: 'Innovative platform developed at IIT Bhubaneswar for connecting individuals to exchange skills and knowledge within urban communities. Features user profiles, skill matching algorithms, and real-time communication.',
    tags: ['HTML', 'JavaScript', 'CSS', 'TypeScript', 'JSX', 'JSON'],
    gradient: 'from-[#7B2EFF] to-[#0088FF]',
    icon: '🌆',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop', // Global/Network
  },
  {
    title: 'Data Analytics Dashboard',
    description: 'Interactive dashboard for visualizing complex datasets with real-time insights and predictive analytics. Features dynamic charts and customizable widgets.',
    tags: ['Python', 'Pandas', 'Tableau', 'Django'],
    gradient: 'from-[#00FFB3] to-[#00F5FF]',
    icon: '📊',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop', // Dashboard
  },
  {
    title: 'ML Model Deployment',
    description: 'End-to-end machine learning pipeline with model training, evaluation, and deployment using Hugging Face. Includes automated monitoring and retraining.',
    tags: ['Python', 'Hugging Face', 'Flask', 'MySQL'],
    gradient: 'from-[#B02EFF] to-[#7B2EFF]',
    icon: '🚀',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop', // Coding Laptop
  },
  {
    title: 'Financial Analysis Tool',
    description: 'Comprehensive tool for financial data processing and visualization with automated reporting features. Provides real-time market insights and predictions.',
    tags: ['Python', 'Pandas', 'Seaborn', 'Excel'],
    gradient: 'from-[#00F5FF] to-[#7B2EFF]',
    icon: '💰',
    image: 'https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=2664&auto=format&fit=crop', // Finance/Graph
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
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] to-transparent z-10 opactiy-80" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay Icon */}
                <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-xl bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10">
                  <span className="text-xl">{project.icon}</span>
                </div>
              </div>

              {/* Project Header with Gradient */}
              <div
                className={`h-1 bg-gradient-to-r ${project.gradient}`}
                style={{
                  boxShadow: '0 4px 20px rgba(0, 245, 255, 0.3)',
                }}
              />

              <div className="p-6">
                {/* Code Icon (Removed the large icon section as we have image now) */}
                <div className="mb-4 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-[#00F5FF]" />
                  <span className="text-xs text-[#00F5FF] font-mono tracking-widest uppercase">Project</span>
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