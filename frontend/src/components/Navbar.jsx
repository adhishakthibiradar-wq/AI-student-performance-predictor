import { Link } from "react-router-dom";
import { FaRobot } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="w-full bg-slate-900 border-b border-slate-700">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <FaRobot className="text-white text-xl" />
          </div>

          <div>
            <h1 className="text-white text-xl font-bold">
              AI Student Predictor
            </h1>

            <p className="text-slate-400 text-sm">
              Machine Learning + Gemini AI
            </p>
          </div>
        </div>

        <div className="flex gap-8 text-slate-300 font-medium">
  <Link to="/" className="hover:text-blue-400 transition">
    Home
  </Link>

  <Link to="/history" className="hover:text-blue-400 transition">
    History
  </Link>

</div>
      </div>
    </nav>
  );
}

export default Navbar;