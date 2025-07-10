import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError("Login failed. Check your credentials.");
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
        <button type="submit" className="w-full px-4 py-2 text-white bg-green-600 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
