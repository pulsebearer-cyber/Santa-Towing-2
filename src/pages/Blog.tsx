import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Search, Calendar, Clock, User, ArrowRight, ChevronRight,
  Mail
} from 'lucide-react';
import ScrollToFooterArrow from '@/components/ui/ScrollToFooterArrow';
import { cn } from '@/lib/utils';

const CATEGORIES = [
  'All', 'Maintenance Tips', 'Vehicle Buying Guide', 'Rental Advice', 'Road Safety', 'Automotive News'
];

const FEATURED_POST = {
  id: 1,
  title: '10 Essential Maintenance Tips Before a Long Road Trip',
  excerpt: 'Planning a long journey? Make sure your vehicle is up to the task. From checking fluid levels to inspecting tire tread, these 10 tips will help you avoid breakdowns and ensure a safe, comfortable trip for you and your passengers.',
  category: 'Maintenance Tips',
  image: 'https://i.ibb.co/gZh5x06r/Image-1-Towing-Vehicle.jpg',
  author: 'David Mensah',
  authorImg: 'https://i.ibb.co/zVkLKHdN/Image-2-A-SUV-KIA-Sportage-2024-Ratio.png',
  date: 'Oct 15, 2023',
  readTime: '6 min read'
};

const BLOG_POSTS = [
  {
    id: 2,
    title: 'How to Choose the Right Oil for Your Engine',
    excerpt: 'Synthetic, conventional, or blend? Understand the differences and find out what works best for your car\'s specific engine type.',
    category: 'Maintenance Tips',
    image: 'https://i.ibb.co/KcZkH37Y/Image-3-Sedan-Toyotta-Corolla.jpg',
    author: 'Sarah Osei',
    authorImg: 'https://i.ibb.co/WpNkptMZ/Image-4-Van-Hyundai-H1-2022.jpg',
    date: 'Oct 10, 2023',
    readTime: '4 min read'
  },
  {
    id: 3,
    title: 'Used Car Buying Guide: Red Flags to Watch Out For',
    excerpt: 'Don\'t get caught buying a lemon. Learn the critical signs of hidden damage and mechanical issues when inspecting a used vehicle.',
    category: 'Vehicle Buying Guide',
    image: 'https://i.ibb.co/Mx8G6vHw/Image-5-Economy-Nissan-Almera-2021.jpg',
    author: 'Kwame A.',
    authorImg: 'https://i.ibb.co/DH19ffJd/Image-6-Luxury-Mercedes-Benz.jpg',
    date: 'Sep 28, 2023',
    readTime: '8 min read'
  },
  {
    id: 4,
    title: 'Top 5 Scenic Routes for Your Next Weekend Getaway',
    excerpt: 'Rent an SUV from our fleet and explore these breathtaking drives. Complete with rest stop recommendations and driving tips.',
    category: 'Rental Advice',
    image: 'https://i.ibb.co/vC6nfrK8/Image-7-Pickup-Toyota-Hilux-2023.jpg',
    author: 'Linda T.',
    authorImg: 'https://i.ibb.co/0RDWpXBh/Image-8-Heavy-Duty-Recovery-Vehicle-or-Car.jpg',
    date: 'Sep 20, 2023',
    readTime: '5 min read'
  },
  {
    id: 5,
    title: 'Defensive Driving Techniques Every Driver Should Know',
    excerpt: 'Stay safe on unpredictable roads by anticipating hazards and maintaining safe following distances in heavy traffic.',
    category: 'Road Safety',
    image: 'https://i.ibb.co/j9GzSqt8/Image-9-Car-Battery-Maintenance.jpg',
    author: 'David Mensah',
    authorImg: 'https://i.ibb.co/1YFx5jQV/Image-10-Engine-Oil-and-Fluids-Maintenance.jpg',
    date: 'Sep 12, 2023',
    readTime: '7 min read'
  },
  {
    id: 6,
    title: 'The Future of EVs in Our City: What You Need to Know',
    excerpt: 'As electric vehicles become more common, how is the local infrastructure adapting? A look at charging stations and EV maintenance.',
    category: 'Automotive News',
    image: 'https://i.ibb.co/JRyRmbjF/Image-11-Brake-Parts-and-Disk-Maintenance.jpg',
    author: 'Sarah Osei',
    authorImg: 'https://i.ibb.co/23wLXy6t/Image-12-Tyre-Maintenance.jpg',
    date: 'Sep 05, 2023',
    readTime: '5 min read'
  },
  {
    id: 7,
    title: 'When to Replace Your Brake Pads (Don\'t Ignore These Signs)',
    excerpt: 'Squeaking? Grinding? Spongy pedal? Learn to recognize the warning signs that your brake system needs immediate attention.',
    category: 'Maintenance Tips',
    image: 'https://i.ibb.co/qV5D1J9/Image-13-Filters-maintenance.jpg',
    author: 'Michael B.',
    authorImg: 'https://i.ibb.co/35NfN5Lx/Image-14-Suspension-Parts-maintenance.jpg',
    date: 'Aug 29, 2023',
    readTime: '4 min read'
  },
];

