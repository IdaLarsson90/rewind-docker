import './FilterBar.scss'
import { useState, useEffect } from "react"
import PlayerDetails from "./PlayerDetails"
import GameDetails from "./GameDetails"
import { useGameStore } from "../store/gameStore";
import { useFilterStore } from "../store/filterStore";
import { usePlayerStore } from "../store/playerStore";
import { Player, Game } from '../models/data';

const FilterBar = () => {
    const [config, setConfig] = useState<boolean>(false);
    const games = useGameStore((state) => state.games)
    const gamesToShow = useGameStore((state) => state.gamesToShow)
    const setGamesToShow = useGameStore((state) => state.setGamesToShow)
    const setPickedPlayer = useFilterStore((state)=>state.setPickedPlayer)
    const setWinner = useFilterStore((state) => state.setWinner)
    const setPickedGame = useFilterStore((state) => state.setPickedGame)
    const [uniqueGames, setUniqueGames] = useState([])
    
    useEffect(() => {
      const allGames = games.map( game => game.game)
      const uniqueGames = [...new Set(allGames)]
      
      let uniqueGamesObjectList: Game[] = []
        uniqueGames.forEach(uniqueGame => {
        let game = { 
            game: uniqueGame,
            date: "",
            playerOneName: "",
            playerOneResult: "",
            playerTwoName: "",
            playerTwoResult: "",
            id:0
        }
        uniqueGamesObjectList.push(game)
      });
      setUniqueGames(uniqueGamesObjectList)
    }, [games])

    function filterByNoWins(className:string) {
           if (className === "noWinners") {
            let noWinners = games.filter((game) =>{
                if(game.playerOneResult === "loss" && game.playerTwoResult === "loss") {
                    return game;
                }})
                
            const gamesCopy = [...noWinners]
            gamesCopy.sort(( a, b ) => {
                if (a.date < b.date){
                    return 1;
                }
                if (a.date > b.date){
                    return -1;
                }
                return 0;
            })
            setPickedPlayer('all')
            setGamesToShow(gamesCopy)
        } 
        else {
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
    let allGamesWithWinner = [];
    let playerWins: Player[] = [];
    let playerObj: Player;
    let playerExists = false;

    for (let wins of gamesToShow) { //lägger alla spel som har en vinnare i en lista
        if (wins.playerOneResult === "win") {
          allGamesWithWinner.push(wins)
        } else if (wins.playerTwoResult === "win"){
          allGamesWithWinner.push(wins)
        }
    }

    allGamesWithWinner.map((e) => {  //Kollar vem eller vilka i varje spel som vunnit
       if(e.playerOneResult === "win") {
        if ( playerWins.length < 1) {
          playerObj = {
            name: e.playerOneName, numberOfWins: 1
          }
          playerWins.push(playerObj)
        } else {
          for(let i = 0; i < playerWins.length; i++) {
            if(e.playerOneName == playerWins[i].name) {
              playerWins[i].numberOfWins = playerWins[i].numberOfWins + 1
              playerExists = true;
            }
          }
          if(!playerExists) {
            playerObj = {
              name: e.playerOneName,
              numberOfWins: 1
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
              numberOfWins: 1
            }
            playerWins.push(playerObj)
          } else {
            for(let i = 0; i < playerWins.length; i++) {
              if(e.playerTwoName == playerWins[i].name) {
                playerWins[i].numberOfWins = playerWins[i].numberOfWins + 1
                playerExists = true;
              }
            } 
            if(!playerExists) {
              playerObj = {
                name: e.playerTwoName,
                numberOfWins: 1
              }
              playerWins.push(playerObj)
            }
            playerExists = false;
          }
        }
    })
    let a = [playerWins[0]]
    playerWins.filter((i:Player) => {
      if (i.numberOfWins === a[0].numberOfWins && i.name !== a[0].name) {
          a = [...a, i]
      }
      else if (i.numberOfWins > a[0].numberOfWins) {
          a = []
          a.push(i)
      }
    })

    if (a[0] === undefined) {
      setWinner([{name: "Ingen", wins: 0}])
      setPickedGame("all")
    } else {
      setWinner(a)
    }
  }, [gamesToShow]) 

  function reset() {
    const gamesCopy = [...games] //sorterar spelarens matcher i kronologisk ordning
        gamesCopy.sort(( a, b ) => {
            if (a.date < b.date){
            return 1;
            }
            if (a.date > b.date){
            return -1;
            }
            return 0;
        })
    setPickedPlayer("all")

    setGamesToShow(gamesCopy) 
  }

    function handleClick(e:any){
        let className = e.target.className;
        if (className ==="toggleFilter") {
            setConfig(!config)
        }  else if (className ==="noWinners") {
            filterByNoWins(className)
        } else if(className === "reset") {
            reset()
        }
    }

    return(
        <section className="filterBar">            
            <div className="filterButtons">
                <div className='filterBox'>
                    <button type='button' onClick={handleClick} className ='reset'>Visa alla spel</button>
                    <button type='button' onClick={handleClick} className ='noWinners'>Visa alla spel utan en vinnare</button>
                    <div>    
                        <p>Klicka på knappen för att välja ett specifikt spel eller en specifik spelare</p>
                        <button type='button' onClick={handleClick} className ='toggleFilter'>{config ? "Välj spel" : "Välj spelare"}</button>
                        {
                            config ? (<PlayerDetails />) : (<GameDetails uniqueGames={uniqueGames}/>)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FilterBar