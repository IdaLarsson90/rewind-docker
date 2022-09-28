import './App.scss'
import { useEffect } from 'react'
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import { useGameStore } from "./store/gameStore";
import { useFilterStore } from "./store/filterStore";
import { usePlayerStore } from "./store/playerStore";
import { Player } from './models/data'


function App() {
  const games = useGameStore((state) => state.games)
  const setGamesToShow = useGameStore((state) => state.setGamesToShow)
  const setPlayers = usePlayerStore((state) => state.setPlayers)

  useEffect(() => {
    const allPlayerOne = games.map( game => game.playerOneName)
    const allPlayerTwo = games.map(game => game.playerTwoName)
    const allPlayers = allPlayerOne.concat(allPlayerTwo)
    const uniquePlayers = [...new Set(allPlayers)]
    
    let uniquePlayersObjectList: Player[] = []
      uniquePlayers.forEach(uniquePlayer => {
      let player = { 
        name: uniquePlayer, 
        numberOfWins:0
      }
      uniquePlayersObjectList.push(player)
    });
    setPlayers(uniquePlayersObjectList) //hämtar alla unika spelare

    localStorage.setItem('games', JSON.stringify(games)) //sparar till local storage
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
    setGamesToShow(gamesCopy)
  }, [games])


    return (
      <div className="app">
        <Header/>
        <Main />
      </div>
    )
}

export default App
