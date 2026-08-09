/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './components/layout/TopBar';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import FloatingButtons from './components/layout/FloatingButtons';

import Home from './pages/Home';
import Services from './pages/Services';
import Towing from './pages/Towing';
import Rental from './pages/Rental';
import Sales from './pages/Sales';
import VehicleDetails from './pages/VehicleDetails';
import Repairs from './pages/Repairs';
import BodyWorks from './pages/BodyWorks';
import Parts from './pages/Parts';
import PartDetails from './pages/PartDetails';
import Fleet from './pages/Fleet';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Faqs from './pages/Faqs';
import Testimonials from './pages/Testimonials';
import Gallery from './pages/Gallery';
import Booking from './pages/Booking';
import Careers from './pages/Careers';
import NotFound from './pages/NotFound';
import Sitemap from './pages/Sitemap';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-dark font-sans flex flex-col">
        <TopBar />
        <NavBar />
        
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/towing" element={<Towing />} />
            <Route path="/rental" element={<Rental />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/sales/:id" element={<VehicleDetails />} />
            <Route path="/repairs" element={<Repairs />} />
            <Route path="/body-works" element={<BodyWorks />} />
            <Route path="/parts" element={<Parts />} />
            <Route path="/parts/:id" element={<PartDetails />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <Footer />
        <FloatingButtons />
      </div>
    </BrowserRouter>
  );
}
