import { useContext, useState } from "react"
import { GameContext } from "../contexts/GameContext"
import { FilterContext } from "../contexts/FilterContext"
import { Games } from "../models/data"
import bin from "../assets/bin.svg"
import pen from "../assets/pen.svg"
import { FormContext } from "../contexts/FormContext"


interface Props{
    game: Games,
    showEditForm:any
}


const GameListItem = ({game, showEditForm} :Props) => {
    const {games, setGames} = useContext(GameContext)
    const { gamesToShow, setGamesToShow } = useContext(FilterContext)
    // const { handleEdit }= useContext(FormContext)
    
    function removeGame (id:number){
        console.log("remove", id)
        const newList = gamesToShow.filter(game => game.id !== id)

        const gamesCopy = [...newList]
        gamesCopy.sort(( a, b ) => {
            if (a.date < b.date){
            return 1;
            }
            if (a.date > b.date){
            return -1;
            }
            return 0;
        })
        setGamesToShow(gamesCopy)
    }
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
            <td><button onClick={()=> showEditForm(game.id)}>
                <img src={pen}/>
                Redigera</button>
            </td>
        </tr>
    )
}
export default GameListItem