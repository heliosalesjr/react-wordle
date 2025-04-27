import { useEffect, useState } from 'react'
import  Wordle  from './components/Wordle'

function App() {
  const [solution, setSolution] = useState(null)
  
  useEffect(() => {
    fetch('http://localhost:3001/solutions')
      .then(res => {
        if (!res.ok) throw new Error('Erro ao buscar soluções')
        return res.json()
      })
      .then(json => {
        const randomSolution = json[Math.floor(Math.random() * json.length)]
        setSolution(randomSolution.word)
      })
      .catch(err => console.error(err.message))
  }, [])
  

  return (
    <div className="App">
      <h1>My Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  )
}

export default App