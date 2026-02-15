import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { MessageCircle, Send, Sparkles } from 'lucide-react';

export function AskQuestionSection() {
  const { ref, isInView } = useInView();
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!question.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setQuestions([...questions, question]);
      setQuestion('');
      setIsSubmitting(false);
      
      // Show success message
      alert('Thank you for your question! I\'ll get back to you soon. 🚀');
    }, 800);
  };

  return (
    <section id="ask-question" ref={ref} className="min-h-screen py-24 px-6 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-[#00F5FF]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#7B2EFF]/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-8 h-8 text-[#00F5FF]" />
            <MessageCircle className="w-10 h-10 text-[#7B2EFF]" />
            <Sparkles className="w-8 h-8 text-[#00F5FF]" />
          </motion.div>
          
          <h2
            className="text-5xl md:text-6xl gradient-text mb-6"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Ask Me a Question
          </h2>
          
          <p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Have something to ask? Drop your question below and I'll get back to you as soon as possible!
          </p>
        </motion.div>

        {/* Question Form */}
        <motion.div
          className="glass-strong rounded-3xl p-8 md:p-12 animated-border"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Question Input */}
            <div className="relative">
              <label
                htmlFor="question"
                className="block text-lg text-[#00F5FF] mb-4"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Your Question
              </label>
              
              <div className="relative">
                <textarea
                  id="question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Type your question here..."
                  rows={6}
                  className="w-full px-6 py-4 bg-white/5 border border-[#00F5FF]/30 rounded-2xl 
                           text-white placeholder-gray-500 
                           focus:outline-none focus:border-[#00F5FF] focus:ring-2 focus:ring-[#00F5FF]/20
                           transition-all duration-300 resize-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  required
                />
                
                {/* Character Counter */}
                <div className="absolute bottom-4 right-4 text-sm text-gray-500">
                  {question.length} characters
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting || !question.trim()}
              className={`group relative w-full px-8 py-4 bg-gradient-to-r from-[#00F5FF] to-[#7B2EFF] 
                       rounded-full overflow-hidden ripple-button
                       ${(isSubmitting || !question.trim()) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              whileHover={!isSubmitting && question.trim() ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting && question.trim() ? { scale: 0.98 } : {}}
            >
              <span className="relative z-10 text-white font-semibold flex items-center justify-center gap-3">
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Question
                    <Send className="w-5 h-5" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 neon-glow-cyan opacity-50" />
            </motion.button>
          </form>

          {/* Decorative Elements */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <motion.div
              className="w-2 h-2 rounded-full bg-[#00F5FF]"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="w-2 h-2 rounded-full bg-[#7B2EFF]"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            />
            <motion.div
              className="w-2 h-2 rounded-full bg-[#00F5FF]"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />
          </div>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            {
              icon: '💡',
              title: 'Quick Response',
              description: 'I typically respond within 24-48 hours',
            },
            {
              icon: '🎯',
              title: 'Any Topic',
              description: 'Ask about projects, skills, or collaborations',
            },
            {
              icon: '🚀',
              title: 'Connect',
              description: 'Let\'s build something amazing together',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="glass p-6 rounded-2xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4
                className="text-lg text-white mb-2"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {item.title}
              </h4>
              <p
                className="text-sm text-gray-400"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
