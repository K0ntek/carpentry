import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import HeaderWrapper from './components/HeaderWrapper'
import About from './components/About'
import Offer from './components/Offer'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Attributes from './components/Attributes'
import OfferDesc from './components/OfferDesc'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Offer/>
      <Projects/>
      <OfferDesc/>
      <Footer/>
    </div>
  )
}

export default App
