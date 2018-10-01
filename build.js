const fs = require('fs');

const raw = fs.readFileSync('vocab.csv', {
    encoding: 'utf8',
});

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

const output = `const vocab = ${JSON.stringify(words)}\n`;
fs.writeFileSync('build/vocab.js', output);
