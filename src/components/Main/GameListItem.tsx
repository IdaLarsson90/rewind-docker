import { Game } from "../../models/data"
import bin from "../../assets/bin.svg"
import pen from "../../assets/pen.svg"
import { useGameStore } from "../../store/gameStore";

interface Props{
    game: Game,
    showEditForm:(id:number)=>void, 
}

const GameListItem = ({game, showEditForm} :Props) => {
    const games = useGameStore((state) => state.games)
    const setGames = useGameStore((state) => state.setGames)

    function removeGame (id:number){
        const newList = games.filter(game => game.id !== id)

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
        setGames(gamesCopy)
        localStorage.setItem("games", JSON.stringify(gamesCopy))
    }
    function toggleAccordian(e:any) {
        e.currentTarget.classList.toggle("active")
      }
    
    return(
        
        <div onClick={(e)=>{toggleAccordian(e)}} className="tr container label">
            <div>
                <p className="td">{game.game}</p>
                <p className="td content">{game.date}</p>
            </div>

            <div>
                <p className="td">{game.playerOneName}</p>
                <p className="td"> - </p>
                <p className="td">{game.playerTwoName}</p>
            </div>
            
            <div className="content">
                <p className="td">{game.playerOneResult}</p>
                <p className="td"> - </p>
                <p className="td">{game.playerTwoResult}</p>
            </div>

            <div className="buttons td">
                <button className="primary-button content" onClick={()=> showEditForm(game.id)}>
                    <img src={pen}/>
                   <p> Ändra </p></button>
                <button className="secondary-button content" onClick={()=>removeGame(game.id)}>
                    <img src={bin}/>
                </button>
            
            </div>
        </div>
    )
}
export default GameListItem