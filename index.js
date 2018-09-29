const express = require('express');
const app = express();
const api = require("./routes");
const bodyParser=require('body-parser')
app.use(bodyParser.json());
app.use("/todos/",api);
app.listen(3000)