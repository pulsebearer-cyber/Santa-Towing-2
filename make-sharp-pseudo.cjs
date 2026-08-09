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

// match something like hover:rounded-2xl or [&>img]:rounded-3xl
const regex = /(?<=[\s"'`])((?:[-a-zA-Z0-9_\[\]>]+:)*)rounded([-a-z0-9\[\]\.]*)(?=[\s"'`])/g;

let count = 0;
files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  
  const newContent = content.replace(regex, (match, prefix, suffix) => {
    // If it's just 'rounded-none' or already '[1px]', leave it as is
    if (suffix === '-none' || suffix.includes('[1px]')) return match;
    
    // Check for directional suffixes
    const dirMatch = suffix.match(/^-([tlbrxy]{1,2})/);
    
    // The previous bug was treating 'xl' and 'lg' as directions.
    // 'lg' matched '-l', 'xl' matched '-x' or '-xl' (which both are valid direction chars).
    // Let's explicitly check the directional suffixes!
    // Valid directional suffixes in tailwind: t, b, l, r, tl, tr, bl, br, x, y
    
    let direction = '';
    if (dirMatch) {
       const dir = dirMatch[1];
       // ensure it's an actual direction and NOT part of 'xl' or 'lg'
       if (['t', 'b', 'l', 'r', 'tl', 'tr', 'bl', 'br', 'x', 'y'].includes(dir)) {
           // Also we need to make sure the original suffix wasn't exactly '-lg' or '-xl' 
           // if dir matched '-l' from '-lg'
           if (suffix === '-lg' || suffix === '-xl' || suffix === '-2xl' || suffix === '-3xl') {
              // It's a size, not a direction!
           } else {
              direction = `-${dir}`;
           }
       }
    }
    
    return `${prefix}rounded${direction}-[1px]`;
  });

  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Updated ${file}`);
    count++;
  }
});
console.log(`Total files updated for pseudo-classes: ${count}`);
