function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const grammar = {
    'NAME': [
        {
            repl: ['SINGULAR_ADJECTIVE', 'CNAME'],
            weight: 0.4,
        },
        {
            repl: ['VPHRASE', 'CNAME', 'ENDING_APHRASE'],
            weight: 1.2,
        },
        {
            repl: ['NPHRASE', 'CNAME', 'ENDING_APHRASE'],
            weight: 1.2,
        },
        {
            repl: ['STANDALONE_VERB'],
            weight: 0.2,
        },
        {
            repl: ['The', 'NOUN'],
            weight: 0.4,
        },
    ],
    'CNAME': [
        ['Church'],
        {
            repl: ['CPREFIX', 'Church'],
            weight: 0.6,
        },
    ],
    'VPHRASE': [
        ['STANDALONE_VERB'],
        ['OBJECTIVE_VERB', 'NOUN'],
    ],
    'NPHRASE': [
        ['ADJ', 'COMPOUND_NOUN', 'APHRASE'],
        ['PLURALIZING_ADJECTIVE', 'PNOUN', 'APHRASE'],
    ],
    'ADJ': [
        [''],
        ['SINGULAR_ADJECTIVE'],
    ],
    'COMPOUND_NOUN': [
        ['NOUN'],
        ['NOUN', '%slurp%', 'NSUFFIX'],
    ],
    'ENDING_APHRASE': [
        [''],
        {
            repl: ['APHRASE'],
            weight: 0.5,
        },
    ],
    'APHRASE': [
        [''],
        ['of', 'OFNOUN'],
        ['of the', 'THENOUN'],
        {
            repl: ['of the', 'THENOUN', 'APHRASE'],
            weight: 0.2,
        },
        // ['in', 'OFNOUN'],
        // ['in the', 'THENOUN'],
        // more
    ],

    'NOUN': vocab
        .filter(word => word.noun_form)
        .map(word => [cap(word.noun_form)]),
    'PNOUN': vocab
        .filter(word => word.plural_form)
        .map(word => [cap(word.plural_form)]),
    'OFNOUN': vocab
        .filter(word => word.noun_form && word.of)
        .map(word => [cap(word.noun_form)]),
    'THENOUN': vocab
        .filter(word => word.noun_form && word.of_the)
        .map(word => [cap(word.noun_form)]),
    'STANDALONE_VERB': vocab
        .filter(word => word.standalone)
        .map(word => [cap(word.verb_form)]),
    'OBJECTIVE_VERB': vocab
        .filter(word => word.has_object)
        .map(word => [cap(word.verb_form)]),
    'SINGULAR_ADJECTIVE': vocab
        .filter(word => word.adjective_form && !word.pluralizing)
        .map(word => [cap(word.adjective_form)]),
    'PLURALIZING_ADJECTIVE': vocab
        .filter(word => word.adjective_form && word.pluralizing)
        .map(word => [cap(word.adjective_form)]),
    'CPREFIX': vocab
        .filter(word => word.is_cprefix)
        .map(word => [cap(word.noun_form)]),
    'NSUFFIX': [
        ['view'],
        ['way'],
        ['wood'],
        ['bridge'],
        ['point'],
        ['spring'],
    ],
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

    const result = string.join(' ').replace(/ %slurp% /g, '');

    document.querySelector('#result').innerHTML = result;
}
