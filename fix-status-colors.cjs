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
  
  // Replace Green
  content = content.replace(/bg-green-50/g, 'bg-primary/5');
  content = content.replace(/bg-green-100/g, 'bg-primary/10');
  content = content.replace(/bg-green-500/g, 'bg-primary');
  content = content.replace(/bg-green-600/g, 'bg-primary');
  content = content.replace(/text-green-200/g, 'text-white/60');
  content = content.replace(/text-green-500/g, 'text-primary');
  content = content.replace(/text-green-600/g, 'text-primary');
  content = content.replace(/border-green-500/g, 'border-primary');
  
  // Replace Red
  content = content.replace(/bg-red-50/g, 'bg-accent/5');
  content = content.replace(/bg-red-600/g, 'bg-accent');
  content = content.replace(/bg-red-700/g, 'bg-accent');
  content = content.replace(/text-red-500/g, 'text-accent');
  content = content.replace(/text-red-600/g, 'text-accent');
  content = content.replace(/border-red-500/g, 'border-accent');
  
  // Replace Blue
  content = content.replace(/bg-blue-50/g, 'bg-dark/5');
  content = content.replace(/bg-blue-100/g, 'bg-dark/10');
  content = content.replace(/text-blue-500/g, 'text-dark');
  content = content.replace(/text-blue-600/g, 'text-dark');
  
  fs.writeFileSync(file, content);
});

console.log("Status colors updated to strictly use brand palette.");
