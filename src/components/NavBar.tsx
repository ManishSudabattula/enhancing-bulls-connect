// NavBar.tsx
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar: React.FC = () => {
  return (
    <header className="flex justify-between items-center mb-8">
      <div className="text-2xl font-bold">BullsConnect</div>
      <nav className="flex items-center space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-lg font-medium text-blue-500'
              : 'text-lg font-medium'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/groups"
          className={({ isActive }) =>
            isActive
              ? 'text-lg font-medium text-blue-500'
              : 'text-lg font-medium'
          }
        >
          Groups
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) =>
            isActive
              ? 'text-lg font-medium text-blue-500'
              : 'text-lg font-medium'
          }
        >
          Events
        </NavLink>
        <NavLink
          to="/chats"
          className={({ isActive }) =>
            isActive
              ? 'text-lg font-medium text-blue-500'
              : 'text-lg font-medium'
          }
        >
          Chats
        </NavLink>
        <button
          className="ml-4 p-2 bg-gray-300 rounded-full"
          aria-label="Search"
        >
          🔍
        </button>
        <button className="p-2 bg-gray-300 rounded-full" aria-label="Profile">
          👤
        </button>
      </nav>
    </header>
  )
}

export default NavBar
