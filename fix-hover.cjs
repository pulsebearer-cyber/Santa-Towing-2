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
  
  content = content.replace(/bg-white hover:bg-white/g, 'bg-white hover:bg-dark/5');
  content = content.replace(/hover:bg-white\/50/g, 'hover:bg-dark/5'); // on light bg
  
  fs.writeFileSync(file, content);
});

console.log("Hover states updated for bg-white.");
