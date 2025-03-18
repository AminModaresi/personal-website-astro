import React from "react";

interface BorderContainerProps {
  children: React.ReactNode;
  className?: string | null
}

const BorderContainer = ({ children , className = "" }: BorderContainerProps) => {
  return <section className={`py-12 px-4 border-b border-dashed ${className}`}>{children}</section>;
};
export default BorderContainer