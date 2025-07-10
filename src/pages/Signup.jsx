import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success(`Account created! Welcome, ${email.split("@")[0]} 🎉`);
      navigate("/dashboard");
    } catch (err) {
      setError("Signup failed. Try a stronger password or different email.");
      toast.error("Signup failed. Please try again.");
      console.error("Signup error:", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <form onSubmit={handleSignup} className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center">Sign up to Guka’s AI Agent</h1>

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

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
        >
          Sign Up
        </button>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 hover:underline">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}
