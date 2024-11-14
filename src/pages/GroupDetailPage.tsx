// src/GroupDetailPage.tsx
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import NavBar from '../components/NavBar'

interface SocialLinks {
  facebook: string
  linkedin: string
  instagram: string
}

interface Event {
  title: string
  date: string
  location: string
}

interface Member {
  name: string
}

interface GroupDetails {
  name: string
  description: string
  department: string
  campus: string
  website: string
  socialLinks: SocialLinks
  events: Event[]
  members: Member[]
}

// Mock data for group details
const groupDetailsData: Record<string, GroupDetails> = {
  1: {
    name: 'Office of Graduate Studies',
    description: 'Supporting graduate students at USF.',
    department: 'Department',
    campus: 'Tampa',
    website: 'https://grad.usf.edu/',
    socialLinks: {
      facebook: 'https://www.facebook.com/usfgradstudies',
      linkedin: 'https://www.linkedin.com/school/usf-grad-studies/',
      instagram: 'https://www.instagram.com/usfgradstudies/',
    },
    events: [
      { title: 'Orientation', date: 'Jan 15, 2024', location: 'BEH 205' },
    ],
    members: [{ name: 'John Doe' }, { name: 'Jane Smith' }],
  },
  4: {
    name: 'Office of International Services',
    description:
      'Supporting international students and scholars at the University of South Florida.',
    department: 'Campus Departments/Offices',
    campus: 'Tampa',
    website: 'https://global.usf.edu/',
    socialLinks: {
      facebook: 'https://www.facebook.com/USFInternationalServices/',
      linkedin: 'https://www.linkedin.com/school/usouthflorida/',
      instagram: 'https://www.instagram.com/usf.edu/',
    },
    events: [
      {
        title: 'Tax Help Session',
        date: 'Wed, Nov 13, 2024',
        location: 'BEH 255',
      },
      {
        title: 'CPT Q&A Session',
        date: 'Tue, Nov 19, 2024',
        location: 'Online',
      },
    ],
    members: [{ name: 'John Doe' }, { name: 'Jane Smith' }],
  },
}

const GroupDetailPage = () => {
  const { groupId } = useParams<{ groupId: string }>()
  const [group, setGroup] = useState<GroupDetails | null>(null)

  useEffect(() => {
    if (groupId && groupDetailsData[groupId]) {
      const groupDetails = groupDetailsData[groupId]
      setGroup(groupDetails)
    } else {
      setGroup(null) // Handle the case when the groupId is invalid or not found
    }
  }, [groupId])

  if (!group) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <NavBar />
      <div className="p-5 pt-28 flex flex-col items-center">
        <section className="text-center mb-5">
          <h1 className="text-3xl mb-2">{group.name}</h1>
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
            {group.website && (
              <a
                href={group.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-2 bg-[#007a33] text-white rounded hover:bg-[#005826]"
              >
                Visit Website
              </a>
            )}
            <div className="mt-5">
              <h3 className="mt-5 text-sm">{'Social Links'}</h3>
              <a
                href={group.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="block my-1 text-[#007a33] hover:underline"
              >
                Facebook
              </a>
              <a
                href={group.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block my-1 text-[#007a33] hover:underline"
              >
                LinkedIn
              </a>
              <a
                href={group.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block my-1 text-[#007a33] hover:underline"
              >
                Instagram
              </a>
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
