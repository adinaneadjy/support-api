const express = require("express");
const RequestType = require("../models/RequestType");
const router = express.Router();

// GET tous les types actifs
router.get("/", async (req, res) => {
  const types = await RequestType.find({ isActive: true });
  res.json(types);
});

// GET un type par ID
router.get("/:id", async (req, res) => {
  try {
    const type = await RequestType.findById(req.params.id);
    if (!type) return res.status(404).json({ message: "Not found" });
    res.json(type);
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
});

// POST créer un type
router.post("/", async (req, res) => {
  try {
    const newType = await RequestType.create(req.body);
    res.status(201).json(newType);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
