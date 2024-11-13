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
            🔍
          </button>
          <button className="p-2 bg-gray-200 rounded-full" aria-label="Profile">
            👤
          </button>
        </div>
      </div>
    </header>
  )
}

export default NavBar
