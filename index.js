const fs = require('fs');
const path = require('path');
const colors = require('colors');
let markdownLinkExtractor = require('markdown-link-extractor');
//const markdownIt = require('markdown-it');
// const md = new markdownIt ({
//   html: true ,
//   linkify :true
// });
//const folderPath = 'C:\\Users\\LucyM\\Documents\\laboratoria\\GDL002-md-links\\index.js';
console.log(colors);

const inputPath = (input) => {
  if (input != undefined) {
    console.log("Your input is an addres".green);
    return true;
  } else {
    console.log("Your input is´nt a addres");
    return false;
  }
};
console.log(inputPath("something"));


const realPath = (inputRealExist) => {
  if (fs.existsSync(inputRealExist)) {
    return true;
  } else {
    return false;
  }
};
console.log(realPath('./README.md'));


const mdFile = (pathFile) => {
  const pathExt = path.extname(pathFile);
  if (pathExt != '.md') {
    console.log('it doesn´t a file markdown'.red);
    return false;
  } else {
    console.log('it´s a markdown file'.magenta);
    return true;
  }
};
console.log(mdFile('readme.md'));

// fs.readdir(process.argv[2], function (err, files){
//   files
//   .filter(function (file){
//     return path.extname(file) === '.' + process.argv[3];})
//   .forEach(function (file) {
//       console.log(file);
//   })

// });

const readFile = (pathName) => {
  let markdown = fs.readFileSync(pathName).toString();
  let links = markdownLinkExtractor(markdown);
  links.forEach(function(link) {
    console.log(link);
  });
};
console.log(readFile('./README.md'));

module.exports = {
  realPath,
  inputPath,
  mdFile,
  readFile,
};

function wait (ms) {
  return new Promise (function (resolve){
    console.log(this);
    window.setTimeout(function(){
      resolve();
    }, ms);
  });
};