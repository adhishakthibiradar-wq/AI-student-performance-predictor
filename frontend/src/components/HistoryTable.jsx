import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import api from "../services/api";
import DeleteModal from "./DeleteModal";

function HistoryTable() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await api.get("/history");
      setStudents(res.data.students);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  const deleteStudent = async () => {
  try {
    await api.delete(`/history/${selectedId}`);

    setShowModal(false);

    fetchHistory();

  } catch (err) {
    console.log(err);
  }
};

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mt-12">

      <h2 className="text-2xl font-bold text-white mb-6">
        📚 Prediction History
      </h2>

      <input
        type="text"
        placeholder="Search Student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 px-4 py-3 rounded-xl bg-slate-800 text-white outline-none"
      />

      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead>

            <tr className="text-slate-300 border-b border-slate-700">

              <th className="py-3">Student</th>

              <th>Prediction</th>

              <th>Attendance</th>

              <th>Internal</th>

              <th>Assignment</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {filteredStudents.map((student) => (

              <tr
                key={student._id}
                className="border-b border-slate-800"
              >

                <td className="py-4 text-white">
                  {student.name}
                </td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      student.prediction === "Pass"
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {student.prediction}
                  </span>

                </td>

                <td className="text-slate-300">
                  {student.attendance}%
                </td>

                <td className="text-slate-300">
                  {student.internal_marks}
                </td>

                <td className="text-slate-300">
                  {student.assignment_marks}
                </td>

                <td>
               <button
  onClick={() => {
  setSelectedId(student._id);
  setShowModal(true);
}}
  className="text-red-400 hover:text-red-600 transition"
  title="Delete Prediction"
>
  <FaTrash size={18} />
</button>
</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <DeleteModal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  onDelete={deleteStudent}
/>

    </div>
  );
}

export default HistoryTable;