import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Star, Play, Quote, CheckCircle2, ThumbsUp, MessageSquare, 
  ArrowRight, ShieldCheck, StarHalf
} from 'lucide-react';
import { cn } from '@/lib/utils';

const CATEGORIES = [
  'All', 'Towing', 'Rentals', 'Repairs', 'Vehicle Sales', 'Auto Parts', 'Fleet Services'
];

const TESTIMONIALS = [
  {
    id: 100,
    name: 'Samuel K.',
    avatar: 'https://i.pravatar.cc/150?img=33',
    rating: 5,
    service: 'Towing',
    text: 'Santa Towing is a lifesaver! My car broke down at 2 AM, and their emergency towing team arrived within 15 minutes. Professional, courteous, and very affordable.',
    date: 'Nov 05, 2023',
    featured: true
  },
  {
    id: 1,
    name: 'Kwame Mensah',
    avatar: 'https://i.pravatar.cc/150?img=11',
    rating: 5,
    service: 'Repairs',
    text: 'Exceptional service! My car broke down on the highway, and their towing team arrived within 20 minutes. The repair workshop diagnosed the issue quickly and had me back on the road the next day. Highly recommended.',
    date: 'Oct 12, 2023',
    featured: true
  },
  {
    id: 2,
    name: 'Sarah Osei',
    avatar: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    service: 'Rentals',
    text: 'I rented an SUV for a weekend family trip. The vehicle was spotless, ran perfectly, and the booking process was completely hassle-free. The staff were very polite and accommodating.',
    date: 'Sep 28, 2023'
  },
  {
    id: 3,
    name: 'David K.',
    avatar: 'https://i.pravatar.cc/150?img=8',
    rating: 4,
    service: 'Vehicle Sales',
    text: 'Bought a certified pre-owned sedan from Maccom. The transparency during the inspection process gave me peace of mind. Very happy with my purchase and the included warranty.',
    date: 'Sep 15, 2023'
  },
  {
    id: 4,
    name: 'FastTrack Logistics',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
    rating: 5,
    service: 'Fleet Services',
    text: 'Managing a delivery fleet is tough, but their dedicated B2B maintenance plan has reduced our downtime by 40%. The consolidated billing is a lifesaver for our finance team.',
    date: 'Sep 02, 2023',
    featured: true
  },
  {
    id: 5,
    name: 'Grace A.',
    avatar: 'https://i.pravatar.cc/150?img=9',
    rating: 5,
    service: 'Auto Parts',
    text: 'I needed a specific alternator for my European car. They sourced it quickly and even delivered it to my mechanic the same day. Great inventory and customer service.',
    date: 'Aug 20, 2023'
  },
  {
    id: 6,
    name: 'Michael T.',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    service: 'Towing',
    text: 'Got stuck in the mud during heavy rain. The dispatch was professional, and the tow truck driver handled my lowered car with extreme care. Fantastic emergency service!',
    date: 'Aug 10, 2023'
  },
  {
    id: 7,
    name: 'Linda B.',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 4,
    service: 'Repairs',
    text: 'Came in for a routine service and brake pad replacement. The pricing was transparent, no hidden fees, and the waiting area was comfortable with free Wi-Fi.',
    date: 'Jul 25, 2023'
  },
  {
    id: 8,
    name: 'John D.',
    avatar: 'https://i.pravatar.cc/150?img=14',
    rating: 5,
    service: 'Vehicle Sales',
    text: 'The sales team wasn\'t pushy at all. They helped me find a family car that fit my budget perfectly and even helped secure financing. A truly premium dealership experience.',
    date: 'Jul 15, 2023'
  }
];

