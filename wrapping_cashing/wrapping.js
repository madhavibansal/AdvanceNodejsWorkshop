const fs = require('fs')
const wrappeedFs = {
    ...fs,
    readJSONSync(path){
        const jsonString = fs.readFileSync(path,'utf8')
        return JSON.parse(jsonString)
    }

}
module.exports = wrappeedFs