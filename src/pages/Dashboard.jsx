const topics = [
  { title: "Weather", icon: "🌦️" },
  { title: "Pests", icon: "🐛" },
  { title: "Yields", icon: "🌾" },
  { title: "Markets", icon: "📈" },
  { title: "Farm Practices", icon: "🚜" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-green-50 p-4">
      <h1 className="text-2xl font-bold mb-6">Guka’s AI Agent</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {topics.map((t) => (
          <div
            key={t.title}
            className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4 hover:bg-green-100 transition cursor-pointer"
          >
            <span className="text-3xl">{t.icon}</span>
            <h2 className="text-xl font-semibold">Ask about {t.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
