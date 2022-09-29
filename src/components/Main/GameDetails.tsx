import './GameDetails.scss'
import { useGameStore } from "../../store/gameStore";
import {useFilterStore} from "../../store/filterStore"
import { Game, Player } from '../../models/data';

interface Props{
    uniqueGames: Game[];
}

const GameDetails = ({uniqueGames}: Props) => {
    const games = useGameStore((state) => state.games)
    const setGamesToShow = useGameStore((state) => state.setGamesToShow)
    const pickedGame = useFilterStore((state)=>state.pickedGame)
    const setPickedGame = useFilterStore((state) => state.setPickedGame)
    const winners = useFilterStore((state)=>state.winners)
    
    const filterByGame = (event:React.ChangeEvent<HTMLSelectElement>) =>{
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
    return(
        <div className="gameDetails">
          <select onChange={filterByGame} name="name" id="name" >
          <option value="all">Visa alla spel:</option>
          {
            uniqueGames.map((game:Game, i:number) => 
            <option value={game.game} key={i}>{game.game}</option>)
          }
          </select>
            {
            pickedGame !=="all" ? (
                <p className='gameInfo'> {winners.map((player:Player, i:number)=>{
                    if(i + 1 === winners.length || winners.length === 0) {
                        return <span key={i}> {player.name} </span>
                    } 
                    else {
                        return <span key={i}> {player.name} och </span>
                    }
                })} har vunnit flest antal gånger i {pickedGame} någonsin</p>
            ) : ( <></>)
            } 
        </div> 
    )
}
export default GameDetails