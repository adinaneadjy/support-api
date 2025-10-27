const mongoose = require("mongoose");

const requestTypeSchema = new mongoose.Schema(
  {
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    priority: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
      default: "medium",
    },
    category: { type: String, required: true },
    estimatedResponseTime: { type: Number },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

// **exporter le modèle**
module.exports = mongoose.model("RequestType", requestTypeSchema);
