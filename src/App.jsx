import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../Component/Navbar/Navbar'
import Intro from '../Component/Intro/Intro'
import Skills from '../Component/Skills/Skills'
import Projects from '../Component/Projects/Projects'
import Conatact from '../Component/Contact/Conatact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Intro></Intro>
      <Skills></Skills>
      <Projects></Projects>
      <Conatact></Conatact>
    </>
  )
}

export default App
