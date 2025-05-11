import { ButtonHTMLAttributes, ReactNode } from "react";

type VariantType = "primary" | "secondary" | "outline" | "danger";

type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: VariantType;
  className?: string;
};

const btnType = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  outline: "btn--outline",
  danger: "btn--danger",
};

function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
  className,
  ...rest
}: ButtonPropsType) {
  return (
    <button
      onClick={onClick}
      className={`btn ${btnType[variant]} ${className}`}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
