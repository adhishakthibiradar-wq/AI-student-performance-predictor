import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function ChartCard({ result }) {
  const data = [
    {
      name: "Attendance",
      Marks: result.attendance,
    },
    {
      name: "Internal",
      Marks: result.internal_marks,
    },
    {
      name: "Assignment",
      Marks: result.assignment_marks,
    },
  ];

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl">

      <h2 className="text-2xl font-bold text-white mb-6">
        📊 Performance Analytics
      </h2>

      <div style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

            <XAxis
              dataKey="name"
              stroke="#CBD5E1"
            />

            <YAxis
              stroke="#CBD5E1"
              domain={[0, 100]}
            />

            <Tooltip />

            <Bar
              dataKey="Marks"
              radius={[8, 8, 0, 0]}
              fill="#3B82F6"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default ChartCard;