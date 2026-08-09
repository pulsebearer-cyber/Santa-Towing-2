const fs = require('fs');
const file = 'src/components/sections/BottomSections.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /<div className="flex gap-4">(\s*)<div className="w-12 h-12 bg-accent\/10 rounded-\[1px\] flex items-center justify-center shrink-0">(\s*)<Phone className="w-6 h-6 text-accent" \/>(\s*)<\/div>(\s*)<div>(\s*)<h4 className="font-bold text-dark text-lg">Call Us 24\/7<\/h4>(\s*)<p className="text-dark\/80">0244753849<\/p>(\s*)<\/div>(\s*)<\/div>/g,
  '<a href="tel:0244753849" className="flex gap-4 hover:opacity-80 transition-opacity">$1<div className="w-12 h-12 bg-accent/10 rounded-[1px] flex items-center justify-center shrink-0">$2<Phone className="w-6 h-6 text-accent" />$3</div>$4<div>$5<h4 className="font-bold text-dark text-lg">Call Us 24/7</h4>$6<p className="text-dark/80">0244753849</p>$7</div>$8</a>'
);

content = content.replace(
  /<div className="flex gap-4">(\s*)<div className="w-12 h-12 bg-accent\/10 rounded-\[1px\] flex items-center justify-center shrink-0">(\s*)<Mail className="w-6 h-6 text-accent" \/>(\s*)<\/div>(\s*)<div>(\s*)<h4 className="font-bold text-dark text-lg">Email Us<\/h4>(\s*)<p className="text-dark\/80">info@santatowing.com<\/p>(\s*)<\/div>(\s*)<\/div>/g,
  '<a href="mailto:info@santatowing.com" className="flex gap-4 hover:opacity-80 transition-opacity">$1<div className="w-12 h-12 bg-accent/10 rounded-[1px] flex items-center justify-center shrink-0">$2<Mail className="w-6 h-6 text-accent" />$3</div>$4<div>$5<h4 className="font-bold text-dark text-lg">Email Us</h4>$6<p className="text-dark/80">info@santatowing.com</p>$7</div>$8</a>'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated BottomSections.tsx');
