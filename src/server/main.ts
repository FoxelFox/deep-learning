import * as bodyParser from "body-parser";
import * as express from "express";

let app = express();

app.get("/", (req, res) => {
  res.send("<script src=\"client/bundle.js\"></script><app-main></app-main>");
});

app.use(express.static("bin"));
app.listen(3000);
