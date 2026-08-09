import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS, FAQS } from '@/data/mockData';
import { Smartphone, CheckCircle2, Star, ChevronDown, MapPin, Phone, Mail, Clock, ArrowRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

export function TowingAppPromo() {
  const features = [
    'Live GPS Driver Tracking', 'Instant 1-Tap Tow Requests', 'Emergency SOS Hotline', 
    'Real-Time ETA Updates', 'Transparent Digital Billing', 'Verified Certified Drivers'
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-dark via-secondary to-primary text-white overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/30 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/20 text-accent font-bold rounded-[1px] text-xs uppercase tracking-wider mb-5 border border-accent/30">
              <Smartphone className="w-3.5 h-3.5" /> Mobile App Coming Soon
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 tracking-tight leading-[1.15]">
              Instant Roadside Rescue in the Palm of Your Hand
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-8 leading-relaxed max-w-xl">
              Experience the next generation of roadside assistance. Request emergency towing, track your flatbed in real-time, and get back on the road safely.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
                  <span className="font-semibold text-sm sm:text-base text-white/90">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="tel:0244753849" 
                className="bg-accent hover:bg-accent/90 text-white px-7 py-3.5 rounded-[1px] font-bold transition-all shadow-lg shadow-accent/30 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Hotline: 0244753849</span>
              </a>
              <Link 
                to="/towing" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-7 py-3.5 rounded-[1px] font-bold transition-all border border-white/20 hover:-translate-y-0.5"
              >
                Request Tow Online
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Phone Mockup */}
            <div className="w-[300px] h-[580px] bg-dark rounded-[1px] border-[6px] border-white/20 shadow-2xl relative overflow-hidden flex flex-col p-3.5">
              <div className="w-28 h-4 bg-white/20 rounded-[1px] mx-auto mb-3" />
              <div className="flex-1 bg-white rounded-[1px] p-4 flex flex-col justify-between overflow-hidden relative shadow-inner">
                {/* Map preview */}
                <div className="h-44 bg-slate-100 rounded-[1px] overflow-hidden relative border border-gray-200">
                  <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80" 
                    alt="GPS Navigation" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                    <div className="bg-accent text-white px-3 py-1 rounded-[1px] text-xs font-bold shadow-md animate-bounce">
                      Driver: 8 mins away
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2.5 my-2">
                  <div className="bg-slate-50 p-3 rounded-[1px] border border-gray-100 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-gray-500 font-medium">Service</div>
                      <div className="text-xs font-bold text-dark">Heavy Flatbed Tow</div>
                    </div>
                    <span className="text-xs font-extrabold text-accent">Dispatched</span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-[1px] border border-gray-100 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-gray-500 font-medium">Driver Contact</div>
                      <div className="text-xs font-bold text-dark">Kwame - Santa Fleet #4</div>
                    </div>
                    <div className="w-7 h-7 bg-primary text-white rounded-[1px] flex items-center justify-center">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                <a 
                  href="tel:0244753849"
                  className="w-full bg-accent text-white py-3 rounded-[1px] font-bold text-xs text-center shadow-md shadow-accent/30 flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Santa Dispatch</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}



export function BlogSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 relative border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
          <div>
            <div className="inline-block px-3.5 py-1.5 bg-accent/10 text-accent font-bold rounded-[1px] text-xs uppercase tracking-wider mb-4 border border-accent/20">
              Automotive Knowledge Base
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark tracking-tight leading-[1.15]">
              Latest News &amp; Maintenance Insights
            </h2>
          </div>
          <Link 
            to="/blog" 
            className="text-primary hover:text-accent font-bold transition-colors inline-flex items-center gap-2 group text-sm sm:text-base"
          >
            <span>View All Articles</span> 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3-Column Blog Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.45 }}
              className="group bg-white rounded-[1px] overflow-hidden shadow-sm hover:shadow-xl border border-gray-200/80 hover:border-accent/30 transition-all duration-300 flex flex-col hover:-translate-y-1.5"
            >
              <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  loading="lazy"
                />
                <div className="absolute top-3.5 left-3.5 bg-dark/80 backdrop-blur-md px-3 py-1 rounded-[1px] text-xs font-bold text-white border border-white/20">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-dark mb-3 group-hover:text-accent transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base mb-6 flex-1 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link 
                  to="/blog" 
                  className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-accent transition-colors pt-4 border-t border-gray-100 group/link"
                >
                  <span>Read Full Article</span> 
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3.5 py-1.5 bg-accent/10 text-accent font-bold rounded-[1px] text-xs uppercase tracking-wider mb-4 border border-accent/20">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto">
            Quick answers regarding our 24/7 towing response times, repair warranties, car rentals, and pricing.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-gray-200/90 rounded-[1px] overflow-hidden shadow-sm transition-colors hover:border-gray-300"
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-slate-50 transition-colors gap-4"
              >
                <span className="font-bold text-dark text-base sm:text-lg">{faq.q}</span>
                <div className={cn(
                  "w-8 h-8 rounded-[1px] bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200",
                  openIdx === idx && "rotate-180 bg-accent text-white"
                )}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-gray-100">
                      {faq.a}
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

