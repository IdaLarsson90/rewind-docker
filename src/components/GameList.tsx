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
          gamesToShow.map((game:Game)=>{
          return ( <GameListItem game={game} key={game.id} id={game.id}  showEditForm={showEditForm}/> )})
        }
       
      </section>
    </div>
  )
}

  
 export default GameList;