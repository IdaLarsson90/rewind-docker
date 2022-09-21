import './App.css'
import GameForm from './components/GameForm'
import GameContextProvider from './contexts/GameContext'

import GameList from './components/GameList'
import PlayerContextProvider from './contexts/PlayerContext'


function App() {
  return (
    <div className="app">
      <GameContextProvider>
        <PlayerContextProvider>
          <GameForm />
          <GameList />
        </PlayerContextProvider>
      </GameContextProvider>
    </div>
  )
}

export default App
