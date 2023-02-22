import { useState } from 'react'
import './App.css'
import { About } from './components/about'
import { Contact } from './components/contact'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'

function App() {

  return (
    <div className=' text-xl'>
      <Nav />
      <Hero />
      <About />
      <Contact />
      inventory page
    </div>
  )
}

export default App
