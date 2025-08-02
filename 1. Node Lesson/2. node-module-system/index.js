// module.exports
// require -> import 

const firstModule = require('./1st_module.js');

console.log(firstModule.add(12, 32));

try{
  console.log("trying to divide by zero");
  let result = firstModule.divide(0, 10);
  console.log(result);

}catch(error){
  console.log("caught an error", error.message)

}


// // module wrapper
// (
//   function(exports, require, module, _filename, _dirname){
//     // your module code goes here
//   }
// )