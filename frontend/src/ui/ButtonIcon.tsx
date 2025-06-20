import { ButtonHTMLAttributes, ReactNode } from "react";

const btnType = {
  primary:
    "bg-primary-100 text-primary-700 hover:bg-primary-900 hover:text-white",
  secondary:
    "bg-secondary-200 text-secondary-500 hover:bg-secondary-500 hover:text-secondary-0",
  outline:
    "border border-secondary-200 text-secondary-500 hover:bg-secondary-200",
  red: "bg-red-100 text-red-500 hover:bg-red-500 hover:text-white",
  danger: "border border-red-100 text-red-500",
};

type ButtonIconProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: keyof typeof btnType;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function ButtonIcon({
  children,
  onClick,
  className,
  variant = "primary",
  ...rest
}: ButtonIconProps) {
  return (
    <button
      className={`flex items-center justify-center gap-x-1 rounded-md p-0.5 [&>svg]:size-5 [&>svg]:text-inherit text-xs lg:text-sm transition-all duration-300 ease-out ${btnType[variant]} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
