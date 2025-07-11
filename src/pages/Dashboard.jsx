import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import DashboardSummary from "../Components/DashboardSummary"; // ✅ New import

const topics = [
  { title: "Weather", icon: "🌦️" },
  { title: "Pests", icon: "🐛" },
  { title: "Yields", icon: "🌾" },
  { title: "Markets", icon: "📈" },
  { title: "Farm Practices", icon: "🚜" },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUserEmail(currentUser.email);
    }
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("You’ve been logged out.");
      navigate("/login");
    } catch (error) {
      toast.error("Logout failed. Please try again.");
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="min-h-screen p-4 bg-green-50">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold">
          Welcome, {userEmail ? userEmail.split("@")[0] : "Farmer"} 👋
        </h1>
        <button
          onClick={handleLogout}
          className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Dashboard summary card (hero section) */}
      <DashboardSummary />

      {/* Optional topic cards */}
      <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2">
        {topics.map((t) => (
          <div
            key={t.title}
            className="flex items-center gap-4 p-6 transition bg-white shadow-md cursor-pointer rounded-2xl hover:bg-green-100"
          >
            <span className="text-3xl">{t.icon}</span>
            <h2 className="text-xl font-semibold">Ask about {t.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
