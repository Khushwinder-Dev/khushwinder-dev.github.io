const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');
const sharp = require('sharp');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUT_DIR = path.join(__dirname, '..', 'public', 'images', 'projects');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function captureSite(browser, url, filename) {
  const outFile = path.join(OUT_DIR, filename);
  if (fs.existsSync(outFile) && fs.statSync(outFile).size > 15000) {
    console.log(`[Capture] Skipping existing valid ${filename}`);
    return true;
  }

  console.log(`[Capture] Launching ${url} -> ${filename}`);
  let page;
  try {
    page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    );

    // Load with 15s timeout
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 }).catch((e) => {
      console.warn(`[Capture] domcontentloaded timed out on ${url}: ${e.message}`);
    });

    await new Promise((r) => setTimeout(r, 2000));

    const buffer = await page.screenshot({ type: 'png', fullPage: false });

    await sharp(buffer)
      .resize(800, 500, { position: 'top' })
      .webp({ quality: 82 })
      .toFile(outFile);

    const size = fs.statSync(outFile).size;
    if (size < 12000) {
      console.warn(`[Capture] Too small (${size} bytes) on ${url}, deleting...`);
      fs.unlinkSync(outFile);
      return false;
    }
    console.log(`[Capture] SUCCESS: ${filename} (${(size / 1024).toFixed(1)} KB)`);
    return true;
  } catch (err) {
    console.error(`[Capture] ERROR on ${url}:`, err.message);
    return false;
  } finally {
    if (page) {
      try {
        await page.close();
      } catch {}
    }
  }
}

async function main() {
  const targets = [
    { url: 'https://www.oneathletic.com', file: 'oneathletic.webp' },
    { url: 'https://www.teemateas.com', file: 'teemateas.webp' },
    { url: 'https://southindiajewels.com', file: 'southindiajewels.webp' },
    { url: 'https://evergreenselect.com', file: 'evergreenselect.webp' },
    { url: 'https://perneskin.com', file: 'perneskin.webp' },
    { url: 'https://aynolabidet.com', file: 'aynolabidet.webp' },
    { url: 'https://www.ping852.com', file: 'ping852.webp' },
    { url: 'https://ollu-shop.com', file: 'ollu-shop.webp' },
    { url: 'https://buioch.ie', file: 'buioch.webp' },
    { url: 'https://hillennursery.com', file: 'hillennursery.webp' },
    { url: 'https://fehh.com', file: 'fehh.webp' },
    { url: 'https://www.shayapets.com', file: 'shayapets.webp' },
    { url: 'https://www.bag-all.com', file: 'bag-all.webp' },
    { url: 'https://www.albanypark.com', file: 'albanypark.webp' },
    { url: 'https://www.primofightwear.com', file: 'primofightwear.webp' },
    { url: 'https://www.artisankraft.com', file: 'artisankraft.webp' },
    { url: 'https://tapoco.com', file: 'tapoco.webp' },
    { url: 'https://runnersconnect.net', file: 'runnersconnect.webp' },
    { url: 'https://zyoptics.net', file: 'zyoptics.webp' },
    { url: 'https://cplinc.com', file: 'cplinc.webp' },
    { url: 'https://www.workotter.com', file: 'workotter.webp' },
    { url: 'https://ruhlisticdecor.com', file: 'ruhlisticdecor.webp' },
    { url: 'https://protechavsolutions.com', file: 'protechavsolutions.webp' },
    { url: 'https://www.gcrecital.com', file: 'gcrecital.webp' }
  ];

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  try {
    for (const t of targets) {
      await captureSite(browser, t.url, t.file);
    }
  } finally {
    await browser.close();
  }
}

main().then(() => console.log('Capture batch complete!'));
