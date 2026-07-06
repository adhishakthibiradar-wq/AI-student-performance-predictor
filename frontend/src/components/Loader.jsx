import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

function Loader() {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-3xl p-10 text-center shadow-xl">

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
        className="flex justify-center"
      >
        <div className="bg-blue-600 p-5 rounded-full">
          <FaRobot className="text-white text-4xl" />
        </div>
      </motion.div>

      <h2 className="text-white text-2xl font-bold mt-6">
        AI is analyzing...
      </h2>

      <p className="text-slate-400 mt-3">
        Predicting performance using Machine Learning
      </p>

      <div className="mt-8 w-full bg-slate-800 rounded-full h-3 overflow-hidden">

        <motion.div
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-3"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        />

      </div>

      <div className="mt-8 text-left space-y-2 text-slate-300">

        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          ✔ Checking attendance...
        </motion.p>

        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1, delay: 0.3 }}
        >
          ✔ Evaluating internal marks...
        </motion.p>

        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1, delay: 0.6 }}
        >
          ✔ Generating AI feedback...
        </motion.p>

      </div>

    </div>
  );
}

export default Loader;