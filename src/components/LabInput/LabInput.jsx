const LabInput = ({
  label,
  name,
  value,
  onChange,
  min,
  max,
  disabled = false,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        type="number"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full rounded-lg border border-gray-300 p-2.5 focus:border-ocean-500 focus:outline-none focus:ring-1 focus:ring-ocean-500 ${
          disabled ? "cursor-not-allowed bg-gray-100" : ""
        }`}
        min={min}
        max={max}
        step="0.01"
        required
      />
    </div>
  );
};

export default LabInput;
