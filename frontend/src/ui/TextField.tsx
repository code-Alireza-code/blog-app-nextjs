import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { FieldErrors, FieldValues } from "react-hook-form";

type TextFieldProps<T extends FieldValues> = {
  type?: HTMLInputTypeAttribute;
  label?: string;
  name: string;
  dir?: "ltr" | "rtl";
  className?: string;
  rest?: InputHTMLAttributes<HTMLInputElement>;
  placeholder?: string;
  errors?: FieldErrors<T> | null;
};

function TextField<T extends FieldValues>({
  type = "text",
  label,
  name,
  dir = "rtl",
  className,
  errors = null,
  placeholder,
  ...rest
}: TextFieldProps<T>) {
  return (
    <div className="textField">
      <label htmlFor={name} className="text-secondary-600 text-sm">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        dir={dir}
        placeholder={placeholder}
        className={`textField__input ${
          dir === "ltr" ? "text-left" : "text-right"
        } ${className}`}
        {...rest}
      />
      {errors && errors[name as keyof T] && (
        <span className="text-error text-xs block">
          {errors[name as keyof T]?.message as string}
        </span>
      )}
    </div>
  );
}

export default TextField;
