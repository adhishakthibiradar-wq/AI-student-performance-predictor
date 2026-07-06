import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="text-center py-20">

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-bold text-white"
      >
        AI Student Performance Predictor
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-slate-400 mt-6 text-lg max-w-3xl mx-auto"
      >
        Predict student performance using Machine Learning and receive
        personalized study recommendations powered by Gemini AI.
      </motion.p>

    <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="mt-10 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold text-lg shadow-xl hover:shadow-purple-500/30 transition"
>
  🚀 Start Prediction
</motion.button>

<div className="flex flex-wrap justify-center gap-4 mt-10">

  <div className="bg-slate-900 border border-slate-700 rounded-xl px-6 py-3">
    <h3 className="text-blue-400 font-semibold">
      🤖 Gemini AI
    </h3>
  </div>

  <div className="bg-slate-900 border border-slate-700 rounded-xl px-6 py-3">
    <h3 className="text-green-400 font-semibold">
      📊 Machine Learning
    </h3>
  </div>

  <div className="bg-slate-900 border border-slate-700 rounded-xl px-6 py-3">
    <h3 className="text-purple-400 font-semibold">
      🍃 MongoDB
    </h3>
  </div>

</div>

    </section>
  );
}

export default Hero;