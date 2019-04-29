const mdLinks = require ('./index');
const filePath = process.argv[2];
const path = require('path');
const colors = require('colors');
const fileReaded = mdLinks(filePath, null)
//let markdownLinkExtractor = require('markdown-link-extractor');
//console.log(colors);


const inputPath = (input) => {
  if (input != undefined) {
    console.log("Your input is an addres".magenta);
    return true;
  } else {
    console.log("Your input is´nt a addres".red);
    return false;
  }
};
inputPath(filePath);
// console.log(inputPath("something"));

// const realPath = (inputRealExist) => {
//   if (fs.existsSync(inputRealExist)) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(realPath('./README.md'));

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
mdFile(filePath);
// console.log(mdFile('readme.md'));

//After read the file
fileReaded.then(
    (data) =>{
        console.log("Links encontrados:".yellow);
        urlList(data);
        },
        (err) => { 
        console.error(err);
        }    
);

let htmlLinks = [];
//Function to find the url, the text and the origin path
const urlList = (data) => {
    const mdLinkOne = /\[(.+?)\]\(.+?\)/g;
    const mdLinkTwo = /\[(.+?)\]\((.+?)\)/;
    let allLinks = data.match(mdLinkOne);
    for ( let x in allLinks) {
        var groupDataTotal = mdLinkTwo.exec(allLinks[x]);
        var groupData = {
            href : groupDataTotal[2],
            title : groupDataTotal[1],
            path : filePath
        };
        htmlLinks.push(groupData);
    }
    console.log(htmlLinks);
};


// module.exports = {
//   realPath,
//   inputPath,
//   mdFile,
//   readFile,
//   urlList,
// };