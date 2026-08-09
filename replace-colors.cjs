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
  
  // Specific fix for hero sections: bg-charcoal in top-level tags like <section className="relative bg-charcoal text-white py-20
  // or <div className="bg-charcoal ..."> that act as heroes.
  // Actually, let's just do a blanket replace and then fix up manually where needed, 
  // or just replace bg-charcoal with bg-secondary for most things, but Hero with bg-primary.
  // We can't easily parse that. But we know the colors:
  
  // BGs
  content = content.replace(/bg-orange/g, 'bg-primary');
  content = content.replace(/bg-amber/g, 'bg-accent');
  // We'll replace bg-charcoal with bg-secondary generally.
  // If it's a footer, we can change to bg-dark.
  content = content.replace(/bg-charcoal/g, 'bg-secondary');
  content = content.replace(/bg-light/g, 'bg-white');
  content = content.replace(/bg-gray-50/g, 'bg-white');
  content = content.replace(/bg-gray-100/g, 'bg-white');
  content = content.replace(/bg-gray-200/g, 'bg-white');
  content = content.replace(/bg-gray-800/g, 'bg-dark');
  content = content.replace(/bg-gray-900/g, 'bg-black');
  content = content.replace(/bg-gray-300/g, 'bg-dark\/10');
  
  // Text
  content = content.replace(/text-charcoal/g, 'text-dark');
  content = content.replace(/text-orange/g, 'text-primary');
  content = content.replace(/text-amber/g, 'text-accent');
  content = content.replace(/text-gray-400/g, 'text-dark\/50');
  content = content.replace(/text-gray-500/g, 'text-dark\/60');
  content = content.replace(/text-gray-600/g, 'text-dark\/70');
  content = content.replace(/text-gray-700/g, 'text-dark\/80');
  content = content.replace(/text-gray-300/g, 'text-white\/70');
  content = content.replace(/text-gray-200/g, 'text-white\/80');
  content = content.replace(/text-gray-100/g, 'text-white\/90');
  
  // Borders
  content = content.replace(/border-orange/g, 'border-primary');
  content = content.replace(/border-charcoal/g, 'border-dark');
  content = content.replace(/border-light/g, 'border-dark\/10');
  content = content.replace(/border-gray-100/g, 'border-dark\/10');
  content = content.replace(/border-gray-200/g, 'border-dark\/20');
  content = content.replace(/border-gray-300/g, 'border-dark\/30');
  content = content.replace(/border-gray-700/g, 'border-white\/20');
  content = content.replace(/border-gray-800/g, 'border-white\/10');
  
  // Some specific tailwind utilities
  content = content.replace(/ring-orange/g, 'ring-primary');
  content = content.replace(/shadow-orange/g, 'shadow-primary');
  
  // Hover / Focus replacements (need to avoid double replacement)
  content = content.replace(/hover:bg-primary\/[0-9]+/g, 'hover:bg-primary-hover'); // clean up if accidentally re-run
  content = content.replace(/hover:bg-primary/g, 'hover:bg-primary/90');
  
  content = content.replace(/hover:text-primary/g, 'hover:text-accent');
  
  // Text dark/50 etc on dark backgrounds usually needs to be white/50.
  // We can manually fix things later if it's broken.

  fs.writeFileSync(file, content);
});

console.log("Colors replaced in TSX files");
