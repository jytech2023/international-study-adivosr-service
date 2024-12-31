import React, { useState } from 'react';
import { Calendar, Loader2, CheckCircle2 } from 'lucide-react';

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open('http://calendly.com/weijingjaylin', '_blank');
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="text-center p-8 bg-emerald-50 rounded-xl border-2 border-emerald-100">
        <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-emerald-900 mb-2">
          Thanks for your interest!
        </h3>
        <p className="text-emerald-700">
          You'll be redirected to schedule your consultation momentarily.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          required
          placeholder="Enter your full name"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          required
          placeholder="you@example.com"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
        />
      </div>

      <div>
        <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1.5">
          Program of Interest
        </label>
        <select
          id="program"
          required
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
        >
          <option value="">Select a program</option>
          <option value="undergraduate">Undergraduate Studies</option>
          <option value="graduate">Graduate Studies</option>
          <option value="phd">PhD Programs</option>
          <option value="exchange">Exchange Programs</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 disabled:opacity-50 disabled:hover:bg-emerald-500"
      >
        {isSubmitting ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            <Calendar className="w-5 h-5" />
            Schedule Your Consultation
          </>
        )}
      </button>
    </form>
  );
}