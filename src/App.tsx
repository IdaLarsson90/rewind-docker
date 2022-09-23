import './App.scss'
import GameContextProvider from './contexts/GameContext'
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import PlayerContextProvider from './contexts/PlayerContext'
import FilterContextProvider from './contexts/FilterContext'
import FormContextProvider from './contexts/FormContext'


function App() {
  return (
    <div className="app">
      <GameContextProvider>
        <PlayerContextProvider>
          <FilterContextProvider>
            <FormContextProvider>
              <Header/>
              <Main />
            </FormContextProvider>
          </FilterContextProvider>
        </PlayerContextProvider>
      </GameContextProvider>
    </div>
  )
}

export default App
