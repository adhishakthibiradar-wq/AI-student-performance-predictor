import Navbar from "../components/Navbar";
import HistoryTable from "../components/HistoryTable";
import Footer from "../components/Footer";

function History() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <HistoryTable />
      </div>

      <Footer />
    </div>
  );
}

export default History;