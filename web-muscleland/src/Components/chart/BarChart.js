import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./barChart.css";

export default function MyBarChart({ data, title }) {
  return (
    <div className="barChart">
      <h3 className="barChartTitle">{title}</h3>
      <BarChart width={800} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="number" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}
