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
  
  // Fix gradients that were missed
  content = content.replace(/from-charcoal/g, 'from-primary');
  content = content.replace(/via-charcoal/g, 'via-primary');
  content = content.replace(/to-charcoal/g, 'to-primary');
  
  content = content.replace(/from-orange/g, 'from-accent');
  content = content.replace(/via-orange/g, 'via-accent');
  content = content.replace(/to-orange/g, 'to-accent');
  
  content = content.replace(/from-gray-900/g, 'from-black');
  content = content.replace(/via-gray-900/g, 'via-black');
  content = content.replace(/to-gray-900/g, 'to-black');

  content = content.replace(/from-gray-800/g, 'from-dark');
  content = content.replace(/via-gray-800/g, 'via-dark');
  content = content.replace(/to-gray-800/g, 'to-dark');
  
  content = content.replace(/bg-secondary/g, 'bg-primary'); // I replaced charcoal with secondary, let's make them primary, because primary is 40% and mostly used.
  // Wait, if I make everything primary, what is secondary? Secondary is for sections.
  
  fs.writeFileSync(file, content);
});

console.log("Colors updated.");
