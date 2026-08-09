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
  
  content = content.replace(/w-14 h-14 bg-primary\/10/g, 'w-14 h-14 bg-accent/10');
  content = content.replace(/w-12 h-12 bg-primary\/10/g, 'w-12 h-12 bg-accent/10');
  content = content.replace(/w-10 h-10 bg-primary\/10/g, 'w-10 h-10 bg-accent/10');
  
  fs.writeFileSync(file, content);
});

console.log("Bg accent/10 applied to icon wrappers.");
