import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FileText, ArrowRight } from 'lucide-react';

export default function Sitemap() {
  const categories = [
    {
      title: "Main Pages",
      links: [
        { label: "Home", path: "/" },
        { label: "Contact Us", path: "/contact" },
        { label: "Book a Service", path: "/booking" },
        { label: "Sitemap", path: "/sitemap" },
      ]
    },
    {
      title: "Services",
      links: [
        { label: "All Services", path: "/services" },
        { label: "Emergency Towing", path: "/towing" },
        { label: "Auto Repairs", path: "/repairs" },
        { label: "Body Works", path: "/body-works" },
      ]
    },
    {
      title: "Vehicles & Rentals",
      links: [
        { label: "Cars for Sale", path: "/sales" },
        { label: "Rental Fleet", path: "/rental" },
        { label: "Auto Parts", path: "/parts" },
        { label: "Fleet Services", path: "/fleet" },
      ]
    },
    {
      title: "Company & Support",
      links: [
        { label: "About Us", path: "/#about" },
        { label: "Careers", path: "/careers" },
        { label: "FAQs", path: "/faqs" },
        { label: "Gallery", path: "/gallery" },
        { label: "Testimonials", path: "/testimonials" },
      ]
    },
    {
      title: "Blog",
      links: [
        { label: "Blog Home", path: "/blog" },
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", path: "#" },
        { label: "Terms & Conditions", path: "#" },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sitemap</h1>
          <p className="text-gray-600 text-lg">
            Navigate through our entire website and find the information you need quickly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-[1px] p-8 border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all"
            >
              <h2 className="text-xl font-bold text-dark mb-6 pb-4 border-b border-gray-200">
                {category.title}
              </h2>
              <ul className="space-y-3">
                {category.links.map(link => (
                  <li key={link.label}>
                    <Link 
                      to={link.path} 
                      className="text-gray-600 hover:text-accent transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 text-primary/40 group-hover:text-accent transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
