
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for individuals and small projects getting started with AI automation.",
    features: [
      "Up to 5 AI Agents",
      "10,000 API Requests/mo",
      "Standard Response Time",
      "Community Support",
      "Basic Integrations"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Pro",
    price: "$79",
    period: "/month",
    description: "Ideal for growing teams requiring scalable automation and priority processing.",
    features: [
      "Unlimited AI Agents",
      "100,000 API Requests/mo",
      "Sub-100ms Latency",
      "Priority 24/7 Support",
      "All 1,000+ Integrations",
      "Custom Workflows"
    ],
    cta: "Start 14-Day Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/month",
    description: "Built for organization-wide deployments with dedicated compliance & SLA.",
    features: [
      "Custom Agent Training",
      "Unlimited API Requests",
      "Dedicated Account Manager",
      "SOC-2 & Custom SLAs",
      "SSO & Advanced Security",
      "On-Premises Option"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-xs tracking-widest uppercase">Flexible Plans</span>
          <h2 className="text-3xl font-bold mt-2 sm:text-4xl text-slate-900 dark:text-white">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Choose the plan that fits your business needs. Upgrade or cancel anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`p-8 rounded-2xl border flex flex-col justify-between transition-all duration-200 relative ${
                plan.popular 
                  ? 'bg-white dark:bg-slate-800 border-blue-500 shadow-xl shadow-blue-500/10 ring-2 ring-blue-500' 
                  : 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-md">
                  <Sparkles className="h-3 w-3" /> Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{plan.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">{plan.description}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{plan.price}</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">{plan.period}</span>
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <Check className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`mt-8 w-full py-3 rounded-xl font-medium text-center transition duration-200 ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
                    : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}