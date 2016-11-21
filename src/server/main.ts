import * as bodyParser from "body-parser";
import * as express from "express";

let app = express();

app.get("/", function (req, res) {
  res.send("<script src=\"myscripts.js\"></script>");
});

app.use(express.static("bin"));
app.listen(3000);
