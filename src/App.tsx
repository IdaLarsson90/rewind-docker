import './App.css'
import GameForm from './components/GameForm'
import GameContextProvider from './contexts/GameContext'

import GameList from './components/GameList'
import Main from './components/Main/Main'
import PlayerContextProvider from './contexts/PlayerContext'
import FilterContextProvider from './contexts/FilterContext'
import FilterBar from './components/FilterBar'
import FormContextProvider from './contexts/FormContext'


function App() {


  
  return (
    <div className="app">
      <GameContextProvider>
        <PlayerContextProvider>
          <FilterContextProvider>
            <FormContextProvider>
              <Main />
              
            </FormContextProvider>
          </FilterContextProvider>
        </PlayerContextProvider>
      </GameContextProvider>
    </div>
  )
}

export default App
