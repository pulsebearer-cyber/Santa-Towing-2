const fs = require('fs');

let file = 'src/components/layout/NavBar.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /Call Now: 0244753849/g,
  '24/7 Towing: 0244753849'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated NavBar.tsx');

