import './GameList.scss'
import { useContext, useState, useEffect } from "react"
import { FilterContext } from "../contexts/FilterContext"
// import { GameContext } from "../contexts/GameContext"
import { FormContext } from "../contexts/FormContext"
import { Game } from "../models/data"
import GameListItem from './GameListItem'
import { useGameStore } from "../store/gameStore";


interface Props {
  showEditForm:any;
}


const GameList = ({showEditForm}: Props) => {
    const { gamesToShow, filterByGame } = useContext(FilterContext)
    // const { games } = useContext(GameContext)
    const games = useGameStore((state) => state.games)
    const {setSubmit} = useContext(FormContext)
    const [uniqueGames, setUniqueGames] = useState([])
  



    useEffect(() => {
      const allGames = games.map( game => game.game)
      const uniqueGamesList = [...new Set(allGames)]
      setUniqueGames(uniqueGamesList)
  
  }, [games])
    return (
    <div className="gameList">
      <section className="table">
               
        {
          gamesToShow.map((game:Games)=>{
          return ( <GameListItem game={game} key={game.id} id={game.id}  showEditForm={showEditForm}/> )})
        }
       
        
        
      </section>
    </div>
  )
}

  
 export default GameList;