interface CheckboxInputProps {
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: React.ReactNode;
  error?: string;
  className?: string;
  labelClassName?: string;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  name,
  checked,
  onChange,
  label,
  error,
  className = "",
  labelClassName,
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label
        className={`flex items-center gap-2 text-sm ${labelClassName || ""}`}
      >
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="peer sr-only"
        />

        <div
          className="
    w-8 h-4
    rounded-md
    border border-gray-400
    peer-checked:bg-navigation
    peer-checked:border-navigation
    transition-colors
  "
        ></div>
        {label}
      </label>
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default CheckboxInput;
