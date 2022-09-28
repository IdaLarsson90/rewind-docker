import './PlayerDetails.scss'
import { usePlayerStore } from "../store/playerStore";
import { useGameStore } from "../store/gameStore";
import { useFilterStore } from "../store/filterStore";
import { Game, Player } from "../models/data"

const PlayerDetails = () => {
    const games = useGameStore((state) => state.games)
    
    const players = usePlayerStore((state) => state.players)
    const setGamesToShow = useGameStore((state) => state.setGamesToShow)
    const gamesToShow = useGameStore((state) => state.gamesToShow)
    const setPickedPlayer = useFilterStore((state) => state.setPickedPlayer)
    
    const pickedPlayer = useFilterStore((state) => state.pickedPlayer)
    // const { gamesToShow,  pickedPlayer } = useContext(FilterContext)
   
   const filterByPlayer = (event:React.ChangeEvent<HTMLInputElement>) =>{ //välj en spelare
        const query = event.target.value
        let filteredList;
        if (query === "all") {
            filteredList = games.filter((game:Game) => { 
            if (query === "all") {
                  return game
                }
            })
        } else {
            filteredList = games.filter((game:Game) => { 
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

    let gamesWon = [];

    function lastWon () {
        const tenGames = gamesToShow.slice(0, 10);//gamestoshow
        gamesWon = tenGames.filter((game) => { 
            if (pickedPlayer === game.playerOneName && game.playerOneResult === "win") {
                return game
            } else if (pickedPlayer === game.playerTwoName && game.playerTwoResult === "win") {
                return game
            }
        })
    }
    lastWon()
    console.log(players)
    return(
        <div className="playerDetails">
            <select onChange={filterByPlayer} name="name" id="name" >
            <option value="all">Visa alla spelare:</option>
            {
                players.map((player:Player, i:number) => 
                    <option value={player.name} key={i}>{player.name}</option>)
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