import { useState } from "react";
import api from "../services/api";

function StudentForm() {
  const [formData, setFormData] = useState({
    name: "",
    attendance: "",
    internal_marks: "",
    assignment_marks: "",
  });
  const [result, setResult] = useState(null);
const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const response = await api.post("/predict", {
      ...formData,
      attendance: Number(formData.attendance),
      internal_marks: Number(formData.internal_marks),
      assignment_marks: Number(formData.assignment_marks),
    });

    setResult(response.data.student);

  } catch (error) {
    console.error(error);
    alert("Prediction Failed");
  } finally {
    setLoading(false);
  }
};

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto" }}>
      <h2>AI Student Performance Predictor</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <label>Attendance (%)</label>
          <br />
          <input
            type="number"
            name="attendance"
            value={formData.attendance}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <label>Internal Marks</label>
          <br />
          <input
            type="number"
            name="internal_marks"
            value={formData.internal_marks}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <label>Assignment Marks</label>
          <br />
          <input
            type="number"
            name="assignment_marks"
            value={formData.assignment_marks}
            onChange={handleChange}
          />
        </div>

        <br />

        <button type="submit" disabled={loading}>
  {loading ? "Predicting..." : "Predict Performance"}
</button>
      </form>
      {result && (
  <div
    style={{
      marginTop: "30px",
      border: "1px solid #ccc",
      padding: "20px",
      borderRadius: "10px",
    }}
  >
    <h3>Prediction Result</h3>

    <p>
      <strong>Name:</strong> {result.name}
    </p>

    <p>
      <strong>Prediction:</strong> {result.prediction}
    </p>

    <p>
      <strong>AI Feedback:</strong>
    </p>

    <p>{result.ai_feedback}</p>
  </div>
)}
    </div>
  );
}

export default StudentForm;