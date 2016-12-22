import * as bodyParser from "body-parser";
import * as express from "express";

let app = express();

app.get("/", (req, res) => {
  res.send("<app-main></app-main><script src=\"client/bundle.js\"></script>");
});

app.use(express.static("bin"));
app.listen(3456);