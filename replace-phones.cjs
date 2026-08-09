const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      if (!filePath.includes('node_modules') && !filePath.includes('.git') && !filePath.includes('dist')) {
        results = results.concat(walk(filePath));
      }
    } else {
      if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.jsx') || filePath.endsWith('.js') || filePath.endsWith('.html') || filePath.endsWith('.json')) {
        results.push(filePath);
      }
    }
  });
  return results;
}

const files = walk('./src');
files.push('./index.html');
files.push('./package.json');

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace tel: links
  content = content.replace(/tel:\+233[0-9]+/g, "tel:0244753849");
  content = content.replace(/tel:\+?233\s?[0-9\s]+/g, "tel:0244753849");
  
  // Replace visible numbers
  const regexes = [
    /\+233 24 123 4567/g,
    /\+233241234567/g,
    /\+233 55 123 4567/g,
    /\+233551234567/g,
    /\+233 30 123 4567/g,
    /\+233 55 123 4568/g,
    /\+233 30 123 4568/g,
    /\+233 55 111 2222/g,
    /\+233 55 222 3333/g,
    /\+233 55 333 4444/g,
    /\+233 55 000 0000/g,
  ];

  regexes.forEach(regex => {
    content = content.replace(regex, "0244753849");
  });
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
