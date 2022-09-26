import './GameList.scss'
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
    <div className="gameList">
      <section className="table">
               
        {
          gamesToShow.map((game:Games)=>{
          return ( <GameListItem game={game} key={game.id} showEditForm={showEditForm}/> )})
        }
       
        
        
      </section>
    </div>
  )
}

  
 export default GameList;