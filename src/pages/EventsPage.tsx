import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css'
import CampusCard from '../components/CampusCard'
import EventCard from '../components/EventCard'
import NavBar from '../components/NavBar'
import events from '../data/formatted_events.json'

const EventsPage: React.FC = () => {
  const [selectedCampus, setSelectedCampus] = useState<string | null>(null)
  const [liveEvents, setLiveEvents] = useState<any[]>([])
  const [upcomingEvents, setUpcomingEvents] = useState<any[]>([])
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [showFilter, setShowFilter] = useState(false)

  // Filter events based on selected campus
  useEffect(() => {
    if (selectedCampus) {
      // const now = new Date()
      const campusEvents = events.filter((event) =>
        event.campuses?.includes(selectedCampus),
      )

      const live = campusEvents.filter((event) =>
        event.event_badges?.includes('Live'),
      )

      const upcoming = campusEvents.filter(
        (event) => !event.event_badges?.includes('Live'),
      )

      // const live = campusEvents.filter(
      //   (event) =>
      //     new Date(event.event_dates) <= now &&
      //     now < new Date(event.event_dates),
      // )
      // const upcoming = campusEvents.filter(
      //   (event) => new Date(event.event_dates) > now,
      // )

      setLiveEvents(live)
      setUpcomingEvents(upcoming)
    }
  }, [selectedCampus, events])

  const campusesData = [
    {
      id: 'tampa',
      name: 'TAMPA',
      image: 'images/tampa-campus.png',
    },
    {
      id: 'sarasota',
      name: 'SARASOTA-MANATEE',
      image: 'images/sarasota-campus.png',
    },
    {
      id: 'stpetersburg',
      name: 'ST. PETERSBURG',
      image: 'images/stpetersburg-campus.png',
    },
  ]

  const eventDates = liveEvents.map((event) => event.date)

  const handleCampusChange = (campusId: string) => {
    setSelectedCampus(campusId)
  }

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

  const handleRegister = () => {
    console.log('Register for event.')
  }

  return (
    <div className="dashboard-container">
      <NavBar />

      {!selectedCampus ? (
        <div className="px-8 py-4 text-center">
          <h1 className="text-3xl font-bold mb-8">Select your Campus</h1>
          <div className="grid grid-cols-3 gap-4">
            {campusesData.map((campus) => (
              <CampusCard
                key={campus.id}
                campus={campus}
                onClick={setSelectedCampus}
              />
            ))}
          </div>
          <button
            className="mt-4 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            onClick={() => setSelectedCampus(campusesData[0].id)} // default to Tampa campus for now
          >
            Skip
          </button>
        </div>
      ) : (
        <div>
          <header className="events-header">
            <div className="left">
              <div className="flex items-center space-x-2">
                <label htmlFor="campus-select" className="font-medium">
                  Campus:
                </label>
                <select
                  id="campus-select"
                  value={selectedCampus}
                  onChange={(e) => handleCampusChange(e.target.value)}
                  className="border rounded-md px-2 py-1"
                >
                  {campusesData.map((campus) => (
                    <option key={campus.id} value={campus.id}>
                      {campus.name}
                    </option>
                  ))}
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
                    eventDates.find(
                      (d) => d.toDateString() === date.toDateString(),
                    )
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
                <EventCard
                  key={event.id}
                  event={event}
                  onRegister={handleRegister}
                />
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
                <EventCard
                  key={event.id}
                  event={event}
                  onRegister={handleRegister}
                />
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

export default EventsPage
