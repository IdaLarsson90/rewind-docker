import './GameDetails.scss'
import { useGameStore } from "../store/gameStore";
import {useFilterStore} from "../store/filterStore"

interface Props{
    uniqueGames: any;
}

const GameDetails = ({uniqueGames}: Props) => {
    const games = useGameStore((state) => state.games)
    const setGamesToShow = useGameStore((state) => state.setGamesToShow)
    const pickedGame = useFilterStore((state)=>state.pickedGame)
    const setPickedGame = useFilterStore((state) => state.setPickedGame)
    const winner = useFilterStore((state)=>state.winner)
    // const { filterByGame, pickedGame, gamesToShow, winner } = useContext(FilterContext)
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
    return(
        <div className="gameDetails">
          <select onChange={filterByGame} name="name" id="name" >
          <option value="all">Visa alla spel:</option>
          {
            uniqueGames.map((game:any) => 
            <option value={game} key={game}>{game}</option>)
          }
          </select>
            {
            pickedGame !=="all" ? (
                <p className='gameInfo'> {winner.map((e, i)=>{
                    if(i + 1 === winner.length || winner.length === 0) {
                        return <span key={i}> {e.name} </span>
                    } 
                    else {
                        return <span key={i}> {e.name} och </span>
                    }
                })} har vunnit flest antal gånger i {pickedGame} någonsin</p>
            ) : ( <></>)
            } 
        </div> 
    )
}
export default GameDetails