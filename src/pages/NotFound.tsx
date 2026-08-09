import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  MapPinOff, Home, Truck, Car, CalendarClock, Phone, 
  Search, ArrowRight, MessageCircle, Mail 
} from 'lucide-react';

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/services?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const QUICK_LINKS = [
    { icon: Home, title: 'Go to Homepage', path: '/' },
    { icon: Truck, title: 'Request a Tow', path: '/towing' },
    { icon: Car, title: 'Browse Vehicles', path: '/sales' },
    { icon: CalendarClock, title: 'Book a Service', path: '/booking' },
    { icon: Phone, title: 'Contact Us', path: '/contact' },
  ];

  const POPULAR_LINKS = [
    { title: 'All Services', path: '/services' },
    { title: 'Vehicle Sales', path: '/sales' },
    { title: 'Car Rental', path: '/rental' },
    { title: 'Auto Parts', path: '/parts' },
    { title: 'Our Blog', path: '/blog' },
    { title: 'FAQs', path: '/faqs' },
  ];

  return (
    <main className="pt-24 lg:pt-[104px] min-h-screen bg-white flex flex-col items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8 w-full">
        
        {/* 1 & 2. Visual & Messaging */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-32 h-32 bg-primary/10 rounded-[1px] flex items-center justify-center mx-auto mb-8 relative"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-[1px] animate-ping" style={{ animationDuration: '3s' }} />
            <MapPinOff className="w-16 h-16 text-accent relative z-10" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-8xl md:text-9xl font-black text-dark tracking-tighter mb-4"
          >
            4<span className="text-accent">0</span>4
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-dark mb-4"
          >
            Looks Like You Took a Wrong Turn
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-dark/70 max-w-2xl mx-auto"
          >
            The page you're looking for doesn't exist or may have been moved. Let's get you back on the road.
          </motion.p>
        </div>

        {/* 4. Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-xl mx-auto mb-16"
        >
          <form onSubmit={handleSearch} className="relative">
            <input 
              type="text" 
              placeholder="Search for services, vehicles, or information..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-dark/20 rounded-[1px] px-6 py-4 pl-14 text-dark focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 shadow-sm transition-all"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-dark/70" />
            <button 
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-black text-white px-6 py-2 rounded-[1px] font-bold transition-colors text-sm"
            >
              Search
            </button>
          </form>
        </motion.div>

        {/* 3. Quick Navigation Options */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16"
        >
          {QUICK_LINKS.map((link, idx) => {
            const Icon = link.icon;
            return (
              <Link 
                key={idx} 
                to={link.path}
                className="bg-white border border-dark/10 hover:border-accent rounded-[1px] p-4 flex flex-col items-center justify-center text-center group transition-all hover:shadow-md"
              >
                <div className="w-12 h-12 bg-white group-hover:bg-accent/10 rounded-[1px] flex items-center justify-center mb-3 transition-colors">
                  <Icon className="w-6 h-6 text-dark group-hover:text-accent transition-colors" />
                </div>
                <span className="font-bold text-sm text-dark group-hover:text-accent transition-colors">{link.title}</span>
              </Link>
            )
          })}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* 5. Popular Links */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-[1px] p-8 border border-dark/10 shadow-sm"
          >
            <h3 className="text-xl font-bold text-dark mb-6">Popular Pages</h3>
            <ul className="space-y-4">
              {POPULAR_LINKS.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="flex items-center gap-3 text-dark/70 hover:text-accent transition-colors font-medium">
                    <div className="w-6 h-6 rounded-[1px] bg-white flex items-center justify-center shrink-0">
                      <ArrowRight className="w-3 h-3 text-accent" />
                    </div>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 6. Contact Prompt */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-primary text-white rounded-[1px] p-8 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-[1px] blur-[40px]" />
            <h3 className="text-xl font-bold mb-3 relative z-10">Still can't find what you're looking for?</h3>
            <p className="text-dark/70 mb-8 text-sm relative z-10">Our support team is ready to help you directly.</p>
            
            <div className="space-y-4 relative z-10">
              <a href="tel:0244753849" className="flex items-center gap-4 bg-white/10 hover:bg-white/20 p-3 rounded-[1px] transition-colors">
                <div className="w-10 h-10 bg-white/10 rounded-[1px] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-dark/70">Call Us</div>
                  <div className="font-bold">0244753849</div>
                </div>
              </a>
              <a href="https://wa.me/233244753849" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-accent/10 hover:bg-accent/20 p-3 rounded-[1px] transition-colors">
                <div className="w-10 h-10 bg-primary/50/20 rounded-[1px] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-dark/70">WhatsApp</div>
                  <div className="font-bold text-accent">Message Us</div>
                </div>
              </a>
              <a href="mailto:info@santatowing.com" className="flex items-center gap-4 bg-white/10 hover:bg-white/20 p-3 rounded-[1px] transition-colors">
                <div className="w-10 h-10 bg-white/10 rounded-[1px] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-dark/70">Email Us</div>
                  <div className="font-bold text-sm">info@santatowing.com</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </main>
  );
}
