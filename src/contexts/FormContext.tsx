import {createContext, useState, useContext, useEffect} from "react";
import { GameContext } from "../contexts/GameContext"
import { Players } from "../models/data";

export const FormContext = createContext<any | null>(null);

const FormContextProvider = (props:any) => {
    const {gamesToShow} = useContext(GameContext)
    const [submit, setSubmit]= useState<boolean>(true)
    const [gameToEdit, setGameToEdit] = useState()

    const [editFormData, setEditFormData] = useState<FormState>({
        game: "",
        date: "",
        playerOneName: "",
        playerOneResult: "",
        playerTwoName: "",
        playerTwoResult: "",
        id: 0
    })

    return (
        <FormContext.Provider value={{submit, setSubmit, editFormData, setEditFormData, gameToEdit, setGameToEdit}}>
            { props.children }
        </FormContext.Provider>
    )
};

export default FormContextProvider