import {
  Car,
  Wrench,
  Shield,
  Battery,
  Settings,
  Truck,
  Phone,
  Clock,
  CheckCircle,
  MapPin,
  Star
} from 'lucide-react';

export const HERO_SLIDES = [
  {
    id: 1,
    headline: '24/7 Emergency Towing Services',
    subheadline: 'Fast response, safe vehicle transport, affordability, and reliability. Call us anytime, anywhere.',
    buttons: [
      { label: 'Call Now: 0244753849', primary: true, href: 'tel:0244753849' },
      { label: 'WhatsApp Us', primary: false, href: 'https://wa.me/233244753849' }
    ],
    image: 'https://images.unsplash.com/photo-1549429402-95f877f0a6d5?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    headline: 'Accident Recovery & Roadside Assistance',
    subheadline: 'Professional winch-outs, flat tire changes, jump starts, and safe off-road recovery.',
    buttons: [
      { label: 'Request Assistance', primary: true, href: 'tel:0244753849' }
    ],
    image: 'https://images.unsplash.com/photo-1543393470-b328ce70c40e?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    headline: 'Flatbed Towing & Vehicle Transport',
    subheadline: 'Secure and damage-free transport for luxury cars, SUVs, and specialized vehicles.',
    buttons: [
      { label: 'Book Transport', primary: true, href: '/booking' }
    ],
    image: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    headline: 'Premium Vehicle Rentals',
    subheadline: 'Choose from our wide range of well-maintained vehicles for business or leisure.',
    buttons: [
      { label: 'Browse Vehicles', primary: true, href: '/rental' }
    ],
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    headline: 'Professional Auto Repairs',
    subheadline: 'Expert diagnostics and repairs by certified mechanics you can trust.',
    buttons: [
      { label: 'Book for Repair', primary: true, href: '/repairs' },
      { label: 'Call for Repair', primary: false, href: 'tel:0244753849' }
    ],
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80',
  },
];

export const QUICK_ACTIONS = [
  { id: 1, title: 'Request Towing', description: '24/7 emergency response', icon: Truck },
  { id: 2, title: 'Rent a Car', description: 'Flexible daily & weekly rates', icon: Car },
  { id: 3, title: 'Buy a Vehicle', description: 'New & premium used cars', icon: Shield },
  { id: 4, title: 'Book Repairs', description: 'Certified expert mechanics', icon: Wrench },
  { id: 5, title: 'Buy Batteries', description: 'Top brands available', icon: Battery },
  { id: 6, title: 'Shop Auto Parts', description: 'Genuine replacement parts', icon: Settings },
];

export const STATS = [
  { label: 'Years of Experience', value: 15, suffix: '+' },
  { label: 'Vehicles Repaired', value: 25000, suffix: '+' },
  { label: 'Happy Customers', value: 10000, suffix: '+' },
  { label: 'Emergency Calls Completed', value: 5000, suffix: '+' },
];

