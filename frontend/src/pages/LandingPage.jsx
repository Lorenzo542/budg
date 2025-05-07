import React from 'react'

const LandingPage = () => {
  return (
    <>
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to Budget Buddy</h1>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
            Track your income and expenses with ease. Visualize your data. Upload CSVs. All in one place.
        </p>
        <div className="space-x-4">
            <a href="/login" className="btn btn-outline btn-primary">Log In</a>
            <a href="/signup" className="btn btn-primary">Get Started</a>
        </div>
        </div>
    </>
  )
}

export default LandingPage