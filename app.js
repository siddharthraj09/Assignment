const express = require("express");
const app = express();
const port = 3000;
const { callFunc } = require("./main");

//let resp = callFunc();
const fs = require("fs");

app.get("/getTimeStories", (req, res) => {
  const resp = callFunc(); //call function
  const rawdata = fs.readFileSync("details.json");
  const student = JSON.parse(rawdata);
 // console.log(student);
  
  res.json(student);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
