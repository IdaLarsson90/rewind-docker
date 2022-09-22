import { useContext, useState, useEffect } from "react"
import { FilterContext } from "../contexts/FilterContext"
import { GameContext } from "../contexts/GameContext"
import { Games } from "../models/data"
import GameListItem from './GameListItem'



const GameList = () => {
    const { gamesToShow, filterByGame } = useContext(FilterContext)
    const { games } = useContext(GameContext)
    const [uniqueGames, setUniqueGames] = useState([])
  
    useEffect(() => {
      // console.log(games)
      const allGames = games.map( game => game.game)
      const uniqueGamesList = [...new Set(allGames)]
      setUniqueGames(uniqueGamesList)
  }, [games])

    return (
    <div className="gamesList">
      {/* <div>
          <select onChange={filterByGame} name="name" id="name" >
          <option value="all">Visa alla spel:</option>
          {
              uniqueGames.map((game:any) => 
              <option value={game} key={game}>{game}</option>)
          }
          </select>
        </div> 
        <PlayerDetails /> */}
      <table>
        <tbody>
        <tr>
          <th>Spel</th>
          <th>Datum</th>
          <th>Spelare 1</th>
          <th>Resultat</th>
          <th>Spelare 2</th>
          <th>Resultat</th>
        </tr>
        { 
          gamesToShow.map((game:Games)=>{
          return ( <GameListItem game={game} key={game.id}/> )})
        }
        
        </tbody>
      </table>
    </div>
  )
}

  
 export default GameList;