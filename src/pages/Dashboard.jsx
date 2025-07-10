import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify"; // ✅ Toastify import

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
      toast.success("You’ve been logged out."); // ✅ Toast notification
      navigate("/login");
    } catch (error) {
      toast.error("Logout failed. Please try again."); // ✅ Error toast
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

      {/* User greeting */}
      <h1 className="mb-2 text-xl font-semibold">
        Welcome, {userEmail ? userEmail.split("@")[0] : "Farmer"} 👋
      </h1>

      <h2 className="mb-6 text-2xl font-bold">Guka’s AI Agent</h2>

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
