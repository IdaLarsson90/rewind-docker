import { useContext, useState } from "react"
import { GameContext } from "../contexts/GameContext"
import { Games } from "../models/data"
import GameDetails from './GameDetails'


const GameList = () => {
  const [sorted, setSorted] = useState<boolean>(false)
  const [sortedList, setSortedList] = useState([
    {
        game: "Schack",
        date: "2022-06-25",
        playerOneName: "Ida",
        playerOneResult: "won",
        playerTwoName: "Anders",
        playerTwoResult: "lost",
        id:1
    }]);

  const {games} = useContext(GameContext)
  console.log(sorted)

 

  const sortByDate = () => {
    setSorted(true);
    const gamesCopy = [...games]
    console.log("Sorterar")
    console.log("copy", gamesCopy)
    gamesCopy.sort((a,b )=>{
      if (a.date < b.date){
        return -1;
      }
      if (a.date > b.date){
      return 1;
      }
      return 0;
    })
    setSortedList(gamesCopy)
}


    return (
      <div className="gamesList">
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
          { sorted ? (
            sortedList.map((game:Games)=>{
            return ( <GameDetails game={game} key={game.id}/> )
          })) :
          (
            games.map((game:Games)=>{
              return ( <GameDetails game={game} key={game.id}/> )
            })
          ) }
          </tbody>
        </table>
      </div>
    )
  }
  
  export default GameList
  