import React from 'react'


export default function Modal({ isCorrect, solution, turn }) {
  

  return (
    <div className="modal">
      {isCorrect ? (
        <div>
          <h1>You Win!</h1>
          <p className="solution">{solution}</p>
          <p>You found the solution in {turn} guesses :)</p>
          <button onClick={() => window.location.reload()}>Play again</button>
        </div>
      ) : (
        <div>
          <h1>Nevermind</h1>
          <p className="solution">{solution}</p>
          <p>Better luck next time :)</p>
          <button onClick={() => window.location.reload()}>Play again</button>
        </div>
      )}
    </div>
  )
}
