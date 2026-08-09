import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useParams } from 'react-router-dom';
import { 
  ChevronRight, Calendar, Clock, User, Facebook, Twitter, 
  Linkedin, Link2, MessageSquare, ArrowRight, Mail
} from 'lucide-react';
import { cn } from '@/lib/utils';

const ARTICLE = {
  id: 1,
  title: '10 Essential Maintenance Tips Before a Long Road Trip',
  category: 'Maintenance Tips',
  image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80',
  author: 'David Mensah',
  authorImg: 'https://i.pravatar.cc/150?img=11',
  authorBio: 'David is a certified master mechanic with over 15 years of experience in automotive repair and maintenance. When he is not fixing cars, he enjoys writing about automotive safety and off-roading.',
  date: 'Oct 15, 2023',
  readTime: '6 min read',
  content: `
    <p>Planning a long journey? Make sure your vehicle is up to the task. From checking fluid levels to inspecting tire tread, these 10 tips will help you avoid breakdowns and ensure a safe, comfortable trip for you and your passengers.</p>
    
    <h2>1. Check Your Engine Oil</h2>
    <p>Your engine oil is the lifeblood of your vehicle. Before embarking on a long trip, check the oil level and its condition. If the oil is dark and gritty, or if you are near your next scheduled oil change, it is best to get it replaced before you leave.</p>
    
    <blockquote>"A simple oil change can prevent a catastrophic engine failure on a long road trip. Don't skip it." - David Mensah</blockquote>
    
    <h2>2. Inspect All Fluids</h2>
    <p>In addition to engine oil, you should check other vital fluids:</p>
    <ul>
      <li><strong>Coolant/Antifreeze:</strong> Ensures your engine doesn't overheat during long hours of driving.</li>
      <li><strong>Brake Fluid:</strong> Essential for safe stopping power.</li>
      <li><strong>Transmission Fluid:</strong> Keeps your gears shifting smoothly.</li>
      <li><strong>Windshield Washer Fluid:</strong> Crucial for maintaining visibility in dusty or buggy conditions.</li>
    </ul>

    <h2>3. Examine Your Tires</h2>
    <p>Your tires are the only point of contact between your car and the road. Check the tire pressure (including the spare!) when the tires are cold. Look for any signs of uneven wear, cracks, or bulges. Use the "penny test" to ensure you have enough tread depth for safe driving, especially if you expect rain.</p>
    
    <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80" alt="Checking tire pressure" />

    <h2>4. Test the Battery</h2>
    <p>A dead battery is a common cause of road trip delays. Check the battery terminals for corrosion and ensure the connections are tight. If your battery is more than three years old, it's a good idea to have it load-tested by a professional to ensure it can handle the journey.</p>
    
    <h2>5. Inspect Belts and Hoses</h2>
    <p>Under the hood, take a look at the drive belts and cooling system hoses. Look for glazing, cracks, or fraying on the belts. Squeeze the hoses (when the engine is cool) to ensure they are firm but pliable; brittle or extremely soft hoses should be replaced.</p>
  `,
  tags: ['Road Trip', 'Maintenance', 'Safety', 'Checklist']
};

const RELATED_ARTICLES = [
  {
    id: 2,
    title: 'How to Choose the Right Oil for Your Engine',
    category: 'Maintenance Tips',
    image: 'https://images.unsplash.com/photo-1635815615705-ebcc5031b6e4?auto=format&fit=crop&q=80',
    date: 'Oct 10, 2023',
    readTime: '4 min read'
  },
  {
    id: 7,
    title: 'When to Replace Your Brake Pads',
    category: 'Maintenance Tips',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80',
    date: 'Aug 29, 2023',
    readTime: '4 min read'
  },
  {
    id: 5,
    title: 'Defensive Driving Techniques Every Driver Should Know',
    category: 'Road Safety',
    image: 'https://images.unsplash.com/photo-1464219222984-216ebffaaf85?auto=format&fit=crop&q=80',
    date: 'Sep 12, 2023',
    readTime: '7 min read'
  }
];

