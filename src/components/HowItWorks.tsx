import { motion } from 'framer-motion';
import { MessageSquare, Lightbulb, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Start a Conversation',
    description:
      'Simply describe what you want to build, write, or analyze. Our AI understands natural language and context, so you can communicate just like you would with a colleague.',
    features: ['Natural language input', 'Context awareness', 'Multi-turn dialogue'],
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Get Intelligent Suggestions',
    description:
      'Receive thoughtful, relevant outputs tailored to your needs. The AI asks clarifying questions when needed and provides multiple options to choose from.',
    features: ['Smart recommendations', 'Multiple variations', 'Real-time feedback'],
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Iterate and Ship',
    description:
      'Refine, edit, and perfect your work with AI assistance. Export in any format, collaborate with your team, and deploy faster than ever before.',
    features: ['One-click export', 'Team collaboration', 'Version history'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-muted/30">
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
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            How it <span className="gradient-text">works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get started in minutes. Our intuitive workflow makes it easy to go
            from idea to execution.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12 lg:space-y-0"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className={`relative lg:grid lg:grid-cols-2 lg:gap-16 items-center ${
                index !== steps.length - 1 ? 'pb-12 lg:pb-24' : ''
              }`}
            >
              {/* Connector Line */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 top-full -translate-x-1/2 w-px h-24 bg-gradient-to-b from-border to-transparent" />
              )}

              {/* Content - Alternating sides */}
              <div
                className={`${
                  index % 2 === 1 ? 'lg:order-2' : ''
                } mb-8 lg:mb-0`}
              >
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="text-5xl font-bold text-primary/20">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {step.description}
                </p>
                <ul className="space-y-3">
                  {step.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <ArrowRight className="w-3 h-3 text-primary" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Card */}
              <div
                className={`${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <div className="relative rounded-2xl bg-card border border-border/50 p-8 shadow-xl">
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl" />
                  
                  {/* Step visualization */}
                  <div className="relative space-y-4">
                    {index === 0 && (
                      <>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                            <span className="text-xs font-bold text-primary-foreground">
                              You
                            </span>
                          </div>
                          <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                            <p className="text-sm">
                              Help me write a blog post about AI in healthcare
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 justify-end">
                          <div className="bg-primary/10 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                            <p className="text-sm">
                              I'd be happy to help! What angle would you like to
                              take? I can cover recent breakthroughs, ethical
                              considerations, or practical applications.
                            </p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                            <span className="text-xs font-bold text-accent-foreground">
                              AI
                            </span>
                          </div>
                        </div>
                      </>
                    )}
                    {index === 1 && (
                      <div className="space-y-3">
                        <div className="p-4 rounded-xl bg-muted/50 border border-border/50">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-xs font-medium text-muted-foreground">
                              Option A: Breakthrough Focus
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Highlight recent AI advancements in diagnosis and
                            treatment...
                          </p>
                        </div>
                        <div className="p-4 rounded-xl bg-muted/50 border border-border/50">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-accent" />
                            <span className="text-xs font-medium text-muted-foreground">
                              Option B: Ethical Perspective
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Explore the balance between innovation and patient
                            privacy...
                          </p>
                        </div>
                        <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-xs font-medium text-primary">
                              Recommended: Practical Guide
                            </span>
                          </div>
                          <p className="text-sm">
                            Real-world applications doctors are using today...
                          </p>
                        </div>
                      </div>
                    )}
                    {index === 2 && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                              <span className="text-xs font-bold">.md</span>
                            </div>
                            <div>
                              <p className="text-sm font-medium">
                                AI_Healthcare_Blog.md
                              </p>
                              <p className="text-xs text-muted-foreground">
                                2,400 words
                              </p>
                            </div>
                          </div>
                          <span className="text-xs text-green-600 font-medium">
                            Ready
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <button className="flex-1 py-2 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium">
                            Export
                          </button>
                          <button className="flex-1 py-2 px-4 rounded-lg bg-muted text-sm font-medium">
                            Share
                          </button>
                          <button className="flex-1 py-2 px-4 rounded-lg bg-muted text-sm font-medium">
                            Publish
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
