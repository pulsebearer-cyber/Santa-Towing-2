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
      if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.jsx') || filePath.endsWith('.js') || filePath.endsWith('.html')) {
        results.push(filePath);
      }
    }
  });
  return results;
}

const files = walk('./src');
files.push('./index.html');

const regex = /(?<=[\s"'`])rounded[-a-z0-9\[\]\.]*(?=[\s"'`])/g;

let count = 0;
files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  
  const newContent = content.replace(regex, (match) => {
    if (match === 'rounded-none') return 'rounded-none';
    if (match.includes('[1px]')) return match;
    
    const dirMatch = match.match(/^rounded(-[tlbrxy]{1,2})/);
    if (dirMatch) {
      return `rounded${dirMatch[1]}-[1px]`;
    }
    return 'rounded-[1px]';
  });

  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Updated ${file}`);
    count++;
  }
});
console.log(`Total files updated: ${count}`);
