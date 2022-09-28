import './FilterBar.scss'
import { useState, useEffect } from "react"
import PlayerDetails from "./PlayerDetails"
import GameDetails from "./GameDetails"
import { useGameStore } from "../store/gameStore";
import { useFilterStore } from "../store/filterStore";
import { usePlayerStore } from "../store/playerStore";

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
      const uniqueGamesList = [...new Set(allGames)]
      setUniqueGames(uniqueGamesList)
    }, [games])

    function filterByNoWins(className:string) {
           if (className === "noWinners") {
            let noWinners = games.filter((game) =>{
                if(game.playerOneResult === "loss" && game.playerTwoResult === "loss") {
                    console.log(game)
                    return game;
                }})
                
            const gamesCopy = [...noWinners]
            console.log(gamesCopy)
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
    let playerWins: [] = [];
    let playerObj = {};
    let playerExists = false;
    console.log('blahaaa',gamesToShow)
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
            name: e.playerOneName, wins: 1
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
//HÄR ÄR DET FEEEEEEEEEEEL
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

    if (a[0] === undefined) {
      setGamesToShow(games)
      setWinner([{name: "Ingen", wins: 0}])
      setPickedGame("all")
    } else {
      setWinner(a)
    }
  }, [games]) //Den SKA Va games annars funkar inte no winner

    function handleClick(e:any){
        let className = e.target.value;
        console.log(className)
        if (className ==="filterPlayer") {
            setConfig(true)
        } else if (className ==="filterGame") {
            setConfig(false)
        } else if (className ==="noWinners") {
            filterByNoWins(className)
        } else if(className === "reset") {
            setPickedPlayer("all")
        }
    }

    return(
        <section className="filterBar">            
            <div className="filterButtons">
            <div className='filterBox'>
                     <div>
                        <input onChange={handleClick} type="radio" id="reset" name="filter" value="reset"></input>
                        <label htmlFor="reset">Visa alla</label>
                    </div>
                    <div>
                        <input onChange={handleClick} type="radio" id="css" name="filter" value="noWinners"></input>
                        <label htmlFor="css">Visa spel utan vinnare</label>
                    </div>
                   
                </div>    
            <div className='filterBox'>
                <div>
                    <input onChange={handleClick} type="radio" id="html" name="filter" value="filterPlayer"></input>
                    <label htmlFor="html">Välj spelare</label>
                </div>
                    <div>
                    <input onChange={handleClick} type="radio" id="html" name="filter" value="filterGame"></input>
                    <label htmlFor="html">Välj spel</label>
                </div>
                {
            config ? (<PlayerDetails />) : (<GameDetails uniqueGames={uniqueGames}/>)}
            </div>
                


                {/* <button type='button' onClick={handleClick} className ={`noWinners`}>{"Visa spel utan en vinnare"}</button>
                
                <button type='button' onClick={handleClick} className ='toggleFilter'>{config ? "Välj spel" : "Välj spelare"}</button>
                
                <button type='button' onClick={handleClick} className ={`reset`}>{ "Visa alla"}</button> */}
            </div>
            
          
        </section>
    )
}
export default FilterBar