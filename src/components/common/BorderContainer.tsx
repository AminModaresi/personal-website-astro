import React from "react";

interface BorderContainerProps {
  children: React.ReactNode;
  className?: string | null
}

const BorderContainer = ({ children , className = "" }: BorderContainerProps) => {
  return <section className={`py-12 px-4 border-b border-dashed border-neutral-400 dark:border-neutral-800 ${className}`}>{children}</section>;
};
export default BorderContainer