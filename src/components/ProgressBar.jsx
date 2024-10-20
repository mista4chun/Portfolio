const ProgressBar = ({
  progress,
  height = "h-2",
  bgColor = "bg-gray-300",
  fillColor = "bg-[#1cace9]",
  animated = true,
  rounded = true,
}) => {
  const roundedClass = rounded ? "rounded-full" : "";
  const animationClass = animated ? "transition-all duration-500 ease-out" : "";

  return (
    <div
      className={`w-full ${height} ${bgColor} ${roundedClass} overflow-hidden`}
    >
      <div
        className={`h-full ${fillColor} ${roundedClass} ${animationClass}`}
        style={{ width: `${progress}%` }}
      >
        {/* Optional: Add label inside the progress bar */}
        {/* <span className="text-white text-xs font-bold text-center block">{progress}%</span> */}
      </div>
    </div>
  );
};

export default ProgressBar;
