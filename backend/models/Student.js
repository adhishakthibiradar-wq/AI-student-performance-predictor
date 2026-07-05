const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    attendance: {
      type: Number,
      required: true,
    },
    internal_marks: {
      type: Number,
      required: true,
    },
    assignment_marks: {
      type: Number,
      required: true,
    },
    prediction: {
      type: String,
      required: true,
    },
    ai_feedback: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", studentSchema);