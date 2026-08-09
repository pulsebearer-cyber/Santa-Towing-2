const fs = require('fs');

let file = 'src/components/layout/TopBar.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /<div className="flex items-center gap-2 hover:text-accent transition-colors">(\s*)<Phone className="w-4 h-4 text-accent" \/>(\s*)<span>24\/7 Hotline: 0244753849<\/span>(\s*)<\/div>/g,
  '<a href="tel:0244753849" className="flex items-center gap-2 hover:text-accent transition-colors">$1<Phone className="w-4 h-4 text-accent" />$2<span>24/7 Hotline: 0244753849</span>$3</a>'
);

content = content.replace(
  /<div className="hidden sm:flex items-center gap-2 hover:text-accent transition-colors">(\s*)<Mail className="w-4 h-4 text-accent" \/>(\s*)<span>info@santatowing\.com<\/span>(\s*)<\/div>/g,
  '<a href="mailto:info@santatowing.com" className="hidden sm:flex items-center gap-2 hover:text-accent transition-colors">$1<Mail className="w-4 h-4 text-accent" />$2<span>info@santatowing.com</span>$3</a>'
);

fs.writeFileSync(file, content, 'utf8');

file = 'src/components/layout/Footer.tsx';
content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /<div className="flex items-center gap-3">(\s*)<Phone className="w-5 h-5 text-accent" \/>(\s*)<span>0244753849<\/span>(\s*)<\/div>/g,
  '<a href="tel:0244753849" className="flex items-center gap-3 hover:text-accent transition-colors">$1<Phone className="w-5 h-5 text-accent" />$2<span>0244753849</span>$3</a>'
);

content = content.replace(
  /<div className="flex items-center gap-3">(\s*)<Mail className="w-5 h-5 text-accent" \/>(\s*)<span>info@santatowing\.com<\/span>(\s*)<\/div>/g,
  '<a href="mailto:info@santatowing.com" className="flex items-center gap-3 hover:text-accent transition-colors">$1<Mail className="w-5 h-5 text-accent" />$2<span>info@santatowing.com</span>$3</a>'
);

fs.writeFileSync(file, content, 'utf8');

console.log('Updated TopBar & Footer');
