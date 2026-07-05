const express = require("express");

const router = express.Router();

const { predictStudent } = require("../controllers/predictionController");

router.post("/predict", predictStudent);

module.exports = router;