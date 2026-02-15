import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Trophy, Briefcase, MapPin, Calendar, Heart } from 'lucide-react';

const hackathons = [
  {
    name: 'IIT Bhubaneswar Hackathon',
    role: 'Participant',
    location: 'Bhubaneswar, Odisha',
    count: '2 Times',
    description: 'Participated in prestigious hackathons at IIT Bhubaneswar, developing innovative solutions under time constraints and collaborating with talented teams.',
    gradient: 'from-[#00F5FF] to-[#0088FF]',
  },
  {
    name: 'Smart India Hackathon',
    role: 'Participant',
    location: 'DRIEMS University, Cuttack',
    description: 'Participated in India\'s largest nationwide hackathon initiative, solving problems for government and industry partners with prototype solutions.',
    gradient: 'from-[#7B2EFF] to-[#B02EFF]',
  },
];

const internships = [
  {
    title: 'Data Analyst Intern',
    company: 'Codec Technologies',
    location: 'Remote, India',
    period: 'Aug 2025 - Oct 2025',
    description: 'Performed comprehensive data analysis using Python, Pandas, and SQL to extract actionable business insights. Developed interactive data visualizations and dashboards using Seaborn and Matplotlib for stakeholder reporting. Cleaned and preprocessed large datasets, improving data quality and analysis efficiency by implementing automation pipelines.',
    skills: ['Python', 'Pandas', 'SQL', 'Data Visualization', 'Seaborn', 'Matplotlib'],
    gradient: 'from-[#00F5FF] to-[#0088FF]',
  },
  {
    title: 'Data Analytics Training',
    company: 'Central Tool Room & Training Centre',
    location: 'Bhubaneswar, Odisha',
    period: 'June 2025 - July 2025',
    description: 'Completed intensive training program in data analytics, covering statistical methods, data mining, and visualization techniques. Applied analytical tools including Excel, SQL, and Python to solve industry-relevant case studies.',
    skills: ['Data Analytics', 'Python', 'SQL', 'Excel', 'Statistical Modeling'],
    gradient: 'from-[#7B2EFF] to-[#B02EFF]',
  },
];

const volunteers = [
  {
    title: 'Volunteer',
    organization: 'Smart India Hackathon',
    organizer: 'DRIEMS University',
    location: 'Cuttack, Odisha',
    period: 'Sept 2025',
    description: 'Volunteered in organizing and managing India\'s largest nationwide hackathon initiative. Assisted participants, coordinated with teams, and helped facilitate smooth execution of the event. Contributed to creating an innovative environment for problem-solving and technical collaboration.',
    gradient: 'from-[#00F5FF] to-[#7B2EFF]',
  },
];

export function ExperienceSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="experience" ref={ref} className="min-h-screen py-24 px-6 relative overflow-hidden">
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
          Experience & Achievements
        </motion.h2>

        {/* Hackathons Section */}
        <div className="mb-20">
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Trophy className="w-8 h-8 text-[#00F5FF]" />
            <h3
              className="text-3xl text-[#00F5FF]"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Hackathons
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={hackathon.name}
                className="glass-strong rounded-2xl p-6 hover:scale-105 transition-transform duration-300 animated-border"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                {/* Header with Gradient */}
                <div
                  className={`h-1 bg-gradient-to-r ${hackathon.gradient} rounded-full mb-4`}
                  style={{
                    boxShadow: '0 4px 20px rgba(0, 245, 255, 0.3)',
                  }}
                />

                <h4
                  className="text-xl text-white mb-2"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {hackathon.name}
                </h4>

                <p
                  className="text-[#00F5FF] text-sm mb-3"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {hackathon.role}
                </p>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span style={{ fontFamily: 'Inter, sans-serif' }}>
                      {hackathon.location}
                    </span>
                  </div>
                  {hackathon.count && (
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-[#7B2EFF]" />
                      <span style={{ fontFamily: 'Inter, sans-serif' }}>
                        {hackathon.count}
                      </span>
                    </div>
                  )}
                </div>

                <p
                  className="text-gray-400 leading-relaxed text-sm"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {hackathon.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Internships Section */}
        <div className="mb-20">
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Briefcase className="w-8 h-8 text-[#7B2EFF]" />
            <h3
              className="text-3xl text-[#7B2EFF]"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Internships
            </h3>
          </motion.div>

          <div className="grid gap-6">
            {internships.map((internship, index) => (
              <motion.div
                key={internship.title}
                className="glass-strong rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300 animated-border"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                {/* Header with Gradient */}
                <div
                  className={`h-1 bg-gradient-to-r ${internship.gradient} rounded-full mb-6`}
                  style={{
                    boxShadow: '0 4px 20px rgba(123, 46, 255, 0.3)',
                  }}
                />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h4
                      className="text-2xl text-white mb-2"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {internship.title}
                    </h4>
                    <p
                      className="text-[#7B2EFF] text-lg mb-2"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {internship.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span style={{ fontFamily: 'Inter, sans-serif' }}>
                      {internship.period}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>
                    {internship.location}
                  </span>
                </div>

                <p
                  className="text-gray-400 leading-relaxed mb-6"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {internship.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-xs bg-white/5 border border-[#7B2EFF]/30 rounded-full text-[#7B2EFF] hover:border-[#7B2EFF] hover:neon-glow-purple transition-all duration-300"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Volunteers Section */}
        <div>
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Heart className="w-8 h-8 text-[#00F5FF]" />
            <h3
              className="text-3xl text-[#00F5FF]"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Volunteers
            </h3>
          </motion.div>

          <div className="grid gap-6">
            {volunteers.map((volunteer, index) => (
              <motion.div
                key={volunteer.title}
                className="glass-strong rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300 animated-border"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                {/* Header with Gradient */}
                <div
                  className={`h-1 bg-gradient-to-r ${volunteer.gradient} rounded-full mb-6`}
                  style={{
                    boxShadow: '0 4px 20px rgba(0, 245, 255, 0.3)',
                  }}
                />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h4
                      className="text-2xl text-white mb-2"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {volunteer.title}
                    </h4>
                    <p
                      className="text-[#00F5FF] text-lg mb-2"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {volunteer.organization}
                    </p>
                    <p
                      className="text-[#00F5FF] text-sm"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Organized by {volunteer.organizer}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span style={{ fontFamily: 'Inter, sans-serif' }}>
                      {volunteer.period}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>
                    {volunteer.location}
                  </span>
                </div>

                <p
                  className="text-gray-400 leading-relaxed mb-6"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {volunteer.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}