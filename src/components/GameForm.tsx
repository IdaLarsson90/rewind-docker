import { useState, useContext } from "react";
import { FormState, Games } from "../models/data"
import { GameContext } from "../contexts/GameContext"
import { PlayerContext } from "../contexts/PlayerContext"
import SubmitGame from "./SubmitGame";
import EditGame from "./EditGame";
import { FormContext } from "../contexts/FormContext";

interface Props {
   saveEdit:any
}

const GameForm = () =>{
    const { players, setPlayers }= useContext(PlayerContext)
    const { addGame, games } = useContext(GameContext)
    const {submit} = useContext(FormContext)
    // const {submit} = useContext(FormContext)
    // const [submit, setSubmit]= useState<boolean>(false)
    

    return (
        <div>
        {submit ? (<SubmitGame />):(<EditGame/>)}
        
        </div>
    );
}

export default GameForm;