const fs = require('fs');
const file = 'src/pages/Contact.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /\{ id: 1, title: 'Emergency Towing', value: '0244753849', icon: Phone, color: 'text-accent', bg: 'bg-accent\/5', action: 'Call Now' \}/g,
  "{ id: 1, title: 'Emergency Towing', value: '0244753849', icon: Phone, color: 'text-accent', bg: 'bg-accent/5', action: 'Call Now', href: 'tel:0244753849' }"
);
content = content.replace(
  /\{ id: 2, title: 'General Enquiries', value: '0244753849', icon: Phone, color: 'text-primary', bg: 'bg-primary\/10', action: 'Call Now' \}/g,
  "{ id: 2, title: 'General Enquiries', value: '0244753849', icon: Phone, color: 'text-primary', bg: 'bg-primary/10', action: 'Call Now', href: 'tel:0244753849' }"
);
content = content.replace(
  /\{ id: 3, title: 'WhatsApp Us', value: '0244753849', icon: MessageCircle, color: 'text-primary', bg: 'bg-primary\/5', action: 'Chat Now' \}/g,
  "{ id: 3, title: 'WhatsApp Us', value: '0244753849', icon: MessageCircle, color: 'text-primary', bg: 'bg-primary/5', action: 'Chat Now', href: 'https://wa.me/233244753849' }"
);
content = content.replace(
  /\{ id: 4, title: 'Email Us', value: 'hello@maccom.com', icon: Mail, color: 'text-dark', bg: 'bg-dark\/5', action: 'Send Email' \}/g,
  "{ id: 4, title: 'Email Us', value: 'hello@maccom.com', icon: Mail, color: 'text-dark', bg: 'bg-dark/5', action: 'Send Email', href: 'mailto:hello@maccom.com' }"
);

content = content.replace(
  /<a href="#" className=\{cn\("inline-block font-bold text-sm hover:underline", option.color\)\}>/g,
  '<a href={option.href} className={cn("inline-block font-bold text-sm hover:underline", option.color)}>'
);

// also let's check Booking.tsx empty whatsapp link
fs.writeFileSync(file, content, 'utf8');
console.log('Updated Contact.tsx');
