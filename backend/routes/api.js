const express = require("express");
const router = express.Router();

const overviewData = {
  total: 100,
  inUse: 60,
  idle: 30,
  maintenance: 10,
};

const usageData = require("../data/usageData");

router.get("/overview", (req, res) => {
  res.json(overviewData);
});

router.get("/usageStats", (req, res) => {
  const days = req.query.days || "7";
  const data = usageData[days] || usageData["7"];
  res.json(data);
});

module.exports = router;
