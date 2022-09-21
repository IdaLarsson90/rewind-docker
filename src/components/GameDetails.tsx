import { useContext } from "react"
import { GameContext } from "../contexts/GameContext"
import { Games } from "../models/data"
import bin from "../assets/bin.svg"
import pen from "../assets/pen.svg"


interface Props{
    game: Games;
}

const GameDetails = ({game} :Props) => {
    const {removeGame} = useContext(GameContext)
    return(
        <tr>
            <td>{game.game}</td>
            <td>{game.date}</td>
            <td>{game.playerOneName}</td>
            <td>{game.playerOneResult}</td>
            <td>{game.playerTwoName}</td>
            <td>{game.playerTwoResult}</td>
            <td><button onClick={()=>removeGame(game.id)}>
                <img src={bin}/>
                Radera</button>
            </td>
            <td><button>
                <img src={pen}/>
                Redigera</button>
            </td>
        </tr>
    )
}
export default GameDetails