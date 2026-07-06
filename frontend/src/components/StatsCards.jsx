import { FaUserGraduate, FaCheckCircle, FaRobot } from "react-icons/fa";
import { motion } from "framer-motion";

function StatsCards() {
  const cards = [
    {
      title: "Students Analyzed",
      value: "25+",
      icon: <FaUserGraduate />,
      color: "bg-blue-600",
    },
    {
      title: "Prediction Accuracy",
      value: "85%",
      icon: <FaCheckCircle />,
      color: "bg-green-600",
    },
    {
      title: "AI Status",
      value: "Online",
      icon: <FaRobot />,
      color: "bg-purple-600",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-10">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ scale: 1.03 }}
          className="bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-xl"
        >
          <div
            className={`${card.color} w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl`}
          >
            {card.icon}
          </div>

          <h3 className="text-slate-400 mt-5">
            {card.title}
          </h3>

          <p className="text-4xl font-bold text-white mt-2">
            {card.value}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export default StatsCards;