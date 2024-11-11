import React, { useState, useEffect, useRef } from 'react'

import NavBar from '../components/NavBar'

const events = [
  { id: 1, title: 'Lunch with a Lawyer', image: 'path_to_image1' },
  { id: 2, title: 'Humane Society of Tampa Bay', image: 'path_to_image2' },
  { id: 3, title: 'Outback Adventure', image: 'path_to_image3' },
  { id: 4, title: 'Networking Night', image: 'path_to_image4' },
  { id: 5, title: 'Tech Talk', image: 'path_to_image5' },
  { id: 6, title: 'Community Service Day', image: 'path_to_image6' },
  { id: 7, title: 'Sports Gala', image: 'path_to_image7' },
  { id: 8, title: 'Art Workshop', image: 'path_to_image8' },
  { id: 9, title: 'Study Session', image: 'path_to_image9' },
]

const HomePage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleCards = 3
  const [activeTab, setActiveTab] = useState('Home')
  const [pillStyle, setPillStyle] = useState({})
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < events.length - visibleCards ? prevIndex + 1 : 0,
    )
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : events.length - visibleCards,
    )
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 3000)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className="dashboard-container min-h-screen bg-gray-50 p-8">
      {/* NAVBAR */}
      <NavBar />
      {/* Upcoming Events Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
        <div className="relative flex items-center slide-sec">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 flex items-center justify-center bg-gray-300 w-10 h-10 rounded-full"
          >
            <div className="transform -rotate-45 border-t-2 border-l-2 border-black w-3 h-3"></div>
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden w-full max-w-3xl mx-auto">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {events.map((event) => (
                <div key={event.id} className="w-1/3 p-2 flex-shrink-0">
                  <div className="bg-white p-4 rounded-lg shadow-lg h-60 flex flex-col justify-between">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-32 object-cover rounded-md mb-2"
                    />
                    <h3 className="text-lg font-bold">{event.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-10 flex items-center justify-center bg-gray-300 w-10 h-10 rounded-full"
          >
            <div className="transform rotate-45 border-t-2 border-r-2 border-black w-3 h-3"></div>
          </button>
        </div>
      </section>

      {/* News & Announcements Section */}
      <section className="grid grid-cols-2 gap-6">
        {/* Latest News & Announcements */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">
            Latest News & Announcements
          </h3>
          <div className="text-gray-700">
            <h4 className="font-bold text-red-600">
              Hurricane Recovery Resources
            </h4>
            <p>
              Students impacted by the recent hurricanes should visit{' '}
              <a href="#" className="text-blue-600">
                Hurricanes | Emergencies | Dean of Students
              </a>{' '}
              for resources to help you recover.
            </p>
            <h4 className="font-bold text-red-600 mt-4">Write-A-Bull</h4>
            <p>
              The Writing Studio is happy to announce a new writing program,
              Write-A-Bull Feedback Program! This asynchronous tutoring program
              is available at any stage of your writing process!{' '}
              <a href="#" className="text-blue-600">
                Click HERE
              </a>{' '}
              to learn more and sign up!
            </p>
          </div>
        </div>

        {/* What's Hot Section */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">What's Hot?</h3>
          <div className="text-gray-700">
            <h4 className="font-bold text-green-600">
              Bulls Nite Out: Outback Adventure
            </h4>
            <p>
              Friday, October 25, 8:00 PM - 10:00 PM at Riverfront Park. Join us
              for fun activities!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
