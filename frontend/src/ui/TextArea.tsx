import { InputHTMLAttributes } from "react";
import { FieldErrors, FieldValues } from "react-hook-form";

type Props<T extends FieldValues> = {
  label?: string;
  name: string;
  dir?: "rtl" | "ltr";
  errors?: FieldErrors<T> | null;
  placeholder?: string;
  rest?: InputHTMLAttributes<HTMLTextAreaElement>;
};

function TextArea<T extends FieldValues>({
  label = "",
  name,
  dir = "rtl",
  errors = null,
  placeholder,
  ...rest
}: Props<T>) {
  return (
    <div className="textField">
      <label htmlFor={name} className="text-secondary-600 text-sm">
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        dir={dir}
        placeholder={placeholder}
        {...rest}
        className={`textField__input mt-2 min-h-[200px] resize-none leading-8 ${
          dir === "ltr" ? "text-left" : "text-right "
        }`}
      />
      {errors && errors[name as keyof T] && (
        <span className="text-error text-xs block">
          {errors[name as keyof T]?.message as string}
        </span>
      )}
    </div>
  );
}

export default TextArea;
