import {createContext, useContext, useEffect, useState} from "react";
import { GameContext } from "./GameContext"
import { Games } from "../models/data"

export const FilterContext = createContext<any | null>(null);

const FilterContextProvider = (props:any) => {
    const { games } = useContext(GameContext)

    const [gamesToShow, setGamesToShow] = useState<Games[]>(games)
    const [pickedPlayer, setPickedPlayer] = useState("all")
    const [pickedGame, setPickedGame] = useState("all")
    const [winner, setWinner] = useState ([{
        name: "", wins: 0
    }])

    const filterByPlayer = (event:any) =>{ //välj en spelare
        const query = event.target.value
        let filteredList;
        if (query === "all") {
            filteredList = games.filter((game) => { 
            if (query === "all") {
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
    }

    function filterByNoWins(className) {
        if (className === "noWinners") {
            let noWinners = games.filter((game) =>{
                if(game.playerOneResult === "loss" && game.playerTwoResult === "loss") {
                    return game;
                }})
            setGamesToShow(noWinners)
        } else {
            
            const gamesCopy = [...games]
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
    }

    useEffect(() => {
        let allWins = [];
        let playerWins: Array = [];
        let playerObj = {};
        let playerExists = false;

        for (let wins of gamesToShow) {
            if (wins.playerOneResult === "win") {
                allWins.push(wins)
            } else if (wins.playerTwoResult === "win"){
                allWins.push(wins)
            }
        }
        allWins.map((e) => {
            if(e.playerOneResult === "win") {
                if ( playerWins.length < 1) {
                    playerObj = {
                        name: e.playerOneName,
                        wins: 1
                    }
                    playerWins.push(playerObj)
                } else {
                    for(let i = 0; i < playerWins.length; i++) {
                        if(e.playerOneName == playerWins[i].name) {
                            playerWins[i].wins = playerWins[i].wins + 1
                            playerExists = true;
                        }
                    }
                    if(!playerExists) {
                        playerObj = {
                            name: e.playerOneName,
                            wins: 1
                        }
                        playerWins.push(playerObj)
                    }
                    playerExists = false;
                }
            }
            if(e.playerTwoResult === "win") {
                if ( playerWins.length < 1) {
                    playerObj = {
                        name: e.playerTwoName,
                        wins: 1
                    }
                    playerWins.push(playerObj)
                } else {
                    for(let i = 0; i < playerWins.length; i++) {
                        if(e.playerTwoName == playerWins[i].name) {
                            playerWins[i].wins = playerWins[i].wins + 1
                            playerExists = true;
                        }
                    } 
                    if(!playerExists) {
                        playerObj = {
                            name: e.playerTwoName,
                            wins: 1
                        }
                        playerWins.push(playerObj)
                    }
                    playerExists = false;
                }
            }
        })
     
        let a = [playerWins[0]]

        playerWins.filter((i:object) => {
            if (i.wins === a[0].wins && i.name !== a[0].name) {
                a = [...a, i]
            }
             else if (i.wins > a[0].wins) {
                a = []
                a.push(i)
            }
        })
        console.log('a', a)
        console.log('a length', a.length)
        if (a[0] === undefined) {
            // setGamesToShow(games)
            setWinner([{name: "Ingen", wins: 0}])
            setPickedGame("all")
        } else {
            setWinner(a)
        }
    
       
    }, [gamesToShow])
    
    useEffect(() => {//sorterar alla matcher när sidan startas
    const gamesCopy = [...games]
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
        <FilterContext.Provider value={{filterByPlayer, filterByGame, gamesToShow, setGamesToShow, pickedPlayer, setPickedPlayer, pickedGame, setPickedGame, winner, filterByNoWins}}>
            { props.children }
        </FilterContext.Provider>
    )
};

export default FilterContextProvider