import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem("user", "dummy");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">Welcome to Guka's AI Agent</h1>
        <button onClick={handleLogin} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}
