const fs = require('fs');
const path = require('path');
const Tesseract = require('tesseract.js');

async function run() {
  const dir = path.resolve(__dirname, '..', 'Programme-Cap-Jeunes-Guide-pratique.png');
  if (!fs.existsSync(dir)) {
    console.error('Images directory not found:', dir);
    process.exit(1);
  }

  const files = fs.readdirSync(dir).filter(f => f.toLowerCase().endsWith('.png')).sort();
  if (files.length === 0) {
    console.error('No PNG files found in', dir);
    process.exit(1);
  }

  const outDir = path.resolve(__dirname, '..', 'src', 'content');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, 'programmeText.json');

  try {
    const results = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const filePath = path.join(dir, file);
      console.log(`Recognizing page ${i + 1}/${files.length}: ${file}`);
      const { data: { text } } = await Tesseract.recognize(filePath, 'fra+eng', {
        logger: m => console.log('[tesseract]', m.status, m.progress && (m.progress * 100).toFixed(1) + '%')
      });
      results.push({ file, page: i + 1, text: (text || '').trim() });
    }

    fs.writeFileSync(outFile, JSON.stringify(results, null, 2), 'utf8');
    console.log('OCR complete. Results written to', outFile);
  } catch (err) {
    console.error('OCR failed:', err);
    process.exitCode = 2;
  }
}

run();
