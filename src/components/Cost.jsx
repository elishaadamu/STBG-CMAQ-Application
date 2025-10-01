import React from "react";

export default function Dashboard() {
  const projects = [
    {
      rank: 1,
      project: "Project 1",
      type: "Highway",
      safety: 100.0,
      congestion: 10.0,
      equity: 18.4,
      benefit: 128.4,
      cost: 14.3,
      bcr: 8.98,
    },
    {
      rank: 2,
      project: "Project 3",
      type: "Intersection",
      safety: 3.3,
      congestion: 3.4,
      equity: 11.9,
      benefit: 18.6,
      cost: 6.7,
      bcr: 2.77,
    },
    {
      rank: 3,
      project: "Project 2",
      type: "Intersection",
      safety: 0.0,
      congestion: 0.0,
      equity: 12.4,
      benefit: 12.4,
      cost: 5.8,
      bcr: 2.14,
    },
  ];

  const totalCost = projects.reduce((sum, p) => sum + p.cost, 0).toFixed(1);
  const topBCR = Math.max(...projects.map((p) => p.bcr));

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header with Cost Estimate */}
      <header className="  text-center py-6 rounded-2xl shadow-md mb-6">
        <h1 className="text-3xl font-bold">Project Cost Estimate</h1>
        <p className="text-xl mt-2">Total Estimated Cost: ${totalCost}M</p>
      </header>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-100 text-center p-6 rounded-2xl shadow">
          <p className="text-lg font-medium">Total Projects</p>
          <p className="text-3xl font-bold text-blue-600">{projects.length}</p>
        </div>
        <div className="bg-green-100 text-center p-6 rounded-2xl shadow">
          <p className="text-lg font-medium">Top Ranked BCR</p>
          <p className="text-3xl font-bold text-green-600">{topBCR}</p>
        </div>
        <div className="bg-purple-100 text-center p-6 rounded-2xl shadow">
          <p className="text-lg font-medium">Total Cost</p>
          <p className="text-3xl font-bold text-purple-600">${totalCost}M</p>
        </div>
      </div>

      {/* Projects Table */}
      <div className="bg-white p-6 rounded-2xl shadow overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm">
              <th className="p-3 text-left">Rank</th>
              <th className="p-3 text-left">Project</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Safety Score</th>
              <th className="p-3 text-left">Congestion Score</th>
              <th className="p-3 text-left">Equity Score</th>
              <th className="p-3 text-left">Benefit</th>
              <th className="p-3 text-left">Cost (M)</th>
              <th className="p-3 text-left">BCR</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.rank} className="border-b hover:bg-gray-50">
                <td className="p-3 font-semibold">#{p.rank}</td>
                <td className="p-3">{p.project}</td>
                <td className="p-3">{p.type}</td>
                <td className="p-3">{p.safety}</td>
                <td className="p-3">{p.congestion}</td>
                <td className="p-3">{p.equity}</td>
                <td className="p-3">{p.benefit}</td>
                <td className="p-3">${p.cost}</td>
                <td className="p-3 font-bold text-green-600">{p.bcr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
