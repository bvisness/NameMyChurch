function cap(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const grammar = {
  'NAME': [
    {
      repl: ['ADJ_SINGULAR', 'CHURCH'],
      weight: 0.4,
    },
    {
      repl: ['VERB_PHRASE', 'CHURCH', 'ENDING_ADJ_PHRASE'],
      weight: 1.2,
    },
    {
      repl: ['NOUN_PHRASE', 'CHURCH', 'ENDING_ADJ_PHRASE'],
      weight: 1.2,
    },
    {
      repl: ['VERB_STANDALONE'],
      weight: 0.2,
    },
    {
      repl: ['The', 'NOUN'],
      weight: 0.4,
    },
  ],
  'CHURCH': [
    ['Church'],
    {
      repl: ['CHURCH_PREFIX', 'Church'],
      weight: 0.6,
    },
  ],
  'VERB_PHRASE': [
    ['VERB_STANDALONE'],
    ['VERB_WITH_OBJECT', 'NOUN'],
  ],
  'NOUN_PHRASE': [
    ['OPTIONAL_ADJ', 'COMPOUND_NOUN', 'ADJ_PHRASE'],
    ['ADJ_PLURAL', 'NOUN_PLURAL', 'ADJ_PHRASE'],
  ],
  'OPTIONAL_ADJ': [
    [''],
    ['ADJ_SINGULAR'],
  ],
  'COMPOUND_NOUN': [
    ['NOUN'],
    ['NOUN', '%slurp%', 'NOUN_SUFFIX'], // TODO(ben): Remove %slurp%, just inline spaces
  ],
  'ENDING_ADJ_PHRASE': [
    [''],
    {
      repl: ['ADJ_PHRASE'],
      weight: 0.5,
    },
  ],
  'ADJ_PHRASE': [
    [''],
    ['of', 'NOUN_OF'],
    ['of the', 'NOUN_OFTHE'],
    {
      repl: ['of the', 'NOUN_OFTHE', 'ADJ_PHRASE'],
      weight: 0.2,
    },
    // ['in', 'NOUN_OF'],
    // ['in the', 'NOUN_OFTHE'],
    // more
  ],

  'NOUN': vocab
    .filter(word => word.noun_form)
    .map(word => [cap(word.noun_form)]),
  'NOUN_PLURAL': vocab
    .filter(word => word.plural_form)
    .map(word => [cap(word.plural_form)]),
  'NOUN_OF': vocab
    .filter(word => word.noun_form && word.of)
    .map(word => [cap(word.noun_form)]),
  'NOUN_OFTHE': vocab
    .filter(word => word.noun_form && word.of_the)
    .map(word => [cap(word.noun_form)]),
  'VERB_STANDALONE': vocab
    .filter(word => word.standalone)
    .map(word => [cap(word.verb_form)]),
  'VERB_WITH_OBJECT': vocab
    .filter(word => word.has_object)
    .map(word => [cap(word.verb_form)]),
  'ADJ_SINGULAR': vocab
    .filter(word => word.adjective_form && !word.pluralizing)
    .map(word => [cap(word.adjective_form)]),
  'ADJ_PLURAL': vocab
    .filter(word => word.adjective_form && word.pluralizing)
    .map(word => [cap(word.adjective_form)]),
  'CHURCH_PREFIX': vocab
    .filter(word => word.church_prefix)
    .map(word => [cap(word.noun_form)]),
  'NOUN_SUFFIX': vocab
    .filter(word => word.suffix_form)
    .map(word => [word.suffix_form]),
};

function generate() {
  let string = ['NAME'];

  while (true) {
    const new_string = [];
    let did_replace = false;

    for (const token of string) {
      if (grammar[token]) {
        const weighted_replacements = [];

        for (const repl of grammar[token]) {
          if (Array.isArray(repl)) {
            for (let i = 0; i < 10; i++) {
              weighted_replacements.push(repl);
            }
          } else {
            for (let i = 0; i < repl.weight * 10; i++) {
              weighted_replacements.push(repl.repl);
            }
          }
        }

        const random_index = Math.floor(Math.random() * weighted_replacements.length);
        const final_repl = weighted_replacements[random_index];

        did_replace = true;
        for (const new_token of final_repl) {
          new_string.push(new_token);
        }
      } else {
        new_string.push(token);
      }
    }

    string = new_string;

    if (!did_replace) {
      break;
    }
  }

  const result = string.join(' ').replace(/ %slurp% /g, '').trim();

  document.querySelector('#result').innerHTML = result;
  return result;
}

function goUntil(word) {
  for (let i = 0; i < 10000; i++) {
    const result = generate();
    if (result.toLowerCase().indexOf(word) !== -1) {
      break;
    }
  }
}

window.addEventListener('load', () => {
  document.querySelector('#gen-button').addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    generate();
  });

  document.addEventListener('keydown', event => {
    if (
      event.which === 32
      && document.activeElement !== document.querySelector('#gen-button')
    ) {
      generate();
    }
  });
});
