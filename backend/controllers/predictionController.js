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

    const feedback = await generateFeedback(student);

    console.log("Gemini feedback:", feedback);

    student.ai_feedback = feedback;

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

module.exports = {
  predictStudent,
};