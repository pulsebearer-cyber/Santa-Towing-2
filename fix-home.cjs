const fs = require('fs');

let file = 'src/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /      <ServicesSection \/>\s*<FeaturedVehicles \/>\s*<RentalFleet \/>\s*<AutoParts \/>\s*<WhyChooseUs \/>\s*<TowingAppPromo \/>/g,
  `      <ServicesSection />
      <TowingAppPromo />
      <FeaturedVehicles />
      <RentalFleet />
      <AutoParts />
      <WhyChooseUs />`
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated Home.tsx');

