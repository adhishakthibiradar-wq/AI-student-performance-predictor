const axios = require("axios");
const Student = require("../models/Student");
const generateFeedback = require("../services/geminiService");

const predictStudent = async (req, res) => {
  try {
    const {
      name,
      attendance,
      internal_marks,
      assignment_marks,
    } = req.body;

    // Call Flask API
    const response = await axios.post(
      "http://127.0.0.1:5000/predict",
      {
        attendance,
        internal_marks,
        assignment_marks,
      }
    );

    // Save to MongoDB
    const student = await Student.create({
      name,
      attendance,
      internal_marks,
      assignment_marks,
      prediction: response.data.prediction,
    });

    console.log("Student saved");

    try {
  const feedback = await generateFeedback(student);

  console.log("Gemini feedback:", feedback);

  student.ai_feedback = feedback;

} catch (err) {
  console.log("Gemini unavailable:", err.message);

  student.ai_feedback =
    "AI feedback is temporarily unavailable because the Gemini API quota has been reached. Please try again later.";
}

    await student.save();

    console.log("✅ Student updated with feedback");

    res.status(201).json({
      success: true,
      student,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Prediction Failed",
    });
  }
};
const getPredictionHistory = async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      students,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch history",
    });
  }
};
const deleteHistory = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Prediction deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Delete failed",
    });
  }
};

module.exports = {
  predictStudent,
  getPredictionHistory,
  deleteHistory,
};