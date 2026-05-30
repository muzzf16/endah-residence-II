const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if(file.endsWith('.astro') || file.endsWith('.md') || file.endsWith('.js') || file.endsWith('.mjs')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('e:/endahresidence.com/src');
let changedCount = 0;
files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('Endah Residence II')) {
        const newContent = content.replace(/Endah Residence II/g, 'Endah Residence 2 Batang');
        fs.writeFileSync(file, newContent, 'utf8');
        changedCount++;
        console.log(`Replaced in ${file}`);
    }
});
console.log(`Total files updated: ${changedCount}`);
