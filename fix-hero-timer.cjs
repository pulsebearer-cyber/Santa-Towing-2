const fs = require('fs');

let file = 'src/components/sections/HeroAndActions.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /useEffect\(\(\) => \{\s*let timer;\s*const play = \(\) => \{\s*timer = setTimeout\(\(\) => \{\s*setCurrentSlide\(\(prev\) => \(prev \+ 1\) % HERO_SLIDES\.length\);\s*\}, currentSlide === 0 \? 8000 : 5000\);\s*\};\s*play\(\);\s*return \(\) => clearTimeout\(timer\);\s*\}, \[\]\);/g,
  `useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, currentSlide === 0 ? 8000 : 5000);
    return () => clearTimeout(timer);
  }, [currentSlide]);`
);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed timer');

