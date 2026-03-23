import { ReactNode } from "react";

type BadgeVariant = "primary" | "secondary" | "muted" | "outline";
type BadgeSize = "xs" | "sm" | "md" | "lg";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-white",
  muted: "bg-muted/20 text-muted",
  outline: "bg-transparent border-2 border-primary text-primary",
};

const sizeStyles: Record<BadgeSize, string> = {
  xs: "px-2 py-0.5 text-xs",
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-2 text-base",
};

export default function Badge({
  children,
  variant = "primary",
  size = "sm",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
}
