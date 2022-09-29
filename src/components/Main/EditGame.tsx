import './EditGame.scss'
import { useGameStore } from "../../store/gameStore";
import { useFormStore } from "../../store/formStore";

const EditGame = () => {
    const games = useGameStore((state) => state.games)
    const setGames = useGameStore((state) => state.setGames)
    const setSubmit = useFormStore((state) => state.setSubmit)
    const gameToEdit = useFormStore((state) => state.gameToEdit)
    const editFormData = useFormStore((state) => state.editFormData)
    const setEditFormData = useFormStore((state) => state.setEditFormData)

    const saveEdit = (event:React.FormEvent<HTMLFormElement>) => {
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
        } 
    }
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>|  React.ChangeEvent<HTMLInputElement> ) => { 
        setEditFormData({ ...editFormData, [event.target.name]: event.target.value });
    }
  
    function toggleAccordian(e:any) {
        console.log(e.currentTarget)
        e.currentTarget.parentNode.classList.toggle("active")
      }

    return(
        <form className={`form container`} onSubmit={saveEdit}>
          <h2 onClick={(e)=>{toggleAccordian(e)}} className='label'>Ändra ett spel</h2>
            <div className="content">
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
                    <div >
                        <input onChange={handleChange} value={editFormData.playerOneName} name="playerOneName" type="text" id="playerOneName" placeholder="Spelare 1" required/>
                        <select onChange={handleChange} name="playerOneResult" id="playerOneResult" value={editFormData.playerOneResult} required>
                            <option hidden={true} value="">Välj resultat</option>
                            <option value="loss">Förlorade</option>
                            <option value="win">Vann</option>
                        </select>
                    </div>
                    <div >
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
                <button className='secondary-button' onClick={()=>{setSubmit(true); toggleAccordian}}>Stäng</button>
            </div>
            </div>
        </form>
    )
}

export default EditGame