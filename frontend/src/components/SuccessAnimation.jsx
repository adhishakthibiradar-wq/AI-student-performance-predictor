import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

function SuccessAnimation({ prediction }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="bg-slate-900 border border-slate-700 rounded-3xl p-12 text-center shadow-xl"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center"
      >
        <FaCheckCircle className="text-green-500 text-7xl" />
      </motion.div>

      <h1 className="text-4xl font-bold text-white mt-6">
        🎉 Prediction Complete!
      </h1>

      <h2
        className={`text-3xl font-bold mt-6 ${
          prediction === "Pass"
            ? "text-green-400"
            : "text-red-400"
        }`}
      >
        {prediction === "Pass" ? "🟢 PASS" : "🔴 FAIL"}
      </h2>

      <p className="text-slate-300 mt-6 text-lg">
        ✨ AI Feedback Generated Successfully
      </p>
    </motion.div>
  );
}

export default SuccessAnimation;