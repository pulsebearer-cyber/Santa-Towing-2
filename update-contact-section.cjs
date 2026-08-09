const fs = require('fs');
let file = 'src/components/sections/BottomSections.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /Whether you need emergency assistance, want to book a service, or have a general inquiry, our team is ready to help\./g,
  'Whether you need emergency towing, want to book a service, or have a general inquiry, our dispatch and support team is ready to help.'
);

content = content.replace(
  /<h4 className="font-bold text-dark text-lg">Call Us 24\/7<\/h4>/g,
  '<h4 className="font-bold text-dark text-lg">24/7 Towing Hotline</h4>'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated ContactSection');
