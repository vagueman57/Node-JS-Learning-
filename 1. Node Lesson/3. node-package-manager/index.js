
const lodash = require('lodash');

const names = ['Raj', 'John', 'terry', 'alex']
const capitalize = lodash.map(names, lodash.capitalize )

console.log(capitalize);