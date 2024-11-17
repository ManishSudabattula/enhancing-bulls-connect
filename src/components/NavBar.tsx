import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const tabs = ['Home', 'Groups', 'Events', 'Chats']

const NavBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('/')
  const [pillStyle, setPillStyle] = useState({})
  const tabRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const location = useLocation()

  useEffect(() => {
    const activePath = location.pathname
    setActiveTab(activePath)
  }, [location])

  useEffect(() => {
    const activeIndex = tabs.findIndex((tab) => {
      if (tab.toLowerCase() === 'groups') {
        return activeTab.toLowerCase().startsWith('/groups') // Keep 'Groups' active for all group-related paths
      }
      return `/${tab.toLowerCase()}` === activeTab.toLowerCase()
    })
    const activeTabRef = tabRefs.current[activeIndex]
    if (activeTabRef) {
      setPillStyle({
        left: activeTabRef.offsetLeft,
        width: activeTabRef.offsetWidth,
        transition: 'left 0.3s ease, width 0.3s ease',
      })
    }
  }, [activeTab])

  return (
    <header className="fixed left-0 top-0 w-full z-50 nav-header">
      <div className="flex justify-between items-center px-8 py-2 nav-div">
        {/* Left Section: Logo */}
        <div className="text-2xl font-bold">BullsConnect</div>

        {/* Center Section: Navigation Tabs */}
        <nav className="flex-1 flex justify-center">
          <div className="nav-tabs relative flex bg-gray-200 rounded-full p-1">
            <div
              className="pill absolute bg-white rounded-full shadow-md"
              style={pillStyle}
            />
            {tabs.map((tab, index) => (
              <NavLink
                key={tab}
                to={`/${tab.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive
                    ? 'text-lg font-medium text-black'
                    : 'text-lg font-medium text-gray-500'
                }
                ref={(el) => (tabRefs.current[index] = el)}
              >
                <button
                  onClick={() => setActiveTab(`/${tab.toLowerCase()}`)}
                  className="tab-button"
                >
                  {tab}
                </button>
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Right Section: Search and Profile Icons */}
        <div className="flex space-x-4">
          <button className="p-2 bg-gray-200 rounded-full" aria-label="Search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={'#000000'}
              fill={'none'}
            >
              <path
                d="M17.5 17.5L22 22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="p-2 bg-gray-200 rounded-full" aria-label="Profile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={'#000000'}
              fill={'none'}
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M7.5 17C9.8317 14.5578 14.1432 14.4428 16.5 17M14.4951 9.5C14.4951 10.8807 13.3742 12 11.9915 12C10.6089 12 9.48797 10.8807 9.48797 9.5C9.48797 8.11929 10.6089 7 11.9915 7C13.3742 7 14.4951 8.11929 14.4951 9.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default NavBar
