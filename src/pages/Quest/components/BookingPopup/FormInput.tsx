interface FormInputProps {
  type: string;
  name: string;
  value?: string | boolean;
  placeholder?: string;
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  label?: string;
  min?: number;
}

const FormInput: React.FC<FormInputProps> = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  checked,
  error,
  label,
  min,
}) => {
  if (type === "checkbox") {
    return (
      <div className="flex flex-col">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            name={name}
            checked={checked}
            onChange={onChange}
          />
          {label}
        </label>
        {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <input
        type={type}
        name={name}
        value={value as string}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        className="border border-white rounded px-6 py-4 w-full focus:outline-none focus:ring-2 focus:ring-navigation opacity-80 font-raleway text-sm non-italic font-medium leading-[1.4rem]"
      />
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FormInput;
