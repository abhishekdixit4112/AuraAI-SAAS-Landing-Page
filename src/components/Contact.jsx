import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const schema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long" }),
});

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data) => {
    setLoading(true);
    // Simulate server submission
    await new Promise(resolve => setTimeout(resolve, 1200));
    setLoading(false);
    setIsSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 dark:text-blue-500 font-semibold text-xs tracking-widest uppercase">Contact Us</span>
          <h2 className="text-3xl font-bold mt-2 sm:text-4xl">Get in Touch with Our Team</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Have questions about our AI platform or custom solutions? Reach out and we'll respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start gap-4 p-6 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="p-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Email Us</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Our support team is online 24/7.</p>
                <a href="mailto:support@auraai.com" className="text-blue-600 dark:text-blue-400 font-medium text-sm mt-2 block hover:underline">
                  support@auraai.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="p-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Call Us</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Mon-Fri from 8am to 5pm.</p>
                <a href="tel:+916306561375" className="text-blue-600 dark:text-blue-400 font-medium text-sm mt-2 block hover:underline">
                  +91 6306561375
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="p-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Global Office</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                  100 Innovation Way, Suite 400<br />San Francisco, CA 94105
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
            {isSubmitted ? (
              <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl text-center">
                <CheckCircle className="h-10 w-10 text-blue-600 dark:text-blue-500 mx-auto mb-3" />
                <h3 className="font-bold text-lg">Message Sent Successfully!</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                  <input 
                    {...register("fullName")}
                    placeholder="John Doe"
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg px-4 py-2.5 focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white"
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3"/>{errors.fullName.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Work Email</label>
                  <input 
                    {...register("email")}
                    placeholder="john@company.com"
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg px-4 py-2.5 focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3"/>{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Your Message</label>
                  <textarea 
                    {...register("message")}
                    rows={4}
                    placeholder="How can we help your business?"
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg px-4 py-2.5 focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white"
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3"/>{errors.message.message}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition flex items-center justify-center gap-2"
                >
                  {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Send Message"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}