export default function BlogPost() {
  const { id } = useParams();
  
  return (
    <main className="pt-24 lg:pt-[104px] min-h-screen bg-white">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: ARTICLE.title,
          image: [ARTICLE.image],
          datePublished: "2023-10-15T08:00:00+08:00",
          author: [{
            "@type": "Person",
            name: ARTICLE.author
          }]
        })}
      </script>
      
      {/* 1. Breadcrumb Navigation */}
      <div className="bg-white border-b border-dark/20 py-4 sticky top-[72px] lg:top-[104px] z-30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center text-sm text-dark/70 overflow-x-auto no-scrollbar whitespace-nowrap">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 shrink-0" />
          <Link to="/blog" className="hover:text-accent transition-colors">Blog</Link>
          <ChevronRight className="w-4 h-4 mx-2 shrink-0" />
          <Link to="/blog" className="hover:text-accent transition-colors">{ARTICLE.category}</Link>
          <ChevronRight className="w-4 h-4 mx-2 shrink-0" />
          <span className="text-dark font-medium truncate">{ARTICLE.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12 relative">
          
          {/* Main Article Content */}
          <div className="w-full lg:w-2/3">
            
            {/* 2. Article Header */}
            <div className="mb-8">
              <span className="inline-block bg-accent/10 text-accent font-bold px-3 py-1 rounded-[1px] text-sm mb-4">
                {ARTICLE.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight">
                {ARTICLE.title}
              </h1>
              
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-dark/20 pb-6">
                <div className="flex items-center gap-4">
                  <img src={ARTICLE.authorImg} alt={ARTICLE.author} className="w-12 h-12 rounded-[1px] border border-dark/20" />
                  <div>
                    <h4 className="font-bold text-dark text-sm">{ARTICLE.author}</h4>
                    <div className="flex items-center gap-3 text-xs text-dark/70">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {ARTICLE.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {ARTICLE.readTime}</span>
                    </div>
                  </div>
                </div>
                
                {/* 6. Social Share Bar (Inline for Mobile) */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-dark/70 mr-2">Share:</span>
                  <button className="w-8 h-8 rounded-[1px] bg-white flex items-center justify-center text-dark/70 hover:bg-accent hover:text-white transition-colors"><Facebook className="w-4 h-4" /></button>
                  <button className="w-8 h-8 rounded-[1px] bg-white flex items-center justify-center text-dark/70 hover:bg-accent hover:text-white transition-colors"><Twitter className="w-4 h-4" /></button>
                  <button className="w-8 h-8 rounded-[1px] bg-white flex items-center justify-center text-dark/70 hover:bg-accent hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></button>
                  <button className="w-8 h-8 rounded-[1px] bg-white flex items-center justify-center text-dark/70 hover:bg-accent hover:text-white transition-colors"><Link2 className="w-4 h-4" /></button>
                </div>
              </div>
            </div>

            {/* 3. Featured Image */}
            <div className="rounded-[1px] overflow-hidden aspect-[16/9] mb-10 shadow-sm border border-dark/10">
              <img src={ARTICLE.image} alt={ARTICLE.title} className="w-full h-full object-cover" />
            </div>

            {/* 4. Article Body */}
              <div className="text-lg text-dark/80 leading-relaxed mb-12 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-dark [&>h2]:mt-10 [&>h2]:mb-4 [&>p]:mb-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-2 [&>blockquote]:border-l-4 [&>blockquote]:border-l-orange [&>blockquote]:bg-primary/5 [&>blockquote]:p-6 [&>blockquote]:rounded-r-[1px] [&>blockquote]:italic [&>blockquote]:text-dark [&>blockquote]:mb-6 [&>blockquote]:font-medium [&>img]:rounded-[1px] [&>img]:border [&>img]:border-dark/10 [&>img]:mb-6 [&>img]:w-full [&>strong]:text-dark">
              <div dangerouslySetInnerHTML={{ __html: ARTICLE.content }} />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-dark/20 pb-8">
              <span className="text-sm font-bold text-dark mr-2">Tags:</span>
              {ARTICLE.tags.map((tag, idx) => (
                <Link key={idx} to="#" className="bg-white border border-dark/20 text-dark/70 px-3 py-1 rounded-[1px] text-xs hover:border-accent hover:text-accent transition-colors">
                  {tag}
                </Link>
              ))}
            </div>

            {/* 5. Author Bio Box */}
            <div className="bg-white rounded-[1px] p-8 border border-dark/10 shadow-sm mb-12 flex flex-col md:flex-row items-center md:items-start gap-6">
              <img src={ARTICLE.authorImg} alt={ARTICLE.author} className="w-24 h-24 rounded-[1px] border-4 border-dark/10 shrink-0" />
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-dark mb-2">About {ARTICLE.author}</h3>
                <p className="text-dark/70 text-sm mb-4 leading-relaxed">
                  {ARTICLE.authorBio}
                </p>
                <div className="flex justify-center md:justify-start items-center gap-2">
                  <button className="w-8 h-8 rounded-[1px] bg-white flex items-center justify-center text-dark/70 hover:text-accent transition-colors"><Twitter className="w-4 h-4" /></button>
                  <button className="w-8 h-8 rounded-[1px] bg-white flex items-center justify-center text-dark/70 hover:text-accent transition-colors"><Linkedin className="w-4 h-4" /></button>
                </div>
              </div>
            </div>

            {/* 8. Comments Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-dark mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-primary" /> Comments (2)
              </h3>
              
              <div className="space-y-6 mb-10">
                <div className="bg-white p-6 rounded-[1px] border border-dark/10 shadow-sm flex gap-4">
                  <div className="w-10 h-10 bg-white rounded-[1px] flex items-center justify-center font-bold text-dark/70 shrink-0">M</div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-dark text-sm">Michael T.</h4>
                      <span className="text-xs text-dark/70">Oct 16, 2023</span>
                    </div>
                    <p className="text-dark/70 text-sm">Great tips! I always forget to check my spare tire pressure. Thanks for the reminder.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-[1px] border border-dark/10 shadow-sm flex gap-4 ml-8 md:ml-12">
                  <img src={ARTICLE.authorImg} alt={ARTICLE.author} className="w-10 h-10 rounded-[1px] shrink-0" />
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-dark text-sm">{ARTICLE.author} <span className="bg-accent/10 text-accent text-[10px] px-2 py-0.5 rounded-[1px] ml-2 uppercase">Author</span></h4>
                      <span className="text-xs text-dark/70">Oct 16, 2023</span>
                    </div>
                    <p className="text-dark/70 text-sm">You're welcome, Michael! It's one of the most commonly overlooked items before a trip.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-[1px] border border-dark/10 shadow-sm">
                <h4 className="font-bold text-dark mb-4">Leave a Reply</h4>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Name" className="w-full bg-white border border-dark/20 rounded-[1px] px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                    <input type="email" placeholder="Email" className="w-full bg-white border border-dark/20 rounded-[1px] px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                  </div>
                  <textarea placeholder="Your comment" rows={4} className="w-full bg-white border border-dark/20 rounded-[1px] px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"></textarea>
                  <button className="bg-primary hover:bg-black text-white font-bold py-3 px-8 rounded-[1px] transition-all shadow-md">
                    Post Comment
                  </button>
                </form>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 space-y-8">
            
            {/* Table of Contents (Sticky) */}
            <div className="bg-white rounded-[1px] p-6 border border-dark/10 shadow-sm sticky top-36">
              <h3 className="font-bold text-dark mb-4 uppercase text-sm tracking-wider">In This Article</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-primary font-medium flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-[1px] bg-primary" /> Check Your Engine Oil</a></li>
                <li><a href="#" className="text-dark/70 hover:text-dark transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-[1px] bg-dark/10" /> Inspect All Fluids</a></li>
                <li><a href="#" className="text-dark/70 hover:text-dark transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-[1px] bg-dark/10" /> Examine Your Tires</a></li>
                <li><a href="#" className="text-dark/70 hover:text-dark transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-[1px] bg-dark/10" /> Test the Battery</a></li>
                <li><a href="#" className="text-dark/70 hover:text-dark transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-[1px] bg-dark/10" /> Inspect Belts and Hoses</a></li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-dark/10">
                <h3 className="font-bold text-dark mb-4 text-sm">Share this post</h3>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-[1px] bg-white flex items-center justify-center text-dark/70 hover:bg-[#1877F2] hover:text-white transition-colors"><Facebook className="w-5 h-5" /></button>
                  <button className="w-10 h-10 rounded-[1px] bg-white flex items-center justify-center text-dark/70 hover:bg-[#1DA1F2] hover:text-white transition-colors"><Twitter className="w-5 h-5" /></button>
                  <button className="w-10 h-10 rounded-[1px] bg-white flex items-center justify-center text-dark/70 hover:bg-[#0A66C2] hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></button>
                  <button className="w-10 h-10 rounded-[1px] bg-white flex items-center justify-center text-dark/70 hover:bg-dark hover:text-white transition-colors"><Link2 className="w-5 h-5" /></button>
                </div>
              </div>
            </div>

            {/* 9. Newsletter Signup (Sidebar) */}
            <div className="bg-primary rounded-[1px] p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[50px] rounded-[1px]" />
              <div className="w-12 h-12 bg-white/20 rounded-[1px] flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Never Miss an Update</h3>
              <p className="text-white/80 text-sm mb-6">Get our latest maintenance guides and tips directly in your inbox.</p>
              <form className="space-y-3" onSubmit={e => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-white/10 border border-white/20 rounded-[1px] px-4 py-3 text-white focus:outline-none focus:bg-white/20 placeholder-white/60 text-sm"
                  required
                />
                <button type="submit" className="w-full bg-primary hover:bg-black text-white font-bold py-3 rounded-[1px] transition-colors text-sm shadow-md">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* 7. Related Articles */}
      <section className="py-16 bg-white border-t border-dark/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-dark">Related Articles</h2>
            <Link to="/blog" className="hidden md:flex items-center gap-2 text-accent font-bold hover:text-accent transition-colors">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RELATED_ARTICLES.map((article) => (
              <Link to={`/blog/${article.id}`} key={article.id} className="bg-white rounded-[1px] p-4 border border-dark/10 hover:shadow-xl transition-all group flex flex-col">
                <div className="aspect-video rounded-[1px] overflow-hidden mb-4 relative">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-[1px] text-xs font-bold text-dark shadow-sm">
                    {article.category}
                  </div>
                </div>
                <h3 className="font-bold text-dark mb-2 leading-tight group-hover:text-accent transition-colors">{article.title}</h3>
                <div className="flex justify-between items-center text-xs text-dark/70 mt-auto pt-2">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Call-to-Action Banner */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Is Your Vehicle Ready for the Road?</h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Don't leave your safety to chance. Book a comprehensive pre-trip inspection with our certified mechanics today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-[1px] font-bold transition-all shadow-xl">
              Book an Inspection
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-[1px] font-bold transition-all">
              Contact Workshop
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
