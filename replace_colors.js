const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'src');

const replacements = [
  { regex: /#F5F4F0/gi, replace: '#F5F7FA' }, // Legacy Off-White -> Abu Muda
  { regex: /#F8F9FB/gi, replace: '#F5F7FA' }, // Old Abu Muda -> New Abu Muda
  { regex: /#111111/gi, replace: '#4A4C54' }, // Legacy Dark -> Abu Gelap
  { regex: /#0F172A/gi, replace: '#4A4C54' }, // Old Dark -> Abu Gelap
  { regex: /text-\[#111\]/g, replace: 'text-[#4A4C54]' },
  { regex: /bg-\[#111\]/g, replace: 'bg-[#0B2C6B]' },
  { regex: /border-\[#111\]/g, replace: 'border-[#0B2C6B]' },
  { regex: /#C9A84C/gi, replace: '#D9A441' }, // Legacy Gold -> New Gold
  { regex: /#D4AF37/gi, replace: '#D9A441' }, // Old Gold -> New Gold
  { regex: /#C5A04D/gi, replace: '#D9A441' },
  { regex: /#002B5B/gi, replace: '#0B2C6B' }, // Legacy Navy -> New Navy
  { regex: /#0A1A3A/gi, replace: '#0B2C6B' }, // Old Navy -> New Navy
  // And standalone "#111" that might be used in styles or other places
  { regex: /'#111'/g, replace: "'#4A4C54'" },
  { regex: /"#111"/g, replace: '"#4A4C54"' },
];

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walkDir(filePath));
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      results.push(filePath);
    }
  });
  return results;
}

const files = walkDir(directory);
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  replacements.forEach(({ regex, replace }) => {
    content = content.replace(regex, replace);
  });

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
