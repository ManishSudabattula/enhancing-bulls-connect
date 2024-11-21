import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import { Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import 'react-calendar/dist/Calendar.css'
import AdvancedFilter from '../components/AdvancedFilter'
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
  const [showAdvancedFilter, setshowAdvancedFilter] = useState(false)

  // Filters
  const [selectedGroup, setSelectedGroup] = useState<string>('')
  const [selectedEvent, setSelectedEvent] = useState<string>('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedAudiences, setSelectedAudiences] = useState<string[]>([])

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
    setshowAdvancedFilter(!showAdvancedFilter)
  }

  const closeFilter = () => {
    setshowAdvancedFilter(false)
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
          <header className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
            {/* Left Section */}
            <div className="flex items-center gap-4">
              <label htmlFor="campus-select" className="font-medium">
                Campus:
              </label>
              <select
                id="campus-select"
                value={selectedCampus}
                onChange={(e) => handleCampusChange(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 text-sm"
              >
                {campusesData.map((campus) => (
                  <option key={campus.id} value={campus.id}>
                    {campus.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <button className="bg-gray-200 text-black px-4 py-2 rounded-md text-sm hover:bg-gray-300 transition">
                Subscribe
              </button>
              <button className="bg-gray-200 text-black px-4 py-2 rounded-md text-sm hover:bg-gray-300 transition">
                Sync
              </button>
              <button className="bg-gray-200 text-black px-4 py-2 rounded-md text-sm hover:bg-gray-300 transition">
                Download
              </button>
              <button
                onClick={toggleCalendar}
                className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700 transition"
              >
                Events Calendar
              </button>
            </div>
          </header>

          {/* Filter Overlay */}
          {showAdvancedFilter && (
            <AdvancedFilter
              closeFilter={closeFilter}
              selectedGroup={selectedGroup}
              setSelectedGroup={setSelectedGroup}
              selectedEvent={selectedEvent}
              setSelectedEvent={setSelectedEvent}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              selectedAudiences={selectedAudiences}
              setSelectedAudiences={setSelectedAudiences}
            />
          )}

          <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg mb-6">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search Events"
              className="flex-1 border border-gray-300 px-4 py-2 rounded-md"
            />

            {/* When Dropdown */}
            <select className="flex-1 border border-gray-300 px-4 py-2 rounded-md">
              <option value="">When</option>
              <option value="today">Today</option>
              <option value="this-week">This Week</option>
              <option value="this-month">This Month</option>
            </select>

            {/* Experience Dropdown */}
            <select className="flex-1 border border-gray-300 px-4 py-2 rounded-md">
              <option value="">Experience</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>

            {/* Group Dropdown */}
            <select className="flex-1 border border-gray-300 px-4 py-2 rounded-md">
              <option value="">Group</option>
              <option value="students">Students</option>
              <option value="faculty">Faculty</option>
              <option value="staff">Staff</option>
            </select>

            {/* Type Dropdown */}
            <select className="flex-1 border border-gray-300 px-4 py-2 rounded-md">
              <option value="">Type</option>
              <option value="virtual">Virtual</option>
              <option value="in-person">In-Person</option>
            </select>

            {/* Advanced Filters Button */}
            <button
              onClick={toggleFilter}
              className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition"
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

          <section className="px-4 py-4">
            <h2 className="text-2xl font-bold mb-4">
              Live Events
              <span className="ml-2 bg-red-500 w-3 h-3 rounded-full animate-ping"></span>
            </h2>
            <Swiper
              modules={[Navigation, Pagination]}
              pagination={{ clickable: true }}
              navigation={true}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="live-events-carousel"
            >
              {liveEvents.map((event) => (
                <SwiperSlide key={event.event_id}>
                  <EventCard event={event} onRegister={handleRegister} />
                </SwiperSlide>
              ))}
            </Swiper>

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
