const express = require("express");

const router = express.Router();

const {
  predictStudent,
  getPredictionHistory,
  deleteHistory,
} = require("../controllers/predictionController");

router.get("/history", getPredictionHistory);
router.post("/predict", predictStudent);
router.delete("/history/:id", deleteHistory);

module.exports = router;