// imports
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
// components
import Nav from './components/Nav'
import Footer from './components/Footer'
// pages
import Home from './pages/Home'
import NASAList from './pages/NASAList.js'
import About from './pages/About'
import Giphy from './pages/Giphy'
import StarShips from './pages/StarShips'
// css
import './App.css'
// contexts
import UserContext from './contexts/UserContext'

function App() {
  const [user, setUser] = useState('chris')
  console.log('App', user)
  return (
    <div className="App">

      <UserContext.Provider value={user}>
        <Nav />

        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='nasalist' element={<NASAList />} />
          <Route path='about' element={<About />} />
          <Route path='giphy' element={<Giphy />} />
          <Route path='starships' element={<StarShips />} />
        </Routes>

        <Footer />
      </UserContext.Provider>

    </div>
  );
}

export default App