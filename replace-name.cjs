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

  content = content.replace(/AutoPro/g, "Santa Towing");
  content = content.replace(/info@automotivepro\.com\.gh/g, "info@santatowing.com");
  content = content.replace(/info@autopro\.com/g, "info@santatowing.com");
  content = content.replace(/Auto<span[^>]*>Pro<\/span>/g, "Santa Towing");
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
