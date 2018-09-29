function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const grammar = {
    'NAME': [
        ['ADJECTIVE', 'CNAME'],
        ['VPHRASE', 'CNAME', 'APHRASE'],
        ['NPHRASE', 'CNAME', 'APHRASE'],
    ],
    'CNAME': [
        ['Church'],
        ['CPREFIX', 'Church'],
    ],
    'VPHRASE': [
        ['STANDALONE_VERB'],
        ['OBJECTIVE_VERB', 'NOUN'],
    ],
    'NPHRASE': [
        ['ADJ', 'CNOUN', 'APHRASE'],
    ],
    'ADJ': [
        [''],
        ['ADJECTIVE'],
    ],
    'CNOUN': [
        ['NOUN'],
        // ['NOUN', 'NSUFFIX'],
    ],
    'APHRASE': [
        [''],
        ['of', 'OFNOUN'],
        ['of the', 'THENOUN'],
        // ['in', 'OFNOUN'],
        // ['in the', 'THENOUN'],
        // more
    ],

    'NOUN': vocab
        .filter(word => word.noun_form)
        .map(word => [cap(word.noun_form)]),
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
    'ADJECTIVE': vocab
        .filter(word => word.adjective_form)
        .map(word => [cap(word.adjective_form)]),
    'CPREFIX': vocab
        .filter(word => word.cprefix_form)
        .map(word => [cap(word.cprefix_form)]),
};

function generate() {
    let string = ['NAME'];

    while (true) {
        const new_string = [];
        let did_replace = false;

        for (const token of string) {
            if (grammar[token]) {
                const random_index = Math.floor(Math.random() * grammar[token].length);
                const repl = grammar[token][random_index];

                did_replace = true;
                for (const new_token of repl) {
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

    const result = string.join(' ');

    document.querySelector('#result').innerHTML = result;
}
