import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import emailjs from '@emailjs/browser';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

// Validation Schema using Zod
const schema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  company: z.string().min(1, { message: "Company name is required" }),
});

export default function LeadForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // EmailJS configuration (Substitute with your specific keys when configured)
      // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data, 'YOUR_PUBLIC_KEY');
      
      // Simulated API response delay:
      await new Promise(resolve => setTimeout(resolve, 1200));

      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-xl mx-auto px-4">
        <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 shadow-xl">
          <h2 className="text-2xl font-bold text-center">Get Early Access</h2>
          <p className="text-slate-400 text-center text-sm mt-2">Sign up today and get 30% off your first 3 months.</p>

          {isSubmitted ? (
            <div className="mt-8 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl text-center">
              <CheckCircle className="h-10 w-10 text-blue-500 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-white">Thank you for signing up!</h3>
              <p className="text-slate-400 text-sm mt-1">Our team will reach out to your inbox shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
              {/* Full Name Field */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                <input 
                  {...register("fullName")}
                  placeholder="John Doe"
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
                />
                {errors.fullName && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3"/>{errors.fullName.message}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Work Email</label>
                <input 
                  {...register("email")}
                  placeholder="john@company.com"
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3"/>{errors.email.message}</p>}
              </div>

              {/* Company Field */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Company Name</label>
                <input 
                  {...register("company")}
                  placeholder="Acme Corp"
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
                />
                {errors.company && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle className="h-3 w-3"/>{errors.company.message}</p>}
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Request Demo"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}