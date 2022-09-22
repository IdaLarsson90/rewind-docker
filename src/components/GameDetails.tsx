import { useContext, useState, useEffect } from "react"
import { GameContext } from "../contexts/GameContext"
import { PlayerContext } from "../contexts/PlayerContext"
import { FilterContext } from "../contexts/FilterContext"

interface Props{
    uniqueGames: any;
}

const GameDetails = ({uniqueGames}: Props) => {
    const { games } = useContext(GameContext)
    const { players, setPlayers }= useContext(PlayerContext)
    const { filterByGame, pickedGame, gamesToShow } = useContext(FilterContext)
    
 
   

    
    
    return(
        <div>
          <select onChange={filterByGame} name="name" id="name" >
          <option value="all">Visa alla spel:</option>
          {
            uniqueGames.map((game:any) => 
            <option value={game} key={game}>{game}</option>)
          }
          </select>
          {
            pickedGame !=="all" ? (
                <p> {"Någon"} har vunnit flest antal gånger i {pickedGame} någonsin</p>
            ) : ( <></>)
            } 
        </div> 
    )
}
export default GameDetails