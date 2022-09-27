import './FilterBar.scss'
import { useContext, useState, useEffect } from "react"
import PlayerDetails from "./PlayerDetails"
import GameDetails from "./GameDetails"
import { FilterContext } from "../contexts/FilterContext"
import { useGameStore } from "../store/gameStore";

const FilterBar = () => {
    const [config, setConfig] = useState<boolean>(false);
    const [configNoWins, setConfigNoWins] = useState<boolean>(false);
    const games = useGameStore((state) => state.games)
    const { setPickedPlayer, filterByNoWins } = useContext(FilterContext)
    const [uniqueGames, setUniqueGames] = useState([])
    useEffect(() => {
      
      const allGames = games.map( game => game.game)
      const uniqueGamesList = [...new Set(allGames)]
      setUniqueGames(uniqueGamesList)
  }, [games])


    function handleClick(e:any){
        let className = e.target.className;
        console.log(className)
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
            {/* <h3>Filtrera</h3> */}
            
            <div className="filterButtons">
                <button type='button' onClick={handleClick} className ={`noWinners`}>{"Visa spel utan en vinnare"}</button>
                
                <button type='button' onClick={handleClick} className ='toggleFilter'>{config ? "Välj spel" : "Välj spelare"}</button>
                
                <button type='button' onClick={handleClick} className ={`reset`}>{ "Visa alla"}</button>
            </div>
            {
            config ? (<PlayerDetails />) : (<GameDetails uniqueGames={uniqueGames}/>)}
          
        </section>
    )
}
export default FilterBar