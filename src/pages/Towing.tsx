import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, Navigation, Clock, ShieldCheck, Tag, FileText, ArrowRight, Truck, Wrench, Car, ChevronDown, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const TOWING_FEATURES = [
  { title: 'Average 30-Min Response', icon: Clock },
  { title: 'GPS-Tracked Fleet', icon: Navigation },
  { title: 'Certified Operators', icon: ShieldCheck },
  { title: 'Nationwide Coverage', icon: MapPin },
  { title: 'Transparent Pricing', icon: Tag },
  { title: 'Insurance Friendly', icon: FileText },
];

const TOWING_PROCESS = [
  'Contact Us', 'Share Location', 'Dispatch Vehicle', 'Vehicle Recovered', 'Safe Arrival'
];

const TOWING_TYPES = [
  { title: 'Light Vehicle Towing', desc: 'Safe transport for sedans, hatchbacks, and small SUVs.', image: 'https://images.unsplash.com/photo-1549429402-95f877f0a6d5?auto=format&fit=crop&q=80' },
  { title: 'Heavy-Duty Towing', desc: 'Capable of handling trucks, buses, and commercial vehicles.', image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80' },
  { title: 'Accident Recovery', desc: 'Careful extraction and transport from accident scenes.', image: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&q=80' },
  { title: 'Flatbed Towing', desc: 'Ideal for luxury cars, AWD vehicles, and severe damage.', image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80' },
  { title: 'Winching & Off-Road', desc: 'Specialized equipment to pull vehicles out of ditches or mud.', image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80' },
  { title: 'Long-Distance Towing', desc: 'Secure transportation across cities and regions.', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80' },
];

const TOWING_FAQS = [
  { q: 'How quickly can you get to me?', a: 'Our average response time is under 30 minutes within city limits. Dispatch times may vary slightly based on traffic and weather conditions.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit/debit cards, mobile money (MoMo), and cash. Payment is only required upon safe delivery of your vehicle.' },
  { q: 'Do you work directly with insurance companies?', a: 'Yes, we provide full insurance-friendly documentation and can often bill your provider directly depending on your policy.' },
  { q: 'What should I do while waiting for the tow truck?', a: 'Turn on your hazard lights, move to a safe location away from traffic if possible, and stay inside your locked vehicle if you are on a busy highway.' },
  { q: 'Is there a limit to how far you can tow my car?', a: 'No, we offer both local and long-distance towing services. Contact us for a custom quote on long-distance transport.' },
];

export default function Towing() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <main className="pt-24 lg:pt-[104px]">
      
      {/* 1. Emergency Hero Banner & 2. Instant Request Form */}
      <section className="relative bg-primary overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent font-bold rounded-[1px] text-sm mb-6 uppercase tracking-wider border border-accent/20 animate-pulse">
                <Clock className="w-4 h-4" /> 24/7 Emergency Response
              </div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Stranded? Help Is On The Way.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-white/70 mb-10 max-w-lg"
              >
                Fast dispatch, GPS-tracked recovery vehicles, and professional operators ready around the clock.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a href="tel:0244753849" className="bg-accent hover:bg-accent/90 text-white px-8 py-5 rounded-[1px] font-bold transition-all shadow-lg shadow-accent/30 flex items-center justify-center gap-3 text-lg">
                  <Phone className="w-6 h-6" />
                  0244753849
                </a>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-[1px] p-6 md:p-8 shadow-2xl relative"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-primary rounded-t-[1px]" />
              <h3 className="text-2xl font-bold text-dark mb-2">Request a Tow Now</h3>
              <p className="text-dark/70 text-sm mb-6">Fill out the form below for immediate dispatch.</p>
              
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="bg-white border border-dark/20 rounded-[1px] px-4 py-3 text-dark focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent w-full" />
                  <input type="tel" placeholder="Phone Number" className="bg-white border border-dark/20 rounded-[1px] px-4 py-3 text-dark focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent w-full" />
                </div>
                
                <div className="relative">
                  <input type="text" placeholder="Current Location" className="bg-white border border-dark/20 rounded-[1px] px-4 py-3 text-dark focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent w-full pr-12" />
                  <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-primary p-1 hover:bg-accent/10 rounded-[1px] transition-colors" title="Use My Location">
                    <MapPin className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Vehicle Make & Model" className="bg-white border border-dark/20 rounded-[1px] px-4 py-3 text-dark focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent w-full" />
                  <select className="bg-white border border-dark/20 rounded-[1px] px-4 py-3 text-dark/70 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent w-full appearance-none">
                    <option value="" disabled selected>Select Issue...</option>
                    <option value="breakdown">Breakdown</option>
                    <option value="accident">Accident</option>
                    <option value="flat-tire">Flat Tire</option>
                    <option value="fuel">Out of Fuel</option>
                    <option value="lockout">Lockout</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <button className="w-full bg-primary hover:bg-black text-white font-bold py-4 rounded-[1px] transition-all shadow-lg flex items-center justify-center gap-2 mt-2">
                  <Truck className="w-5 h-5" /> Request Emergency Towing
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Why Choose Our Towing Service */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Why Choose Santa Towing Towing</h2>
            <p className="text-dark/70">Reliable, professional, and fast response when you need it most.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {TOWING_FEATURES.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-[1px] p-6 shadow-sm border border-dark/10 flex flex-col items-center text-center hover:shadow-xl hover:border-accent/30 transition-all group"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-[1px] flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-dark">{feature.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">How It Works</h2>
            <p className="text-dark/70 text-lg">A seamless process to get you safe and moving again.</p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-white -translate-y-1/2" />
            
            <div className="grid md:grid-cols-5 gap-8">
              {TOWING_PROCESS.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 bg-white rounded-[1px] border-4 border-dark/10 shadow-xl flex items-center justify-center text-xl font-bold text-dark group-hover:border-accent group-hover:text-accent transition-colors relative z-10">
                    {idx + 1}
                  </div>
                  <h4 className="mt-4 font-bold text-dark">{step}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Types of Towing & Recovery Offered */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Recovery Solutions</h2>
            <p className="text-dark/70">We have the right equipment for any vehicle and any situation.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TOWING_TYPES.map((type, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-[1px] overflow-hidden hover:border-accent/50 transition-colors group flex flex-col"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img src={type.image} alt={type.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-80" />
                </div>
                <div className="p-6 relative -mt-12">
                  <h3 className="text-xl font-bold mb-2 text-white">{type.title}</h3>
                  <p className="text-dark/70 text-sm">{type.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Coverage Area & 7. Pricing Transparency */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 text-accent font-bold rounded-[1px] text-sm mb-6 uppercase tracking-wider">
                <MapPin className="w-4 h-4" /> Nationwide Coverage
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Wherever You Are, We'll Find You.</h2>
              <p className="text-dark/70 mb-8 text-lg">
                Operating across major cities and highways, our decentralized fleet ensures that a recovery vehicle is always stationed near you. We serve Accra, Kumasi, Takoradi, Tema, and all major connecting routes.
              </p>
              
              <hr className="border-dark/20 my-8" />
              
              <h3 className="text-2xl font-bold text-dark mb-4">Transparent, Upfront Pricing</h3>
              <p className="text-dark/70 mb-8">
                No hidden fees, no surprises. Our pricing is quote-based on distance and vehicle type. We provide a clear estimate before dispatching a driver so you know exactly what to expect.
              </p>
              
              <button className="bg-primary hover:bg-black text-white px-8 py-4 rounded-[1px] font-bold transition-all shadow-lg inline-flex items-center gap-2">
                Get an Instant Quote <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="bg-white rounded-[1px] overflow-hidden aspect-square relative shadow-xl border-8 border-white">
              {/* Map Placeholder */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale opacity-50" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              
              {/* Map Markers */}
              <div className="absolute top-1/3 left-1/3 animate-bounce">
                <div className="w-4 h-4 bg-primary rounded-[1px] shadow-[0_0_0_4px_rgba(239,111,35,0.3)]" />
              </div>
              <div className="absolute top-1/2 left-2/3 animate-bounce" style={{ animationDelay: '0.2s' }}>
                <div className="w-4 h-4 bg-primary rounded-[1px] shadow-[0_0_0_4px_rgba(239,111,35,0.3)]" />
              </div>
              <div className="absolute bottom-1/3 left-1/2 animate-bounce" style={{ animationDelay: '0.4s' }}>
                <div className="w-4 h-4 bg-primary rounded-[1px] shadow-[0_0_0_4px_rgba(28,32,43,0.3)]" />
              </div>
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md rounded-[1px] p-6 shadow-xl">
                <h4 className="font-bold text-dark mb-2">Live Fleet Tracking Active</h4>
                <p className="text-sm text-dark/70">24 recovery vehicles currently on patrol.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Customer Testimonials (Towing Specific) */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-semibold rounded-[1px] text-sm mb-4">
            Real Reviews
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-16">
            Saved by Santa Towing
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "My tire blew out on the highway at night. Santa Towing was there in 20 minutes. The driver was so reassuring and professional. Got me home safely.", author: "Sarah M.", role: "Night Commuter" },
              { text: "We had a minor fender bender and needed a flatbed. They handled my SUV with extreme care. Transparent pricing, no hidden costs.", author: "David K.", role: "Family Driver" },
              { text: "The fastest response time I've ever experienced. Their GPS tracking link let me see exactly when the tow truck was arriving. Incredible service.", author: "Michael T.", role: "Business Traveler" },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[1px] shadow-sm text-left relative border border-dark/10"
              >
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 fill-accent text-accent" />)}
                </div>
                <p className="text-dark/70 mb-8 italic">"{item.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-[1px] overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?img=${idx * 15 + 10}`} alt="User" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark">{item.author}</h4>
                    <p className="text-sm text-dark/70">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Related Services */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Need More Than Just a Tow?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Auto Repairs', desc: 'Direct drop-off to our certified repair shop.', icon: Wrench, link: '/services' },
              { title: 'Car Rental', desc: 'Need a replacement vehicle immediately?', icon: Car, link: '/rental' },
              { title: 'Vehicle Recovery', desc: 'Specialized extraction for off-road incidents.', icon: Truck, link: '/services' }
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <Link to={service.link} key={idx} className="bg-white/5 border border-white/10 p-6 rounded-[1px] hover:bg-accent hover:border-accent transition-all group flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-[1px] flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 flex items-center gap-2">
                      {service.title} <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </h4>
                    <p className="text-sm text-dark/70 group-hover:text-white/80">{service.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. FAQs (Towing Specific) */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Towing & Recovery FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {TOWING_FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-dark/20 rounded-[1px] overflow-hidden shadow-sm bg-white"
              >
                <button 
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-dark/5 transition-colors"
                >
                  <span className="font-bold text-dark pr-4">{faq.q}</span>
                  <ChevronDown className={cn("w-5 h-5 text-primary transition-transform shrink-0", openIdx === idx && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {openIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0 text-dark/70">
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

      {/* 11. Emergency CTA Banner */}
      <section className="py-20 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.5) 0%, transparent 50%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Don't Wait - Request Emergency Towing Now</h2>
          <p className="text-lg md:text-xl mb-10 text-white/90">
            Our dispatchers are standing by 24/7 to send help immediately.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:0244753849" className="w-full sm:w-auto bg-primary hover:bg-black text-white px-8 py-5 rounded-[1px] font-bold transition-all shadow-xl flex items-center justify-center gap-3 text-lg">
              <Phone className="w-6 h-6" /> Call 0244753849
            </a>
            <button className="w-full sm:w-auto bg-white hover:bg-dark/5 text-dark px-8 py-5 rounded-[1px] font-bold transition-all shadow-xl flex items-center justify-center gap-3 text-lg">
              <Truck className="w-6 h-6" /> Request Online
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
