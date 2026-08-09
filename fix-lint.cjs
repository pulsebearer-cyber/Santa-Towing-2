const fs = require('fs');
let file = 'src/pages/Faqs.tsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(
  /\{faqs\.map\(\(faq, idx\) => \{/g,
  '{(faqs as typeof FAQ_DATA).map((faq, idx) => {'
);
fs.writeFileSync(file, content, 'utf8');
console.log('Fixed Faqs.tsx');
