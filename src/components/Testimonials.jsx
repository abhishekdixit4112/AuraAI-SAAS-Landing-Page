import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "AuraAI cut our customer response times by 80% within the first two weeks. The autonomous workflow integrations are incredible.",
    author: "Sarah Jenkins",
    role: "VP of Operations",
    company: "TechFlow Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    rating: 5
  },
  {
    quote: "The ability to run agentic tasks 24/7 without extra manual oversight has saved our engineering team at least 25 hours every week.",
    author: "Marcus Chen",
    role: "Lead Software Architect",
    company: "ScaleDev",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    rating: 5
  },
  {
    quote: "Setup took less than ten minutes. The clean interface and high-performance edge infrastructure make it a no-brainer for fast SaaS teams.",
    author: "Elena Rostova",
    role: "Head of Product",
    company: "CloudSphere",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-xs tracking-widest uppercase">Testimonials</span>
          <h2 className="text-3xl font-bold mt-2 sm:text-4xl text-slate-900 dark:text-white">Trusted by Industry Leaders</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            See how high-growth teams leverage AuraAI to scale operations without expanding headcount.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info with Photo */}
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4">
                <img 
                  src={item.avatar} 
                  alt={item.author} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/30"
                />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">{item.author}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">{item.role} — {item.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}