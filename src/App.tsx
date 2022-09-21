import { useState } from 'react'
import './App.css'
import AddGameForm from './components/AddGameForm'
import ShowGames from './components/ShowGames'
import jsonData from "./models/games.json"
import { FormState, Games } from './models/data'


function App() {
const [games, setGames] = useState<Games[]>(jsonData.games)
const [formData, setFormData] = useState<FormState>({
  game: "",
  date: "",
  playerOneName: "",
  playerOneResult: "",
  playerTwoName: "",
  playerTwoResult: "",
})
  return (
    <div className="app">
        <AddGameForm formData={formData} setFormData={setFormData}/>
        <ShowGames formData={formData} setFormData={setFormData}/>
    </div>
  )
}

export default App
