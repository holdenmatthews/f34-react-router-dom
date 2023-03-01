import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

const About = () => {
  const [person, setPerson] = useState("")

  const handleClick = (name) => {
    setPerson(name)
  }

  return (
    <div>
      <h1>About</h1>
      <div>
        <button onClick={() => handleClick("holden")}>Holden</button>
        <button onClick={() => handleClick("holden")}>Matthews</button>
      </div>
      <Routes>
        {/* <Route path="/holden" element={} /> */}
      </Routes>
    </div>
  )
}

export default About