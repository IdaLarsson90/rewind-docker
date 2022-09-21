import { useContext, useState } from "react"
import { GameContext } from "../contexts/GameContext"
import { PlayerContext } from "../contexts/PlayerContext"
import { Games } from "../models/data"
import GameDetails from './GameDetails'


const GameList = () => {
   const { games } = useContext(GameContext)
   const { players }= useContext(PlayerContext)
   
   const [pickedPlayer, setPickedPlayer] = useState({
    name:""
  });
  const [sorted, setSorted] = useState<boolean>(false)
  // const [onePlayerList, setOnePlayerList] = useState()
  const [sortedList, setSortedList] = useState([{
    game: "",
    date: "",
    playerOneName: "",
    playerOneResult: "",
    playerTwoName: "",
    playerTwoResult: "",
    id:1
  }]);

  const sortByDate = () => {
    setSorted(true);
    const gamesCopy = [...games]
    console.log("Sorterar")
    console.log("copy", gamesCopy)
    gamesCopy.sort(( a, b ) => {
      if (a.date < b.date){
        return 1;
      }
      if (a.date > b.date){
      return -1;
      }
      return 0;
    })
    setSortedList(gamesCopy)
}

const handleFilterByPlayer = () =>{
  games.filter((game)=>{
    if (game.playerOneName || game.playerTwoName == pickedPlayer.name) {
      console.log("yeo")
    }
  })
}


 console.log("Vald:", pickedPlayer)
  return (
    <div className="gamesList">
      <select onChange={handleFilterByPlayer} name="name" id="name" value={pickedPlayer.name}>
        <option hidden={true} value="">Visa alla:</option>
        {players.map((player:any) => <option value={player.name} key={player.name}>{player.name}</option>)}
      </select>
      <table>
        <tbody>
        <tr>
          <th>Spel</th>
          <th onClick={sortByDate}>Datum</th>
          <th>Spelare 1</th>
          <th>Resultat</th>
          <th>Spelare 2</th>
          <th>Resultat</th>
        </tr>
        {sorted ? (
        sortedList.map((game:Games)=>{
          return ( <GameDetails game={game} key={game.id}/> )
          })) :
          (
          games.map((game:Games)=>{
            return ( <GameDetails game={game} key={game.id}/> )
          })) 
        }
        </tbody>
      </table>
    </div>
  )
}

  
 export default GameList;