import { useState, useContext } from "react";
import { FormState, Games } from "../models/data"
import { GameContext } from "../contexts/GameContext"
import { PlayerContext } from "../contexts/PlayerContext"
import {FormContext} from "../contexts/FormContext"

const SubmitGame = () =>{
    const { players, setPlayers }= useContext(PlayerContext)
    const { addGame, games } = useContext(GameContext)
    const {submit, setSubmit} = useContext(FormContext)
    const [formData, setFormData] = useState<FormState>({
        game: "",
        date: "",
        playerOneName: "",
        playerOneResult: "",
        playerTwoName: "",
        playerTwoResult: "",
    })


    const handleSubmit = (event:any) => {
        event.preventDefault();
        addGame(formData, setFormData);
    }

  
    const handleChange = (event: any) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        
    }
    
    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Lägg till nytt spel</h2>
            <div>
                <div>
                    <label htmlFor="game">Välj spel</label>
                    <select onChange={handleChange} name="game" id="game" value={formData.game}required>
                        <option hidden={true} value="">Välj spel:</option>
                        <option value="Schack">Schack</option>
                        <option value="Kalaha">Kalaha</option>
                        <option value="Memory">Memory</option>
                        <option value="Luffarschack">Luffarschack</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="date">Datum</label>
                    <input type="date" id="date" name="date" onChange={handleChange} value={formData.date}required></input>
                </div>
            </div>
            <div className="players">
                <div>
                    <label htmlFor="playerOneName">Spelare 1</label>
                    <input onChange={handleChange} value={formData.playerOneName} name="playerOneName" type="text" id="playerOneName" placeholder="Namn" />
                    <label htmlFor="playerOneResult">Resultat</label>
                    <select onChange={handleChange} name="playerOneResult" id="playerOneResult" value={formData.playerOneResult}>
                        <option hidden={true} value="">Välj resultat</option>
                        <option value="lost">Förlorade</option>
                        <option value="won">Vann</option>
                    </select>
                </div>
                <div>
                    
                    <label htmlFor="playerTwoName">Spelare 2</label>
                    <input onChange={handleChange} value={formData.playerTwoName} name="playerTwoName" type="text" id="playerTwoName" placeholder="Namn" />
                    <label htmlFor="playerTwoResult">Resultat</label>
                    <select onChange={handleChange} name="playerTwoResult" id="playerTwoResult" value={formData.playerTwoResult}>
                        <option hidden={true} value="">Välj resultat</option>
                        <option value="lost">Förlorade</option>
                        <option value="won">Vann</option>
                    </select>
                </div>
            </div>
            <div className="form-footer">
                <input className="submit" type="submit" id="button-green" value="Lägg till" />
            </div>
        </form>
    );
}

export default SubmitGame;