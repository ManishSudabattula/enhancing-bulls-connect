// src/App.tsx
import React from 'react'
import { Provider as ReduxStoreProvider } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { HistoryRouter } from 'redux-first-history/rr6'

import './features/Counter/index.module.css'
// import Counter from './features/Counter/index'
// import DocumentList from './features/DocumentList'
import DashboardPage from './pages/DashboardPage'
import LandingPage from './pages/LandingPage'
import SignInPage from './pages/SignInPage'
import { history, store } from './store'

const App: React.FC = () => {
  return (
    <ReduxStoreProvider store={store}>
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </HistoryRouter>
    </ReduxStoreProvider>
  )
}

export default App
