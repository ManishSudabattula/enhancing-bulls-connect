// src/GroupsPage.tsx
import React from 'react'
import { Link } from 'react-router-dom'

import NavBar from '../components/NavBar'

// Mock data for the groups
const groupsData = [
  { id: 1, name: 'Office of Graduate Studies', type: 'Department' },
  { id: 2, name: 'Lifelong Learners of USF', type: 'Student Organization' },
  {
    id: 3,
    name: 'Special Olympics College at USF',
    type: 'Student Organization',
  },
  { id: 4, name: 'Office of International Services', type: 'Department' },
  // Add more groups as needed
]

const GroupsPage = () => {
  return (
    <div>
      <NavBar />
      <div className="p-5 pt-28">
        <h1>Groups</h1>
        <input
          type="text"
          placeholder="Search Groups"
          className="p-2 mb-5 w-[calc(100%-120px)]"
        />
        <button className="p-2.5 px-4 bg-[#007a33] text-white rounded cursor-pointer">
          + All Groups
        </button>
        <h2>Most Recent</h2>
        {groupsData.map((group) => (
          <div key={group.id} className="p-2.5 my-2.5 border-b border-[#ccc]">
            <Link to={`/groups/${group.id}`}>
              <h3>{group.name}</h3>
              <p>{group.type}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GroupsPage
