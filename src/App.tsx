import './App.css'
import GameForm from './components/GameForm'
import GameContextProvider from './contexts/GameContext'
import GameList from './components/GameList'


function App() {
  return (
    <div className="app">
      <GameContextProvider>
        <GameForm />
        <GameList />
      </GameContextProvider>
    </div>
  )
}

export default App
