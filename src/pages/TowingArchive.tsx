import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, MessageSquare, X, ArrowRight, Truck } from 'lucide-react';
import { TOWING_ADVERTS } from '@/data/towingAdverts';

export default function TowingArchive() {
  const [selectedAdvert, setSelectedAdvert] = useState<typeof TOWING_ADVERTS[0] | null>(null);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 text-accent font-semibold tracking-wider uppercase mb-4">
            <Truck className="w-5 h-5" />
            <span>Nationwide Coverage</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark mb-6 tracking-tight">
            Towing Services by District
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Find dependable 24/7 towing and recovery services in your specific area. We provide rapid response and professional assistance across Ghana.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TOWING_ADVERTS.map((advert, index) => {
            // Create a short excerpt from the description
            const excerpt = advert.description.split('. ')[0] + '.';

            return (
              <motion.div 
                key={advert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 10) * 0.05 }}
                className="bg-white p-6 rounded-[1px] border border-gray-100 shadow-sm hover:shadow-xl hover:border-accent/30 transition-all group flex flex-col"
              >
                <div className="flex items-center gap-3 text-accent mb-4">
                  <div className="w-10 h-10 rounded-[1px] bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-sm tracking-wider uppercase">{advert.district}</span>
                </div>
                
                <h2 className="text-xl font-bold text-dark mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {advert.title}
                </h2>
                
                <p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed line-clamp-3">
                  {excerpt}
                </p>
                
                <button 
                  onClick={() => setSelectedAdvert(advert)}
                  className="w-full bg-slate-50 hover:bg-accent text-slate-700 hover:text-white font-bold py-3 px-4 rounded-[1px] transition-all flex items-center justify-center gap-2 border border-gray-200 hover:border-accent"
                >
                  <span>Contact Towing Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedAdvert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAdvert(null)}
              className="absolute inset-0 bg-dark/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-[1px] shadow-2xl w-full max-w-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <div className="flex items-center gap-2 text-accent font-bold">
                  <MapPin className="w-5 h-5" />
                  <span>{selectedAdvert.district}</span>
                </div>
                <button 
                  onClick={() => setSelectedAdvert(null)}
                  className="p-2 hover:bg-gray-100 rounded-[1px] transition-colors text-gray-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto">
                <h3 className="text-2xl font-extrabold text-dark mb-6">
                  {selectedAdvert.title}
                </h3>
                <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
                  {selectedAdvert.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </div>
              
              <div className="p-6 bg-slate-50 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:0244753849" 
                  className="flex-1 bg-accent hover:bg-accent/90 text-white font-bold py-3.5 px-6 rounded-[1px] transition-all flex items-center justify-center gap-2 shadow-md hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now: 0244753849</span>
                </a>
                <a 
                  href="https://wa.me/233244753849" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-6 rounded-[1px] transition-all flex items-center justify-center gap-2 shadow-md hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
