import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Code2, Database, BarChart3, Layers, GitBranch, Brain } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: Code2,
    color: '#00F5FF',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'C++', level: 85 },
      { name: 'C#', level: 80 },
      { name: 'Django', level: 85 },
      { name: 'Full Stack', level: 88 },
    ],
  },
  {
    title: 'Data Processing',
    icon: Database,
    color: '#7B2EFF',
    skills: [
      { name: 'Pandas', level: 92 },
      { name: 'Dask', level: 80 },
      { name: 'Excel', level: 88 },
      { name: 'MySQL', level: 85 },
    ],
  },
  {
    title: 'Visualization',
    icon: BarChart3,
    color: '#00F5FF',
    skills: [
      { name: 'Tableau', level: 87 },
      { name: 'Seaborn', level: 90 },
      { name: 'R', level: 82 },
    ],
  },
  {
    title: 'GUI & Tools',
    icon: Layers,
    color: '#7B2EFF',
    skills: [
      { name: 'Tkinter', level: 85 },
    ],
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    color: '#00F5FF',
    skills: [
      { name: 'Git', level: 88 },
    ],
  },
  {
    title: 'LLM & AI',
    icon: Brain,
    color: '#7B2EFF',
    skills: [
      { name: 'Hugging Face', level: 83 },
    ],
  },
];

export function SkillsSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" ref={ref} className="min-h-screen py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl gradient-text mb-16 text-center"
          style={{ fontFamily: 'Sora, sans-serif' }}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            
            return (
              <motion.div
                key={category.title}
                className="glass-strong rounded-2xl p-6 hover:scale-105 transition-transform duration-300 tilt-card animated-border"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 10;
                  const rotateY = (centerX - x) / 10;
                  e.currentTarget.style.setProperty('--rotate-x', `${rotateX}deg`);
                  e.currentTarget.style.setProperty('--rotate-y', `${rotateY}deg`);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.setProperty('--rotate-x', '0deg');
                  e.currentTarget.style.setProperty('--rotate-y', '0deg');
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${category.color}33, ${category.color}11)`,
                      boxShadow: `0 0 20px ${category.color}33`,
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: category.color }} />
                  </div>
                  <h3
                    className="text-xl text-white"
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      color: category.color,
                    }}
                  >
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span
                          className="text-white text-sm"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {skill.name}
                        </span>
                        <span
                          className="text-gray-400 text-sm"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${category.color}, ${category.color}aa)`,
                            boxShadow: `0 0 10px ${category.color}66`,
                          }}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: 'easeOut',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
