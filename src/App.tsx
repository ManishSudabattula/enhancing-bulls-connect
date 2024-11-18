// src/App.tsx
import React from 'react'
import { Provider as ReduxStoreProvider } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { HistoryRouter } from 'redux-first-history/rr6'

import './features/Counter/index.module.css'
// import Counter from './features/Counter/index'
// import DocumentList from './features/DocumentList'
import AuthGuard from './components/AuthGuard'
import ChatsPage from './pages/ChatsPage'
import EventsPage from './pages/EventsPage'
import GroupDetailPage from './pages/GroupDetailPage' // Import the GroupDetailPage
import GroupsPage from './pages/GroupsPage'
import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'
import SignInPage from './pages/SignInPage'
import { history, store } from './store'

const ProtectedHome = AuthGuard(HomePage)
const ProtectedChats = AuthGuard(ChatsPage)

const App: React.FC = () => {
  return (
    <ReduxStoreProvider store={store}>
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<ProtectedHome />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/groups" element={<GroupsPage />} />
          <Route path="/groups/:groupId" element={<GroupDetailPage />} />{' '}
          <Route path="/events" element={<EventsPage />} />
          <Route path="/chats" element={<ProtectedChats />} />
        </Routes>
      </HistoryRouter>
    </ReduxStoreProvider>
  )
}

export default App
