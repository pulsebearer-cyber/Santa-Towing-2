import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { FileText, ArrowRight } from 'lucide-react';
import { VEHICLES, BLOG_POSTS, SERVICES, RENTAL_CATEGORIES } from '@/data/mockData';

const PRODUCTS = [
  { id: 1, name: 'Premium Heavy Duty Battery 70Ah' },
  { id: 2, name: 'Synthetic Motor Oil 5W-30 (5L)' },
  { id: 3, name: 'Ceramic Brake Pads (Front)' },
  { id: 4, name: 'All-Season Tire 205/55R16' },
  { id: 5, name: 'Engine Air Filter' },
  { id: 6, name: 'LED Headlight Bulbs H7 (Pair)' },
];

export default function Sitemap() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const categories = [
    {
      title: "Main Pages",
      links: [
        { label: "Home", path: "/" },
        { label: "About Us", path: "/#about" },
        { label: "Book a Service", path: "/booking" },
        { label: "Sitemap", path: "/sitemap" },
      ]
    },
    {
      title: "Services",
      links: [
        { label: "All Services", path: "/services" },
        { label: "Emergency Towing", path: "/towing" },
        { label: "Towing Archive", path: "/towing-archive" },
        { label: "Auto Repairs", path: "/repairs" },
        { label: "Auto Body Works", path: "/body-works" },
        { label: "Fleet Services", path: "/fleet" },
      ]
    },
    {
      title: "Vehicles & Rentals",
      links: [
        { label: "Cars for Sale", path: "/sales" },
        ...VEHICLES.map(v => ({ label: `- ${v.name} (${v.year})`, path: `/sales/${v.id}` })),
        { label: "Rental Fleet", path: "/rental" },
      ]
    },
    {
      title: "Auto Parts",
      links: [
        { label: "Auto Parts Catalog", path: "/parts" },
        ...PRODUCTS.map(p => ({ label: `- ${p.name}`, path: `/parts/${p.id}` })),
      ]
    },
    {
      title: "Company & Resources",
      links: [
        { label: "Careers", path: "/careers" },
        { label: "FAQs", path: "/faqs" },
        { label: "Gallery", path: "/gallery" },
        { label: "Contact Us", path: "/contact" },
      ]
    },
    {
      title: "Blog",
      links: [
        { label: "Blog Home", path: "/blog" },
        ...BLOG_POSTS.map(b => ({ label: `- ${b.title}`, path: `/blog/${b.id}` })),
      ]
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 text-accent font-semibold tracking-wider uppercase mb-4">
            <FileText className="w-5 h-5" />
            <span>Website Directory</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-dark">Sitemap</h1>
          <p className="text-dark/70 text-lg">
            Navigate through our entire website and find the information you need quickly.
          </p>
        </motion.div>

        <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" aria-label="Sitemap">
          {categories.map((category, index) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[1px] p-8 border border-dark/10 hover:border-accent/30 hover:shadow-xl transition-all"
            >
              <h2 className="text-xl font-bold text-dark mb-6 pb-4 border-b border-dark/10">
                {category.title}
              </h2>
              <ul className="space-y-3">
                {category.links.map((link, i) => (
                  <li key={`${link.path}-${i}`}>
                    <Link 
                      to={link.path} 
                      className="text-dark/70 hover:text-accent transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 text-primary/40 group-hover:text-accent transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </nav>
      </div>
    </div>
  );
}
