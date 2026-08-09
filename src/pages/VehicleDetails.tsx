import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useParams } from 'react-router-dom';
import { 
  ChevronRight, Calendar, MapPin, Fuel, Settings, ShieldCheck, FileText, CheckCircle2, 
  Heart, Share2, Phone, MessageCircle, ArrowRight, ChevronDown, Star, Car, Calculator 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { FAQ } from '@/components/sections/BottomSections';

const VEHICLE_SPECS = {
  engine: [
    { label: 'Engine Type', value: '2.0L Inline-4 Turbo' },
    { label: 'Horsepower', value: '255 hp @ 5,800 rpm' },
    { label: 'Torque', value: '295 lb-ft @ 1,200 rpm' },
    { label: 'Displacement', value: '1,991 cc' }
  ],
  performance: [
    { label: '0-60 mph', value: '6.1 seconds' },
    { label: 'Top Speed', value: '130 mph' },
    { label: 'Drive Type', value: 'Rear-Wheel Drive' },
    { label: 'Transmission', value: '9-speed Automatic' }
  ],
  dimensions: [
    { label: 'Length', value: '194.3 in' },
    { label: 'Width', value: '73.1 in' },
    { label: 'Height', value: '57.8 in' },
    { label: 'Curb Weight', value: '3,781 lbs' }
  ],
  features: [
    'Apple CarPlay & Android Auto', 'Burmester Surround Sound', 'Heated Front Seats',
    'Blind Spot Assist', 'Active Parking Assist', 'Power Sunroof', 'LED Headlamps',
    'Keyless-GO', 'Dual-Zone Climate Control', 'Ambient Lighting'
  ]
};

const VEHICLE_HISTORY = [
  { label: 'Inspection Status', value: 'Passed 150-Point Inspection', status: 'success' },
  { label: 'Accident History', value: 'No Reported Accidents', status: 'success' },
  { label: 'Service Records', value: 'Comprehensive Dealer History', status: 'success' },
  { label: 'Previous Owners', value: '1 Owner', status: 'neutral' },
  { label: 'Title Check', value: 'Clean Title', status: 'success' },
];

const VEHICLE_FAQS = [
  { q: 'Can I arrange a test drive?', a: 'Yes, test drives can be scheduled at your convenience. Please use the "Book a Test Drive" button to select a date and time.' },
  { q: 'Is financing available for this vehicle?', a: 'Yes, we offer competitive financing options through our partner banks. You can use our financing calculator below for an estimate or apply directly.' },
  { q: 'What is the warranty coverage?', a: 'This vehicle comes with a standard 3-month or 5,000 km dealer warranty. Extended warranty options are also available at purchase.' },
  { q: 'Can you deliver the vehicle to my location?', a: 'Yes, we offer nationwide delivery. Delivery within the city is often free, while out-of-town deliveries incur a standard transport fee based on distance.' },
];

export default function VehicleDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('Specs');
  const [activeSpecTab, setActiveSpecTab] = useState('Engine');
  const [activeImage, setActiveImage] = useState('https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  
  // Financing Calculator State
  const [price, setPrice] = useState(980000);
  const [downPayment, setDownPayment] = useState(196000);
  const [term, setTerm] = useState(48);
  const [rate, setRate] = useState(12);

  const calculateMonthly = () => {
    const principal = price - downPayment;
    const monthlyRate = (rate / 100) / 12;
    if (monthlyRate === 0) return principal / term;
    return (principal * monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1);
  };

  const images = [
    'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80'
  ];

  return (
    <main className="pt-24 lg:pt-[104px] bg-white min-h-screen">
      
      {/* 1. Breadcrumb */}
      <div className="bg-white border-b border-dark/20 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-sm text-dark/70">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/sales" className="hover:text-accent transition-colors">Vehicle Sales</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-dark font-medium">New</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-dark font-medium">2024 Mercedes-Benz E-Class</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* 2. Vehicle Gallery */}
            <div className="bg-white p-4 rounded-[1px] shadow-sm border border-dark/10">
              <div className="aspect-[16/10] relative rounded-[1px] overflow-hidden mb-4 group">
                <img src={activeImage} alt="Vehicle" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-accent text-white px-4 py-1.5 rounded-[1px] text-sm font-bold shadow-md">
                  New
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={cn(
                      "aspect-video rounded-[1px] overflow-hidden border-2 transition-all",
                      activeImage === img ? "border-primary" : "border-transparent hover:border-dark/30"
                    )}
                  >
                    <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Content Tabs */}
            <div className="bg-white rounded-[1px] shadow-sm border border-dark/10 overflow-hidden">
              <div className="flex border-b border-dark/10 overflow-x-auto no-scrollbar">
                {['Specs', 'History', 'Financing'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "px-8 py-4 font-bold transition-colors whitespace-nowrap border-b-2",
                      activeTab === tab ? "text-accent border-accent bg-accent/5" : "text-dark/70 border-transparent hover:text-dark hover:bg-white"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              <div className="p-8">
                {/* 4. Full Specifications */}
                {activeTab === 'Specs' && (
                  <div>
                    <h3 className="text-2xl font-bold text-dark mb-6">Technical Specifications</h3>
                    <div className="flex gap-4 mb-6 overflow-x-auto no-scrollbar pb-2">
                      {['Engine', 'Performance', 'Dimensions', 'Features'].map(tab => (
                        <button
                          key={tab}
                          onClick={() => setActiveSpecTab(tab)}
                          className={cn(
                            "px-4 py-2 rounded-[1px] text-sm font-bold transition-all whitespace-nowrap",
                            activeSpecTab === tab ? "bg-accent text-white" : "bg-white text-dark/70 hover:bg-white"
                          )}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                    
                    <div className="bg-white rounded-[1px] p-6">
                      {activeSpecTab !== 'Features' ? (
                        <div className="grid sm:grid-cols-2 gap-4">
                          {(VEHICLE_SPECS[activeSpecTab.toLowerCase() as keyof typeof VEHICLE_SPECS] as Array<{label: string, value: string}>).map((spec, idx) => (
                            <div key={idx} className="flex justify-between items-center py-3 border-b border-dark/20 last:border-0">
                              <span className="text-dark/70">{spec.label}</span>
                              <span className="font-bold text-dark text-right">{spec.value}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                          {VEHICLE_SPECS.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                              <span className="text-dark/80 font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* 5. Vehicle History & Condition */}
                {activeTab === 'History' && (
                  <div>
                    <h3 className="text-2xl font-bold text-dark mb-6">Vehicle History & Condition</h3>
                    <div className="space-y-4">
                      {VEHICLE_HISTORY.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-[1px] p-4 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className={cn(
                              "w-10 h-10 rounded-[1px] flex items-center justify-center shrink-0",
                              item.status === 'success' ? "bg-accent/10 text-accent" : "bg-dark/10 text-dark"
                            )}>
                              {item.status === 'success' ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                            </div>
                            <span className="font-bold text-dark">{item.label}</span>
                          </div>
                          <span className="text-dark/70 font-medium">{item.value}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 bg-primary/10 rounded-[1px] p-6 border border-primary/20 flex gap-6 items-start">
                      <div className="w-12 h-12 bg-accent text-white rounded-[1px] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-dark text-lg mb-2">Santa Towing Certified Pre-Owned</h4>
                        <p className="text-dark/70">This vehicle has passed our comprehensive 150-point inspection and comes with a 3-month limited warranty. Reconditioned to the highest standards.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* 6. Financing Calculator */}
                {activeTab === 'Financing' && (
                  <div>
                    <h3 className="text-2xl font-bold text-dark mb-6">Estimate Monthly Payments</h3>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <div className="flex justify-between mb-2">
                            <label className="font-bold text-dark">Vehicle Price</label>
                            <span className="font-bold text-accent">GH₵ {price.toLocaleString()}</span>
                          </div>
                          <input type="range" min="50000" max="2000000" step="10000" value={price} onChange={e => setPrice(Number(e.target.value))} className="w-full accent-orange" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-2">
                            <label className="font-bold text-dark">Down Payment</label>
                            <span className="font-bold text-accent">GH₵ {downPayment.toLocaleString()}</span>
                          </div>
                          <input type="range" min="0" max={price} step="5000" value={downPayment} onChange={e => setDownPayment(Number(e.target.value))} className="w-full accent-orange" />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-bold text-dark mb-2">Term (Months)</label>
                            <select value={term} onChange={e => setTerm(Number(e.target.value))} className="w-full px-4 py-3 bg-white border border-dark/20 rounded-[1px] focus:border-accent focus:ring-1 focus:ring-accent outline-none">
                              <option value="12">12 Months</option>
                              <option value="24">24 Months</option>
                              <option value="36">36 Months</option>
                              <option value="48">48 Months</option>
                              <option value="60">60 Months</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-bold text-dark mb-2">Interest Rate (%)</label>
                            <input type="number" value={rate} onChange={e => setRate(Number(e.target.value))} className="w-full px-4 py-3 bg-white border border-dark/20 rounded-[1px] focus:border-accent focus:ring-1 focus:ring-accent outline-none" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-primary text-white rounded-[1px] p-8 flex flex-col justify-center text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-[1px] blur-[40px]" />
                        <h4 className="text-dark/70 font-medium mb-2">Estimated Monthly Payment</h4>
                        <div className="text-4xl md:text-5xl font-bold text-accent mb-4">
                          GH₵ {Math.round(calculateMonthly()).toLocaleString()}
                        </div>
                        <p className="text-sm text-dark/70 mb-8">*This is an estimate. Actual rates may vary based on credit history.</p>
                        <button className="w-full bg-white hover:bg-dark/5 text-dark font-bold py-4 rounded-[1px] transition-all">
                          Apply for Financing
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 10. FAQs */}
            <div className="bg-white rounded-[1px] shadow-sm border border-dark/10 p-8">
              <h3 className="text-2xl font-bold text-dark mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {VEHICLE_FAQS.map((faq, idx) => (
                  <div key={idx} className="border border-dark/20 rounded-[1px] overflow-hidden">
                    <button 
                      onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                      className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-dark/5 transition-colors"
                    >
                      <span className="font-bold text-dark pr-4">{faq.q}</span>
                      <ChevronDown className={cn("w-5 h-5 text-primary transition-transform shrink-0", openFaqIdx === idx && "rotate-180")} />
                    </button>
                    <AnimatePresence>
                      {openFaqIdx === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 py-5 bg-white text-dark/70">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
            
          </div>

          {/* 3. Vehicle Summary Panel (Sticky Sidebar) */}
          <div className="lg:col-span-1">
            <div className="sticky top-[120px] space-y-6">
              
              <div className="bg-white rounded-[1px] shadow-sm border border-dark/10 p-6 md:p-8">
                <div className="flex justify-between items-start mb-2">
                  <h1 className="text-2xl md:text-3xl font-bold text-dark leading-tight">2024 Mercedes-Benz E-Class</h1>
                  <div className="flex gap-2">
                    <button className="p-2 text-dark/70 hover:text-accent hover:bg-accent/10 rounded-[1px] transition-colors" aria-label="Save">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-dark/70 hover:text-accent hover:bg-accent/10 rounded-[1px] transition-colors" aria-label="Share">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <p className="text-dark/70 mb-6">Premium Luxury Sedan</p>
                <div className="text-4xl font-bold text-accent mb-8">GH₵ 980,000</div>
                
                <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-[1px] flex items-center justify-center shrink-0">
                      <Calendar className="w-5 h-5 text-dark" />
                    </div>
                    <div>
                      <div className="text-xs text-dark/70">Year</div>
                      <div className="font-bold text-dark text-sm">2024</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-[1px] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-dark" />
                    </div>
                    <div>
                      <div className="text-xs text-dark/70">Mileage</div>
                      <div className="font-bold text-dark text-sm">0 km</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-[1px] flex items-center justify-center shrink-0">
                      <Fuel className="w-5 h-5 text-dark" />
                    </div>
                    <div>
                      <div className="text-xs text-dark/70">Fuel</div>
                      <div className="font-bold text-dark text-sm">Hybrid</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-[1px] flex items-center justify-center shrink-0">
                      <Settings className="w-5 h-5 text-dark" />
                    </div>
                    <div>
                      <div className="text-xs text-dark/70">Trans</div>
                      <div className="font-bold text-dark text-sm">Automatic</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <button className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-[1px] transition-all shadow-md flex justify-center items-center gap-2">
                    Book a Test Drive
                  </button>
                  <button className="w-full bg-primary hover:bg-black text-white font-bold py-4 rounded-[1px] transition-all shadow-md flex justify-center items-center gap-2">
                    Enquire Now
                  </button>
                </div>
              </div>

              {/* 8. Dealer/Contact Info */}
              <div className="bg-white rounded-[1px] shadow-sm border border-dark/10 p-6 md:p-8">
                <h3 className="font-bold text-dark text-lg mb-6">Contact Sales Team</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-[1px] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-bold text-dark">Location</div>
                      <p className="text-sm text-dark/70">123 Spintex Road, Accra</p>
                    </div>
                  </div>
                  <a href="tel:0244753849" className="flex items-start gap-4 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 bg-accent/10 rounded-[1px] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-bold text-dark">Call Us</div>
                      <p className="text-sm text-dark/70">0244753849</p>
                    </div>
                  </a>
                  <a href="https://wa.me/233244753849" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 hover:opacity-80 transition-opacity">
                    <div className="w-10 h-10 bg-accent/10 rounded-[1px] flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-bold text-dark">WhatsApp</div>
                      <p className="text-sm text-dark/70">Chat with a Specialist</p>
                    </div>
                  </a>
                </div>
                
                <div className="mt-6 aspect-[2/1] rounded-[1px] overflow-hidden bg-white relative">
                   <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale opacity-80" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-accent text-white rounded-[1px] flex items-center justify-center shadow-lg animate-bounce">
                        <MapPin className="w-4 h-4" />
                      </div>
                   </div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>

      {/* 7. Similar Vehicles */}
      <section className="py-20 bg-white border-t border-dark/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-3xl font-bold text-dark">Similar Vehicles</h2>
            <Link to="/sales" className="text-accent font-bold hover:underline flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
             {[
               { id: 2, type: 'New', name: '2024 Range Rover Sport', price: 'GH₵ 1,450,000', image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80' },
               { id: 7, type: 'New', name: '2024 Toyota Hilux', price: 'GH₵ 850,000', image: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&q=80' },
               { id: 8, type: 'Foreign Used', name: '2021 Lexus RX 350', price: 'GH₵ 680,000', image: 'https://images.unsplash.com/photo-1570733577150-1eb5fb6919db?auto=format&fit=crop&q=80' }
             ].map((vehicle, idx) => (
                <div key={idx} className="bg-white rounded-[1px] overflow-hidden border border-dark/10 shadow-sm hover:shadow-lg transition-all group flex flex-col">
                  <div className="aspect-[4/3] relative overflow-hidden bg-white">
                    <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-[1px] text-xs font-bold shadow-sm">{vehicle.type}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold mb-2 text-dark line-clamp-1 group-hover:text-accent transition-colors">{vehicle.name}</h3>
                    <div className="font-bold text-accent mb-4">{vehicle.price}</div>
                    <Link to={`/sales/${vehicle.id}`} className="block w-full text-center bg-white border border-dark/20 hover:bg-white text-dark py-3 rounded-[1px] font-bold transition-colors text-sm">
                      View Details
                    </Link>
                  </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 11. Call-to-Action Banner */}
      <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Interested in This Vehicle?</h2>
          <p className="text-lg md:text-xl mb-10 text-white/70">
            Contact us today to schedule a viewing or secure this vehicle before it's gone.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-[1px] font-bold transition-all shadow-xl">
              Book a Test Drive
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-[1px] font-bold transition-all border border-white/20">
              Enquire Now
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
