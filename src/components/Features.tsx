import { motion } from 'framer-motion';
import {
  Brain,
  Code2,
  FileText,
  Image,
  MessageSquare,
  Sparkles,
  Zap,
  Shield,
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Intelligent Writing',
    description:
      'Generate high-quality content, from blog posts to technical documentation, with context-aware suggestions that understand your voice and style.',
  },
  {
    icon: Code2,
    title: 'Code Generation',
    description:
      'Write, debug, and refactor code in any language. Get instant explanations and optimizations for complex algorithms and patterns.',
  },
  {
    icon: MessageSquare,
    title: 'Natural Conversations',
    description:
      'Engage in meaningful dialogue with an AI that remembers context, asks clarifying questions, and provides thoughtful responses.',
  },
  {
    icon: FileText,
    title: 'Document Analysis',
    description:
      'Upload PDFs, spreadsheets, and documents for instant summarization, key insights extraction, and data visualization.',
  },
  {
    icon: Image,
    title: 'Visual Understanding',
    description:
      'Analyze images, charts, and diagrams. Extract text, identify objects, and generate detailed descriptions automatically.',
  },
  {
    icon: Sparkles,
    title: 'Creative Ideation',
    description:
      'Brainstorm ideas, create storylines, design characters, and explore creative directions with an AI creative partner.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Features() {
  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Powerful Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Everything you need to{' '}
            <span className="gradient-text">create faster</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From writing and coding to analysis and creativity, Lumina provides
            the tools to turn your ideas into reality.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '50M+', label: 'Messages processed' },
            { value: '99.9%', label: 'Uptime guaranteed' },
            { value: '2.5s', label: 'Average response time' },
            { value: '150+', label: 'Countries served' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
