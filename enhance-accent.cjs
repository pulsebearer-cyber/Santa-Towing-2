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
  
  // Update badges
  content = content.replace(/bg-primary\/5 text-primary/g, 'bg-accent/10 text-accent');
  content = content.replace(/bg-primary\/10 text-primary/g, 'bg-accent/10 text-accent');
  
  // Update Check icons
  content = content.replace(/CheckCircle2 className="([^"]*)text-primary/g, 'CheckCircle2 className="$1text-accent');
  content = content.replace(/CheckCircle className="([^"]*)text-primary/g, 'CheckCircle className="$1text-accent');
  content = content.replace(/Check className="([^"]*)text-primary/g, 'Check className="$1text-accent');
  content = content.replace(/ArrowRight className="([^"]*)text-primary/g, 'ArrowRight className="$1text-accent');
  
  // Update bold primary text (often used for prices, emphases, highlights)
  content = content.replace(/font-bold text-primary/g, 'font-bold text-accent');
  content = content.replace(/text-primary font-bold/g, 'text-accent font-bold');
  
  // Update link hovers
  content = content.replace(/hover:text-primary/g, 'hover:text-accent');
  
  // group-hover for icons
  content = content.replace(/group-hover:text-primary/g, 'group-hover:text-accent');
  
  // Highlighted spans inside text
  content = content.replace(/<span className="text-primary">/g, '<span className="text-accent">');
  
  fs.writeFileSync(file, content);
});

console.log("Accent colors enhanced.");
