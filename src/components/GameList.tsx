import { useContext, useState, useEffect } from "react"
import { FilterContext } from "../contexts/FilterContext"
import { GameContext } from "../contexts/GameContext"
import { FormContext } from "../contexts/FormContext"
import { Games } from "../models/data"
import GameListItem from './GameListItem'


interface Props {
  
}


const GameList = ({showEditForm}: Props) => {
    const { gamesToShow, filterByGame } = useContext(FilterContext)
    const { games } = useContext(GameContext)
    const {setSubmit} = useContext(FormContext)
    const [uniqueGames, setUniqueGames] = useState([])
  


   

    useEffect(() => {
      // console.log(games)
      const allGames = games.map( game => game.game)
      const uniqueGamesList = [...new Set(allGames)]
      setUniqueGames(uniqueGamesList)
  
  }, [games])

    return (
    <div className="gamesList">
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
          return ( <GameListItem game={game} key={game.id} showEditForm={showEditForm}/> )})
        }
       
        
        </tbody>
      </table>
    </div>
  )
}

  
 export default GameList;