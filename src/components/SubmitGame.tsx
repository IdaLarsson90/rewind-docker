import { useState } from "react";
import { FormState } from "../models/data"
import { useGameStore } from "../store/gameStore";

const SubmitGame = () =>{
    const [formData, setFormData] = useState<FormState>({
        game: "",
        date: "",
        playerOneName: "",
        playerOneResult: "",
        playerTwoName: "",
        playerTwoResult: "",
        id:0
    })
    const games = useGameStore((state) => state.games)
    const setGames = useGameStore((state) => state.setGames)

    const addGame = (formData:any, setFormData:any) => { 
        setGames([ ...games, { //Lägger till nytt spel i listan
            game: formData.game, 
            date: formData.date,
            playerOneName: formData.playerOneName,
            playerOneResult: formData.playerOneResult,
            playerTwoName: formData.playerTwoName,
            playerTwoResult: formData.playerTwoResult,
            id: (games.length + 1)
        }])
        setFormData({ //Tömmer inputfält efter klick
            game: "",
            date: "",
            playerOneName: "",
            playerOneResult: "",
            playerTwoName: "",
            playerTwoResult: "",
            id:0
        })
    };
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
                    <select onChange={handleChange} name="game" id="game" value={formData.game} required>
                        <option hidden={true} value="">Välj spel:</option>
                        <option value="Schack">Schack</option>
                        <option value="Kalaha">Kalaha</option>
                        <option value="Memory">Memory</option>
                        <option value="Luffarschack">Luffarschack</option>
                    </select>
                </div>
                <div>
                    <input type="date" id="date" name="date" onChange={handleChange} value={formData.date}required></input>
                </div>
            </div>
            <div className="players">
                <div>
                    <input onChange={handleChange} value={formData.playerOneName} name="playerOneName" type="text" id="playerOneName" placeholder="Spelare 1" required />
                    <select onChange={handleChange} name="playerOneResult" id="playerOneResult" value={formData.playerOneResult} required>
                        <option hidden={true} value="">Välj resultat</option>
                        <option value="loss">Förlorade</option>
                        <option value="win">Vann</option>
                    </select>
                </div>
                <div>
                    <input onChange={handleChange} value={formData.playerTwoName} name="playerTwoName" type="text" id="playerTwoName" placeholder="Spelare 2" required />
                    <select onChange={handleChange} name="playerTwoResult" id="playerTwoResult" value={formData.playerTwoResult}>
                        <option hidden={true} value="">Välj resultat</option>
                        <option value="loss">Förlorade</option>
                        <option value="win">Vann</option>
                    </select>
                </div>
            </div>
            <div className="form-footer">
                <input className="primary-button" type="submit" id="button-green" value="Lägg till" />
            </div>
        </form>
    );
}

export default SubmitGame;