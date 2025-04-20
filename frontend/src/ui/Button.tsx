import { ButtonHTMLAttributes, ReactNode } from "react";

type VariantType = "primary" | "secondary" | "outline" | "danger";

type ButtonPropsType = {
  children: ReactNode;
  onClick?: () => void;
  variant?: VariantType;
  className?: string;
  rest?: ButtonHTMLAttributes<HTMLButtonElement>;
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
  className,
  ...rest
}: ButtonPropsType) {
  return (
    <button
      onClick={onClick}
      className={`btn ${btnType[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
