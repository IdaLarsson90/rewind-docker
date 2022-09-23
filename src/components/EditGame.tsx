import { useState, useContext, useEffect } from "react";
import { FormState, Games } from "../models/data"
import { GameContext } from "../contexts/GameContext"
import { PlayerContext } from "../contexts/PlayerContext"
import {FormContext} from "../contexts/FormContext"
import { FilterContext } from "../contexts/FilterContext"

interface Props {
    saveEdit:any
}

const EditGame = ( {}:Props) => {
    const { players, setPlayers }= useContext(PlayerContext)
    const { addGame, games, setGames } = useContext(GameContext)
    const { editFormData, setEditFormData, gameToEdit, setGameToEdit} = useContext(FormContext)
    const { gamesToShow, setGamesToShow } = useContext(FilterContext)

    
    const saveEdit = (event:any) => {
        event.preventDefault();
        console.log(gameToEdit.id)
        if (games.find(e => e.id === gameToEdit.id)){
            console.log("remove", gameToEdit.id)
            const newList = games.filter(game => game.id !== gameToEdit.id)
            console.log(newList)
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
            if(games.find(e => e.id !== gameToEdit.id) ) {
                console.log("den finns inte längre, nu kör vi")
                console.log("Det här spelet vill jag ändra: ", gameToEdit, "med ID: ", gameToEdit.id)
                console.log("Till det här:", editFormData)

                
            }
        setGames(gamesCopy) 
        } 
        // addEdit()
        
    }
    

            // if(gamesToShow.find(e => e.id !== gameToEdit.id) ) {
            //     console.log("den finns inte längre, nu kör vi")
            //     console.log("Det här spelet vill jag ändra: ", gameToEdit, "med ID: ", gameToEdit.id)
            //     console.log("Till det här:", editFormData)

            //     setGames([ ...games, { //Lägger till nytt spel i listan
            //         game: editFormData.game, 
            //         date: editFormData.date,
            //         playerOneName: editFormData.playerOneName,
            //         playerOneResult: editFormData.playerOneResult,
            //         playerTwoName: editFormData.playerTwoName,
            //         playerTwoResult: editFormData.playerTwoResult,
            //         id: gameToEdit.id
            //     }])
            // }

    
   
  
    const handleChange = (event: any) => {
        setEditFormData({ ...editFormData, [event.target.name]: event.target.value });
        
    }
    return(
        <form className="form" onSubmit={saveEdit}>
            <h2>Ändra ett spel</h2>
            <div>
                <label htmlFor="game">Välj spel:</label>
                <select onChange={handleChange} name="game" id="game" value={editFormData.game}>
                    <option hidden={true} value="">Välj spel:</option>
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
            <div>
                <h3>Spelare 1</h3>
                <label htmlFor="playerOneName">Namn</label>
                <input onChange={handleChange} value={editFormData.playerOneName} name="playerOneName" type="text" id="playerOneName" placeholder="För- och Efternamn" />
                <label htmlFor="playerOneResult">Resultat</label>
                <select onChange={handleChange} name="playerOneResult" id="playerOneResult" value={editFormData.playerOneResult}>
                    <option hidden={true} value="">Välj resultat:</option>
                    <option value="lost">Förlorade</option>
                    <option value="won">Vann</option>
                    <option value="draw">Oavgjort</option>
                </select>
            </div>
            <div>
                <h3>Spelare 2</h3>
                <label htmlFor="playerTwoName">Namn</label>
                <input onChange={handleChange} value={editFormData.playerTwoName} name="playerTwoName" type="text" id="playerTwoName" placeholder="För- och Efternamn" />
                <label htmlFor="playerTwoResult">Resultat</label>
                <select onChange={handleChange} name="playerTwoResult" id="playerTwoResult" value={editFormData.playerTwoResult}>
                    <option hidden={true} value="">Välj resultat:</option>
                    <option value="lost">Förlorade</option>
                    <option value="won">Vann</option>
                    <option value="draw">Oavgjort</option>
                </select>
            </div>
            <div className="form-footer">
                <input type="submit" id="button-green" value="Spara ändringar" />
            </div>
        </form>
    )
}

export default EditGame