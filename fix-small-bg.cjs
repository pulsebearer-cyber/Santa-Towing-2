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
  
  content = content.replace(/w-12 h-12 bg-primary text-white/g, 'w-12 h-12 bg-accent text-white');
  content = content.replace(/w-10 h-10 bg-primary text-white/g, 'w-10 h-10 bg-accent text-white');
  content = content.replace(/w-8 h-8 bg-primary text-white/g, 'w-8 h-8 bg-accent text-white');
  content = content.replace(/w-16 h-16 bg-primary text-white/g, 'w-16 h-16 bg-accent text-white');
  
  // also active pill buttons
  content = content.replace(/activeTab === tab \? "text-primary border-primary bg-primary\/5"/g, 'activeTab === tab ? "text-accent border-accent bg-accent/5"');
  content = content.replace(/activeSpecTab === tab \? "bg-primary text-white"/g, 'activeSpecTab === tab ? "bg-accent text-white"');
  
  fs.writeFileSync(file, content);
});

console.log("Small bgs fixed.");
