import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const EventsPage: React.FC = () => {
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [showFilter, setShowFilter] = useState(false)

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

  const toggleFilter = () => {
    setShowFilter(!showFilter)
  }

  const closeFilter = () => {
    setShowFilter(false)
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
      {/* Filter Overlay */}
      <div className={`filter-overlay ${showFilter ? 'show' : ''}`}>
        <div className="filter-content">
          <button
            onClick={closeFilter}
            className="close-button bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Close
          </button>
          <h3 className="font-bold text-lg mb-4">Filter Options</h3>

          {/* Group Filter */}
          <div className="filter-group mb-4">
            <label htmlFor="group-select" className="block mb-2">
              Group
            </label>
            <select
              id="group-select"
              className="w-full border rounded-md px-2 py-1"
            >
              <option value="">Select group</option>
              <option value="group1">Group 1</option>
              <option value="group2">Group 2</option>
            </select>
          </div>

          {/* Event Tags */}
          <div className="filter-tags mb-4">
            <label htmlFor="tag-select" className="block mb-2">
              Event Tags
            </label>
            <select
              id="tag-select"
              className="w-full border rounded-md px-2 py-1"
            >
              <option value="">Select tags</option>
              <option value="tag1">Tag 1</option>
              <option value="tag2">Tag 2</option>
            </select>
          </div>

          {/* Category Tags */}
          <div className="category-tags mb-4">
            <h4 className="font-bold mb-2">Category Tags</h4>
            <div className="grid grid-cols-2 gap-2">
              <label>
                <input type="checkbox" /> Academics & Co-Curricular (98)
              </label>
              <label>
                <input type="checkbox" /> Arts & Culture (26)
              </label>
              <label>
                <input type="checkbox" /> Diversity & Inclusion (42)
              </label>
              <label>
                <input type="checkbox" /> Athletics & Recreation (36)
              </label>
              <label>
                <input type="checkbox" /> Health & Wellness (31)
              </label>
              <label>
                <input type="checkbox" /> House Events (16)
              </label>
              <label>
                <input type="checkbox" /> Dates & Deadlines (5)
              </label>
              <label>
                <input type="checkbox" /> Workshops & Fairs (18)
              </label>
              <label>
                <input type="checkbox" /> Civic Engagement & Service (12)
              </label>
              <label>
                <input type="checkbox" /> Religious & Spiritual Life (9)
              </label>
              <label>
                <input type="checkbox" /> Careers & Professional Development
                (21)
              </label>
              <label>
                <input type="checkbox" /> Food & Dining (28)
              </label>
              <label>
                <input type="checkbox" /> Performances (26)
              </label>
              <label>
                <input type="checkbox" /> Intellectual Vitality (14)
              </label>
              <label>
                <input type="checkbox" /> Yard Events (7)
              </label>
              <label>
                <input type="checkbox" /> Sustainability (3)
              </label>
            </div>
          </div>

          {/* Audience */}
          <div className="audience mb-4">
            <h4 className="font-bold mb-2">Audience</h4>
            <div className="grid grid-cols-2 gap-2">
              <label>
                <input type="checkbox" /> Freshmen (128)
              </label>
              <label>
                <input type="checkbox" /> Sophomore (132)
              </label>
              <label>
                <input type="checkbox" /> Junior (110)
              </label>
              <label>
                <input type="checkbox" /> Senior (98)
              </label>
              <label>
                <input type="checkbox" /> Graduate (108)
              </label>
            </div>
          </div>
        </div>
      </div>

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
        <button
          onClick={toggleFilter}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
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
          <span className="ml-2 bg-red-500 w-3 h-3 rounded-full animate-ping"></span>
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

        <h2 className="text-2xl font-bold mt-8 mb-4">
          Upcoming Events{' '}
          <a
            href="/events"
            className="text-lg text-green-600 font-semibold hover:underline"
          >
            VIEW ALL EVENTS →
          </a>
        </h2>
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
