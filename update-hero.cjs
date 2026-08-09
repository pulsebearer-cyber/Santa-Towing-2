const fs = require('fs');

let file = 'src/components/sections/HeroAndActions.tsx';
let content = fs.readFileSync(file, 'utf8');

// Change interval logic so slide 0 stays longer
content = content.replace(
  /const timer = setInterval\(\(\) => \{\s*setCurrentSlide\(\(prev\) => \(prev \+ 1\) % HERO_SLIDES.length\);\s*\}, 6000\);\s*return \(\) => clearInterval\(timer\);/g,
  `let timer;\n    const play = () => {\n      timer = setTimeout(() => {\n        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);\n      }, currentSlide === 0 ? 8000 : 5000);\n    };\n    play();\n    return () => clearTimeout(timer);`
);

// Update button rendering to support href
content = content.replace(
  /\{HERO_SLIDES\[currentSlide\]\.buttons\.map\(\(btn, idx\) => \(\s*<button/g,
  `{HERO_SLIDES[currentSlide].buttons.map((btn, idx) => (\n                    <a\n                      href={btn.href || '#'}`
);
content = content.replace(
  /<\/button>\s*\)\)\}/g,
  `</a>\n                  ))}`
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated HeroAndActions.tsx');

