const fs = require('fs');
let file = 'src/pages/Booking.tsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(
  /<a href="#" className="flex items-center gap-4 bg-white text-dark hover:bg-white p-4 rounded-\[1px\] transition-colors">/g,
  '<a href="https://wa.me/233244753849" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white text-dark hover:bg-white p-4 rounded-[1px] transition-colors">'
);
fs.writeFileSync(file, content, 'utf8');
console.log('Updated Booking.tsx');
