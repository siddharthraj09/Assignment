const request = require("request");
const cheerio = require("cheerio");
const jsonFile = require("./details.json");
const fs = require("fs");

let url = "https://time.com";

request(url, cb);

function cb(err, response, html) {
  if (err) {
    console.log(err);
  } else if (response.statusCode == 404) {
    console.log("page not found");
  } else {
    getTopicLinks(html);
    getSideLinks(html);
    // console.log(html)
  }
}

function getTopicLinks(html) {
  let selTool = cheerio.load(html);

  let authLine = selTool(".featured-voices__list-item-author.display-block");
  let headLine = selTool(".featured-voices__list-item-headline.display-block");
  for (let i = 0; i < authLine.length; i++) {
    let author = selTool(authLine[i]).text().trim();
    let header = selTool(headLine[i]).text().trim();
    // console.log(author);
    // console.log(header);
   // writeToJason(author, header);
  }
}

function getSideLinks(html) {
  let selTool = cheerio.load(html);
  let headingSidelink = selTool(".latest-stories__item");
  let headerSide=selTool(".latest-stories__item-headline");
  //console.log(topic);
  for (let i = 0; i < headingSidelink.length; i++) {
    let anchors = selTool(headingSidelink[i]).find("a");
    let link = selTool(anchors).attr("href");
    let fullLink = "https://time.com"+link
    //console.log(fullLink);
    let sideContent= selTool(headerSide[i]).text()
    
    //console.log(sideContent)
    writeToJason(sideContent,fullLink)
  }
}

function writeToJason(auth, head) {
  jsonFile.push({
    Title: auth,
    Link: head,
  });
  let stringData = JSON.stringify(jsonFile);
  fs.writeFileSync("details.json", stringData);
}
