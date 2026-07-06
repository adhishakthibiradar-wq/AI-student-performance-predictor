import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function PredictionCard({ result }) {
  const isPass =
    result.prediction.toLowerCase() === "pass";

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl"
    >
      <h2 className="text-2xl font-bold text-white mb-6">
        Prediction Result
      </h2>

      <div
        className={`rounded-2xl p-6 flex items-center gap-4 ${
          isPass
            ? "bg-green-500/20 border border-green-500"
            : "bg-red-500/20 border border-red-500"
        }`}
      >
        {isPass ? (
          <FaCheckCircle className="text-5xl text-green-400" />
        ) : (
          <FaTimesCircle className="text-5xl text-red-400" />
        )}

        <div>
          <h3
            className={`text-3xl font-bold ${
              isPass ? "text-green-400" : "text-red-400"
            }`}
          >
            {result.prediction}
          </h3>

          <p className="text-slate-300 mt-1">
            AI Prediction Completed
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8">

        <StatCard
          title="Attendance"
          value={`${result.attendance}%`}
        />

        <StatCard
          title="Internal"
          value={result.internal_marks}
        />

        <StatCard
          title="Assignment"
          value={result.assignment_marks}
        />

        <StatCard
          title="Student"
          value={result.name}
        />

      </div>
    </motion.div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-slate-800 rounded-xl p-4">

      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h3 className="text-white text-xl font-bold mt-2">
        {value}
      </h3>

    </div>
  );
}

export default PredictionCard;