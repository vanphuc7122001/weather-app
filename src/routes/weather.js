const express = require("express");
const router = express.Router();
const weatherController = require("../app/controllers/weatherController");

router.get("/", weatherController.show);

module.exports = router;
