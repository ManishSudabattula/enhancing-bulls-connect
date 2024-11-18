import React from 'react'

interface Event {
  event_id: string
  event_name: string
  event_dates: string
  event_location: string
  event_tags: string
  event_image_url: string
  event_badges: string
  event_price_range?: string
  event_attendees_count?: string
}

interface EventCardProps {
  event: Event
  onRegister?: (eventId: string) => void // Optional handler for register button
}

const EventCard: React.FC<EventCardProps> = ({ event, onRegister }) => {
  // Parse event_dates
  const parseEventDates = (dates: string): string => {
    return dates.replace(/&ndash;/g, '–').trim() // Handle encoded characters and trim whitespace
  }

  // Extract tags from event_tags
  const tags = event.event_tags.split(',').map((tag) => tag.trim())

  // Check if the event is live
  const isLive = event.event_badges?.trim().toLowerCase() === 'live'

  return (
    <div className="event-card border rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src={event.event_image_url}
          alt={event.event_name}
          className="w-full h-40 object-cover"
        />
        {event.event_price_range === '' ? (
          <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
            FREE
          </span>
        ) : (
          <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
            {event.event_price_range}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">
          {event.event_name}
        </h3>
        <p className="text-sm text-gray-600 mb-1">
          <i className="far fa-calendar-alt mr-2"></i>
          {parseEventDates(event.event_dates)}
        </p>
        <p className="text-sm text-gray-600 mb-3">
          <i className="fas fa-map-marker-alt mr-2"></i>
          {event.event_location}
        </p>
        <p className="text-sm text-blue-600 underline mb-4">Teams link</p>
        <div className="tags flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
        {isLive && (
          <div className="flex items-center justify-between mb-4">
            <span className="text-red-600 font-bold">LIVE</span>
            <span className="text-gray-600 text-sm">
              <i className="fas fa-user-friends mr-1"></i>
              {event.event_attendees_count || 0} going
            </span>
          </div>
        )}
        <button
          className="w-full bg-green-600 text-white text-sm font-bold py-2 rounded hover:bg-green-700 transition"
          onClick={() => onRegister?.(event.event_id)}
        >
          Register
        </button>
      </div>
    </div>
  )
}

export default EventCard
