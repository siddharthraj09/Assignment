const request = require("request");
const cheerio = require("cheerio");
const jsonFile = require("./details.json");
const fs = require("fs");
const featureJson = require("./featured.json");
const url = "https://time.com";




function abc() {
  request(url, cb);
  //  console.log("*******************************")
  //  console.log(ans1)
}
function cb(err, response, html) {
  if (err) {
    console.log(err);
  } else if (response.statusCode == 404) {
    console.log("page not found");
  } else {
    // let topicLinks = getTopicLinks(html);
    getSideLinks(html);
    // console.log(ans)
    // return ans
    // conslog(html)
  }
}

//!To create JSON for main stories
//   function getTopicLinks(html) {
//     let selTool = cheerio.load(html);

//     let authLine = selTool(".featured-voices__list-item-author.display-block");
//     let headLine = selTool(
//       ".featured-voices__list-item-headline.display-block"
//     );
//     for (let i = 0; i < authLine.length; i++) {
//       let author = selTool(authLine[i]).text().trim();
//       let header = selTool(headLine[i]).text().trim();
//       // console.log(author);
//       // console.log(header);
//       writeToJason(author, header);
//       function writeToJason(content, Links) {
//         featureJson.push({
//           Title: content,
//           Body: Links,
//         });
//         let stringData = JSON.stringify(featureJson);
//         fs.writeFileSync("featured.json", stringData);
//         return stringData

//       }
//     }
//   }


//!To Create lastest side story content


function getSideLinks(html) {
  let selTool = cheerio.load(html);
  let headingSidelink = selTool(".latest-stories__item");
  let headerSide = selTool(".latest-stories__item-headline");

  const fileName = "details.json";

  if (jsonFile.length > 0) {
    for (let y = 0; y < jsonFile.length; y++) {
    // // jsonFile.push([]);
    // // let Data = JSON.stringify(jsonFile);
    // // fs.writeFileSync(fileName,Data);
    jsonFile.splice(0, jsonFile.length);
    // delete jsonFile[y].Title
    // delete jsonFile[y].Link
    }
    
  
  }


  for (let i = 0; i < headingSidelink.length; i++) {
    let anchors = selTool(headingSidelink[i]).find("a");
    let link = selTool(anchors).attr("href");
    let fullLink = "https://time.com" + link;
    //console.log(fullLink);
    let sideContentMain = selTool(headerSide[i]).text();
    let sideContent=sideContentMain;

    //console.log(sideContent)
    writeToJason(fileName, sideContent, fullLink);
  }
  // return arr;
}

function writeToJason(fileName, content, Links) {
  jsonFile.push({
    Title: content,
    Link: Links,
  });
  let stringData = JSON.stringify(jsonFile);
  fs.writeFileSync(fileName, stringData);
  // return stringData;
}

module.exports = {
  callFunc: abc,
};
