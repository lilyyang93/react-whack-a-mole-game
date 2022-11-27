import './App.css'
import React, { useEffect, useState } from 'react'
import Mole from './components/mole/Mole.js'

function App() {
  // states
  const [dens, setDens] = useState(getDensState())
  const [points, setPoints] = useState(0)

  // effects
  useEffect(() => { //after rendering, call the startGame() function 
    startGame()
  }, [])

  // helpers
  function startGame() {
    setInterval(() => { //when this function is called by useEffect, it will call a built-in window method that will refresh after 15000 milliseconds
      setDens(getDensState())
    }, 15000)
  }

  function getDensState() { //showing which moles are visible (connected to state value of dens)
    return new Array(9).fill({}).map(() => { //randomly choosing visible moles from the 9 holes 
      return { 
        isMoleVisible: [true,false][Math.round(Math.random())] 
      }
    })
  }

  function onMoleWhacked() { //increment the points when a visible mole is clicked using react state value of setPoints
    setPoints(points + 1)
    console.log('clicked')
  }

  // renders
  const denElements = dens.map((den, index) => {
    return (
      <Mole isVisible={den.isMoleVisible} key={`mole-${index}`} isClicked={(onMoleWhacked)} />
    )
  })

  return (
    <div className="App">
      <h1>WHACK-A-MOLE!</h1>
      <h2>Points: { points }</h2>
      <div className="dens">
        { denElements }
        <div style={{clear: 'both'}}></div>
      </div>
    </div>
  )
}

export default App
