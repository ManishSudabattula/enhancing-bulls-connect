// src/GroupsPage.tsx
import React from 'react'
import { Link } from 'react-router-dom'

import NavBar from '../components/NavBar'
import groupsData from '../data/groups.json'

const GroupsPage = () => {
  return (
    <div>
      <NavBar />
      <div className="p-5 pt-28">
        <h1 className="text-3xl font-bold mb-6">Groups</h1>

        {/* Search and Button */}
        <div className="flex items-center mb-5">
          <input
            type="text"
            placeholder="Search Groups"
            className="p-2 mr-4 w-[calc(100%-160px)] border rounded"
          />
          <button className="p-2.5 px-4 bg-[#007a33] text-white rounded cursor-pointer">
            + All Groups
          </button>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groupsData.map((group) => (
            <div
              key={group.groupID}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Link to={`${group.groupID}`}>
                <div className="relative">
                  <img
                    src={
                      group.logoUrl
                        ? group.logoUrl
                        : 'https://cdn-icons-png.flaticon.com/512/9572/9572728.png'
                    }
                    alt={group.groupName}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{group.groupName}</h3>
                  <p className="text-gray-600">{group.groupType}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GroupsPage
