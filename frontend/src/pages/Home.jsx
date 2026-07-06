import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StudentForm from "../components/StudentForm";
import Footer from "../components/Footer";
import StatsCards from "../components/StatsCards";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950">

      <Navbar />

      <Hero />

      <div className="max-w-7xl mx-auto px-6">

        <StudentForm />
        <StatsCards />

      </div>

      <Footer />

    </div>
  );
}

export default Home;