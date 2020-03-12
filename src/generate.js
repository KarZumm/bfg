const fs = require('fs')

function init(fileName) {
    try {
        this.content = getDataFileContentAsObject(fileName)
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

    if(!entryList) entryList = 'DEFAULT'

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

function getDataFileContentAsObject(fileName) {
    let content = {}
    let fileContent = fs.readFileSync(fileName).toString().split('\r\n\r\n')

    for(el of fileContent) {
        let array = el.split('\r\n').filter(word => word.length > 0).filter(word => word[0] != '#')
        content[array.shift()] = array
    }

    for(el in content) {
        if(content[el].length === 0) delete content[el]
    }

return content
}

module.exports = init
