import React, { useEffect, useState } from "react";
import { fetchOverview, fetchUsageStats } from "../services/api";
import LoadingSpinner from "../components/LoadingSpinner";
import OverviewSection from "../components/OverviewSection";
import RangeSelector from "../components/RangeSelector";
import GraphSection from "../components/GraphSection";

const Dashboard: React.FC = () => {
  const [overview, setOverview] = useState({
    total: 0,
    inUse: 0,
    idle: 0,
    maintenance: 0,
  });
  const [usageStats, setUsageStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [range, setRange] = useState(7);

  const handleRangeChange = (days: number) => {
    setRange(days);
    setLoading(true);
    fetchUsageStats(days).then((res) => {
      setUsageStats(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    Promise.all([fetchOverview(), fetchUsageStats(range)]).then(
      ([overviewRes, usageRes]) => {
        setOverview(overviewRes.data);
        setUsageStats(usageRes.data);
        setLoading(false);
      }
    );
  }, [range]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-8">
      <h1 className="text-4xl font-extrabold text-indigo-700 dark:text-indigo-300 text-center mb-6">
        Fleet Overview
      </h1>

      <OverviewSection overview={overview} />
      <RangeSelector selectedRange={range} onRangeChange={handleRangeChange} />
      {loading ? <LoadingSpinner /> : <GraphSection usageData={usageStats} />}
    </div>
  );
};

export default Dashboard;
