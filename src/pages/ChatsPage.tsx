import React, { useState } from 'react'

import NavBar from '../components/NavBar'

interface Message {
  sender: string
  content: string
  timestamp: string
}

interface Chat {
  id: number
  name: string
  avatar: string // URL to profile picture
  messages: Message[]
}

const ChatsPage: React.FC = () => {
  const [chats] = useState<Chat[]>([
    {
      id: 1,
      name: 'John Doe',
      avatar: 'https://api.dicebear.com/9.x/lorelei/svg',
      messages: [
        {
          sender: 'John',
          content: 'Hello, how are you?',
          timestamp: '10:00 AM',
        },
        {
          sender: 'You',
          content: 'I am good, thanks! How about you?',
          timestamp: '10:02 AM',
        },
      ],
    },
    {
      id: 2,
      name: 'Jane Smith',
      avatar: '',
      messages: [
        {
          sender: 'Jane',
          content: 'Are we meeting tomorrow?',
          timestamp: '9:00 AM',
        },
        {
          sender: 'You',
          content: 'Yes, let’s meet at 10 AM.',
          timestamp: '9:05 AM',
        },
      ],
    },
  ])
  const [selectedChatId, setSelectedChatId] = useState<number>(chats[0].id)
  const [newMessage, setNewMessage] = useState('')

  const selectedChat = chats.find((chat) => chat.id === selectedChatId)

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedChat) {
      const newMessageObject = {
        sender: 'You',
        content: newMessage,
        timestamp: new Date().toLocaleTimeString(),
      }
      selectedChat.messages.push(newMessageObject)
      setNewMessage('')
    }
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Include NavBar */}
      <NavBar />

      {/* Main Container */}
      <div className="flex flex-1 pt-28 p-4 bg-gray-100">
        {/* Chat Selection Column */}
        <div className="w-1/4 bg-white p-4 rounded-lg shadow-md mr-4">
          <h2 className="text-lg font-bold mb-4">Chats</h2>
          <ul className="space-y-2">
            {chats.map((chat) => (
              <li key={chat.id} className="rounded-lg cursor-pointer">
                <button
                  onClick={() => setSelectedChatId(chat.id)}
                  className={`w-full flex items-center space-x-3 text-left p-3 rounded-lg ${
                    chat.id === selectedChatId ? 'bg-blue-100' : 'bg-gray-100'
                  }`}
                >
                  <img
                    src={
                      chat.avatar
                        ? chat.avatar
                        : `https://api.dicebear.com/9.x/pixel-art/svg?seed=${chat.name.trim()}`
                    }
                    alt={`${chat.name}'s avatar`}
                    className="w-10 h-10 rounded-full"
                  />
                  <span>{chat.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Chat Container */}
        <div className="flex flex-col w-3/4 bg-white p-4 rounded-lg shadow-md">
          {/* Chat Header with Profile Picture */}
          <div className="flex items-center space-x-3 mb-4">
            <img
              src={
                selectedChat?.avatar
                  ? selectedChat.avatar
                  : `https://api.dicebear.com/9.x/pixel-art/svg?seed=${selectedChat?.name.trim()}`
              }
              alt={`${selectedChat?.name}'s avatar`}
              className="w-10 h-10 rounded-full"
            />
            <h2 className="text-lg font-bold">{selectedChat?.name}</h2>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {selectedChat?.messages.map((message, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg ${
                  message.sender === 'You'
                    ? 'bg-blue-100 self-end'
                    : 'bg-gray-200 self-start'
                }`}
              >
                <div className="text-sm font-semibold">{message.sender}</div>
                <p>{message.content}</p>
                <div className="text-xs text-gray-500">{message.timestamp}</div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="flex items-center mt-4 space-x-4">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Type a message..."
            />
            <button
              onClick={handleSendMessage}
              className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatsPage
