import { useContext, useState, useEffect } from "react"
import { GameContext } from "../contexts/GameContext"
import PlayerDetails from "./PlayerDetails"
import GameDetails from "./GameDetails"
import { FilterContext } from "../contexts/FilterContext"


const FilterBar = () => {
    const [config, setConfig] = useState<boolean>(false);

    const { games } = useContext(GameContext)
    const { setGamesToShow, setPickedPlayer } = useContext(FilterContext)
    const [uniqueGames, setUniqueGames] = useState([])
  
    useEffect(() => {
      // console.log(games)
      const allGames = games.map( game => game.game)
      const uniqueGamesList = [...new Set(allGames)]
      console.log(uniqueGamesList)
      setUniqueGames(uniqueGamesList)
  }, [games])


    function handleClick(){
        setConfig(!config)
        // setGamesToShow(games)
        setPickedPlayer("all")
    }
    return(
        <section className="filterBar">
            <button type='button' onClick={handleClick} className ='toggleFilter'>{config ? "Välj spel" : "Välj spelare"}</button>
        {config ? (<PlayerDetails />) : (<GameDetails uniqueGames={uniqueGames}/>)}
        
        
        </section>
    )
}
export default FilterBar