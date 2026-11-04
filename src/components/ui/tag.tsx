import React from "react";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium font-sans text-[#52617A] bg-black/[0.04] ${className}`}
    >
      {children}
    </span>
  );
}
