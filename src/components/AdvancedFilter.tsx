import React, { useEffect } from 'react'

import AdvancedFilterCheckbox from './AdvancedFilterCheckbox'
import AdvancedFilterDropdown from './AdvancedFilterDropdown'

interface AdvancedFilterProps {
  closeFilter: () => void
  selectedGroup: string
  setSelectedGroup: (value: string) => void
  selectedEvent: string
  setSelectedEvent: (value: string) => void
  selectedCategories: string[]
  setSelectedCategories: (values: string[]) => void
  selectedAudiences: string[]
  setSelectedAudiences: (values: string[]) => void
}

const groupOptions = [
  { value: '', label: 'Select group' },
  { value: 'group1', label: 'Group 1' },
  { value: 'group2', label: 'Group 2' },
]
const eventOptions = [
  { value: '', label: 'Select tags' },
  { value: 'tag1', label: 'Tag 1' },
  { value: 'tag2', label: 'Tag 2' },
]
const categoryOptions = [
  { label: 'Academics & Co-Curricular (98)', value: 'academics' },
  { label: 'Arts & Culture (26)', value: 'arts' },
  { label: 'Diversity & Inclusion (42)', value: 'diversity' },
  { label: 'Athletics & Recreation (36)', value: 'athletics' },
  { label: 'Health & Wellness (31)', value: 'wellness' },
  { label: 'House Events (16)', value: 'house-events' },
  { label: 'Dates & Deadlines (5)', value: 'deadlines' },
  { label: 'Workshops & Fairs (18)', value: 'workshops' },
  {
    label: 'Civic Engagement & Service (12)',
    value: 'civic-service',
  },
  { label: 'Religious & Spiritual Life (9)', value: 'religious' },
  {
    label: 'Careers & Professional Development (21)',
    value: 'careers',
  },
  { label: 'Food & Dining (28)', value: 'food' },
  { label: 'Performances (26)', value: 'performances' },
  { label: 'Intellectual Vitality (14)', value: 'vitality' },
  { label: 'Yard Events (7)', value: 'yard-events' },
  { label: 'Sustainability (3)', value: 'sustainability' },
]
const audienceOptions = [
  { label: 'Freshmen (128)', value: 'freshmen' },
  { label: 'Sophomore (132)', value: 'sophomore' },
  { label: 'Junior (110)', value: 'junior' },
  { label: 'Senior (98)', value: 'senior' },
  { label: 'Graduate (108)', value: 'graduate' },
]

const AdvancedFilter: React.FC<AdvancedFilterProps> = ({
  closeFilter,
  selectedGroup,
  setSelectedGroup,
  selectedEvent,
  setSelectedEvent,
  selectedCategories,
  setSelectedCategories,
  selectedAudiences,
  setSelectedAudiences,
}) => {
  useEffect(() => {
    console.log(selectedGroup)
    console.log(selectedEvent)
    console.log(selectedCategories)
    console.log(selectedAudiences)
  }, [selectedGroup, selectedEvent, selectedCategories, selectedAudiences])

  return (
    <div className="fixed top-0 w-72 right-0 h-full bg-white shadow-lg overflow-x-hidden transition-all duration-300 z-50 filter-overlay">
      <div className="w-auto h-full p-6 overflow-y-auto shadow-lg">
        {/* Close Button */}
        <button
          onClick={closeFilter}
          className="bg-red-500 text-white px-4 py-2 rounded-md mb-6"
        >
          Close
        </button>

        {/* Filter Title */}
        <h3 className="text-lg font-bold mb-6">Filter Options</h3>

        {/* Group Filter Dropdown */}
        <AdvancedFilterDropdown
          label="Group"
          id="group-select"
          options={groupOptions}
          onChange={(value) => setSelectedGroup(value)}
          selectedValue={selectedGroup}
        />

        {/* Event Tags Dropdown */}
        <AdvancedFilterDropdown
          label="Event Tags"
          id="tag-select"
          options={eventOptions}
          onChange={(value) => setSelectedEvent(value)}
          selectedValue={selectedEvent}
        />

        {/* Category Tags */}
        <AdvancedFilterCheckbox
          label="Category Tags"
          options={categoryOptions}
          onChange={(selectedValues) => setSelectedCategories(selectedValues)}
          selectedValues={selectedCategories}
        />

        {/* Audience */}
        <AdvancedFilterCheckbox
          label="Audience"
          options={audienceOptions}
          onChange={(selectedValues) => setSelectedAudiences(selectedValues)}
          selectedValues={selectedAudiences}
        />
      </div>
    </div>
  )
}

export default AdvancedFilter
