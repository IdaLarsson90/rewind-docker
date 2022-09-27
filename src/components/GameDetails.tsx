import './GameDetails.scss'
import { useContext } from "react"
import { FilterContext } from "../contexts/FilterContext"

interface Props{
    uniqueGames: any;
}

const GameDetails = ({uniqueGames}: Props) => {

    const { filterByGame, pickedGame, gamesToShow, winner } = useContext(FilterContext)
    
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
                        return <span> {e.name} </span>
                    } 
                    else {
                        return <span> {e.name} och </span>
                    }
                })} har vunnit flest antal gånger i {pickedGame} någonsin</p>
            ) : ( <></>)
            } 
        </div> 
    )
}
export default GameDetails