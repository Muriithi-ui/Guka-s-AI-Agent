import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const topics = [
  { title: "Weather", icon: "🌦️" },
  { title: "Pests", icon: "🐛" },
  { title: "Yields", icon: "🌾" },
  { title: "Markets", icon: "📈" },
  { title: "Farm Practices", icon: "🚜" },
];

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="relative min-h-screen p-4 bg-green-50">
      {/* Logout button */}
      <button
        onClick={handleLogout}
        className="absolute px-4 py-2 text-sm text-white bg-red-500 rounded top-4 right-4 hover:bg-red-600"
      >
        Logout
      </button>

      <h1 className="mb-6 text-2xl font-bold">Guka’s AI Agent</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
