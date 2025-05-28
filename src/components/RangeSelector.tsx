import Button from "./ui/Button";

interface RangeSelectorProps {
  selectedRange: number;
  onRangeChange: (days: number) => void;
}

const RangeSelector: React.FC<RangeSelectorProps> = ({
  selectedRange,
  onRangeChange,
}) => {
  const ranges = [7, 15, 30];

  return (
    <div className="flex justify-center space-x-4 mb-6">
      {ranges.map((days) => (
        <Button
          key={days}
          onClick={() => onRangeChange(days)}
          active={selectedRange === days}
        >
          Last {days} Days
        </Button>
      ))}
    </div>
  );
};

export default RangeSelector;
