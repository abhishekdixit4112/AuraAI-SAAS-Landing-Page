import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, ShieldCheck, BarChart3, Layers, Globe } from 'lucide-react';

const featuresList = [
  {
    icon: Cpu,
    title: "Autonomous AI Agents",
    description: "Deploy self-learning autonomous agents that resolve customer queries and run background tasks 24/7."
  },
  {
    icon: Zap,
    title: "Lightning Performance",
    description: "Built on edge infrastructure to ensure response speeds under 100 milliseconds worldwide."
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "SOC-2 Type II compliant with end-to-end 256-bit encryption for all data streams."
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Gain deep insights into your workflow metrics with custom dashboards and event logging."
  },
  {
    icon: Layers,
    title: "Seamless Integrations",
    description: "Connect instantly with Slack, Notion, GitHub, Webhooks, and over 1,000+ custom app tools."
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Auto-scaling multi-region deployment handles unexpected traffic spikes effortlessly."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-xs tracking-widest uppercase">Features</span>
          <h2 className="text-3xl font-bold mt-2 sm:text-4xl text-slate-900 dark:text-white">Everything You Need to Scale</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Powerful features designed to automate workflows and save your team 20+ hours every week.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <IconComponent className="h-6 w-6" />
                </div>
                {/* Fixed text colors: Slate-900 in Light Mode, White in Dark Mode */}
                <h3 className="text-lg font-bold mt-6 text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}