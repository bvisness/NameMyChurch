const fs = require('fs');
const { execSync } = require('child_process');

const raw = fs.readFileSync('vocab.csv', { encoding: 'utf8' });

const lines = raw.split('\r\n');
const keys = lines[0].split(',');

const words = [];

for (let i = 1; i < lines.length; i++) {
    const line = lines[i].split(',');
    if (line.length < keys.length) {
        continue;
    }

    const new_word = {};
    for (let j = 0; j < keys.length; j++) {
        new_word[keys[j]] = line[j];
    }

    words.push(new_word);
}

if (!fs.existsSync('build')){
    fs.mkdirSync('build');
}

if (process.argv[2] === '--hash') {
    const hash = execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim();

    const output = `const vocab = ${JSON.stringify(words)}\n`;
    fs.writeFileSync(`build/vocab-${hash}.js`, output);

    fs.renameSync('build/script.js', `build/script-${hash}.js`);
    fs.renameSync('build/style.css', `build/style-${hash}.css`);
    fs.renameSync('build/normalize.css', `build/normalize-${hash}.css`);

    let hashed = fs.readFileSync('build/index.html', { encoding: 'utf8' });
    hashed = hashed.replace(/vocab\.js/g, `vocab-${hash}.js`);
    hashed = hashed.replace(/script\.js/g, `script-${hash}.js`);
    hashed = hashed.replace(/style\.css/g, `style-${hash}.css`);
    hashed = hashed.replace(/normalize\.css/g, `normalize-${hash}.css`);
    fs.writeFileSync('build/index.html', hashed, 'utf8');
} else {
    const output = `const vocab = ${JSON.stringify(words)}\n`;
    fs.writeFileSync(`build/vocab.js`, output);
}
