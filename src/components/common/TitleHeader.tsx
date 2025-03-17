const TitleHeader = ({
  title,
  size,
  className = ""
}: {
  title: string;
  size?: "small" | "medium" | "large";
  className?: string
}) => {
  const titleSplit: string[] = title.split(" ");

  // Define size classes
  const sizeClasses = {
    small: "text-xl md:text-2xl",
    medium: "text-3xl md:text-4xl",
    large: "text-5xl md:text-6xl",
  };

  return (
    <p
      className={`${
        sizeClasses[size || "large"]
      } ${className} font-bold inline-block mb-4 bricolage-grotesque leading-none`}
    >
      {titleSplit.map((item, index) => (
        <span key={index} className="block">
          {item}
        </span>
      ))}
    </p>
  );
};

export default TitleHeader;
