import React from 'react'

interface AdvancedFilterCheckboxProps {
  label: string
  options: { label: string; value: string }[]
  onChange?: (selectedValues: string[]) => void // Optional handler for changes
  selectedValues?: string[] // Persisted state passed as prop
}

const AdvancedFilterCheckbox: React.FC<AdvancedFilterCheckboxProps> = ({
  label,
  options,
  onChange,
  selectedValues = [],
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    const updatedValues = checked
      ? [...selectedValues, value]
      : selectedValues.filter((v) => v !== value)

    if (onChange) {
      onChange(updatedValues) // Pass the updated selected values to the parent
    }
  }

  return (
    <div className="mb-4">
      <h4 className="text-sm font-bold text-gray-800 mb-2">{label}</h4>
      <div className="grid grid-cols-2 gap-2">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center text-sm text-gray-700"
          >
            <input
              type="checkbox"
              value={option.value}
              checked={selectedValues.includes(option.value)}
              className="rounded border-gray-300 focus:ring-green-600 mr-2"
              onChange={handleChange}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  )
}

export default AdvancedFilterCheckbox
