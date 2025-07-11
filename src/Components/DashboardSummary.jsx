export default function DashboardSummary() {
    return (
      <div className="w-full max-w-3xl p-5 mx-auto space-y-6 bg-white shadow-lg rounded-2xl">
        {/* Header: Weather + Date */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="mb-2 sm:mb-0">
            <p className="text-sm text-gray-500">Hi, Good Morning</p>
            <h2 className="text-3xl font-bold">16°C</h2>
            <p className="text-sm text-gray-600">Partly Cloudy</p>
          </div>
          <div className="text-sm text-left text-gray-500 sm:text-right">
            <p>7:30 AM</p>
            <p>Dec 24</p>
          </div>
        </div>
  
        {/* Tasks Section */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="p-4 text-sm text-green-800 bg-green-100 rounded-xl">
            <p className="font-semibold">7:30 AM</p>
            <p className="text-xs">Watering of fields CD5</p>
            <span className="inline-block mt-2 px-2 py-0.5 text-[11px] bg-green-300 rounded">
              On-Progress
            </span>
          </div>
          <div className="p-4 text-sm text-yellow-800 bg-yellow-100 rounded-xl">
            <p className="font-semibold">8:00 AM</p>
            <p className="text-xs">Planting of fields CD5</p>
            <span className="inline-block mt-2 px-2 py-0.5 text-[11px] bg-yellow-300 rounded">
              Not Started
            </span>
          </div>
        </div>
  
        {/* Field Info */}
        <div>
          <div className="flex flex-col mb-3 sm:flex-row sm:justify-between sm:items-center">
            <h3 className="mb-1 text-sm font-bold text-gray-700 sm:mb-0">Our agriculture field</h3>
            <button className="text-xs text-green-600 underline">View Map</button>
          </div>
  
          <div className="overflow-hidden border border-gray-200 rounded-xl">
            <img
              src="https://source.unsplash.com/600x300/?farm,field"
              alt="Field"
              className="object-cover w-full h-36 sm:h-44"
            />
            <div className="p-3 text-xs text-gray-600">
              <p>Rice Field Premium Plot R8978</p>
              <p>7°47’41”S, 110°21’02.7”E</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  