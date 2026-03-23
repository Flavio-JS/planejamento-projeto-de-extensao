import { ReactNode } from "react";

type CardVariant = "default" | "elevated" | "bordered" | "flat";

interface CardProps {
  children: ReactNode;
  variant?: CardVariant;
  hoverable?: boolean;
  className?: string;
}

const variantStyles: Record<CardVariant, string> = {
  default: "bg-card rounded-xl shadow-sm border border-border/30",
  elevated: "bg-card rounded-xl shadow-lg border border-border/10",
  bordered: "bg-card rounded-xl border-2 border-border/40",
  flat: "bg-background/60 rounded-xl",
};

export default function Card({
  children,
  variant = "default",
  hoverable = false,
  className = "",
}: CardProps) {
  const hoverStyles = hoverable
    ? "hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
    : "";

  return (
    <div className={`${variantStyles[variant]} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

export function CardBody({ children, className = "" }: CardBodyProps) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className = "" }: CardFooterProps) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
}
