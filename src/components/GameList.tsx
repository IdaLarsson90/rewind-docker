import { useContext, useState, useEffect } from "react"
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
  const [gamesToShow, setGamesToShow] = useState<Games[]>(games)
  const [isSorted, setIsSorted] = useState<boolean>(false)
  const [onePlayerList, setOnePlayerList] = useState([])
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
    setIsSorted(true);
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
    setGamesToShow(gamesCopy)
}

const handleFilterByPlayer = (event:any) =>{
  const query = event.target.value
  let filteredList = games.filter((game) => { 
    if(game.playerTwoName === query || game.playerOneName === query) {
      return game
    }
  })
  console.log(filteredList)
  setGamesToShow(filteredList)
  
}


  return (
    <div className="gamesList">
      <select onChange={handleFilterByPlayer} name="name" id="name" >
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
         { isSorted ? (
            gamesToShow.map((game:Games)=>{
              return ( <GameDetails game={game} key={game.id}/> )
              })) :
              (
              gamesToShow.map((game:Games)=>{
                return ( <GameDetails game={game} key={game.id}/> )
              })) }
        {/* {(() => {
        if (sorted === false) {
          console.log(games)
          games.map((game:Games)=>{
            console.log(game)
            return (
            <GameDetails game={game} key={game.id}/> )
          })
        } else if (2 == 2) {
          return (
            <div>otherCase</div>
          )
        } else {
          return (
            <div>catch all</div>
          )
        }
      })()}  */}
{        // if(onePlayerList.length == 0) {
        //     sorted ? (
        //     sortedList.map((game:Games)=>{
        //       return ( <GameDetails game={game} key={game.id}/> )
        //       })) :
        //       (
        //       games.map((game:Games)=>{
        //         return ( <GameDetails game={game} key={game.id}/> )
        //       })) 
        //     } else {

            }
        
        </tbody>
      </table>
    </div>
  )
}

  
 export default GameList;