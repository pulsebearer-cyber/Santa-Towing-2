const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Only target files that have a hero banner section
  if (!content.includes('Hero Banner')) continue;
  if (content.includes('ScrollToFooterArrow')) continue; // Already added

  // Add import
  const importStatement = "import ScrollToFooterArrow from '@/components/ui/ScrollToFooterArrow';\n";
  
  // Find a good place to put the import (e.g. after lucide-react or motion/react)
  if (content.includes("from 'lucide-react';")) {
    content = content.replace("from 'lucide-react';\n", "from 'lucide-react';\n" + importStatement);
  } else if (content.includes("from 'motion/react';")) {
    content = content.replace("from 'motion/react';\n", "from 'motion/react';\n" + importStatement);
  } else {
    content = content.replace("import React", importStatement + "import React");
  }

  // Find the first </section> after the Hero Banner comment
  const heroBannerIndex = content.indexOf('Hero Banner');
  const endSectionIndex = content.indexOf('</section>', heroBannerIndex);

  if (endSectionIndex !== -1) {
    const injection = `
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 hidden sm:block">
          <ScrollToFooterArrow />
        </div>
      `;
    content = content.substring(0, endSectionIndex) + injection + content.substring(endSectionIndex);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
