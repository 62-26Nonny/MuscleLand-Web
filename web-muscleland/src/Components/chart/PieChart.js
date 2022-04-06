import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from "recharts";
import "./pieChart.css";

const COLORS = ["#31FA42", "#FFC64B", "#FF4428"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  if (percent !== 0) {
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  }
  else {
    return null;
  }
};

function sumValue(obj) {
  var sum = 0
  for (var i = 0; i < obj.length; i++) {
    sum += obj[i].value
    console.log(sum)
  }
  return sum;
}

export default function render(props) {
  var data = props.data;
  var title = props.title;
  if (sumValue(data) > 0) {
    return (
      <div>
        <h2>{title}</h2>
        <PieChart width={500} height={500}>
          <Legend layout="vertical" verticalAlign="top" align="right" />
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={180}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    );
  }
  else {
    return (
      <h1>No data</h1>
    );
  }
}
