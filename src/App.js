import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])
  
  const [guess, setGuess] = useState(5)

  const [treasureLocation, setTreatureLocation] = useState(Math.floor(Math.random() * board.length)) 
  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length)) 

  const handleGamePlay = (index) => {
    // alert(index)
    let updatedBoard = [...board]
    //emoji keyboard is cmd+ctrl+space
    if(index === treasureLocation){
      updatedBoard[index] = "💰"
      setBoard(updatedBoard)
    }else if(index === bombLocation){
      updatedBoard[index] = "💣"
      setBoard(updatedBoard)
    }else {
      updatedBoard[index] = "🌴"
      setBoard(updatedBoard)
      setGuess(guess - 1)
    }
  }
  const handleRestart = () => {
    setBoard([
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?"
    ])
  }
  
  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <p className="guess">You have {guess} guesses left before game over!</p>
      <div className="gameboard">
        {board.map((value, index) => {
          return (
            <Square 
            value={value}
            key={index}
            index={index}
            handleGamePlay={handleGamePlay}
            />
          )
        })}
      </div>
    <button className="button" onClick={handleRestart}>Play Again</button>
    </>
  )
}

export default App
