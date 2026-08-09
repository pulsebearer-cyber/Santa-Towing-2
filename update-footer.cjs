const fs = require('fs');

let file = 'src/components/layout/Footer.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /Your trusted partner for premium automotive services, 24\/7 emergency towing, vehicle sales, and reliable repairs\./g,
  'Your trusted partner for 24/7 emergency towing, premium automotive services, vehicle sales, and reliable repairs.'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated Footer.tsx');

