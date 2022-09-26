import {createContext, useEffect, useContext, useState} from "react";
import { Games } from "../models/data";


export const GameContext = createContext<any | null>(null);

const GameContextProvider = (props:any) => {
    const [games, setGames] = useState<Games[]>([
        {
            game: "Schack",
            date: "2022-06-25",
            playerOneName: "Ida",
            playerOneResult: "loss",
            playerTwoName: "Anders",
            playerTwoResult: "win",
            id:1
        },{
            game: "Memory",
            date: "2022-06-28",
            playerOneName: "Ida",
            playerOneResult: "win",
            playerTwoName: "Julia",
            playerTwoResult: "loss",
            id:2
        },{
            game: "Memory",
            date: "2022-06-27",
            playerOneName: "Ida",
            playerOneResult: "win",
            playerTwoName: "Julia",
            playerTwoResult: "loss",
            id:3
        },{
            game: "Kalaha",
            date: "2022-05-28",
            playerOneName: "Ida",
            playerOneResult: "win",
            playerTwoName: "Anders",
            playerTwoResult: "win",
            id:4
        },{
            game: "Schack",
            date: "2022-06-25",
            playerOneName: "Ida",
            playerOneResult: "loss",
            playerTwoName: "Anders",
            playerTwoResult: "loss",
            id:5
        },{
            game: "Memory",
            date: "2022-06-28",
            playerOneName: "Ida",
            playerOneResult: "win",
            playerTwoName: "Julia",
            playerTwoResult: "loss",
            id:6
        },{
            game: "Memory",
            date: "2022-06-27",
            playerOneName: "Ida",
            playerOneResult: "win",
            playerTwoName: "Julia",
            playerTwoResult: "loss",
            id:7
        },{
            game: "Kalaha",
            date: "2022-05-28",
            playerOneName: "Ida",
            playerOneResult: "win",
            playerTwoName: "Anders",
            playerTwoResult: "loss",
            id:8
        },{
            game: "Schack",
            date: "2022-06-25",
            playerOneName: "Ida",
            playerOneResult: "win",
            playerTwoName: "Anders",
            playerTwoResult: "win",
            id:9
        },{
            game: "Memory",
            date: "2022-06-28",
            playerOneName: "Ida",
            playerOneResult: "win",
            playerTwoName: "Julia",
            playerTwoResult: "loss",
            id:10
        },{
            game: "Memory",
            date: "2022-06-27",
            playerOneName: "Jesus",
            playerOneResult: "win",
            playerTwoName: "Julia",
            playerTwoResult: "loss",
            id:11
        },{
            game: "Kalaha",
            date: "2022-07-28",
            playerOneName: "Ida",
            playerOneResult: "win",
            playerTwoName: "Jesus",
            playerTwoResult: "loss",
            id:12
        },{
            game: "Schack",
            date: "2022-06-30",
            playerOneName: "Ida",
            playerOneResult: "win",
            playerTwoName: "Anders",
            playerTwoResult: "win",
            id:13
        },{
            game: "Memory",
            date: "2022-06-25",
            playerOneName: "Ida",
            playerOneResult: "win",
            playerTwoName: "Julia",
            playerTwoResult: "loss",
            id:14
        },{
            game: "Memory",
            date: "2022-06-26",
            playerOneName: "Ida",
            playerOneResult: "win",
            playerTwoName: "Julia",
            playerTwoResult: "loss",
            id:15
        },{
            game: "Kalaha",
            date: "2022-05-29",
            playerOneName: "Jesus",
            playerOneResult: "win",
            playerTwoName: "Anders",
            playerTwoResult: "loss",
            id:16
        }
    ])
    const addGame = (formData:any, setFormData:any) => { 
        setGames([ ...games, { //Lägger till nytt spel i listan
            game: formData.game, 
            date: formData.date,
            playerOneName: formData.playerOneName,
            playerOneResult: formData.playerOneResult,
            playerTwoName: formData.playerTwoName,
            playerTwoResult: formData.playerTwoResult,
            id: (games.length + 1)
        }])
        setFormData({ //Tömmer inputfält efter klick
            game: "",
            date: "",
            playerOneName: "",
            playerOneResult: "",
            playerTwoName: "",
            playerTwoResult: "",
            id:0
        })
    };
   

    useEffect(() => {
      localStorage.setItem('games', JSON.stringify(games))
    //   sortByDate()
    }, [games])
    

    return (
        <GameContext.Provider value={{games, addGame, setGames}}>
            { props.children }
        </GameContext.Provider>
    )
}

export default GameContextProvider