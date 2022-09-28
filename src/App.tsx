import './App.scss'
import { useEffect } from 'react'
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import { useGameStore } from "./store/gameStore";
import { useFilterStore } from "./store/filterStore";
import { usePlayerStore } from "./store/playerStore";


function App() {
  const games = useGameStore((state) => state.games)
  const setGamesToShow = useGameStore((state) => state.setGamesToShow)
  const setPlayers = usePlayerStore((state) => state.setPlayers)

  useEffect(() => {
    const allPlayerOne = games.map( game => game.playerOneName)
    const allPlayerTwo = games.map(game => game.playerTwoName)
    const allPlayers = allPlayerOne.concat(allPlayerTwo)
    const uniquePlayers = [...new Set(allPlayers)]
    setPlayers(uniquePlayers) //hämtar alla unika spelare

    localStorage.setItem('games', JSON.stringify(games)) //sparar min default-lista till local storage
    const gamesCopy = [...games]
            gamesCopy.sort(( a, b ) => {
                if (a.date < b.date){
                return 1;
                }
                if (a.date > b.date){
                return -1;
                }
                return 0;
            })
            // console.log(gamesCopy)
          setGamesToShow(gamesCopy)

}, [games])

 

    useEffect(() => {//sorterar alla matcher när sidan startas och games uppdateras
     
    }, [games])



    return (
      <div className="app">

            {/* <FilterContextProvider> */}

                <Header/>
                {/* <Hero/> */}
                <Main />
      
            {/* </FilterContextProvider> */}
        
      </div>
    )
}

export default App
