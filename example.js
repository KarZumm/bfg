const Generator = require('./src/generate')

const argv = require('optimist')
    .demand('listName')
    .default('count', 1)
    .argv

const list = new Generator(argv._)

    for(c = 0; c < argv.count; c++)
        console.log(list.generateNonsense(argv.listName))
