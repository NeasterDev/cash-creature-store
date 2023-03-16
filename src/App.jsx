import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Home } from './pages/Home'
import { Inventory } from './pages/Inventory'

function App() {

  return (
    <BrowserRouter>
        <Nav />
        <Hero />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/inventory' element={<Inventory />} />
        </Routes>


    </BrowserRouter>
  )
}

export default App
