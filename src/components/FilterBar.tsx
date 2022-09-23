import { useContext, useState, useEffect } from "react"
import { GameContext } from "../contexts/GameContext"
import PlayerDetails from "./PlayerDetails"
import GameDetails from "./GameDetails"
import { FilterContext } from "../contexts/FilterContext"


const FilterBar = () => {
    const [config, setConfig] = useState<boolean>(false);
    const [configNoWins, setConfigNoWins] = useState<boolean>(false);
    const { games } = useContext(GameContext)
    const { setGamesToShow, setPickedPlayer, filterByNoWins } = useContext(FilterContext)
    const [uniqueGames, setUniqueGames] = useState([])
  
    useEffect(() => {
      // console.log(games)
      const allGames = games.map( game => game.game)
      const uniqueGamesList = [...new Set(allGames)]
      setUniqueGames(uniqueGamesList)
  }, [games])


    function handleClick(e:any){
        let className = e.target.className;

        if (className ==="toggleFilter") {
            setConfig(!config)
        } else if (className ==="noWinners") {
           
            filterByNoWins(className)
        }
        else if(className === "reset") {
            filterByNoWins(className)
        }
        setPickedPlayer("all")
    }
    return(
        <section className="filterBar">
            <h3>Filter</h3>
            <button type='button' onClick={handleClick} className ='toggleFilter'>{config ? "Välj spel" : "Välj spelare"}</button>
        
        {config ? (<PlayerDetails />) : (<GameDetails uniqueGames={uniqueGames}/>)}
        
        <button type='button' onClick={handleClick} className ='noWinners'>{"Visa alla spel utan en vinnare"}</button>
        <button type='button' onClick={handleClick} className ='reset'>{ "Visa alla spel"}</button>
        </section>
    )
}
export default FilterBar