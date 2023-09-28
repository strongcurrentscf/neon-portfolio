const path = require("path");

const express = require("express");

const portfolioRoutes = require("./routes/portfolio");

const app = express();

let port = 4000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "img")));
app.use(express.static(path.join(__dirname, "js")));
app.use(express.urlencoded({ extended: false }));

app.use(portfolioRoutes);

app.listen(port);
