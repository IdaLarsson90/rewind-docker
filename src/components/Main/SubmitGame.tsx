import { useState } from "react";
import { Game } from "../../models/data"
import { useGameStore } from "../../store/gameStore";
import { useFilterStore } from "../../store/filterStore";

const SubmitGame = () =>{
    const [formData, setFormData] = useState<Game>({
        game: "",
        date: "",
        playerOneName: "",
        playerOneResult: "",
        playerTwoName: "",
        playerTwoResult: "",
        id:0
    })
    const isExpanded = useFilterStore((state=>state.isExpanded))
    const setIsExpanded = useFilterStore((state=>state.setIsExpanded))
    const games = useGameStore((state) => state.games)
    const setGames = useGameStore((state) => state.setGames)
    const addGame = (formData:Game, setFormData:(game:Game)=>void) => { 
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
    const handleSubmit = (event:React.SyntheticEvent) => {
        event.preventDefault();
        addGame(formData, setFormData);
    }

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>|  React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    function toggleAccordian() {
        
        if(isExpanded === "active"){
            setIsExpanded("")
        } else {
            setIsExpanded("active")
        }
    }

    return (
        <form className={`form container ${isExpanded}`}  onSubmit={handleSubmit}>
            <h2 onClick={()=>{toggleAccordian()}} className="label" id="addGame">Lägg till nytt spel</h2>
            <div className="content">
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
            </div>
        </form>
    );
}

export default SubmitGame;