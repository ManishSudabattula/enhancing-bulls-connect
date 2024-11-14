// src/GroupDetailPage.tsx
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import NavBar from '../components/NavBar'
import groupsData from '../data/groups.json'

interface GroupDetails {
  groupID: number
  groupName: string
  groupLogin: string
  groupType: string
  logoUrl: string
  description: string
  department: string
  campus: string
  website: string
  socialLinks: {
    facebook: string
    linkedin: string
    instagram: string
  }
  events: Array<{ title: string; date: string; location: string }>
  members: Array<{ name: string }>
}

const GroupDetailPage = () => {
  const { groupId } = useParams<{ groupId: string }>()
  const [group, setGroup] = useState<GroupDetails | null>(null)

  useEffect(() => {
    const groupDetails = groupsData.find(
      (group) => group.groupID.toString() === groupId,
    )
    setGroup(groupDetails || null) // Set group to null if not found
  }, [groupId])

  if (!group) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <NavBar />
      <div className="p-5 pt-28 flex flex-col items-center">
        <section className="text-center mb-5">
          <h1 className="text-3xl mb-2">{group.groupName}</h1>
          <p className="text-gray-600 text-base max-w-xl mx-auto">
            {group.description}
          </p>
        </section>

        <div className="flex w-full max-w-screen-xl">
          {/* Left Sidebar with Group Info */}
          <aside className="w-64 mr-5 p-5 bg-gray-100 rounded-lg shadow-md">
            <h3 className="mt-0 text-lg mb-3">{'Group Information'}</h3>
            <p className="my-2 text-sm">
              <strong>Department:</strong> {group.department}
            </p>
            <p className="my-2 text-sm">
              <strong>Campus:</strong> {group.campus}
            </p>

            <a
              href={
                group.website
                  ? group.website
                  : `https://bullsconnect.usf.edu/${group.groupLogin}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 px-4 py-2 bg-[#007a33] text-white rounded hover:bg-[#005826]"
            >
              Visit Website
            </a>
            <div className="mt-5">
              <h3 className="mt-5 text-sm">{'Social Links'}</h3>
              {Object.entries(group.socialLinks).map(([platform, link]) => (
                <a
                  key={platform}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block my-1 text-[#007a33] hover:underline"
                >
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </a>
              ))}
            </div>
          </aside>

          {/* Main Content with Members and Events */}
          <main className="flex-1 flex flex-col">
            <section className="mb-8">
              <h2 className="text-2xl mb-4">Members</h2>
              <ul className="list-none p-0">
                {group.members.map((member, index) => (
                  <li
                    key={index}
                    className="p-3 bg-white mb-3 rounded-lg shadow-sm"
                  >
                    {member.name}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl mb-4">Upcoming Events</h2>
              <ul className="list-none p-0">
                {group.events.map((event, index) => (
                  <li
                    key={index}
                    className="p-3 bg-white mb-3 rounded-lg shadow-sm"
                  >
                    <h4 className="text-lg mb-1">{event.title}</h4>
                    <p className="text-sm text-gray-600">
                      {event.date} - {event.location}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

export default GroupDetailPage
