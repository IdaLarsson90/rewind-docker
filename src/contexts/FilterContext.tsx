import {createContext, useContext, useEffect, useState} from "react";
import { GameContext } from "./GameContext"
import { Games } from "../models/data"

export const FilterContext = createContext<any | null>(null);

const FilterContextProvider = (props:any) => {
    const { games } = useContext(GameContext)

    const [gamesToShow, setGamesToShow] = useState<Games[]>(games)
    const [pickedPlayer, setPickedPlayer] = useState("all")
    const [pickedGame, setPickedGame] = useState("all")

    const filterByPlayer = (event:any) =>{ //välj en spelare
        const query = event.target.value
        let filteredList;
        if (query === "all") {
            filteredList = games.filter((game) => { 
            if (query === "all") {
                console.log("Alla valda")
                    return game
                }
            })
        } else {
            filteredList = games.filter((game) => { 
            if(game.playerTwoName === query || game.playerOneName === query) {
                return game
            }})
        }
        const gamesCopy = [...filteredList] //sorterar spelarens matcher i kronologisk ordning
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
        setPickedPlayer(query)
       
    }
    const filterByGame = (event:any) =>{
        const query = event.target.value

        let filteredList;
        if (query === "all") {
            filteredList = games.filter((game) => { 
            if (query === "all") {
                console.log("alla valda")
                    return game
                }
            })
        } 
        else {
            filteredList = games.filter((game) => { 
            if(game.game === query) {
                return game
            }})
        }
        const gamesCopy = [...filteredList] //sorterar spelarens matcher i kronologisk ordning
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
        setPickedGame(query)
        mostWins()
    }

    function mostWins () {
        let allWins = [];
        let mf = 1;
        let m = 0;
        let item;
        // console.log(gamesToShow)
        for (let wins of gamesToShow) {
            if (wins.playerOneResult === "won") {
                allWins.push(wins)
            } else if (wins.playerTwoResult === "won"){
                allWins.push(wins)
            }
        }

        for (let i = 0; i < allWins.length; i++) {
            for (let j = i; j < allWins.length; j++) {
              if(allWins[i] == allWins[j]){
                m++
              }
              if (mf < m) {
                mf = m;
                item = allWins[i]
                console.log(item.id)
              }  
            }
            // m = 0
            
        }
        
        // console.log("all wins", item, mf)

        // let playerWin = {}
        // let gamesWon = gamesToShow.filter((game) => {
        //     gamesWon.map((el)=>{
        //         console.log(el)
        //         if(el === game.playerOneName && game.playerOneResult === "won") {
                    
        //             return
        //         }
        //     })
        //     if (pickedGame === game.playerOneName && game.playerOneResult === "won") {
        //         return game
        //     } else if (pickedGame === game.playerTwoName && game.playerTwoResult === "won") {
        //         return game
        //     }
        // })
        // console.log(players)
    }
    useEffect(() => {//sorterar alla matcher när sidan startas
    const gamesCopy = [...gamesToShow]
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
    }, [games])

  
    return (
        <FilterContext.Provider value={{filterByPlayer, filterByGame, gamesToShow, setGamesToShow, pickedPlayer, setPickedPlayer, pickedGame, setPickedGame}}>
            { props.children }
        </FilterContext.Provider>
    )
};

export default FilterContextProvider