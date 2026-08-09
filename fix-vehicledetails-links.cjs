const fs = require('fs');
const file = 'src/pages/VehicleDetails.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace "Call Us" div with a href tel
content = content.replace(
  /<div className="flex items-start gap-4">(\s*)<div className="w-10 h-10 bg-accent\/10 rounded-\[1px\] flex items-center justify-center shrink-0">(\s*)<Phone className="w-5 h-5 text-accent" \/>(\s*)<\/div>(\s*)<div>(\s*)<div className="font-bold text-dark">Call Us<\/div>(\s*)<p className="text-sm text-dark\/70">0244753849<\/p>(\s*)<\/div>(\s*)<\/div>/g,
  '<a href="tel:0244753849" className="flex items-start gap-4 hover:opacity-80 transition-opacity">$1<div className="w-10 h-10 bg-accent/10 rounded-[1px] flex items-center justify-center shrink-0">$2<Phone className="w-5 h-5 text-accent" />$3</div>$4<div>$5<div className="font-bold text-dark">Call Us</div>$6<p className="text-sm text-dark/70">0244753849</p>$7</div>$8</a>'
);

content = content.replace(
  /<div className="flex items-start gap-4">(\s*)<div className="w-10 h-10 bg-accent\/10 rounded-\[1px\] flex items-center justify-center shrink-0">(\s*)<MessageCircle className="w-5 h-5 text-accent" \/>(\s*)<\/div>(\s*)<div>(\s*)<div className="font-bold text-dark">WhatsApp<\/div>(\s*)<p className="text-sm text-dark\/70">Chat with a Specialist<\/p>(\s*)<\/div>(\s*)<\/div>/g,
  '<a href="https://wa.me/233244753849" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 hover:opacity-80 transition-opacity">$1<div className="w-10 h-10 bg-accent/10 rounded-[1px] flex items-center justify-center shrink-0">$2<MessageCircle className="w-5 h-5 text-accent" />$3</div>$4<div>$5<div className="font-bold text-dark">WhatsApp</div>$6<p className="text-sm text-dark/70">Chat with a Specialist</p>$7</div>$8</a>'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated VehicleDetails.tsx');
