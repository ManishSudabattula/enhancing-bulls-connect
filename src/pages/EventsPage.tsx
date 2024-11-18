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
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                color={'#000000'}
                fill={'none'}
              >
                <path
                  d="M2.52992 14.7696C2.31727 16.1636 3.268 17.1312 4.43205 17.6134C8.89481 19.4622 15.1052 19.4622 19.5679 17.6134C20.732 17.1312 21.6827 16.1636 21.4701 14.7696C21.3394 13.9129 20.6932 13.1995 20.2144 12.5029C19.5873 11.5793 19.525 10.5718 19.5249 9.5C19.5249 5.35786 16.1559 2 12 2C7.84413 2 4.47513 5.35786 4.47513 9.5C4.47503 10.5718 4.41272 11.5793 3.78561 12.5029C3.30684 13.1995 2.66061 13.9129 2.52992 14.7696Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 19C8.45849 20.7252 10.0755 22 12 22C13.9245 22 15.5415 20.7252 16 19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Subscribe
          </button>
          <button className="bg-gray-200 text-black px-4 py-2 rounded-md">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                color={'#000000'}
                fill={'none'}
              >
                <path
                  d="M20.5 5.5H9.5C5.78672 5.5 3 8.18503 3 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.5 18.5H14.5C18.2133 18.5 21 15.815 21 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.5 3C18.5 3 21 4.84122 21 5.50002C21 6.15882 18.5 8 18.5 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.49998 16C5.49998 16 3.00001 17.8412 3 18.5C2.99999 19.1588 5.5 21 5.5 21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Sync
          </button>
          <button className="bg-gray-200 text-black px-4 py-2 rounded-md">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                color={'#000000'}
                fill={'none'}
              >
                <path
                  d="M4 7C4.58984 7.60684 6.15973 10 7 10C7.84027 10 9.41016 7.60684 10 7M7 9L7 2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 13L4 14.5442C4 17.7892 4 19.4117 4.88607 20.5107C5.06508 20.7327 5.26731 20.9349 5.48933 21.1139C6.58831 22 8.21082 22 11.4558 22C12.1614 22 12.5141 22 12.8372 21.886C12.9044 21.8623 12.9702 21.835 13.0345 21.8043C13.3436 21.6564 13.593 21.407 14.0919 20.9081L18.8284 16.1716C19.4065 15.5935 19.6955 15.3045 19.8478 14.9369C20 14.5694 20 14.1606 20 13.3431V10C20 6.22876 20 4.34315 18.8284 3.17157C17.6569 2 15.7712 2 12 2M13 21.5V21C13 18.1716 13 16.7574 13.8787 15.8787C14.7574 15 16.1716 15 19 15H19.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Download
          </button>
          <button
            onClick={toggleCalendar}
            className="bg-green-600 text-white px-4 py-2 rounded-md"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                color={'#ffffff'}
                fill={'none'}
              >
                <path
                  d="M16 2V5M6 2V5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 13V11.5C20 7.72876 20 5.84315 18.8284 4.67157C17.6569 3.5 15.7712 3.5 12 3.5H10C6.22876 3.5 4.34315 3.5 3.17157 4.67157C2 5.84315 2 7.72876 2 11.5V14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H11.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 19.5C14 19.5 15.3485 20.0067 16 22C16 22 19.1765 17 22 16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.5 8.5H19.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
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
              <img
                src="images/bull.png"
                alt={event.title}
                className="rounded-lg"
              />
              <div className="content">
                <h3>{event.title}</h3>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                    color={'#000000'}
                    fill={'none'}
                  >
                    <path
                      d="M18 2V4M6 2V4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.9955 13H12.0045M11.9955 17H12.0045M15.991 13H16M8 13H8.00897M8 17H8.00897"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.5 8H20.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 8H21"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {event.date.toDateString()} {event.time}
                </p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                    color={'#000000'}
                    fill={'none'}
                  >
                    <path
                      d="M7 18C5.17107 18.4117 4 19.0443 4 19.7537C4 20.9943 7.58172 22 12 22C16.4183 22 20 20.9943 20 19.7537C20 19.0443 18.8289 18.4117 17 18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                  {event.location}
                </p>
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
              <img
                src="images/bull.png"
                alt={event.title}
                className="rounded-lg"
              />
              <div className="content">
                <h3>{event.title}</h3>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                    color={'#000000'}
                    fill={'none'}
                  >
                    <path
                      d="M18 2V4M6 2V4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.9955 13H12.0045M11.9955 17H12.0045M15.991 13H16M8 13H8.00897M8 17H8.00897"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.5 8H20.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 8H21"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {event.date.toDateString()} {event.time}
                </p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                    color={'#000000'}
                    fill={'none'}
                  >
                    <path
                      d="M7 18C5.17107 18.4117 4 19.0443 4 19.7537C4 20.9943 7.58172 22 12 22C16.4183 22 20 20.9943 20 19.7537C20 19.0443 18.8289 18.4117 17 18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                  {event.location}
                </p>
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
