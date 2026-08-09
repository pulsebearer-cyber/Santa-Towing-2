const fs = require('fs');

let file = 'src/data/mockData.ts';
let content = fs.readFileSync(file, 'utf8');

// We'll just replace the HERO_SLIDES array entirely.
content = content.replace(/export const HERO_SLIDES = \[([\s\S]*?)\];/m, `export const HERO_SLIDES = [
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
      { label: 'Book Service', primary: true, href: '/repairs' }
    ],
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80',
  },
];`);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated HERO_SLIDES');