export const SERVICES = [
  { id: 1, title: 'Emergency Towing', desc: 'Fast response towing anywhere, anytime.', icon: Truck, image: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&q=80' },
  { id: 2, title: 'Vehicle Recovery', desc: 'Safe off-road and accident recovery.', icon: Shield, image: 'https://images.unsplash.com/photo-1549429402-95f877f0a6d5?auto=format&fit=crop&q=80' },
  { id: 3, title: 'Car Rental', desc: 'Wide range of vehicles for rent.', icon: Car, image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80' },
  { id: 4, title: 'Vehicle Sales', desc: 'Quality new and used cars.', icon: Car, image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80' },
  { id: 5, title: 'Auto Repairs', desc: 'Comprehensive mechanical repairs.', icon: Wrench, image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80' },
  { id: 6, title: 'Preventive Maintenance', desc: 'Keep your car running smoothly.', icon: Settings, image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80' },
  { id: 7, title: 'Auto Body Works', desc: 'Collision repair and dent removal.', icon: Wrench, image: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&q=80' },
  { id: 8, title: 'Spray Painting', desc: 'Premium automotive painting.', icon: Shield, image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80' },
  { id: 9, title: 'Car Batteries', desc: 'Testing, replacement and sales.', icon: Battery, image: 'https://images.unsplash.com/photo-1618641986557-1de02377c8e9?auto=format&fit=crop&q=80' },
  { id: 10, title: 'Genuine Auto Parts', desc: 'High-quality OEM parts.', icon: Settings, image: 'https://images.unsplash.com/photo-1530906358829-e84b2769270f?auto=format&fit=crop&q=80' },
  { id: 11, title: 'Vehicle Diagnostics', desc: 'Advanced computer diagnostics.', icon: Settings, image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80' },
  { id: 12, title: 'Fleet Services', desc: 'Commercial vehicle management.', icon: Truck, image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80' },
];

export const VEHICLES = [
  { id: 1, type: 'New', name: '2024 Luxury Sedan', price: 'GH₵ 540,000', fuel: 'Hybrid', transmission: 'Automatic', year: 2024, mileage: '0 km', image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80' },
  { id: 2, type: 'New', name: '2024 Premium SUV', price: 'GH₵ 780,000', fuel: 'Petrol', transmission: 'Automatic', year: 2024, mileage: '25 km', image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80' },
  { id: 3, type: 'Foreign Used', name: '2020 Midsize Sedan', price: 'GH₵ 264,000', fuel: 'Petrol', transmission: 'Automatic', year: 2020, mileage: '72,000 km', image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80' },
  { id: 4, type: 'Ghana Used', name: '2018 Compact Hatchback', price: 'GH₵ 144,000', fuel: 'Petrol', transmission: 'Manual', year: 2018, mileage: '136,000 km', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80' },
];

export const RENTAL_CATEGORIES = [
  { id: 1, name: 'Economy', daily: 'GH₵ 400', weekly: 'GH₵ 2,500', monthly: 'GH₵ 9,000', seats: 4, trans: 'Auto/Manual', fuel: 'Petrol', image: 'https://images.unsplash.com/photo-1590362891991-f20dc00f40ac?auto=format&fit=crop&q=80' },
  { id: 2, name: 'Sedan', daily: 'GH₵ 600', weekly: 'GH₵ 3,800', monthly: 'GH₵ 14,000', seats: 5, trans: 'Automatic', fuel: 'Petrol/Hybrid', image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80' },
  { id: 3, name: 'SUV', daily: 'GH₵ 900', weekly: 'GH₵ 5,800', monthly: 'GH₵ 21,000', seats: 7, trans: 'Automatic', fuel: 'Petrol/Diesel', image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80' },
  { id: 4, name: 'Pickup', daily: 'GH₵ 800', weekly: 'GH₵ 5,000', monthly: 'GH₵ 18,000', seats: 5, trans: 'Automatic', fuel: 'Diesel', image: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&q=80' },
  { id: 5, name: 'Luxury', daily: 'GH₵ 1,500', weekly: 'GH₵ 9,500', monthly: 'GH₵ 35,000', seats: 5, trans: 'Automatic', fuel: 'Premium', image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80' },
  { id: 6, name: 'Van', daily: 'GH₵ 1,100', weekly: 'GH₵ 7,000', monthly: 'GH₵ 25,000', seats: 12, trans: 'Auto/Manual', fuel: 'Diesel', image: 'https://images.unsplash.com/photo-1610486842880-8b0d26859e2b?auto=format&fit=crop&q=80' },
];

export const PARTS_CATEGORIES = [
  'Car Batteries', 'Engine Oil', 'Brake Pads', 'Tires',
  'Filters', 'Suspension Parts', 'Lighting', 'Accessories'
];

export const WHY_CHOOSE_US = [
  { title: '24/7 Emergency Support', icon: Clock },
  { title: 'Fast Response Time', icon: Truck },
  { title: 'Certified Technicians', icon: Shield },
  { title: 'Affordable Pricing', icon: Settings },
  { title: 'Genuine Parts', icon: Settings },
  { title: 'Modern Equipment', icon: Settings },
  { title: 'Nationwide Coverage', icon: MapPin },
  { title: 'Customer Satisfaction', icon: CheckCircle },
];

export const FAQS = [
  { q: 'How fast can you respond to a towing emergency?', a: 'Our average response time is under 30 minutes within city limits.' },
  { q: 'What documents do I need to rent a car?', a: 'You will need a valid driver\'s license, proof of identity, and a valid credit card for the security deposit.' },
  { q: 'Do you offer warranties on auto repairs?', a: 'Yes, we offer a 6-month or 6,000-mile warranty on all our repair services and parts.' },
  { q: 'Can I finance a vehicle purchase?', a: 'Yes, we partner with several major banks to offer flexible financing options.' },
];

export const BLOG_POSTS = [
  { id: 1, title: 'Essential Summer Car Maintenance Tips', category: 'Maintenance Tips', excerpt: 'Keep your car running cool during the hot summer months with these simple checks.', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80' },
  { id: 2, title: 'What to Look for When Buying a Used Car', category: 'Vehicle Buying Guide', excerpt: 'A comprehensive guide to inspecting and test driving a pre-owned vehicle.', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80' },
  { id: 3, title: 'What to Do If Your Car Breaks Down', category: 'Road Safety', excerpt: 'Step-by-step instructions to keep yourself safe while waiting for a tow.', image: 'https://images.unsplash.com/photo-1549429402-95f877f0a6d5?auto=format&fit=crop&q=80' },
];
