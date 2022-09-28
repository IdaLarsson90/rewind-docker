import './GameList.scss'
import { Game } from "../models/data"
import GameListItem from './GameListItem'
import { useGameStore } from "../store/gameStore";

interface Props {
  showEditForm:any;
}

const GameList = ({showEditForm}: Props) => {
    const gamesToShow = useGameStore((state) => state.gamesToShow)

    return (
    <div className="gameList">
      <section className="table">
        {
          gamesToShow.map((game:Game, i:number)=>{
          return ( <GameListItem game={game} key={i}  showEditForm={showEditForm}/> )})
        }
       
      </section>
    </div>
  )
}

  
 export default GameList;