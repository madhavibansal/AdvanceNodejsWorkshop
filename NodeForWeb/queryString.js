const querystring = require('querystring');

const parsedQuery = querystring.parse('param1=value1&param2=value2');
console.log(parsedQuery); // Output: { param1: 'value1', param2: 'value2' }
console.log(parsedQuery.param1); // Output: 'value1'


const query = {param1: 'value1', param2: 'value2'};
const queryString = querystring.stringify(query);
console.log(queryString); // Output: 'param1=value1&param2=value2'