const VIDEO_TESTIMONIALS = [
  { id: 1, title: 'Fleet Partnership Success', image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80', duration: '2:15' },
  { id: 2, title: 'Emergency Recovery Story', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80', duration: '1:45' },
  { id: 3, title: 'Happy Car Buyer', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80', duration: '1:20' }
];

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [ratingInput, setRatingInput] = useState(5);

  const filteredTestimonials = useMemo(() => {
    return activeCategory === 'All' 
      ? TESTIMONIALS 
      : TESTIMONIALS.filter(t => t.service === activeCategory);
  }, [activeCategory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => {
        setFormState('idle');
        setRatingInput(5);
        (e.target as HTMLFormElement).reset();
      }, 3000);
    }, 1500);
  };

  return (
    <main className="pt-24 lg:pt-[104px] min-h-screen bg-white">
      
      {/* 1. Hero Banner */}
      <section className="relative bg-primary text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
            alt="Happy Customers" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              What Our <span className="text-accent">Customers Say</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/70 max-w-2xl leading-relaxed mb-8"
            >
              Real experiences from customers who trust us with their towing, repair, rental, and vehicle needs.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-6"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-[1px] p-4 border border-white/20 flex items-center gap-4">
                <div className="text-center pr-4 border-r border-white/20">
                  <div className="text-4xl font-bold text-white mb-1">4.9</div>
                  <div className="flex text-primary">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
                <div>
                  <div className="font-bold text-lg">Excellent</div>
                  <div className="text-sm text-white/70">Based on 1,250+ reviews</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Trust Statistics */}
      <section className="py-12 bg-primary text-white relative z-30 -mt-10 mx-4 md:mx-8 rounded-[1px] shadow-xl shadow-accent/20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20 relative z-10">
          <div className="text-center px-4">
            <div className="text-3xl md:text-4xl font-bold mb-2">4.9/5</div>
            <div className="text-sm md:text-base font-medium text-white/90">Average Rating</div>
          </div>
          <div className="text-center px-4">
            <div className="text-3xl md:text-4xl font-bold mb-2">10k+</div>
            <div className="text-sm md:text-base font-medium text-white/90">Jobs Completed</div>
          </div>
          <div className="text-center px-4">
            <div className="text-3xl md:text-4xl font-bold mb-2">85%</div>
            <div className="text-sm md:text-base font-medium text-white/90">Repeat Customers</div>
          </div>
          <div className="text-center px-4">
            <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
            <div className="text-sm md:text-base font-medium text-white/90">Years of Trust</div>
          </div>
        </div>
      </section>

      {/* 2. Category Filter */}
      <section className="pt-20 pb-8 sticky top-[72px] lg:top-[104px] z-20 bg-white/95 backdrop-blur-sm border-b border-dark/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex overflow-x-auto no-scrollbar py-2 gap-2">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2.5 rounded-[1px] text-sm font-bold whitespace-nowrap transition-all",
                  activeCategory === category 
                    ? "bg-primary text-white shadow-md" 
                    : "bg-white border border-dark/20 text-dark/70 hover:border-accent hover:text-accent"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Testimonial Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence>
              {filteredTestimonials.map((testimonial, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={testimonial.id}
                  className="bg-white rounded-[1px] p-8 border border-dark/10 shadow-sm hover:shadow-xl transition-shadow flex flex-col relative group"
                >
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-white/90 group-hover:text-accent/10 transition-colors" />
                  
                  <div className="flex items-center gap-1 text-primary mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={cn("w-4 h-4", i < testimonial.rating ? "fill-current" : "text-white/70")} />
                    ))}
                  </div>
                  
                  <p className="text-dark/80 text-lg mb-8 leading-relaxed flex-1 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-dark/10">
                    <div className="flex items-center gap-4">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-[1px] border-2 border-dark/10" />
                      <div>
                        <h4 className="font-bold text-dark">{testimonial.name}</h4>
                        <span className="text-xs text-dark/70">{testimonial.date}</span>
                      </div>
                    </div>
                    <span className="bg-white text-dark text-xs font-bold px-3 py-1.5 rounded-[1px] border border-dark/20">
                      {testimonial.service}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 4. Featured Video Testimonials */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-[1px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-[1px]" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hear Their Stories</h2>
            <p className="text-dark/70 max-w-2xl mx-auto">Watch our customers share their experiences with Maccom Systems.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {VIDEO_TESTIMONIALS.map((video) => (
              <div key={video.id} className="group relative rounded-[1px] overflow-hidden aspect-video bg-dark cursor-pointer shadow-xl">
                <img src={video.image} alt={video.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-accent text-white rounded-[1px] flex items-center justify-center shadow-lg shadow-accent/30 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 ml-1 fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary to-transparent">
                  <h3 className="font-bold text-lg mb-1">{video.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Play className="w-4 h-4" /> {video.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 & 6. Review Platforms & Submit Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Platform Integration */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Review Us on Your Favorite Platform</h2>
              <p className="text-dark/70 mb-10 text-lg">
                We value your feedback. It helps us improve our services and allows others to make informed decisions. Share your experience with us!
              </p>
              
              <div className="space-y-4 mb-10">
                <a href="#" className="flex items-center justify-between p-6 bg-white border border-dark/20 rounded-[1px] hover:border-accent hover:shadow-md transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-[1px] flex items-center justify-center shadow-sm">
                      <svg viewBox="0 0 24 24" className="w-6 h-6"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-dark">Google Reviews</h4>
                      <p className="text-sm text-dark/70">4.9 Rating • 850+ Reviews</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-dark/70 group-hover:text-accent transition-colors" />
                </a>
                
                <a href="#" className="flex items-center justify-between p-6 bg-white border border-dark/20 rounded-[1px] hover:border-accent hover:shadow-md transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-[1px] flex items-center justify-center shadow-sm text-[#1877F2]">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-dark">Facebook Recommendations</h4>
                      <p className="text-sm text-dark/70">5.0 Rating • 400+ Reviews</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-dark/70 group-hover:text-accent transition-colors" />
                </a>
              </div>
            </div>

            {/* Submit Review Form */}
            <div className="bg-white rounded-[1px] p-8 md:p-10 border border-dark/20 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[1px]" />
              <h3 className="text-2xl font-bold text-dark mb-2">Leave a Review</h3>
              <p className="text-dark/70 mb-8">Share your experience directly on our website.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark">Rate Your Experience</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRatingInput(star)}
                        className="focus:outline-none transition-transform hover:scale-110"
                      >
                        <Star className={cn("w-8 h-8", star <= ratingInput ? "fill-accent text-accent" : "text-white/70")} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark">Your Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="John Doe"
                      className="w-full bg-white border border-dark/20 rounded-[1px] px-4 py-3 text-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-shadow"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark">Service Used</label>
                    <select className="w-full bg-white border border-dark/20 rounded-[1px] px-4 py-3 text-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-shadow appearance-none cursor-pointer">
                      <option>Towing</option>
                      <option>Repairs</option>
                      <option>Rentals</option>
                      <option>Vehicle Sales</option>
                      <option>Auto Parts</option>
                      <option>Fleet Services</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark">Your Review</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell us about your experience..."
                    className="w-full bg-white border border-dark/20 rounded-[1px] px-4 py-3 text-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-shadow resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formState !== 'idle'}
                  className="w-full bg-primary hover:bg-black text-white font-bold py-4 rounded-[1px] transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formState === 'idle' && 'Submit Review'}
                  {formState === 'submitting' && <span className="animate-pulse">Submitting...</span>}
                  {formState === 'success' && <><CheckCircle2 className="w-5 h-5" /> Review Submitted!</>}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Call-to-Action Banner */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Satisfied Customers</h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Experience the difference of premium automotive service. Whether you need an emergency tow, routine maintenance, or a new vehicle, we're here for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/booking" className="bg-primary hover:bg-black text-white px-8 py-4 rounded-[1px] font-bold transition-all shadow-xl text-lg inline-block">
              Book a Service
            </Link>
            <Link to="/contact" className="bg-white hover:bg-dark/5 text-dark px-8 py-4 rounded-[1px] font-bold transition-all shadow-xl text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
