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
        <div className="tr">
            <p className="td">{game.game}</p>
            <p className="td">{game.date}</p>

            <div>
                <p className="td">{game.playerOneName}</p>
                <p className="td"> - </p>
                <p className="td">{game.playerTwoName}</p>
            </div>
            
            <div>
                <p className="td">{game.playerOneResult}</p>
                <p className="td"> - </p>
                <p className="td">{game.playerTwoResult}</p>
            </div>

            <p className="buttons td">
                <button className="primary-button" onClick={()=> showEditForm(game.id)}>
                    <img src={pen}/>
                   <p> Ändra </p></button>
                <button className="secondary-button" onClick={()=>removeGame(game.id)}>
                    <img src={bin}/>
                </button>
            
            </p>
        </div>
    )
}
export default GameListItem