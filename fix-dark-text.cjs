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
  
  // We can just revert text-dark/XX to text-white/XX globally inside components that are known to be dark
  // like HeroAndActions.tsx, Footer.tsx, BottomSections.tsx (TowingAppPromo etc).
  // Actually, we can just replace text-dark/50 with text-white/70 in Footer.tsx
  if (file.includes('Footer.tsx') || file.includes('BottomSections.tsx') || file.includes('HeroAndActions.tsx')) {
    content = content.replace(/text-dark\/50/g, 'text-white/70');
    content = content.replace(/text-dark\/60/g, 'text-white/80');
    content = content.replace(/text-dark\/70/g, 'text-white/90');
    content = content.replace(/text-dark\/80/g, 'text-white');
  }
  
  fs.writeFileSync(file, content);
});

console.log("Dark text fixed in specific files.");
