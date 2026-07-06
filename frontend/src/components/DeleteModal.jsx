import { FaTrash } from "react-icons/fa";

function DeleteModal({ isOpen, onClose, onDelete }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 w-[420px] shadow-2xl">

        <div className="flex justify-center mb-5">
          <div className="bg-red-500/20 p-4 rounded-full">
            <FaTrash className="text-red-500 text-3xl" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-white">
          Delete Prediction
        </h2>

        <p className="text-slate-400 text-center mt-4">
          Are you sure you want to delete this student's prediction?
        </p>

        <div className="flex justify-center gap-5 mt-8">

          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-slate-700 text-white hover:bg-slate-600 transition"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            className="px-6 py-3 rounded-xl bg-red-600 text-white hover:bg-red-700 transition"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default DeleteModal;