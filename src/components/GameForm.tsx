import './GameForm.scss'
import { useState, useContext, useEffect } from "react";

import SubmitGame from "./SubmitGame";
import EditGame from "./EditGame";
import { FormContext } from "../contexts/FormContext";



const GameForm = () =>{

    const {submit} = useContext(FormContext)

    

    return (
        <div className="box">
        {submit ? (<SubmitGame />):(<EditGame/>)}
        
        </div>
    );
}

export default GameForm;