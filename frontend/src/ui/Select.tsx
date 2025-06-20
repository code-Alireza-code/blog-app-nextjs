import { SelectHTMLAttributes } from "react";
import { FieldErrors } from "react-hook-form";

type OptionsType = {
  id: string;
  title: string;
};

type SelectPropsType = {
  name: string;
  label?: string;
  className?: string;
  options: OptionsType[];
  errors?: FieldErrors | null;
  defaultOption?: boolean;
} & SelectHTMLAttributes<HTMLSelectElement>;

function Select({
  name,
  label,
  className,
  options,
  errors = null,
  defaultOption = false,
  ...rest
}: SelectPropsType) {
  return (
    <div>
      <label className="mb-2 block text-secondary-700" htmlFor={name}>
        {label}
      </label>
      <select
        {...rest}
        name={name}
        id={name}
        className={`textField__input ${className}`}
      >
        {defaultOption && <option value="">یک گزینه را انتخاب کنید</option>}
        {options?.map((option) => (
          <option key={option.id} value={option.id}>
            {option.title}
          </option>
        ))}
      </select>
      {errors && errors[name] && (
        <span className="text-error text-xs">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
}

export default Select;
