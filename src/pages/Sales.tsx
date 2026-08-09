import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Search, Car, Settings, Fuel, ShieldCheck, Tag, CheckCircle2, DollarSign, RefreshCcw, ThumbsUp, CreditCard, ChevronDown, Star, ArrowRight, SlidersHorizontal, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

// Local mock data since we need more items for filtering
const SALES_VEHICLES = [
  { id: 1, type: 'New', make: 'Mercedes-Benz', model: 'E-Class', name: '2024 Mercedes-Benz E-Class', price: 'GH₵ 980,000', fuel: 'Hybrid', transmission: 'Automatic', year: 2024, mileage: '0 km', bodyType: 'Sedan', image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80' },
  { id: 2, type: 'New', make: 'Range Rover', model: 'Sport', name: '2024 Range Rover Sport', price: 'GH₵ 1,450,000', fuel: 'Petrol', transmission: 'Automatic', year: 2024, mileage: '25 km', bodyType: 'SUV', image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80' },
  { id: 3, type: 'Foreign Used', make: 'Toyota', model: 'Camry', name: '2020 Toyota Camry SE', price: 'GH₵ 264,000', fuel: 'Petrol', transmission: 'Automatic', year: 2020, mileage: '72,000 km', bodyType: 'Sedan', image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80' },
  { id: 4, type: 'Ghana Used', make: 'Hyundai', model: 'Elantra', name: '2018 Hyundai Elantra', price: 'GH₵ 144,000', fuel: 'Petrol', transmission: 'Manual', year: 2018, mileage: '136,000 km', bodyType: 'Sedan', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80' },
  { id: 5, type: 'Foreign Used', make: 'Honda', model: 'CR-V', name: '2019 Honda CR-V EX', price: 'GH₵ 320,000', fuel: 'Petrol', transmission: 'Automatic', year: 2019, mileage: '58,000 km', bodyType: 'SUV', image: 'https://images.unsplash.com/photo-1568844293986-8d0400ba4715?auto=format&fit=crop&q=80' },
  { id: 6, type: 'Ghana Used', make: 'Kia', model: 'Rio', name: '2017 Kia Rio', price: 'GH₵ 95,000', fuel: 'Petrol', transmission: 'Manual', year: 2017, mileage: '150,000 km', bodyType: 'Hatchback', image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fd?auto=format&fit=crop&q=80' },
  { id: 7, type: 'New', make: 'Toyota', model: 'Hilux', name: '2024 Toyota Hilux Invincible', price: 'GH₵ 850,000', fuel: 'Diesel', transmission: 'Automatic', year: 2024, mileage: '10 km', bodyType: 'Pickup', image: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&q=80' },
  { id: 8, type: 'Foreign Used', make: 'Lexus', model: 'RX', name: '2021 Lexus RX 350', price: 'GH₵ 680,000', fuel: 'Petrol', transmission: 'Automatic', year: 2021, mileage: '35,000 km', bodyType: 'SUV', image: 'https://images.unsplash.com/photo-1570733577150-1eb5fb6919db?auto=format&fit=crop&q=80' },
];

const WHY_BUY_FEATURES = [
  { title: 'Inspected & Verified Vehicles', icon: ShieldCheck },
  { title: 'Transparent Pricing', icon: Tag },
  { title: 'Financing Options Available', icon: CreditCard },
  { title: 'Trade-In Accepted', icon: RefreshCcw },
  { title: 'After-Sales Support', icon: ThumbsUp },
  { title: 'Warranty Options', icon: CheckCircle2 },
];

const BUYING_PROCESS = [
  'Browse Inventory', 'Book a Test Drive', 'Vehicle Inspection', 'Financing/Payment', 'Drive Away'
];

const SALES_FAQS = [
  { q: 'How thorough is your vehicle inspection process?', a: 'Every pre-owned vehicle goes through a rigorous 150-point inspection covering engine performance, transmission, electrical systems, brakes, and bodywork before being listed for sale.' },
  { q: 'Do you offer warranties on used cars?', a: 'Yes! All foreign-used cars come with a standard 3-month or 5,000 km warranty. Extended warranties are also available for purchase.' },
  { q: 'What do I need to qualify for financing?', a: 'You will need a valid national ID, proof of income (recent pay slips or bank statements), and proof of address. Our finance partners will assess your application based on credit history.' },
  { q: 'How does the trade-in process work?', a: 'Bring your current vehicle for a free appraisal. We evaluate its condition and market value, then offer you a trade-in value that can be directly applied to your new purchase.' },
  { q: 'Can you deliver the vehicle to my location?', a: 'Yes, we offer nationwide delivery. Delivery within the city is often free, while out-of-town deliveries incur a standard transport fee based on distance.' },
];

export default function Sales() {
  const [activeTab, setActiveTab] = useState('All');
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const tabs = ['All', 'New', 'Foreign Used', 'Ghana Used'];
  
  const filteredVehicles = activeTab === 'All' 
    ? SALES_VEHICLES 
    : SALES_VEHICLES.filter(v => v.type === activeTab);

  return (
    <main className="pt-24 lg:pt-[104px]">
      
      {/* 1. Hero Banner */}
      <section className="relative bg-primary overflow-hidden pt-12 pb-32 md:pt-20 md:pb-40">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Find Your Next Vehicle With <span className="text-accent">Confidence</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-3xl mx-auto"
          >
            Explore a curated selection of new and quality pre-owned vehicles, backed by trusted inspection and financing options.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-[1px] font-bold transition-all shadow-lg shadow-accent/30">
              View Inventory
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-[1px] font-bold transition-all border border-white/20">
              Sell Your Car
            </button>
          </motion.div>

          {/* Quick Search Widget */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-[1px] p-6 md:p-8 shadow-2xl max-w-5xl mx-auto relative translate-y-16 md:translate-y-24 text-left"
          >
            <form className="grid grid-cols-2 md:grid-cols-6 gap-4 items-end" onSubmit={e => e.preventDefault()}>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-bold text-dark mb-2">Make</label>
                <select className="w-full px-4 py-3 bg-white border border-dark/20 rounded-[1px] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent appearance-none text-dark/70">
                  <option value="">Any Make</option>
                  <option value="toyota">Toyota</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="range-rover">Range Rover</option>
                  <option value="hyundai">Hyundai</option>
                </select>
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-bold text-dark mb-2">Model</label>
                <select className="w-full px-4 py-3 bg-white border border-dark/20 rounded-[1px] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent appearance-none text-dark/70">
                  <option value="">Any Model</option>
                </select>
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-bold text-dark mb-2">Body Type</label>
                <select className="w-full px-4 py-3 bg-white border border-dark/20 rounded-[1px] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent appearance-none text-dark/70">
                  <option value="">Any Body</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="pickup">Pickup</option>
                </select>
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-bold text-dark mb-2">Max Price</label>
                <select className="w-full px-4 py-3 bg-white border border-dark/20 rounded-[1px] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent appearance-none text-dark/70">
                  <option value="">Any Price</option>
                  <option value="100000">Under 100k</option>
                  <option value="300000">Under 300k</option>
                  <option value="500000">Under 500k</option>
                </select>
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-bold text-dark mb-2">Year</label>
                <select className="w-full px-4 py-3 bg-white border border-dark/20 rounded-[1px] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent appearance-none text-dark/70">
                  <option value="">Any Year</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
              </div>
              <div className="col-span-2 md:col-span-1">
                <button className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3 rounded-[1px] transition-all shadow-md flex items-center justify-center gap-2">
                  <Search className="w-5 h-5" /> Search
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Spacer for overlapping widget */}
      <div className="h-24 md:h-32 bg-white"></div>

      {/* 2 & 3. Inventory Layout (Sidebar + Grid) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="flex bg-white p-1 rounded-[1px] border border-dark/20 overflow-x-auto no-scrollbar max-w-full shadow-sm">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-6 py-2.5 rounded-[1px] font-medium transition-all whitespace-nowrap",
                    activeTab === tab 
                      ? "bg-primary text-white shadow-md" 
                      : "text-dark/70 hover:text-dark hover:bg-white"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <button 
              className="md:hidden w-full flex items-center justify-center gap-2 bg-white border border-dark/20 rounded-[1px] py-3 font-bold text-dark shadow-sm"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <SlidersHorizontal className="w-5 h-5" />
              {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className={cn(
              "lg:w-1/4 space-y-6 lg:block",
              isFilterOpen ? "block" : "hidden"
            )}>
              <div className="bg-white rounded-[1px] p-6 shadow-sm border border-dark/10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-dark text-lg">Filters</h3>
                  <button className="text-sm text-primary font-semibold hover:underline">Reset</button>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-dark mb-3">Price Range</label>
                    <input type="range" className="w-full accent-orange" />
                    <div className="flex justify-between text-sm text-dark/70 mt-2">
                      <span>GH₵ 50k</span>
                      <span>GH₵ 2M+</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-dark mb-3">Body Type</label>
                    <div className="space-y-2">
                      {['Sedan', 'SUV', 'Pickup', 'Hatchback', 'Van'].map(type => (
                        <label key={type} className="flex items-center gap-3 cursor-pointer group">
                          <div className="w-5 h-5 rounded-[1px] border border-dark/30 flex items-center justify-center group-hover:border-accent"></div>
                          <span className="text-dark/70 group-hover:text-accent transition-colors">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-dark mb-3">Transmission</label>
                    <div className="space-y-2">
                      {['Automatic', 'Manual'].map(type => (
                        <label key={type} className="flex items-center gap-3 cursor-pointer group">
                          <div className="w-5 h-5 rounded-[1px] border border-dark/30 flex items-center justify-center group-hover:border-accent"></div>
                          <span className="text-dark/70 group-hover:text-accent transition-colors">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-dark mb-3">Fuel Type</label>
                    <div className="space-y-2">
                      {['Petrol', 'Diesel', 'Hybrid', 'Electric'].map(type => (
                        <label key={type} className="flex items-center gap-3 cursor-pointer group">
                          <div className="w-5 h-5 rounded-[1px] border border-dark/30 flex items-center justify-center group-hover:border-accent"></div>
                          <span className="text-dark/70 group-hover:text-accent transition-colors">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-primary text-white font-bold py-3 rounded-[1px] mt-8 hover:bg-black transition-colors">
                  Apply Filters
                </button>
              </div>
            </aside>

            {/* Vehicle Grid */}
            <div className="lg:w-3/4">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredVehicles.map((vehicle) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      key={vehicle.id}
                      className="bg-white rounded-[1px] overflow-hidden border border-dark/10 shadow-sm hover:shadow-xl transition-all group flex flex-col"
                    >
                      <div className="aspect-[4/3] relative overflow-hidden bg-white">
                        <img 
                          src={vehicle.image} 
                          alt={vehicle.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-[1px] text-xs font-bold shadow-sm">
                          {vehicle.type}
                        </div>
                      </div>
                      
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold mb-2 text-dark line-clamp-1">{vehicle.name}</h3>
                        <div className="text-2xl font-bold text-accent mb-4">{vehicle.price}</div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-dark/10 flex-1">
                          <div className="flex items-center gap-2">
                            <Car className="w-4 h-4 text-dark/70" />
                            <span className="text-sm font-semibold text-dark/70">{vehicle.year}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Settings className="w-4 h-4 text-dark/70" />
                            <span className="text-sm font-semibold text-dark/70">{vehicle.transmission}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Fuel className="w-4 h-4 text-dark/70" />
                            <span className="text-sm font-semibold text-dark/70">{vehicle.fuel}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-dark/70" />
                            <span className="text-sm font-semibold text-dark/70 truncate">{vehicle.mileage}</span>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 mt-auto">
                          <button className="flex-1 bg-white hover:bg-dark/5 text-dark border border-dark/20 py-3 rounded-[1px] font-bold transition-colors text-sm">
                            Quick View
                          </button>
                          <Link to={`/sales/${vehicle.id}`} className="flex-1 text-center bg-primary hover:bg-black text-white py-3 rounded-[1px] font-bold transition-colors text-sm shadow-md">
                            View Details
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              
              <div className="text-center mt-12">
                <button className="bg-white border border-dark/20 text-dark font-bold px-8 py-3 rounded-[1px] hover:bg-white transition-colors shadow-sm">
                  Load More Vehicles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Buy From Us */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Buy From Santa Towing</h2>
            <p className="text-dark/70 text-lg">Trust, quality, and peace of mind guaranteed.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {WHY_BUY_FEATURES.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white/5 border border-white/10 rounded-[1px] p-6 text-center hover:bg-accent transition-all group"
                >
                  <Icon className="w-10 h-10 mx-auto text-primary group-hover:text-white mb-4 transition-colors" />
                  <h3 className="font-bold">{feature.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Financing & Trade-In */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-[1px] p-8 md:p-12 flex flex-col justify-center border border-dark/10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-[1px] blur-[80px]" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-[1px] shadow-sm flex items-center justify-center mb-6">
                  <CreditCard className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-dark mb-4">Flexible Financing</h2>
                <p className="text-dark/70 mb-8 text-lg">
                  We partner with leading banks and financial institutions to offer competitive auto loans. Get pre-approved quickly with flexible payment plans tailored to your budget.
                </p>
                <button className="bg-primary hover:bg-black text-white px-8 py-4 rounded-[1px] font-bold transition-all shadow-md inline-flex items-center gap-2">
                  Apply for Financing <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="bg-primary text-white rounded-[1px] p-8 md:p-12 flex flex-col justify-center shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1568844293986-8d0400ba4715?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-[1px] flex items-center justify-center mb-6 backdrop-blur-md">
                  <RefreshCcw className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Trade-In Your Car</h2>
                <p className="text-white/90 mb-8 text-lg">
                  Upgrade your ride effortlessly. Bring in your current vehicle for a fair, transparent valuation and use its value towards your next purchase.
                </p>
                <button className="bg-white hover:bg-dark/5 text-primary px-8 py-4 rounded-[1px] font-bold transition-all shadow-md inline-flex items-center gap-2">
                  Get Your Trade-In Value
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. How Buying Works */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">How Buying Works</h2>
            <p className="text-dark/70 text-lg">A simple, transparent process from browsing to driving.</p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-white -translate-y-1/2" />
            
            <div className="grid md:grid-cols-5 gap-8">
              {BUYING_PROCESS.map((step, idx) => (
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

      {/* 7. Featured Vehicles */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Deals</h2>
              <p className="text-dark/70 text-lg">Hand-picked selections offering the best value this week.</p>
            </div>
            <button className="hidden md:inline-flex items-center gap-2 text-primary hover:text-white font-bold transition-colors">
              View All Offers <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {SALES_VEHICLES.slice(0, 3).map((vehicle, idx) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-[1px] overflow-hidden group hover:border-accent/50 transition-colors flex flex-col"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-[1px] text-xs font-bold">Featured</div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{vehicle.name}</h3>
                  <div className="text-2xl font-bold text-white mb-6">{vehicle.price}</div>
                  <Link to={`/sales/${vehicle.id}`} className="mt-auto block w-full text-center bg-white/10 hover:bg-white/20 text-white py-3 rounded-[1px] font-bold transition-colors">
                    View Offer
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <button className="md:hidden mt-8 w-full inline-flex justify-center items-center gap-2 text-accent font-bold border border-primary py-3 rounded-[1px]">
            View All Offers <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* 8. Customer Testimonials */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-16">
            Happy Car Owners
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Bought my first foreign-used SUV here. The inspection report gave me total confidence, and the car runs like it's brand new. Highly recommend!", author: "Grace T.", role: "SUV Buyer" },
              { text: "The financing process was incredibly smooth. They handled all the paperwork with the bank, and I was driving my new sedan in just a few days.", author: "Emmanuel D.", role: "Financing Customer" },
              { text: "Traded in my old hatchback for a newer model. The valuation was fair, and the customer service throughout the process was excellent.", author: "Richard M.", role: "Trade-In Customer" },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[1px] shadow-sm text-left relative"
              >
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 fill-accent text-accent" />)}
                </div>
                <p className="text-dark/70 mb-8 italic">"{item.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-[1px] overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?img=${idx * 12 + 5}`} alt="User" />
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

      {/* 9. FAQs */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Vehicle Sales FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {SALES_FAQS.map((faq, idx) => (
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

      {/* 10. Call-to-Action Banner */}
      <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.5) 0%, transparent 50%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Find Your Perfect Vehicle?</h2>
          <p className="text-lg md:text-xl mb-10 text-white/90">
            Our sales team is ready to help you drive away in the car of your dreams.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-primary hover:bg-black text-white px-8 py-4 rounded-[1px] font-bold transition-all shadow-xl">
              View Inventory
            </button>
            <button className="bg-white hover:bg-dark/5 text-dark px-8 py-4 rounded-[1px] font-bold transition-all shadow-xl">
              Contact Sales Team
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
