const LabInput = ({ label, name, value, onChange, min, max }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type="number"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step="0.1"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-ocean-500 focus:ring-ocean-500"
        required
      />
    </div>
  );
};

export default LabInput;
