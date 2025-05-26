import { InputHTMLAttributes } from "react";
import { FieldErrors } from "react-hook-form";
import { HiArrowUpTray } from "react-icons/hi2";

type FileInputProps = {
  label?: string;
  name: string;
  dir?: "rtl" | "ltr";
  required?: boolean;
  className?: string;
  errors?: FieldErrors;
} & InputHTMLAttributes<HTMLInputElement>;

function FileInput({
  name,
  className,
  errors,
  label = "",
  dir = "rtl",
  ...rest
}: FileInputProps) {
  return (
    <div>
      <label
        htmlFor="file-upload"
        className={`cursor-pointer border-2 border-primary-900 rounded-lg px-3 py-2 text-primary-900 flex items-center justify-center gap-x-2 ${className}`}
      >
        {label}
        <HiArrowUpTray className="size-5" />
        <input
          id="file-upload"
          type="file"
          className="sr-only"
          name={name}
          dir={dir}
          {...rest}
        />
      </label>
      {errors && errors[name] && (
        <span className="text-error mt-1 text-xs block">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
}

export default FileInput;
