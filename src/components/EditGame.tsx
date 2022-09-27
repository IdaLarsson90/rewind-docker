import './EditGame.scss'
import { useContext } from "react";
// import { GameContext } from "../contexts/GameContext"
import {FormContext} from "../contexts/FormContext"
// import { GameContextType } from '../models/data';
import { useGameStore } from "../store/gameStore";

const EditGame = () => {
    const games = useGameStore((state) => state.games)
    const setGames = useGameStore((state) => state.setGames)
    // const { games, setGames } = useContext<GameContextType>(GameContext)
    const { editFormData, setEditFormData, gameToEdit, setSubmit, activeEdit, setActiveEdit} = useContext(FormContext)

    const saveEdit = (event:React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();

        if (games.find(e => e.id === gameToEdit.id)){
            const newList = games.filter(game => game.id !== gameToEdit.id)
           
            const gamesCopy = [...newList, {
                game: editFormData.game, 
                date: editFormData.date,
                playerOneName: editFormData.playerOneName,
                playerOneResult: editFormData.playerOneResult,
                playerTwoName: editFormData.playerTwoName,
                playerTwoResult: editFormData.playerTwoResult,
                id: gameToEdit.id
            }]
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
            setSubmit(true)
            setActiveEdit(false)
        } 
    }
    const handleChange = (event: any) => {
        setEditFormData({ ...editFormData, [event.target.name]: event.target.value });
    }
    return(
        <form className="form form--edit" onSubmit={saveEdit}>
            
          <h2>Ändra ett spel</h2>
            
            <div>
                <div>
                    <select onChange={handleChange} name="game" id="game" value={editFormData.game} required>
                        <option hidden={true} value="">Välj spel</option>
                        <option value="Schack">Schack</option>
                        <option value="Kalaha">Kalaha</option>
                        <option value="Memory">Memory</option>
                        <option value="Luffarschack">Luffarschack</option>
                    </select>
                </div>
                <div>
                    <input type="date" id="date" name="date" onChange={handleChange} required></input>
                </div>
            </div>
            <div className="players">
                <div>
                    <input onChange={handleChange} value={editFormData.playerOneName} name="playerOneName" type="text" id="playerOneName" placeholder="Spelare 1" required/>
                    <select onChange={handleChange} name="playerOneResult" id="playerOneResult" value={editFormData.playerOneResult} required>
                        <option hidden={true} value="">Välj resultat</option>
                        <option value="loss">Förlorade</option>
                        <option value="win">Vann</option>
                    </select>
                </div>
                <div>
                    <input onChange={handleChange} value={editFormData.playerTwoName} name="playerTwoName" type="text" id="playerTwoName" placeholder="Spelare 2" required/>
                    <select onChange={handleChange} name="playerTwoResult" id="playerTwoResult" value={editFormData.playerTwoResult} required >
                        <option hidden={true} value="">Välj resultat</option>
                        <option value="loss">Förlorade</option>
                        <option value="win">Vann</option>
                    </select>
                </div>
            </div>
            <div className="form-footer">
                <input className="primary-button" type="submit" id="button-green" value="Spara ändringar" />
                <button className='secondary-button' onClick={()=>{setSubmit(true); setActiveEdit(false)}}>Stäng</button>
            </div>
        </form>
    )
}

export default EditGame