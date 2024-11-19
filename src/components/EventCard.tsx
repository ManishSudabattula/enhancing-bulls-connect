import { CalendarIcon, MapPinIcon, UsersIcon } from '@heroicons/react/20/solid'
import React from 'react'

interface Event {
  event_id: string
  event_name: string
  start_time: string
  end_time: string
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

const tagColors: Record<string, string> = {
  Education: 'bg-blue-100 text-blue-600',
  'First Year Students': 'bg-green-100 text-green-600',
  Juniors: 'bg-yellow-100 text-yellow-600',
  Seniors: 'bg-red-100 text-red-600',
  Sophomores: 'bg-purple-100 text-purple-600',
  'Transfer Students': 'bg-pink-100 text-pink-600',
  UndergraduateResearch: 'bg-teal-100 text-teal-600',
  Entertainment: 'bg-orange-100 text-orange-600',
  Faculty: 'bg-indigo-100 text-indigo-600',
  Giveaways: 'bg-rose-100 text-rose-600',
  Graduate: 'bg-gray-100 text-gray-600',
  Indoors: 'bg-sky-100 text-sky-600',
  Multicultural: 'bg-emerald-100 text-emerald-600',
  'Non-Traditional Students': 'bg-cyan-100 text-cyan-600',
  Staff: 'bg-lime-100 text-lime-600',
  GlobalDiversity: 'bg-fuchsia-100 text-fuchsia-600',
  USFWorld: 'bg-amber-100 text-amber-600',
  Wellness: 'bg-stone-100 text-stone-600',
  Outdoors: 'bg-blue-50 text-blue-700',
  Performance: 'bg-red-50 text-red-700',
  Recreational: 'bg-green-50 text-green-700',
  MSC: 'bg-indigo-50 text-indigo-700',
  'USF Week': 'bg-gray-50 text-gray-700',
  Tabling: 'bg-yellow-50 text-yellow-700',
  Academic: 'bg-purple-50 text-purple-700',
  Training: 'bg-teal-50 text-teal-700',
  Service: 'bg-orange-50 text-orange-700',
  Elections: 'bg-cyan-50 text-cyan-700',
  Philanthropy: 'bg-pink-50 text-pink-700',
  UNSDG: 'bg-gray-100 text-gray-600', // Matches multiple UNSDG tags
  Virtual: 'bg-blue-50 text-blue-600',
  Default: 'bg-gray-100 text-gray-700', // For unknown tags
}

const EventCard: React.FC<EventCardProps> = ({ event, onRegister }) => {
  const formatDateTime = (isoString: string): string => {
    const date = new Date(isoString)
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      timeZoneName: 'short',
    }).format(date)
  }

  // Extract tags from event_tags
  const tags = event.event_tags.split(',').map((tag) => tag.trim())

  const getTagColor = (tag: string) => tagColors[tag] || tagColors['Default']

  // Check if the event is live
  const isLive = event.event_badges?.trim().toLowerCase() === 'live'

  return (
    <div className="border rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      {/* Event Image */}
      <div className="relative">
        <img
          src={event.event_image_url}
          alt={event.event_name}
          className="w-full h-40 object-cover"
        />
        {event.event_price_range && (
          <span className="absolute top-0 right-0 bg-black text-white text-sm px-2 py-1 rounded">
            {event.event_price_range}
          </span>
        )}
      </div>

      {/* Event Details */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-800 mb-2">
          {event.event_name}
        </h3>
        <p className="text-sm text-gray-600 flex items-center mb-1">
          <CalendarIcon className="w-5 h-5 text-gray-600 mr-2" />
          {formatDateTime(event.start_time)} – {formatDateTime(event.end_time)}
        </p>
        <p className="text-sm text-gray-600 flex items-center mb-3">
          <MapPinIcon className="w-5 h-5 text-gray-600 mr-2" />
          {event.event_location}
        </p>
        <p className="text-sm text-blue-600 underline mb-4">Teams link</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`${getTagColor(tag)} rounded-full px-3 py-1 text-xs font-semibold`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Status and Attendees */}
        <div className="flex items-center justify-between mb-4 mt-auto">
          {isLive && <span className="text-red-600 font-bold">LIVE</span>}
          <span className="text-gray-600 text-sm flex items-center">
            <UsersIcon className="w-5 h-5 text-gray-600 mr-1" />
            {event.event_attendees_count || 0} going
          </span>
        </div>

        {/* Register Button */}
        <button
          className="bg-green-600 text-white text-sm font-bold py-2 rounded hover:bg-green-700 transition"
          onClick={() => onRegister?.(event.event_id)}
        >
          Register
        </button>
      </div>
    </div>
  )
}

export default EventCard
