import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function MyBarChart({ data, title }) {
  return (
    <div className="barChart">
      <h3 className="barChartTitle">{title}</h3>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="complete" fill="#8884d8" />
        <Bar dataKey="fail" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}
