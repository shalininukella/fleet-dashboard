import React from "react";
import type { ReactNode } from "react";

type Props = {
  title: string;
  value: number;
  icon?: ReactNode;
  colorClass?: string; 
};

const OverviewCard: React.FC<Props> = ({
  title,
  value,
  icon,
  colorClass = "text-indigo-600",
}) => (
  <div className="flex items-center space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-default">
    <div
      className={`p-3 rounded-full bg-indigo-100 dark:bg-indigo-900 ${colorClass} flex items-center justify-center text-3xl`}
    >
      {icon}
    </div>
    <div>
      <h4 className="text-gray-500 dark:text-gray-300 font-semibold">
        {title}
      </h4>
      <p className="text-3xl font-bold text-gray-900 dark:text-white">
        {value}
      </p>
    </div>
  </div>
);

export default OverviewCard;


