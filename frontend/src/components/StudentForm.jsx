import { useState } from "react";
import {
  FaUserGraduate,
  FaClipboardCheck,
  FaBookOpen,
  FaTasks,
} from "react-icons/fa";

import api from "../services/api";
import PredictionCard from "./PredictionCard";
import FeedbackCard from "./FeedbackCard";
import ChartCard from "./ChartCard";
import Loader from "./Loader";
import SuccessAnimation from "./SuccessAnimation";

function StudentForm() {
  const [formData, setFormData] = useState({
    name: "",
    attendance: "",
    internal_marks: "",
    assignment_marks: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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

      const [res] = await Promise.all([
  api.post("/predict", {
    ...formData,
    attendance: Number(formData.attendance),
    internal_marks: Number(formData.internal_marks),
    assignment_marks: Number(formData.assignment_marks),
  }),
  new Promise((resolve) => setTimeout(resolve, 2500)),
]);

      setResult(res.data.student);

setLoading(false);

setShowSuccess(true);

setTimeout(() => {
  setShowSuccess(false);
  setLoading(false);
}, 1000);

return;
    } catch (err) {
      console.error(err);
      alert("Prediction Failed");
    } finally {
      
    }
  };

  return (
    <div className="space-y-8">

      {/* Student Form */}

      <div className="bg-slate-900 rounded-3xl shadow-xl border border-slate-700 p-8">

        <h2 className="text-3xl font-bold text-white mb-8">
          Student Information
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          <Input
            icon={<FaUserGraduate />}
            placeholder="Student Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <Input
            icon={<FaClipboardCheck />}
            placeholder="Attendance (%)"
            name="attendance"
            type="number"
            value={formData.attendance}
            onChange={handleChange}
          />

          <Input
            icon={<FaBookOpen />}
            placeholder="Internal Marks"
            name="internal_marks"
            type="number"
            value={formData.internal_marks}
            onChange={handleChange}
          />

          <Input
            icon={<FaTasks />}
            placeholder="Assignment Marks"
            name="assignment_marks"
            type="number"
            value={formData.assignment_marks}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold text-lg hover:scale-105 transition duration-300"
          >
            🚀 Predict Performance
          </button>

        </form>

      </div>

      {/* Loader */}

      {loading && !showSuccess && <Loader />}

      {/* Prediction Result */}

      {showSuccess ? (
  <SuccessAnimation prediction={result?.prediction} />
) : (
  !loading &&
  result && (
    <>
      <PredictionCard result={result} />

      <FeedbackCard result={result} />

      <ChartCard result={result} />
    </>
  )
)}

    </div>
  );
}

function Input({ icon, ...props }) {
  return (
    <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl px-4">

      <div className="text-blue-400 text-xl">
        {icon}
      </div>

      <input
        {...props}
        className="w-full bg-transparent outline-none text-white px-4 py-4"
      />

    </div>
  );
}

export default StudentForm;