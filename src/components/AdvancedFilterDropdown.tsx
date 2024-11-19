import React from 'react'

interface AdvancedFilterDropdownProps {
  label: string
  id: string
  options: { value: string; label: string }[]
  onChange?: (value: string) => void // Optional onChange handler
  selectedValue?: string // Persisted state passed as prop
}

const AdvancedFilterDropdown: React.FC<AdvancedFilterDropdownProps> = ({
  label,
  id,
  options,
  onChange,
  selectedValue = '',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value) // Pass the selected value to the parent
    }
  }
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <select
        id={id}
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-green-600 focus:border-green-600"
        onChange={handleChange}
        value={selectedValue}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default AdvancedFilterDropdown
