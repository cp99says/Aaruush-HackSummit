const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://sd2001:sddb@cluster0.ck7q8.mongodb.net/Pariksha?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  },
  () => {
    console.log(`connected to mongoDB atlas`);
  }
);
app.use(cors());
app.get("/", (req, res) => {
  res.send("server is up at AZURE!!");
});
const api = require("./controllers/uploader");
app.use("/upload", api);
const PORT = 4500;
app.listen(PORT, () => {
  console.log(`server started at PORT ${PORT}`);
});
