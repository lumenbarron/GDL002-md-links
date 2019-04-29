const fs = require('fs');
const path = require('path');

// module.exports = (message) => {
//   message.toUpperCase();
// };

module.exports = (filePath, options) => {
  return new Promise((resolve, reject)=> {
    // Read a file
    fs.readFile(filePath, function(err, data){
      if (err){
        return reject(err);
      }
      resolve(data.toString());
    });
  });
 };
 // const readFile = (pathName) => {
//   let markdown = fs.readFileSync(pathName).toString();
//   let links = markdownLinkExtractor(markdown);
//   links.forEach(function(link) {
//     console.log(link);
//   });
// };