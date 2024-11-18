import React from 'react'

interface Campus {
  id: string
  name: string
  image: string
}

interface CampusCardProps {
  campus: Campus
  onClick: (campusId: string) => void
}

const CampusCard: React.FC<CampusCardProps> = ({ campus, onClick }) => {
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onClick(campus.id)
    }
  }

  return (
    <div
      className="cursor-pointer border rounded-lg shadow-md hover:shadow-lg transition"
      onClick={() => onClick(campus.id)}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={0} // Makes the div focusable via keyboard
      aria-label={`Select ${campus.name} campus`}
    >
      <img
        src={campus.image}
        alt={campus.name}
        className="rounded-t-lg w-full"
      />
      <p className="text-lg font-semibold text-center p-4">{campus.name}</p>
    </div>
  )
}

export default CampusCard
