import './App.css'
import GameForm from './components/GameForm'
import GameContextProvider from './contexts/GameContext'

import GameList from './components/GameList'
import PlayerContextProvider from './contexts/PlayerContext'
import FilterContextProvider from './contexts/FilterContext'
import FilterBar from './components/FilterBar'


function App() {
  return (
    <div className="app">
      <GameContextProvider>
        <PlayerContextProvider>
          <FilterContextProvider>
            <GameForm />
            <FilterBar/>
            <GameList />
          </FilterContextProvider>
        </PlayerContextProvider>
      </GameContextProvider>
    </div>
  )
}

export default App
