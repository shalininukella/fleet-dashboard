interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  active,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded transition-colors duration-200 font-semibold
          ${
            active
              ? "bg-indigo-600 text-white hover:bg-indigo-700"
              : "bg-gray-300 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-400 dark:hover:bg-gray-600"
          }
          ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
