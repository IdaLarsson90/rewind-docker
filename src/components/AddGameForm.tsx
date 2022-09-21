import React, { useState } from "react";
import { FormState } from "../models/data"

interface Props {
    formData: FormState, 
    setFormData: (formData:FormState)=>void
}

const AddGameForm = ({formData, setFormData} : Props) =>{

    const addGame = (event: any) => { //måste ha typ any för att required ska fungera
        event.preventDefault()
        console.log("klick")
        console.log(formData)
        localStorage.setItem('games', JSON.stringify(formData))
    }
    const handleChange = (event: any) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }
    const handleSelect = (event: any) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }
    return (
        <section className="form">
            <form onSubmit={addGame}>
                <div>
                    <label htmlFor="game">Välj spel:</label>
                    <select onChange={handleChange} name="game" id="game" value={formData.game}>
                        <option hidden={true} value="">Välj spel:</option>
                        <option value="schack">Schack</option>
                        <option value="kalaha">Kalaha</option>
                        <option value="memory">Memory</option>
                        <option value="luffarschack">Luffarschack</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="date">Datum</label>
                    <input type="date" id="date" name="date" onChange={handleChange}></input>
                </div>
                <div>
                    <h3>Deltagare 1</h3>
                    <label htmlFor="playerOneName">Namn</label>
                    <input onChange={handleChange} value={formData.playerOneName} name="playerOneName" type="text" id="playerOneName" placeholder="För- och Efternamn" />
                    <label htmlFor="playerOneResult">Resultat</label>
                    <select onChange={handleChange} name="playerOneResult" id="playerOneResult" value={formData.playerOneResult}>
                        <option hidden={true} value="">Välj resultat:</option>
                        <option value="lost">Förlorade</option>
                        <option value="won">Vann</option>
                        <option value="draw">Oavgjort</option>
                    </select>
                </div>
                <div>
                    <h3>Deltagare 2</h3>
                    <label htmlFor="playerTwoName">Namn</label>
                    <input onChange={handleChange} value={formData.playerTwoName} name="playerTwoName" type="text" id="playerTwoName" placeholder="För- och Efternamn" />
                    <label htmlFor="playerTwoResult">Resultat</label>
                    <select onChange={handleChange} name="playerTwoResult" id="playerTwoResult" value={formData.playerTwoResult}>
                        <option hidden={true} value="">Välj resultat:</option>
                        <option value="lost">Förlorade</option>
                        <option value="won">Vann</option>
                        <option value="draw">Oavgjort</option>
                    </select>
                </div>
                <div className="form-footer">
                    <input type="submit" id="button-green" value="Lägg till" />
                </div>
            </form>
        </section>
    );
}

export default AddGameForm;