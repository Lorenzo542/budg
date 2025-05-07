import React from 'react'
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import { LoaderIcon, Toaster } from 'react-hot-toast'
import { useEffect } from 'react'
import { useAuthStore} from './store/AuthContext.js' // or your actual filename

import HomePage from './pages/HomePage.jsx'

const App = () => {

  const { authUser, isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if(isCheckingAuth && !authUser) return (
		<div className='flex items-center justify-center h-screen'>
			<LoaderIcon className="size-10 animate-spin" />
		</div>
	)


  return (
    <>
    
    <BrowserRouter>
    <Toaster />
      <Routes>
      
        <Route path="/" element={authUser ? <HomePage /> : <LandingPage />} />
        <Route path='/signup' element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App