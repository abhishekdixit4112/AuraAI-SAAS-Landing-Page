import React, { useState } from 'react';
import { Menu, X, Sparkles, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-blue-600 dark:text-blue-500" />
            <span className="text-xl font-bold text-slate-900 dark:text-white tracking-wide">AuraAI</span>
          </a>

          {/* Desktop Links & Theme Toggle */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-300">
            <a href="#home" className="hover:text-blue-600 dark:hover:text-white transition">Home</a>
            <a href="#features" className="hover:text-blue-600 dark:hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-blue-600 dark:hover:text-white transition">Pricing</a>
            <a href="#faq" className="hover:text-blue-600 dark:hover:text-white transition">FAQ</a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-white transition">Contact</a>

            {/* Light / Dark Mode Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:opacity-80 transition"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-slate-700" />}
            </button>

            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
              Get Started
            </a>
          </div>

          {/* Mobile Right Menu */}
          <div className="flex items-center gap-3 md:hidden">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              {isDark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-slate-700" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 dark:text-slate-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-4 space-y-3">
          <a href="#home" onClick={() => setIsOpen(false)} className="block text-slate-700 dark:text-slate-300">Home</a>
          <a href="#features" onClick={() => setIsOpen(false)} className="block text-slate-700 dark:text-slate-300">Features</a>
          <a href="#pricing" onClick={() => setIsOpen(false)} className="block text-slate-700 dark:text-slate-300">Pricing</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="block text-slate-700 dark:text-slate-300">FAQ</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-slate-700 dark:text-slate-300">Contact</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block bg-blue-600 text-center text-white py-2 rounded-lg">Get Started</a>
        </div>
      )}
    </nav>
  );
}