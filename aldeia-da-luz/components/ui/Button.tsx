import { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}

interface ButtonAsButton
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">,
    BaseButtonProps {
  href?: never;
}

interface ButtonAsLink extends BaseButtonProps {
  href: string;
  target?: string;
  rel?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:brightness-110",
  secondary: "bg-secondary text-white hover:brightness-110",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  ghost: "bg-transparent text-primary hover:bg-primary/10",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = `inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 cursor-pointer ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? "w-full" : ""} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        target={props.target}
        rel={props.rel}
        className={baseStyles}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      className={baseStyles}
    >
      {children}
    </button>
  );
}
