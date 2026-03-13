import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What is Lumina and how does it work?',
    answer:
      'Lumina is an AI-powered workspace that helps you write, code, analyze data, and create content. Simply start a conversation in natural language, and our AI will understand your intent and provide intelligent assistance. You can upload documents, share images, or just chat to get things done faster.',
  },
  {
    question: 'Is there a free plan available?',
    answer:
      'Yes! Our Free plan gives you access to core features including chat, code generation, content creation, and document analysis. It\'s perfect for individuals getting started with AI assistance. Upgrade to Pro or Max when you need more usage and advanced features.',
  },
  {
    question: 'How does the usage limit work?',
    answer:
      'Usage is measured in messages and tokens. Free users get a generous monthly allowance, while Pro users get 5x more and Max users get 20x more than Pro. Usage resets monthly. We\'ll notify you when you\'re approaching your limit, and you can always upgrade for more capacity.',
  },
  {
    question: 'Can I use Lumina for commercial projects?',
    answer:
      'Absolutely! All plans, including Free, allow commercial use. You retain full rights to any content, code, or assets created with Lumina. Pro and Max plans include additional features like API access and team collaboration tools that are especially useful for businesses.',
  },
  {
    question: 'Is my data secure and private?',
    answer:
      'Security is our top priority. We use enterprise-grade encryption for all data in transit and at rest. We never train our AI on your private conversations. Pro and Max plans include additional security features like SSO, audit logs, and dedicated infrastructure options.',
  },
  {
    question: 'What file formats can I upload?',
    answer:
      'Lumina supports a wide range of formats including PDF, DOCX, TXT, CSV, XLSX, PNG, JPG, and more. You can upload documents for analysis, images for visual understanding, or spreadsheets for data insights. We\'re constantly adding support for additional formats.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer:
      'Yes, you can cancel your subscription at any time with no penalties. If you cancel, you\'ll continue to have access to your paid features until the end of your current billing period. You can also downgrade to the Free plan and keep all your projects and data.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      'We offer a 14-day money-back guarantee for all paid plans. If you\'re not satisfied with Lumina for any reason, contact our support team within 14 days of your purchase for a full refund. No questions asked.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-muted/30">
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
            <HelpCircle className="w-4 h-4" />
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Frequently asked{' '}
            <span className="gradient-text">questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Lumina. Can't find what you're
            looking for? Contact our support team.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/50 px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Still have questions?{' '}
            <a
              href="mailto:support@lumina.ai"
              className="text-primary font-medium hover:underline"
            >
              Reach out to our team
            </a>{' '}
            and we'll get back to you within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
