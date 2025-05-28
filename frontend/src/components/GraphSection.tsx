import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  usageData: { day: string; usage: number }[];
}

const GraphSection: React.FC<Props> = ({ usageData }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg max-w-4xl mx-auto">
    <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
      Vehicle Usage Over the Last 7 Days
    </h2>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={usageData}>
        <XAxis dataKey="day" stroke="#8884d8" />
        <YAxis stroke="#8884d8" />
        <Tooltip />
        <Bar dataKey="usage" fill="#8884d8" radius={[5, 5, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default GraphSection;


