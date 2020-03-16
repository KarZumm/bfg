const Generator = require('./src/generate')

const argv = require('optimist')
    .demand('listName')
    .default('count', 1)
    .argv

const list = new Generator(argv._)


    for(c = 0; c < argv.count; c++)
        console.log(list.generateNonsense(argv.listName))

/*


var start = new Date()
var hrStart = process.hrtime()


var end = new Date() - start
var hrEnd = process.hrtime(hrStart)

console.info('Execution time: %dms', end)
console.info('Execution time (hr): %ds %dms', hrEnd[0], hrEnd[1] / 1000000)
*/
