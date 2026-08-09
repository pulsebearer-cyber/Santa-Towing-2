const fs = require('fs');

let file = 'src/pages/Testimonials.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /const TESTIMONIALS = \[/,
  `const TESTIMONIALS = [
  {
    id: 100,
    name: 'Samuel K.',
    avatar: 'https://i.pravatar.cc/150?img=33',
    rating: 5,
    service: 'Towing',
    text: 'Santa Towing is a lifesaver! My car broke down at 2 AM, and their emergency towing team arrived within 15 minutes. Professional, courteous, and very affordable.',
    date: 'Nov 05, 2023',
    featured: true
  },`
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated Testimonials');

