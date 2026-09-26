import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';

export default function Home() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y / 15);
    setRotateY(x / 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section id="home" className="pt-32 pb-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-xs px-3 py-1.5 rounded-full uppercase tracking-wider font-semibold">
            Next-Gen AI Automation
          </span>
        </motion.div>

        {/* Interactive Movable Heading */}
        <motion.div
          className="perspective-1000 cursor-pointer my-6"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{
            y: [0, -8, 0],
            rotateX: rotateX,
            rotateY: rotateY,
          }}
          transition={{
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotateX: { type: "spring", stiffness: 300, damping: 20 },
            rotateY: { type: "spring", stiffness: 300, damping: 20 }
          }}
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight select-none">
            Supercharge Your Workflow with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-500">
              Intelligent AI
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
        >
          Automate repetitive tasks, gain actionable business insights, and boost team productivity by 10x using our agentic workflows.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex justify-center gap-4 flex-wrap"
        >
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl flex items-center gap-2 transition shadow-lg shadow-blue-500/20 hover:scale-105 active:scale-95">
            Start Free Trial <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#features" className="border border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 font-medium px-6 py-3 rounded-xl transition flex items-center gap-2">
            <Play className="h-4 w-4 fill-current" /> Watch Demo
          </a>
        </motion.div>

        {/* Trust Badges */}
        <div className="mt-12 flex justify-center items-center gap-6 text-slate-600 dark:text-slate-400 text-sm flex-wrap">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-500" /> No credit card required
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-500" /> 14-day free trial
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-500" /> Cancel anytime
          </div>
        </div>

      </div>
    </section>
  );
}