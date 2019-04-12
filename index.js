// module.exports = () => {
//   // ...
// };

const fs = require('fs');
const path = require('path');



// const mdLinks = (path, options) => {

// }


// const md = (pathFile) => {
//   const pathExt = path.extname(pathFile);
//   if (pathExt != '.md') {
//     console.log('it doesn´t a file markdown');
//     return false
//   } else {
//     console.log('it´s a markdown file');
//     return true;
//   }

// }
// console.log(md('readme.md'));


fs.readdir(process.argv[2], function (err, files){
  files
  .filter(function (file){
    return path.extname(file) === '.' + process.argv[3];}) 
  .forEach(function (file) {
      console.log(file);
  })
});



// fs.readFile('./texto.txt', function (err, data) {
//   if (err) {
//       console.log(err);
      
//   } console.log(data.toString().green);
// })