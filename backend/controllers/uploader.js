const express = require("express");
const app = express();
const file_collection = require("./../models/file_uploader");
app.use(express.json());
var aws = require("aws-sdk");
var bodyParser = require("body-parser");
const multer = require("multer");
const multerS3 = require("multer-s3");
// require("dotenv/config");

aws.config.update({
  secretAccessKey: "7XqnP612LqtvGOZV1lOnP4zxtz4uFfin74D5PVn7",
  accessKeyId: "AKIAUFJNEO36HDYRDC45",
  region: "ap-south-1",
});
var name;
var s3 = new aws.S3();
var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "hacksummit",
    key: function (req, file, cb) {
      name = file.originalname;
      cb(null, file.originalname);
    },
  }),
});

app.post("/file", upload.array("file", 1), function (req, res, next) {
  //   console.log(file);

  name = name.replace(/ /g, "+");
  console.log(`https://hacksummit.s3.ap-south-1.amazonaws.com/${name}`);
  res.send("file uploaded");
});

module.exports = app;
