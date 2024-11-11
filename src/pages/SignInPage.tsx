// src/pages/SignInPage.tsx
import React from 'react'

const SignInPage: React.FC = () => {
  return (
    <div className="signin-page flex items-center justify-center min-h-screen bg-gray-100 relative">
      <div className="bg-image absolute inset-0 z-0"></div>

      <div className="signin-container bg-white rounded-lg shadow-md p-8 z-10 relative max-w-sm">
        <img
          src="path_to_usf_logo"
          alt="University of South Florida"
          className="h-8 mb-4 mx-auto"
        />

        <h2 className="text-center text-xl font-semibold mb-6">Sign in</h2>

        <p className="text-center text-gray-500 text-sm mb-8">
          Sign-in with your NetID@usf.edu (not U#)
        </p>

        <input
          type="text"
          placeholder="Enter your NetID@usf.edu"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        />

        <div className="flex justify-between mb-4">
          <button className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg">
            Back
          </button>
          <button className="px-4 py-2 text-white bg-blue-600 rounded-lg">
            Next
          </button>
        </div>

        <p className="text-xs text-center text-gray-500 mb-4">
          By logging in you agree to follow the USF’s
          <a href="#" className="text-blue-600">
            {' '}
            Acceptable Use Policy
          </a>
        </p>

        <button className="flex items-center justify-center w-full text-gray-600 border-t pt-4">
          <span className="mr-2">🔍</span> Sign-in options
        </button>
      </div>
    </div>
  )
}

export default SignInPage
