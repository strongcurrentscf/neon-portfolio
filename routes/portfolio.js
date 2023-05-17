const express = require("express");
// const portfolioController = require("../controllers/portfolio-controller");
const router = express.Router();

router.get("/", function (req, res) {
  res.render("landing-page");
});

router.get("/project-forkify", function (req, res) {
  res.render("project-forkify");
})

router.get("/project-rudumb", function (req, res) {
  res.render("project-rudumb");
})

module.exports = router;
