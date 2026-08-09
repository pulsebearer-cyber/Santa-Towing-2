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
  
  content = content.replace(/text-dark\/50/g, 'text-dark/70');
  content = content.replace(/text-dark\/60/g, 'text-dark/70');
  content = content.replace(/text-white\/50/g, 'text-white/80');
  content = content.replace(/text-white\/60/g, 'text-white/80');
  
  // also check borders border-dark/10, border-dark/20 might be too light for inputs.
  // wait, borders for layout can be light, but for inputs they should be visible. 
  
  fs.writeFileSync(file, content);
});

console.log("Text opacity fixed for contrast.");
