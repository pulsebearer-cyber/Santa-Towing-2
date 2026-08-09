import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HERO_SLIDES, QUICK_ACTIONS } from '@/data/mockData';
import { ChevronLeft, ChevronRight, Phone, ShieldCheck, Clock, Award, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, currentSlide === 0 ? 8000 : 5000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <div className="relative min-h-[640px] md:min-h-[700px] lg:h-[88vh] w-full overflow-hidden bg-dark">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_SLIDES[currentSlide].image})` }}
          />
          {/* Dark Corporate Overlay for High Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-black/30" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 md:px-8 w-full pt-20 pb-28 md:py-0">
              <div className="max-w-2xl lg:max-w-3xl">
                {/* Eyebrow badge */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[1px] bg-accent/20 border border-accent/30 text-accent font-bold text-xs md:text-sm uppercase tracking-wider mb-5"
                >
                  <span className="w-2 h-2 rounded-[1px] bg-accent animate-ping" />
                  <span>24/7 Emergency Dispatch & Auto Solutions</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1 
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight leading-[1.1]"
                >
                  {HERO_SLIDES[currentSlide].headline}
                </motion.h1>

                {/* Subheadline / Body Text */}
                <motion.p 
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.45, duration: 0.6 }}
                  className="text-base sm:text-lg md:text-xl text-white/85 mb-8 leading-relaxed max-w-2xl font-normal"
                >
                  {HERO_SLIDES[currentSlide].subheadline}
                </motion.p>

                {/* Action Buttons */}
                <motion.div 
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8"
                >
                  {HERO_SLIDES[currentSlide].buttons.map((btn, idx) => {
                    const isInternal = btn.href && btn.href.startsWith('/');
                    const isPhone = btn.href && btn.href.startsWith('tel:');
                    const className = cn(
                      "px-6 sm:px-8 py-3.5 sm:py-4 rounded-[1px] font-bold text-sm sm:text-base transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:-translate-y-0.5",
                      btn.primary 
                        ? "bg-accent hover:bg-accent/90 text-white shadow-accent/30 hover:shadow-accent/50" 
                        : "bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 hover:border-white/40"
                    );

                    if (isInternal) {
                      return (
                        <Link to={btn.href} key={idx} className={className}>
                          <span>{btn.label}</span>
                        </Link>
                      );
                    }

                    return (
                      <a
                        href={btn.href || '#'} 
                        key={idx}
                        className={className}
                      >
                        {(isPhone || btn.label.includes('Call') || btn.label.includes('0244753849')) && <Phone className="w-4 h-4" />}
                        <span>{btn.label}</span>
                      </a>
                    );
                  })}
                </motion.div>

                {/* Trust Indicators Pill Row */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.75, duration: 0.6 }}
                  className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-white/10 text-xs sm:text-sm text-white/80 font-medium"
                >
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>Avg. Response &lt; 30 Mins</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span>Licensed &amp; Fully Insured</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-accent" />
                    <span>10,000+ Rescues Completed</span>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full px-4 md:px-8 flex justify-between pointer-events-none z-20">
        <button 
          onClick={prevSlide}
          className="pointer-events-auto w-11 h-11 sm:w-12 sm:h-12 rounded-[1px] bg-dark/60 hover:bg-accent text-white flex items-center justify-center backdrop-blur-md transition-all border border-white/15 shadow-lg hover:scale-105"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="pointer-events-auto w-11 h-11 sm:w-12 sm:h-12 rounded-[1px] bg-dark/60 hover:bg-accent text-white flex items-center justify-center backdrop-blur-md transition-all border border-white/15 shadow-lg hover:scale-105"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-28 md:bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {HERO_SLIDES.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={cn(
              "h-2 rounded-[1px] transition-all duration-300",
              idx === currentSlide ? "w-8 bg-accent shadow-sm" : "w-2.5 bg-white/40 hover:bg-white/70"
            )}
          />
        ))}
      </div>
    </div>
  );
}

export function QuickActions() {
  return (
    <div className="relative -mt-16 sm:-mt-20 z-30 max-w-7xl mx-auto px-4 md:px-8 mb-16 sm:mb-24">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {QUICK_ACTIONS.map((action, idx) => {
          const Icon = action.icon;
          const href = action.title === 'Request Towing' ? '/towing' 
            : action.title === 'Rent a Car' ? '/rental' 
            : action.title === 'Buy a Vehicle' ? '/sales' 
            : action.title === 'Book Repairs' ? '/repairs' 
            : action.title === 'Body Works & Spray' ? '/body-works' 
            : action.title === 'Buy Batteries' ? '/parts' 
            : action.title === 'Shop Auto Parts' ? '/parts' 
            : '/services';

          return (
            <motion.div
              key={action.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="relative"
            >
              <Link 
                to={href}
                className="flex flex-col h-full bg-white rounded-[1px] p-5 sm:p-6 shadow-xl shadow-black/5 border border-gray-100/90 hover:-translate-y-1.5 transition-all duration-300 group hover:shadow-2xl hover:border-accent/30"
              >
                <div className="w-12 h-12 rounded-[1px] bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:shadow-md group-hover:shadow-accent/30 transition-all duration-300 shrink-0">
                  <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-dark text-base sm:text-lg mb-1 leading-snug group-hover:text-accent transition-colors">
                  {action.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 line-clamp-2 leading-relaxed mb-3 flex-1">
                  {action.description}
                </p>
                <div className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:text-accent group-hover:translate-x-1 transition-all duration-200 mt-auto">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