export function Partners() {
  const brands = ['Toyota', 'Honda', 'Mercedes-Benz', 'BMW', 'Ford', 'Nissan', 'Hyundai'];
  return (
    <section className="py-14 bg-slate-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-6">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">
            Certified Service Support for Leading Manufacturers
          </h3>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-70">
          {brands.map((brand, idx) => (
            <div key={idx} className="text-lg sm:text-xl font-extrabold text-slate-700 tracking-tight">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 bg-slate-50 rounded-[1px] p-6 sm:p-10 lg:p-14 shadow-xl border border-gray-200">
          
          {/* Left Info Column */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="inline-block px-3.5 py-1.5 bg-accent/10 text-accent font-bold rounded-[1px] text-xs uppercase tracking-wider mb-4 border border-accent/20">
                24/7 Dedicated Support
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark mb-5 tracking-tight leading-[1.15]">
                Get in Touch with Our Team
              </h2>
              <p className="text-slate-600 mb-8 text-base sm:text-lg leading-relaxed">
                Whether you need immediate emergency towing, want to book mechanical service, or have inquiries about car sales and rentals, we are standing by 24/7.
              </p>
              
              <div className="space-y-5 mb-8">
                <a 
                  href="tel:0244753849" 
                  className="flex items-center gap-4 p-4 rounded-[1px] bg-white border border-gray-200/90 shadow-sm hover:border-accent hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-accent text-white rounded-[1px] flex items-center justify-center shrink-0 shadow-md shadow-accent/20 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-base">24/7 Towing Hotline</h4>
                    <p className="text-accent font-extrabold text-lg">0244753849</p>
                  </div>
                </a>

                <a 
                  href="mailto:info@santatowing.com" 
                  className="flex items-center gap-4 p-4 rounded-[1px] bg-white border border-gray-200/90 shadow-sm hover:border-primary hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-primary text-white rounded-[1px] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-base">Email Us</h4>
                    <p className="text-slate-600 font-medium text-sm">info@santatowing.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-[1px] bg-white border border-gray-200/90 shadow-sm">
                  <div className="w-12 h-12 bg-primary text-white rounded-[1px] flex items-center justify-center shrink-0 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-base">Workshop Location</h4>
                    <p className="text-slate-600 font-medium text-sm">123 Spintex Road, Greater Accra, Ghana</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500 font-semibold pt-4 border-t border-gray-200">
              <Clock className="w-4 h-4 text-accent" />
              <span>Emergency Dispatch operates 24 Hours / 7 Days / 365 Days a year</span>
            </div>
          </div>
          
          {/* Right Form Column */}
          <div className="bg-primary rounded-[1px] p-7 sm:p-9 text-white shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 tracking-tight">
                Send Us a Message
              </h3>
              <p className="text-white/80 text-sm mb-6">
                Fill out the form below and our team will get back to you promptly.
              </p>

              {submitted ? (
                <div className="bg-accent/20 border border-accent/40 rounded-[1px] p-6 text-center my-6">
                  <CheckCircle2 className="w-10 h-10 text-accent mx-auto mb-2" />
                  <h4 className="font-bold text-lg text-white mb-1">Message Received!</h4>
                  <p className="text-sm text-white/85">Our dispatch team will contact you shortly. For immediate towing, please call <span className="font-bold text-accent">0244753849</span>.</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-white/80 mb-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Mensah" 
                        className="bg-white/10 border border-white/20 rounded-[1px] px-4 py-3 text-white placeholder-white/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent w-full text-sm" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-white/80 mb-1">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="0244753849" 
                        className="bg-white/10 border border-white/20 rounded-[1px] px-4 py-3 text-white placeholder-white/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent w-full text-sm" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">Service Needed</label>
                    <select className="bg-dark/80 border border-white/20 rounded-[1px] px-4 py-3 text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent w-full text-sm">
                      <option value="towing">24/7 Emergency Towing</option>
                      <option value="repairs">Mechanical Repair &amp; Service</option>
                      <option value="rental">Vehicle Rental Booking</option>
                      <option value="sales">Vehicle Sales Inquiry</option>
                      <option value="parts">Auto Parts &amp; Batteries</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">Your Message / Location</label>
                    <textarea 
                      required
                      placeholder="Describe your request or current location..." 
                      rows={4} 
                      className="bg-white/10 border border-white/20 rounded-[1px] px-4 py-3 text-white placeholder-white/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent w-full resize-none text-sm"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-[1px] transition-all shadow-lg shadow-accent/30 hover:-translate-y-0.5 text-base flex items-center justify-center gap-2"
                  >
                    <span>Submit Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            <div className="text-center pt-4 text-xs text-white/70">
              Need immediate dispatch? Tap to call <a href="tel:0244753849" className="font-bold text-accent underline">0244753849</a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
