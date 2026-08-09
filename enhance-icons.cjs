const fs = require('fs');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Important Icons
  content = content.replace(/Phone className="([^"]*)text-primary/g, 'Phone className="$1text-accent');
  content = content.replace(/Mail className="([^"]*)text-primary/g, 'Mail className="$1text-accent');
  content = content.replace(/MapPin className="([^"]*)text-primary/g, 'MapPin className="$1text-accent');
  content = content.replace(/MessageCircle className="([^"]*)text-primary/g, 'MessageCircle className="$1text-accent');
  content = content.replace(/MapPinOff className="([^"]*)text-primary/g, 'MapPinOff className="$1text-accent');
  
  // Highlight stars for reviews
  content = content.replace(/fill-primary text-primary/g, 'fill-accent text-accent');
  
  // Active states or border states
  // content = content.replace(/text-primary border-primary/g, 'text-accent border-accent'); 
  // Wait, the primary color is 40% (015557). We don't want to remove it entirely.
  // The user says: "Apply this color more frequently to ... primary call-to-action buttons, hover states, important icons, badges, notification elements, highlighted text, links, and other key interactive components."
  
  fs.writeFileSync(file, content);
});

console.log("Icons and highlights updated.");
