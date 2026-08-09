const fs = require('fs');
let file = 'index.html';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /<title>Santa Towing & Garage Services Ltd.<\/title>/,
  '<title>Santa Towing - 24/7 Emergency Towing & Automotive Services</title>\n    <meta name="description" content="Santa Towing provides professional 24/7 emergency towing, vehicle recovery, roadside assistance, and comprehensive automotive services." />'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated index.html');
