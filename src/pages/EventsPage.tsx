import React from 'react'
import NavBar from '../components/NavBar'

const EventsPage: React.FC = () => {
  const liveEvents = [
    {
      id: 1,
      image: 'https://via.placeholder.com/300x200',
      title: 'USF Chile International Management 2025 - Virtual Info Session',
      date: 'Mon, Oct 28, 2024',
      time: '10 AM - 11 AM EDT',
      location: 'Online Event',
      attendees: 2,
      tags: ['Meeting', 'Campus - St. Petersburg'],
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300x200',
      title: 'Religious Studies & Health Science in Oman',
      date: 'Tue, Oct 29, 2024',
      time: '2 PM - 3 PM EDT',
      location: 'FAO 102',
      attendees: 1,
      tags: ['Education', 'Campus - Tampa'],
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/300x200',
      title: 'Coffee + Bagels',
      date: 'Tue, Oct 29, 2024',
      time: '2 PM - 3 PM EDT',
      location: 'SME Student Success Suite',
      attendees: 13,
      tags: ['Food', 'Campus - Tampa', 'Indoor'],
    },
  ]

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <NavBar />

      {/* Header Section */}
      <header className="events-header">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <label htmlFor="campus-select" className="font-medium">
              Campus:
            </label>
            <select id="campus-select" className="border rounded-md px-2 py-1">
              <option value="tampa">Tampa</option>
              <option value="st-petersburg">St. Petersburg</option>
              <option value="sarasota-manatee">Sarasota-Manatee</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search Events"
              className="border rounded-md px-4 py-2 w-64"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              🔍
            </button>
          </div>
        </div>
      </header>

      {/* Live Events Section */}
      <section className="live-events px-8 py-4">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          Live Events{' '}
          <span className="ml-2 bg-red-500 w-2 h-2 rounded-full"></span>
        </h2>
        <div className="live-events-carousel">
          {liveEvents.map((event) => (
            <div key={event.id} className="event-card">
              {/* Event Image */}
              <img src={event.image} alt={event.title} />

              {/* Event Content */}
              <div className="content">
                <h3>{event.title}</h3>
                <p>
                  📅 {event.date} {event.time}
                </p>
                <p>📍 {event.location}</p>
                <div className="tags">
                  {event.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Live and Attendees */}
              <div className="info">
                <span>LIVE</span>
                <span>👥 {event.attendees} going</span>
              </div>

              {/* Register Button */}
              <button>Register</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default EventsPage
