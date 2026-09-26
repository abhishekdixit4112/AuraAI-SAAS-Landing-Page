import React from 'react';
import { Sparkles, Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 transition-colors duration-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-slate-200 dark:border-slate-800">
          
          <div className="col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-blue-600 dark:text-blue-500" />
              <span className="text-xl font-bold text-slate-900 dark:text-white tracking-wide">AuraAI</span>
            </a>
            <p className="text-sm max-w-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Empowering enterprise and SaaS teams to automate complex agentic workflows with low latency and total reliability.
            </p>

            {/* Social Links using Inline SVGs */}
            <div className="flex gap-4 mt-6">
              {/* GitHub / Code */}
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-200 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition" aria-label="GitHub">
                <Code2 className="h-4 w-4" />
              </a>

              {/* Twitter / X */}
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-200 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition" aria-label="Twitter">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-200 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition" aria-label="LinkedIn">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-slate-900 dark:hover:text-white transition">Features</a></li>
              <li><a href="#pricing" className="hover:text-slate-900 dark:hover:text-white transition">Pricing</a></li>
              <li><a href="#home" className="hover:text-slate-900 dark:hover:text-white transition">Integrations</a></li>
              <li><a href="#home" className="hover:text-slate-900 dark:hover:text-white transition">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#faq" className="hover:text-slate-900 dark:hover:text-white transition">Documentation</a></li>
              <li><a href="#faq" className="hover:text-slate-900 dark:hover:text-white transition">API Reference</a></li>
              <li><a href="#faq" className="hover:text-slate-900 dark:hover:text-white transition">Community</a></li>
              <li><a href="#faq" className="hover:text-slate-900 dark:hover:text-white transition">Guides</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition">About Us</a></li>
              <li><a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition">Careers</a></li>
              <li><a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-8 text-center text-xs text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} AuraAI Technologies Inc. All rights reserved.
        </div>

      </div>
    </footer>
  );
}