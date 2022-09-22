import { useContext, useState } from "react"

import { PlayerContext } from "../contexts/PlayerContext"
import { FilterContext } from "../contexts/FilterContext"


const PlayerDetails = () => {
    const { players }= useContext(PlayerContext)
    const { gamesToShow, filterByPlayer, pickedPlayer } = useContext(FilterContext)
    
    let gamesWon = [];

    function lastWon () {
        
        const tenGames = gamesToShow.slice(0,10);

        gamesWon = tenGames.filter((game) => { 
            if (pickedPlayer === game.playerOneName && game.playerOneResult === "won") {
                return game
            } else if (pickedPlayer === game.playerTwoName && game.playerTwoResult === "won") {
                return game
            }
        })
    }
    lastWon()
    return(
        <div>
            <select onChange={filterByPlayer} name="name" id="name" >
            <option value="all">Visa alla spelare:</option>
            {
                players.map((player:any) => 
                <option value={player} key={player}>{player}</option>)
            }
            </select>
            {
                pickedPlayer !=="all" ? (
                    <p> {pickedPlayer} har vunnit {gamesWon.length} gånger de senaste 10 matcherna</p>
                ) : ( <></>)
            } 
        </div>
    )
}
export default PlayerDetails