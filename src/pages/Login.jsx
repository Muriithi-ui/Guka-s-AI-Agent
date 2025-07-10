import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify"; // ✅ Toastify import

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success(`Welcome back, ${email.split("@")[0]}!`); // ✅ Toast on success
      navigate("/dashboard");
    } catch (err) {
      setError("Login failed. Check your credentials.");
      toast.error("Login failed. Check your credentials."); // ✅ Toast on error
      console.error("Login error:", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <form onSubmit={handleLogin} className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center">Guka's AI Agent</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
        <button type="submit" className="w-full px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700">
          Login
        </button>
      </form>
    </div>
  );
}
