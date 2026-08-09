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
  
  content = content.replace(/bg-primary\/90-hover/g, 'bg-accent/10');
  content = content.replace(/hover:bg-primary\/90/g, 'hover:bg-accent');
  content = content.replace(/group-hover:bg-primary\/90/g, 'group-hover:bg-accent');
  
  // also fix some weird artifacts if any
  content = content.replace(/bg-primary\/50\/10/g, 'bg-accent/10');
  content = content.replace(/hover:bg-primary\/50\/20/g, 'hover:bg-accent/20');

  // Any other text-primary left that could be accent? Links?
  // Let's replace any text-primary that is an interactive link 
  content = content.replace(/className="text-primary hover:underline/g, 'className="text-accent hover:underline');
  
  fs.writeFileSync(file, content);
});

console.log("Hover states fixed.");
