const fs = require('fs')
const os = require('os')

function init(fileNames) {

    try {
        if(fileNames.length < 1) throw new Error('At least one filename must be specified')
        this.content = getDataFileContentAsObject(fileNames)
    }
    catch(err) {
        console.error(err.message)
        process.exit(-1)
    }

    this.generateNonsense = generateNonsense

}

function generateNonsense(entryList) {

    const listName = function(listName) { return '{' + listName + '}' }
    const getRandomInt = function(max) { return Math.floor(Math.random() * Math.floor(max)) }
    const getRandomIntBetween = function(min, max) { return Math.floor(Math.random() * (max - min) + min) }
    const isSubstitutionNeeded = function(str) { return (str.match(/\{[^{}]*\}/g) || []).length > 0 }
    const getFirstSubstitionNeeded = function(str) { return str.match(/\{[^{}]*\}/)[0].replace('{', '').replace('}', '') }

    if(!entryList) { 
        console.error('need listname for entrypoint') 
        process.exit(-1)
    }

    str = listName(entryList)

    while(isSubstitutionNeeded(str)) {
        subst = getFirstSubstitionNeeded(str)

        switch(subst[0]) {
            case '#':
                tmpArray = subst.replace('#', '').split('-')
                substw = getRandomIntBetween(Number(tmpArray[0]), Number(tmpArray[1]))
                break
            case '[':
                tmpArray = subst.replace('[', '').split('|')
                substw = tmpArray[getRandomIntBetween(0, tmpArray.length)]
                break
//            case '!':
//                tmpArray = subst.replace('!', '').split(':')
//                substw = new init(tmpArray[0]).generateNonsense(tmpArray[1] || undefined)
//                substw = '[' + subst + ']'
//                break
            default:
                    try {
                        substw = this.content[subst][getRandomInt(this.content[subst].length)]
                    }
                    catch(err) {
                        substw = `[list ${subst} not found]`
                    }
        }

        str = str.replace('{' + subst + '}', substw)
    }

    return str
}

function getDataFileContentAsObject(fileNames) {

    let finalContent = {}

    for(fileName of fileNames) {

        let content = {}
        let fileContent = fs.readFileSync(fileName).toString().split(os.EOL+os.EOL)

            for(el of fileContent) {
                let array = el.split(os.EOL).filter(word => word.length > 0).filter(word => word[0] != '#')
                content[array.shift()] = array
            }

            for(el in content) {
                if(content[el].length === 0) delete content[el]
            }

        finalContent = { ...finalContent, ...content}

    }

return finalContent
}

module.exports = init
