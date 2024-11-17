import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const EventsPage: React.FC = () => {
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const liveEvents = [
    {
      id: 1,
      image: 'https://via.placeholder.com/300x200',
      title: 'USF Chile International Management 2025 - Virtual Info Session',
      date: new Date(2024, 9, 28),
      time: '10 AM - 11 AM EDT',
      location: 'Online Event',
      attendees: 2,
      tags: ['Meeting', 'Campus - St. Petersburg'],
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300x200',
      title: 'Religious Studies & Health Science in Oman',
      date: new Date(2024, 9, 29),
      time: '2 PM - 3 PM EDT',
      location: 'FAO 102',
      attendees: 1,
      tags: ['Education', 'Campus - Tampa'],
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/300x200',
      title: 'Coffee + Bagels',
      date: new Date(2024, 9, 29),
      time: '2 PM - 3 PM EDT',
      location: 'SME Student Success Suite',
      attendees: 13,
      tags: ['Food', 'Campus - Tampa', 'Indoor'],
    },
  ]

  const upcomingEvents = [
    {
      id: 4,
      image: 'https://via.placeholder.com/300x200',
      title: 'Career Fair 2024',
      date: new Date(2024, 10, 3),
      time: '10 AM - 4 PM EDT',
      location: 'University Center',
      tags: ['Career', 'Campus - Tampa'],
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/300x200',
      title: 'Art Workshop',
      date: new Date(2024, 10, 5),
      time: '1 PM - 3 PM EDT',
      location: 'Art Studio',
      tags: ['Art', 'Campus - St. Petersburg'],
    },
    {
      id: 6,
      image: 'https://via.placeholder.com/300x200',
      title: 'Tech Talk: Future of AI',
      date: new Date(2024, 10, 7),
      time: '3 PM - 4 PM EDT',
      location: 'Engineering Auditorium',
      tags: ['Technology', 'Campus - Tampa'],
    },
    {
      id: 7,
      image: 'https://via.placeholder.com/300x200',
      title: 'Career Fair 2024',
      date: new Date(2024, 10, 3),
      time: '10 AM - 4 PM EDT',
      location: 'University Center',
      tags: ['Career', 'Campus - Tampa'],
    },
    {
      id: 8,
      image: 'https://via.placeholder.com/300x200',
      title: 'Art Workshop',
      date: new Date(2024, 10, 5),
      time: '1 PM - 3 PM EDT',
      location: 'Art Studio',
      tags: ['Art', 'Campus - St. Petersburg'],
    },
    {
      id: 9,
      image: 'https://via.placeholder.com/300x200',
      title: 'Tech Talk: Future of AI',
      date: new Date(2024, 10, 7),
      time: '3 PM - 4 PM EDT',
      location: 'Engineering Auditorium',
      tags: ['Technology', 'Campus - Tampa'],
    },
  ]

  const eventDates = liveEvents.map((event) => event.date)

  const handleCalendarChange = (date: Date) => {
    setSelectedDate(date)
  }

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar)
  }

  return (
    <div className="dashboard-container">
      <NavBar />

      <header className="events-header">
        <div className="left">
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
        </div>

        <div className="right">
          <button className="bg-gray-200 text-black px-4 py-2 rounded-md">
            Subscribe
          </button>
          <button className="bg-gray-200 text-black px-4 py-2 rounded-md">
            Sync
          </button>
          <button className="bg-gray-200 text-black px-4 py-2 rounded-md">
            Download
          </button>
          <button
            onClick={toggleCalendar}
            className="bg-green-600 text-white px-4 py-2 rounded-md"
          >
            Events Calendar
          </button>
        </div>
      </header>
      <div className="filter-section bg-gray-100 p-4 rounded-lg flex items-center space-x-4 mb-6">
        <input
          type="text"
          placeholder="Search Events"
          className="border px-4 py-2 rounded-md flex-1"
        />
        <select className="border px-4 py-2 rounded-md">
          <option value="">When</option>
          <option value="today">Today</option>
          <option value="this-week">This Week</option>
          <option value="this-month">This Month</option>
        </select>
        <select className="border px-4 py-2 rounded-md">
          <option value="">Experience</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
        <select className="border px-4 py-2 rounded-md">
          <option value="">Group</option>
          <option value="students">Students</option>
          <option value="faculty">Faculty</option>
          <option value="staff">Staff</option>
        </select>
        <select className="border px-4 py-2 rounded-md">
          <option value="">Type</option>
          <option value="virtual">Virtual</option>
          <option value="in-person">In-Person</option>
        </select>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
          Advanced Filters
        </button>
      </div>

      {showCalendar && (
        <div className="calendar-modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Calendar
              onChange={handleCalendarChange}
              value={selectedDate}
              tileClassName={({ date }) =>
                eventDates.find((d) => d.toDateString() === date.toDateString())
                  ? 'highlight'
                  : ''
              }
            />
            <button
              onClick={toggleCalendar}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <section className="live-events px-8 py-4">
        <h2 className="text-2xl font-bold mb-4">
          Live Events
          <span className="ml-2 bg-red-500 w-2 h-2 rounded-full"></span>
        </h2>
        <div className="live-events-carousel">
          {liveEvents.map((event) => (
            <div key={event.id} className="event-card">
              <img src={event.image} alt={event.title} className="rounded-lg" />
              <div className="content">
                <h3>{event.title}</h3>
                <p>
                  {event.date.toDateString()} {event.time}
                </p>
                <p>{event.location}</p>
                <div className="tags">
                  {event.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button className="register-button">Register</button>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Upcoming Events</h2>
        <div className="live-events-carousel">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="event-card">
              <img src={event.image} alt={event.title} className="rounded-lg" />
              <div className="content">
                <h3>{event.title}</h3>
                <p>
                  {event.date.toDateString()} {event.time}
                </p>
                <p>{event.location}</p>
                <div className="tags">
                  {event.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button className="register-button">Register</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default EventsPage