const POPULAR_POSTS = [
  { id: 3, title: 'Used Car Buying Guide: Red Flags to Watch Out For', date: 'Sep 28, 2023' },
  { id: 1, title: '10 Essential Maintenance Tips Before a Long Road Trip', date: 'Oct 15, 2023' },
  { id: 7, title: 'When to Replace Your Brake Pads', date: 'Aug 29, 2023' },
];

const TAGS = ['Engine', 'Tires', 'Safety', 'Electric Vehicles', 'DIY Repairs', 'Insurance', 'Off-road'];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredPosts = activeCategory === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <main className="pt-24 lg:pt-[104px] min-h-screen bg-white">
      
      {/* 1. Hero Banner */}
      <section className="relative bg-primary overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(https://i.ibb.co/WpyLYZQk/Image-15-Car-Lightening-maintenance.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Automotive <span className="text-accent">Insights & Advice</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto"
          >
            Expert tips on maintenance, buying, renting, and staying safe on the road.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto bg-white p-2 rounded-[1px] flex items-center shadow-2xl"
          >
            <div className="pl-4 pr-2 text-dark/70">
              <Search className="w-6 h-6" />
            </div>
            <input 
              type="text" 
              placeholder="Search articles by keyword..." 
              className="flex-1 py-3 px-2 text-dark focus:outline-none bg-transparent"
            />
            <button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-[1px] font-bold transition-all">
              Search
            </button>
          </motion.div>
        </div>
      
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 ">
          <ScrollToFooterArrow />
        </div>
      </section>

      {/* 2. Category Filter Bar */}
      <section className="bg-white border-b border-dark/20 sticky top-[72px] lg:top-[104px] z-30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex overflow-x-auto no-scrollbar py-4 gap-2">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-[1px] text-sm font-bold whitespace-nowrap transition-colors",
                  activeCategory === category 
                    ? "bg-primary text-white" 
                    : "bg-white text-dark/70 hover:bg-white"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        
        {/* 3. Featured Article (Only show if 'All' is selected) */}
        {activeCategory === 'All' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 bg-white rounded-[1px] overflow-hidden shadow-xl shadow-charcoal/5 flex flex-col md:flex-row group border border-dark/10"
          >
            <div className="md:w-1/2 relative overflow-hidden aspect-[4/3] md:aspect-auto">
              <img 
                src={FEATURED_POST.image} 
                alt={FEATURED_POST.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute top-6 left-6 bg-accent text-white px-4 py-1.5 rounded-[1px] text-sm font-bold tracking-wider shadow-lg">
                {FEATURED_POST.category}
              </div>
            </div>
            
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[1px] -z-10" />
              
              <div className="flex items-center gap-4 text-sm text-dark/70 mb-4">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {FEATURED_POST.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {FEATURED_POST.readTime}</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark mb-4 group-hover:text-accent transition-colors leading-tight">
                {FEATURED_POST.title}
              </h2>
              
              <p className="text-dark/70 text-lg mb-8 leading-relaxed">
                {FEATURED_POST.excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <img src={FEATURED_POST.authorImg} alt={FEATURED_POST.author} className="w-12 h-12 rounded-[1px] border-2 border-dark/10" />
                  <div>
                    <h4 className="font-bold text-dark text-sm">{FEATURED_POST.author}</h4>
                    <p className="text-xs text-dark/70">Expert Mechanic</p>
                  </div>
                </div>
                
                <Link to={`/blog/${FEATURED_POST.id}`} className="bg-white hover:bg-dark/5 text-dark px-6 py-3 rounded-[1px] font-bold transition-colors inline-flex items-center gap-2">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* 4. Article Grid */}
          <div className="w-full lg:w-2/3">
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-12">
              {filteredPosts.map((post, idx) => (
                <motion.article 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-[1px] overflow-hidden border border-dark/10 hover:shadow-xl transition-all group flex flex-col"
                >
                  <div className="aspect-[4/3] relative overflow-hidden bg-white">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-[1px] text-xs font-bold text-dark shadow-sm">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <div className="flex justify-between items-center text-xs text-dark/70 mb-3">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-dark/70 text-sm mb-6 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-dark/10">
                      <div className="flex items-center gap-2">
                        <img src={post.authorImg} alt={post.author} className="w-8 h-8 rounded-[1px]" />
                        <span className="text-sm font-bold text-dark">{post.author}</span>
                      </div>
                      <Link to={`/blog/${post.id}`} className="text-primary hover:text-accent font-bold text-sm flex items-center gap-1">
                        Read <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
            
            {/* Pagination / Load More */}
            <div className="flex justify-center">
              <button className="bg-white hover:bg-dark/5 border border-dark/20 text-dark font-bold px-8 py-4 rounded-[1px] shadow-sm transition-colors flex items-center gap-2">
                Load More Articles <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 5. Sidebar */}
          <aside className="w-full lg:w-1/3 space-y-8">
            
            {/* Newsletter Widget */}
            <div className="bg-primary rounded-[1px] p-8 text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-[1px]" />
              <div className="w-12 h-12 bg-white/10 rounded-[1px] flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-dark/70 text-sm mb-6">Get the latest automotive tips and exclusive offers directly in your inbox.</p>
              <form className="space-y-3" onSubmit={e => { e.preventDefault(); (e.target as HTMLFormElement).reset(); alert('Subscribed successfully!'); }}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-white/10 border border-white/20 rounded-[1px] px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent placeholder-white/70 text-sm"
                  required
                />
                <button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3 rounded-[1px] transition-colors text-sm shadow-md">
                  Subscribe Now
                </button>
              </form>
            </div>

            {/* Popular Posts */}
            <div className="bg-white rounded-[1px] p-8 border border-dark/10 shadow-sm">
              <h3 className="text-lg font-bold text-dark mb-6 flex items-center gap-2">
                Popular Posts
              </h3>
              <div className="space-y-6">
                {POPULAR_POSTS.map((post, idx) => (
                  <Link key={idx} to={`/blog/${post.id}`} className="group block">
                    <h4 className="font-bold text-dark text-sm group-hover:text-accent transition-colors line-clamp-2 mb-1">
                      {post.title}
                    </h4>
                    <span className="text-xs text-dark/70">{post.date}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-[1px] p-8 border border-dark/10 shadow-sm">
              <h3 className="text-lg font-bold text-dark mb-4">Categories</h3>
              <ul className="space-y-2">
                {CATEGORIES.filter(c => c !== 'All').map((cat, idx) => (
                  <li key={idx}>
                    <button 
                      onClick={() => setActiveCategory(cat)}
                      className="w-full flex justify-between items-center text-sm py-2 text-dark/70 hover:text-accent transition-colors"
                    >
                      <span>{cat}</span>
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tag Cloud */}
            <div className="bg-white rounded-[1px] p-8 border border-dark/10 shadow-sm">
              <h3 className="text-lg font-bold text-dark mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {TAGS.map((tag, idx) => (
                  <Link 
                    key={idx} 
                    to="/blog" 
                    className="bg-white hover:bg-dark/5 text-dark/70 text-xs font-bold px-3 py-1.5 rounded-[1px] transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>

      {/* 6. Newsletter Signup Banner (Bottom) */}
      <section className="py-20 bg-primary text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://i.ibb.co/3998gkTG/Image-16-Accessories.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
        <div className="max-w-2xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Automotive Tips in Your Inbox</h2>
          <p className="text-dark/70 mb-8">Join thousands of drivers who receive our expert maintenance advice and exclusive offers every month.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={e => { e.preventDefault(); (e.target as HTMLFormElement).reset(); alert('Subscribed successfully!'); }}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 bg-white/10 border border-white/20 rounded-[1px] px-6 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent placeholder-white/70"
              required
            />
            <button type="submit" className="bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-[1px] transition-all shadow-lg whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* 7. Call-to-Action Banner */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Professional Assistance?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you need a routine checkup, major repairs, or want to explore our rental fleet, our team is ready to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-primary hover:bg-black text-white px-8 py-4 rounded-[1px] font-bold transition-all shadow-xl">
              Book a Service
            </button>
            <button className="bg-white hover:bg-dark/5 text-dark px-8 py-4 rounded-[1px] font-bold transition-all shadow-xl">
              Contact Us
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
