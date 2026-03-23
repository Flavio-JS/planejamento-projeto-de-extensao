import { ReactNode } from "react";

type IconCircleVariant = "primary" | "secondary" | "muted";
type IconCircleSize = "sm" | "md" | "lg" | "xl";

interface IconCircleProps {
  children: ReactNode;
  variant?: IconCircleVariant;
  size?: IconCircleSize;
  className?: string;
}

const variantStyles: Record<IconCircleVariant, string> = {
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-white",
  muted: "bg-muted/20 text-muted",
};

const sizeStyles: Record<IconCircleSize, string> = {
  sm: "w-10 h-10 text-base",
  md: "w-14 h-14 text-2xl",
  lg: "w-18 h-18 text-3xl",
  xl: "w-24 h-24 text-4xl",
};

export default function IconCircle({
  children,
  variant = "primary",
  size = "md",
  className = "",
}: IconCircleProps) {
  return (
    <div
      className={`rounded-full flex items-center justify-center shrink-0 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </div>
  );
}
