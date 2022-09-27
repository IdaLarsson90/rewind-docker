import './App.scss'
import { useEffect } from 'react'
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import { useGameStore } from "./store/gameStore";
import { usePlayerStore } from "./store/playerStore";
import FilterContextProvider from './contexts/FilterContext'
import FormContextProvider from './contexts/FormContext'


function App() {
  const games = useGameStore((state) => state.games)
  const setPlayers = usePlayerStore((state) => state.setPlayers)

  useEffect(() => {
    const allPlayerOne = games.map( game => game.playerOneName)
    const allPlayerTwo = games.map(game => game.playerTwoName)
    const allPlayers = allPlayerOne.concat(allPlayerTwo)
    const uniquePlayers = [...new Set(allPlayers)]
    setPlayers(uniquePlayers)


    localStorage.setItem('games', JSON.stringify(games)) //sparar min default-lista till local storage
}, [games])

  return (
    <div className="app">
      {/* <GameContextProvider> */}
        {/* <PlayerContextProvider> */}
          <FilterContextProvider>
            {/* <FormContextProvider> */}
              <Header/>
              {/* <Hero/> */}
              <Main />
            {/* </FormContextProvider> */}
          </FilterContextProvider>
        {/* </PlayerContextProvider> */}
      {/* </GameContextProvider> */}
    </div>
  )
}

export default App
