export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-600">
            Overview of users, projects, and recent activity.
          </p>
        </div>

        <button className="cursor-pointer rounded-lg bg-gray-900 px-4 py-2 font-medium text-white shadow">
          Admin
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-gray-500">Total Users</h3>
          <p className="mt-2 text-2xl font-bold text-gray-900">120</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-gray-500">Projects</h3>
          <p className="mt-2 text-2xl font-bold text-gray-900">45</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-gray-500">Revenue</h3>
          <p className="mt-2 text-2xl font-bold text-gray-900">₹25,000</p>
        </div>
      </div>

      <div className="rounded-xl bg-white p-6 shadow">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">Recent Activity</h2>

        <ul className="space-y-3 text-gray-600">
          <li>✅ New user registered</li>
          <li>📦 New project added</li>
          <li>💰 Payment received</li>
        </ul>
      </div>
    </div>
  );
}