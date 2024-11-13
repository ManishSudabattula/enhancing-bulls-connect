// src/GroupsPage.tsx
import React from 'react'

import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'
import './GroupsPage.css'

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
      <div className="groups-list">
        <h1>Groups</h1>
        <input
          type="text"
          placeholder="Search Groups"
          className="search-input"
        />
        <button className="all-groups-btn">+ All Groups</button>
        <h2>Most Recent</h2>
        {groupsData.map((group) => (
          <div key={group.id} className="group-item">
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
