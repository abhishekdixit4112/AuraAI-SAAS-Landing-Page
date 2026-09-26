
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How does AuraAI integrate with our existing stack?",
    answer: "AuraAI connects natively with Slack, Notion, GitHub, Webhooks, and over 1,000+ custom applications via REST API and pre-built connectors."
  },
  {
    question: "Is my company data secure?",
    answer: "Yes. We maintain SOC-2 Type II compliance, and all data streams are protected with 256-bit AES encryption both in transit and at rest."
  },
  {
    question: "Can I try AuraAI before committing to a plan?",
    answer: "Absolutely! We offer a 14-day free trial with full access to all Pro features. No credit card is required to get started."
  },
  {
    question: "What happens if we exceed our monthly API limit?",
    answer: "Your workflows will continue running smoothly. You can monitor utilization in real time or configure auto-scaling thresholds from your billing settings."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-xs tracking-widest uppercase">FAQ</span>
          <h2 className="text-3xl font-bold mt-2 sm:text-4xl text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Have questions? Here are the most common answers about our platform.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div 
              key={idx}
              className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 rounded-2xl overflow-hidden shadow-sm transition-colors duration-200"
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full p-6 text-left font-semibold text-slate-900 dark:text-white flex justify-between items-center gap-4 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                <span>{item.question}</span>
                <ChevronDown className={`h-5 w-5 text-slate-500 dark:text-slate-400 transition-transform duration-300 shrink-0 ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-900 pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}