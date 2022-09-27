import {createContext, useState, useContext, useEffect} from "react";
import { FormState } from "../models/data";

export const FormContext = createContext<any | null>(null);

const FormContextProvider = (props:any) => {
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