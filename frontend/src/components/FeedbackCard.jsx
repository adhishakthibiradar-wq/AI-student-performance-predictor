import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";
import ReactMarkdown from "react-markdown";

function FeedbackCard({ result }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-purple-600 p-3 rounded-xl">
          <FaRobot className="text-white text-xl" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">
            AI Mentor
          </h2>

          <p className="text-blue-400 text-sm font-medium">
  Personalized Study Guidance
</p>
        </div>
      </div>

      <div className="prose prose-invert prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300 max-w-none">
  <ReactMarkdown
    components={{
      h2: ({ children }) => (
        <h2 className="text-xl font-bold text-white mt-6 mb-3">
          {children}
        </h2>
      ),
      p: ({ children }) => (
        <p className="text-slate-300 mb-3">
          {children}
        </p>
      ),
      li: ({ children }) => (
        <li className="text-slate-300 ml-6 list-disc mb-2">
          {children}
        </li>
      ),
    }}
  >
    {result.ai_feedback}
  </ReactMarkdown>
</div>
    </motion.div>
  );
}

export default FeedbackCard;