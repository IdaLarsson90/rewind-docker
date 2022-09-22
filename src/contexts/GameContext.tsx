import {createContext, useEffect, useContext, useState} from "react";
import { Games } from "../models/data";


export const GameContext = createContext<any | null>(null);

const GameContextProvider = (props:any) => {
    // const { sortByDate } = useContext(FilterContext)

    const [games, setGames] = useState<Games[]>([
        {
            game: "Schack",
            date: "2022-06-25",
            playerOneName: "Ida",
            playerOneResult: "lost",
            playerTwoName: "Anders",
            playerTwoResult: "won",
            id:1
        },{
            game: "Memory",
            date: "2022-06-28",
            playerOneName: "Ida",
            playerOneResult: "won",
            playerTwoName: "Julia",
            playerTwoResult: "lost",
            id:2
        },{
            game: "Memory",
            date: "2022-06-27",
            playerOneName: "Ida",
            playerOneResult: "won",
            playerTwoName: "Julia",
            playerTwoResult: "lost",
            id:3
        },{
            game: "Kalaha",
            date: "2022-05-28",
            playerOneName: "Ida",
            playerOneResult: "won",
            playerTwoName: "Anders",
            playerTwoResult: "won",
            id:4
        },{
            game: "Schack",
            date: "2022-06-25",
            playerOneName: "Ida",
            playerOneResult: "won",
            playerTwoName: "Anders",
            playerTwoResult: "lost",
            id:5
        },{
            game: "Memory",
            date: "2022-06-28",
            playerOneName: "Ida",
            playerOneResult: "won",
            playerTwoName: "Julia",
            playerTwoResult: "lost",
            id:6
        },{
            game: "Memory",
            date: "2022-06-27",
            playerOneName: "Ida",
            playerOneResult: "won",
            playerTwoName: "Julia",
            playerTwoResult: "lost",
            id:7
        },{
            game: "Kalaha",
            date: "2022-05-28",
            playerOneName: "Ida",
            playerOneResult: "won",
            playerTwoName: "Anders",
            playerTwoResult: "lost",
            id:8
        },{
            game: "Schack",
            date: "2022-06-25",
            playerOneName: "Ida",
            playerOneResult: "won",
            playerTwoName: "Anders",
            playerTwoResult: "won",
            id:9
        },{
            game: "Memory",
            date: "2022-06-28",
            playerOneName: "Ida",
            playerOneResult: "won",
            playerTwoName: "Julia",
            playerTwoResult: "lost",
            id:10
        },{
            game: "Memory",
            date: "2022-06-27",
            playerOneName: "Jesus",
            playerOneResult: "won",
            playerTwoName: "Julia",
            playerTwoResult: "lost",
            id:11
        },{
            game: "Kalaha",
            date: "2022-07-28",
            playerOneName: "Ida",
            playerOneResult: "won",
            playerTwoName: "Jesus",
            playerTwoResult: "lost",
            id:12
        },{
            game: "Schack",
            date: "2022-06-30",
            playerOneName: "Ida",
            playerOneResult: "won",
            playerTwoName: "Anders",
            playerTwoResult: "won",
            id:13
        },{
            game: "Memory",
            date: "2022-06-25",
            playerOneName: "Ida",
            playerOneResult: "won",
            playerTwoName: "Julia",
            playerTwoResult: "lost",
            id:14
        },{
            game: "Memory",
            date: "2022-06-26",
            playerOneName: "Ida",
            playerOneResult: "won",
            playerTwoName: "Julia",
            playerTwoResult: "lost",
            id:15
        },{
            game: "Kalaha",
            date: "2022-05-29",
            playerOneName: "Jesus",
            playerOneResult: "won",
            playerTwoName: "Anders",
            playerTwoResult: "lost",
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
    const removeGame = (id:number) =>{
        setGames(games.filter(game => game.id !== id));
    }

    useEffect(() => {
      localStorage.setItem('games', JSON.stringify(games))
    //   sortByDate()
    }, [games])
    

    return (
        <GameContext.Provider value={{games, addGame, removeGame}}>
            { props.children }
        </GameContext.Provider>
    )
}

export default GameContextProvider