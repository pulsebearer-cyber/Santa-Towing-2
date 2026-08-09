const fs = require('fs');

const filesToFix = [
  'src/pages/Contact.tsx',
  'src/pages/Faqs.tsx',
  'src/pages/NotFound.tsx'
];

filesToFix.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Contact.tsx & Faqs.tsx: <a href="#" ...> <MessageCircle .../> WhatsApp Us </a>
  content = content.replace(/<a href="#"([^>]*>)\s*<MessageCircle([^>]*>)\s*WhatsApp Us/g, '<a href="https://wa.me/233244753849" target="_blank" rel="noopener noreferrer"$1\n              <MessageCircle$2 WhatsApp Us');

  // NotFound.tsx: <a href="#" ...> <MessageCircle .../> ... WhatsApp ... Message Us
  content = content.replace(/<a href="#"([^>]*>)\s*<div([^>]*>)\s*<MessageCircle([^>]*>)\s*<\/div>\s*<div>\s*<div([^>]*>)\s*WhatsApp/g, '<a href="https://wa.me/233244753849" target="_blank" rel="noopener noreferrer"$1\n                <div$2\n                  <MessageCircle$3\n                </div>\n                <div>\n                  <div$4WhatsApp');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
