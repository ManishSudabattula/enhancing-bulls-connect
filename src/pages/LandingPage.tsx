import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage: React.FC = () => {
  const handleSignIn = () => {
    window.location.href =
      'https://login.microsoftonline.com/741bf7de-e2e5-46df-8d67-82607df9deaa/oauth2/v2.0/authorize?client_id=e00dc75c-c8bd-4b08-a291-5dfe8b54abbb&redirect_uri=https%3A%2F%2Fnetid.usf.edu%2Fsignin-oidc&response_type=id_token&scope=openid%20profile&response_mode=form_post&nonce=638668600103267078.NmI4MWJkZDEtYWRkYi00NzQ3LWE0YWMtMTQzOGJiYmI1MzNjZjlkMWMxMjQtYjVjMy00Y2I2LWIzYTUtNDc1OThmNjZlYzFj&client_info=1&x-client-brkrver=IDWeb.2.17.4.0&state=CfDJ8LqwDZVxMtFPlpc_1U8sIvYewRABg2zSnY_BOthBkLCm9WH87af27ImawG5OjYzYKLlDCkx7p6KIiPr13D4oGDPV1uL9eDM-dWc2jmFnagmYeGeg9msqtGHQA8PeGhezrskJlgNhhWxESOHE_dTm8j7_xT_YJBfCyVNIox3zKsKont7wDGSeuFsZ1QH9D5fz8WD2lHrDSuYVBxs4vqZZcBhL2_56cRWyIxwWXahTGxg6dpHdagAyO4tXp9dm7HF1uD_q-ePHGHG_TamUnqPPWBLkTGHt-m3yJeZPUrY08py9&x-client-SKU=ID_NET8_0&x-client-ver=7.5.0.0cle'
  }

  return (
    <div className="landing-page-container min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="text-3xl font-bold">BullsConnect</div>
        <button
          onClick={handleSignIn}
          className="px-4 py-2 bg-black text-white rounded-lg"
        >
          Sign In
        </button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row items-center justify-center mt-12 px-8">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>

        {/* Left Section - Image and Tags */}
        <div className="relative bg-[#2E4D42] rounded-[30px] overflow-hidden shadow-lg img-box">
          {/* Image */}
          <img
            src="images/studentscampussmall 1.png"
            alt="Students"
            className="w-full h-full object-cover stud-img"
          />

          {/* Tag 1 - Bottom Left */}
          <span className="absolute bottom-6 left-6 px-2 py-1 bg-yellow-400 text-black rounded-md text-sm font-medium">
            #Events
          </span>

          {/* Tag 2 - Middle Right, Rotated */}
          <span className="absolute bottom-10 right-12 px-2 py-1 bg-purple-300 text-black rounded-md text-sm font-medium rotate-12">
            #StudentOrg
          </span>

          {/* Tag 3 - Bottom Center */}
          <span className="absolute bottom-6 right-1/2 transform translate-x-1/2 px-2 py-1 bg-orange-400 text-black rounded-md text-sm font-medium">
            #News
          </span>
        </div>

        {/* Right Section - Text and Buttons */}
        <div className="flex flex-col items-start ml-8 mt-8 md:mt-0">
          <h1 className="font-heading text-5xl font-light">
            Connect with BULLS
          </h1>
          <p className="font-sans text-lg text-gray-600 intro-p">
            Plug into campus life! Chat with fellow Bulls, explore 800+ student
            organizations, and catch weekly events. Add your favorites to your
            calendar and make the most of USF's official student hub. Your
            community is waiting!
          </p>

          <div className="flex gap-4 mt-6">
            {/* Buttons */}
            <button className="flex items-center px-4 py-2 bg-orange-300 rounded-md text-lg">
              <span className="mr-2">👥</span> Chat & Share
            </button>
            <button className="flex items-center px-4 py-2 bg-green-300 rounded-md text-lg">
              <span className="mr-2">✳️</span> Discover More
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LandingPage
