const LoadingSpinner = () => (
  <div
    className="flex justify-center items-center h-64 space-x-4"
    role="status"
    aria-label="Loading"
  >
    <h2 className="text-blue-400">LOADING</h2>
    <div
      className="
        w-16 h-16
        border-4
        border-blue-500
        border-t-transparent
        rounded-full
        animate-spin
        shadow-lg
        "
      style={{
        borderImage: "linear-gradient(45deg, #3b82f6, #06b6d4, #3b82f6) 1",
      }}
    ></div>
  </div>
);

export default LoadingSpinner;
