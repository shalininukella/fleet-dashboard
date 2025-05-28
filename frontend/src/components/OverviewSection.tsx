// components/OverviewSection.tsx
import OverviewCard from "./OverviewCard";
import { FaCar, FaPlay, FaPause, FaTools } from "react-icons/fa";

interface OverviewSectionProps {
  overview: {
    total: number;
    inUse: number;
    idle: number;
    maintenance: number;
  };
}

const OverviewSection: React.FC<OverviewSectionProps> = ({ overview }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
    <OverviewCard
      title="Total Vehicles"
      value={overview.total}
      icon={<FaCar />}
      colorClass="text-blue-600"
    />
    <OverviewCard
      title="Vehicles in Use"
      value={overview.inUse}
      icon={<FaPlay />}
      colorClass="text-green-600"
    />
    <OverviewCard
      title="Vehicles Idle"
      value={overview.idle}
      icon={<FaPause />}
      colorClass="text-yellow-500"
    />
    <OverviewCard
      title="Under Maintenance"
      value={overview.maintenance}
      icon={<FaTools />}
      colorClass="text-red-600"
    />
  </div>
);

export default OverviewSection;
