const fs = require('fs');

let file = 'src/components/sections/AboutAndServices.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /Premium Automotive Solutions You Can Trust/,
  'Premium Towing & Automotive Solutions You Can Trust'
);

content = content.replace(
  /With over a decade of excellence, we provide comprehensive automotive services ranging from emergency roadside assistance to professional mechanical repairs, premium rentals, and reliable vehicle sales\./,
  'As the premier 24/7 towing and recovery service, we specialize in fast, reliable roadside assistance. Alongside our flagship towing services, we provide comprehensive mechanical repairs, premium rentals, and reliable vehicle sales.'
);

content = content.replace(
  /Everything Your Vehicle Needs/,
  'Professional Towing & Automotive Services'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated AboutAndServices');

