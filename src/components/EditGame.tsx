import { useContext } from "react";
import { GameContext } from "../contexts/GameContext"
import {FormContext} from "../contexts/FormContext"

interface Props {
    saveEdit:any
}

const EditGame = ( {}:Props) => {
    const { games, setGames } = useContext(GameContext)
    const { editFormData, setEditFormData, gameToEdit} = useContext(FormContext)

    const saveEdit = (event:any) => {
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
        } 
    }

    const handleChange = (event: any) => {
        setEditFormData({ ...editFormData, [event.target.name]: event.target.value });
    }
    return(
        <form className="form" onSubmit={saveEdit}>
            <h2>Ändra ett spel</h2>
            <div>
                <div>
                    <label htmlFor="game">Välj spel:</label>
                    <select onChange={handleChange} name="game" id="game" value={editFormData.game}>
                        <option hidden={true} value="">Välj spel</option>
                        <option value="Schack">Schack</option>
                        <option value="Kalaha">Kalaha</option>
                        <option value="Memory">Memory</option>
                        <option value="Luffarschack">Luffarschack</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="date">Datum</label>
                    <input type="date" id="date" name="date" onChange={handleChange}></input>
                </div>
            </div>
            <div className="players">
                <div>
                    <label htmlFor="playerOneName">Spelare 1</label>
                    <input onChange={handleChange} value={editFormData.playerOneName} name="playerOneName" type="text" id="playerOneName" placeholder={gameToEdit.playerOneName} />
                    <label htmlFor="playerOneResult">Resultat</label>
                    <select onChange={handleChange} name="playerOneResult" id="playerOneResult" value={editFormData.playerOneResult}>
                        <option hidden={true} value="">Välj resultat</option>
                        <option value="lost">Förlorade</option>
                        <option value="won">Vann</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="playerTwoName">Spelare 2</label>
                    <input onChange={handleChange} value={editFormData.playerTwoName} name="playerTwoName" type="text" id="playerTwoName" placeholder={gameToEdit.playerTwoName} />
                    <label htmlFor="playerTwoResult">Resultat</label>
                    <select onChange={handleChange} name="playerTwoResult" id="playerTwoResult" value={editFormData.playerTwoResult}>
                        <option hidden={true} value="">Välj resultat</option>
                        <option value="lost">Förlorade</option>
                        <option value="won">Vann</option>
                    </select>
                </div>
            </div>
            <div className="form-footer">
                <input className="submit" type="submit" id="button-green" value="Spara ändringar" />
            </div>
        </form>
    )
}

export default EditGame