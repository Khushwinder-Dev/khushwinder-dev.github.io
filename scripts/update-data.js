const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, '..', 'components', 'portfolio', 'data.ts');
let content = fs.readFileSync(dataFile, 'utf8');

const imageMap = {
  'https://www.en-place.co': '/images/projects/en-place.webp',
  'https://www.qbands.co': '/images/projects/qbands.webp',
  'https://g1paintball.com': '/images/projects/g1paintball.webp',
  'https://nazarethstore.com': '/images/projects/nazarethstore.webp',
  'https://danielleidd.com': '/images/projects/danielleidd.webp',
  'https://shopaleena.com': '/images/projects/shopaleena.webp',
  'https://www.teemateas.com': '/images/projects/teemateas.webp',
  'https://southindiajewels.com': '/images/projects/southindiajewels.webp',
  'https://evergreenselect.com': '/images/projects/evergreenselect.webp',
  'https://ollu-shop.com': '/images/projects/ollu-shop.webp',
  'https://buioch.ie': '/images/projects/buioch.webp',
  'https://hillennursery.com': '/images/projects/hillennursery.webp',
  'https://www.altswim.com': '/images/projects/altswim.webp',
  'https://www.shayapets.com': '/images/projects/shayapets.webp',
  'https://www.bag-all.com': '/images/projects/bag-all.webp',
  'https://www.albanypark.com': '/images/projects/albanypark.webp',
  'https://larroude.com': '/images/projects/larroude.webp',
  'https://www.primofightwear.com': '/images/projects/primofightwear.webp',
  'https://www.artisankraft.com': '/images/projects/artisankraft.webp',
  'https://runnersconnect.net': '/images/projects/runnersconnect.webp',
  'https://ruhlisticdecor.com': '/images/projects/ruhlisticdecor.webp',
  'https://byop.net': '/images/projects/byop.webp',
  'https://protechavsolutions.com': '/images/projects/protechavsolutions.webp',
  'https://www.gcrecital.com': '/images/projects/gcrecital.webp',
};

for (const [url, imgPath] of Object.entries(imageMap)) {
  const target = `url: '${url}'`;
  const urlIndex = content.indexOf(target);
  if (urlIndex === -1) {
    console.error(`URL not found: ${url}`);
    continue;
  }

  const blockStart = content.lastIndexOf('{', urlIndex);
  const blockEnd = content.indexOf('}', urlIndex);
  let block = content.substring(blockStart, blockEnd + 1);

  if (block.includes('image:')) {
    block = block.replace(/image:\s*['"][^'"]+['"],?/, `image: '${imgPath}',`);
  } else {
    block = block.replace(/(tag:\s*['"][^'"]+['"],?)/, `$1\n    image: '${imgPath}',`);
  }

  content = content.substring(0, blockStart) + block + content.substring(blockEnd + 1);
}

fs.writeFileSync(dataFile, content, 'utf8');
console.log('Successfully updated data.ts with authentic project images!');
