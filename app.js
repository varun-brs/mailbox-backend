const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;
const store = require("./store");
const mailData = require("./mailData");
const indexRouter = require("./routes/index.js");
const inboxRouter = require("./routes/inbox.js");
const app = express();

store.set("mailData", mailData);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/inbox", inboxRouter);

app.listen(port, console.log(`Servering is running on ${port}`));
