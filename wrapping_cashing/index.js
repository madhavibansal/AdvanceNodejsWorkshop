const fs = require('./wrapping')
const config = fs.readJSONSync('./config.json')
console.log(config)