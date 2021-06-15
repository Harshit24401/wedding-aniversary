//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
date = new Date().getDate()
console.log(date)

const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/generic.html", function(req, res){
  res.sendFile(__dirname + "/generic.html");
});

app.get("/elements.html", function(req, res){
  if (date == 19){
  res.sendFile(__dirname + "/elements.html")}
  else{res.sendFile(__dirname + "/not-yet.html")}
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
