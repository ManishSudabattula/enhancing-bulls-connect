// src/GroupDetailPage.tsx
import React from 'react'
import { useParams } from 'react-router-dom'
import './GroupDetailPage.css'

// Mock data for group details
const groupDetailsData = {
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
  const { groupId } = useParams()
  const group = groupDetailsData[groupId]

  if (!group) {
    return <div>Group not found</div>
  }

  return (
    <div className="group-detail-page">
      <section className="group-header">
        <h1>{group.name}</h1>
        <p className="group-description">{group.description}</p>
      </section>

      <div className="group-content">
        {/* Left Sidebar with Group Info */}
        <aside className="group-info">
          <h3>Group Information</h3>
          <p>
            <strong>Department:</strong> {group.department}
          </p>
          <p>
            <strong>Campus:</strong> {group.campus}
          </p>
          {group.website && (
            <a
              href={group.website}
              target="_blank"
              rel="noopener noreferrer"
              className="website-link"
            >
              Visit Website
            </a>
          )}
          <div className="social-links">
            <h3>Social Links</h3>
            <a
              href={group.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href={group.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={group.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </aside>

        {/* Main Content with Members and Events */}
        <main className="group-main-content">
          <section className="members-section">
            <h2>Members</h2>
            <ul className="members-list">
              {group.members.map((member, index) => (
                <li key={index} className="member-item">
                  {member.name}
                </li>
              ))}
            </ul>
          </section>

          <section className="events-section">
            <h2>Upcoming Events</h2>
            <ul className="events-list">
              {group.events.map((event, index) => (
                <li key={index} className="event-item">
                  <h4>{event.title}</h4>
                  <p>
                    {event.date} - {event.location}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  )
}

export default GroupDetailPage
