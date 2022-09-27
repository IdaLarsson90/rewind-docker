import './PlayerDetails.scss'
import { useContext } from "react"
import { usePlayerStore } from "../store/playerStore";

import { FilterContext } from "../contexts/FilterContext"

const PlayerDetails = () => {

    const players = usePlayerStore((state) => state.players)
    const { gamesToShow, filterByPlayer, pickedPlayer } = useContext(FilterContext)
    
    let gamesWon = [];

    function lastWon () {
        const tenGames = gamesToShow.slice(0, 10);

        gamesWon = tenGames.filter((game) => { 
            if (pickedPlayer === game.playerOneName && game.playerOneResult === "win") {
                return game
            } else if (pickedPlayer === game.playerTwoName && game.playerTwoResult === "win") {
                return game
            }
        })
    }
    lastWon()
    return(
        <div className="playerDetails">
            <select onChange={filterByPlayer} name="name" id="name" >
            <option value="all">Visa alla spelare:</option>
            {
                players.map((player:any) => 
                <option value={player} key={player}>{player}</option>)
            }
            </select>
            {
                pickedPlayer !=="all" ? (
                    <p className="playerInfo"> {pickedPlayer} har vunnit {gamesWon.length} gånger de senaste 10 matcherna</p>
                ) : ( <></>)
            } 
        </div>
    )
}
export default PlayerDetails