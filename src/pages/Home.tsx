import React from 'react';
import { HeroSlider, QuickActions } from '@/components/sections/HeroAndActions';
import { AboutSection, ServicesSection } from '@/components/sections/AboutAndServices';
import { FeaturedVehicles, RentalFleet } from '@/components/sections/VehiclesAndRentals';
import { AutoParts, WhyChooseUs } from '@/components/sections/PartsAndWhyUs';
import { TowingAppPromo, FAQ, Partners, ContactSection, BlogSection } from '@/components/sections/BottomSections';

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <QuickActions />
      <AboutSection />
      <ServicesSection />
      <TowingAppPromo />
      <FeaturedVehicles />
      <RentalFleet />
      <AutoParts />
      <WhyChooseUs />
      <BlogSection />
      <FAQ />
      <Partners />
      <ContactSection />
    </main>
  );
}
