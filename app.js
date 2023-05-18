const path = require("path");

const express = require("express");

const portfolioRoutes = require("./routes/portfolio");

const app = express();

let port = process.env.PORT || 4000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.static("img"));
app.use(express.static("js"));
app.use(express.urlencoded({ extended: false }));

app.use(portfolioRoutes);

app.listen(port);