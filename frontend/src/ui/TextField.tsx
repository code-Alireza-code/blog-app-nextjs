import { HTMLInputTypeAttribute, InputHTMLAttributes, useState } from "react";
import { FieldErrors, FieldValues } from "react-hook-form";
import { LuEye, LuEyeClosed } from "react-icons/lu";

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
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="textField relative">
      <label htmlFor={name} className="text-secondary-600 text-sm">
        {label}
      </label>
      <input
        type={type === "password" && isShown ? "text" : type}
        name={name}
        id={name}
        dir={dir}
        placeholder={placeholder}
        className={`textField__input ${
          dir === "ltr" ? "text-left" : "text-right"
        } ${className}`}
        {...rest}
      />
      {type === "password" && (
        <button
          type="button"
          className="absolute right-4 top-10"
          onClick={() => setIsShown((prev) => !prev)}
        >
          {isShown ? (
            <LuEye className="size-5" />
          ) : (
            <LuEyeClosed className="size-5" />
          )}
        </button>
      )}
      {errors && errors[name as keyof T] && (
        <span className="text-error text-xs block">
          {errors[name as keyof T]?.message as string}
        </span>
      )}
    </div>
  );
}

export default TextField;
