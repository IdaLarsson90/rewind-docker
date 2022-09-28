import create from "zustand";
import {FormState} from '../models/data'

interface FormStore {
    submit: boolean;
    setSubmit: (submit: boolean)=> void;
    gameToEdit: any;
    setGameToEdit: (gameToEdit: FormState)=>void;
    editFormData: FormState;
    setEditFormData: (editFormData: FormState)=>void;
}

export const useFormStore = create<FormStore>((set, get)=>({
    submit: true,
    setSubmit: (submit)=> set(state =>({
        submit: submit
    })),
    gameToEdit: [],
    setGameToEdit: (array)=> set(state =>({
        gameToEdit: array
    })),
    editFormData: ({
        game: "",
        date: "",
        playerOneName: "",
        playerOneResult: "",
        playerTwoName: "",
        playerTwoResult: "",
        id: 0
    }),
    setEditFormData: (editFormData) => set(state => ({
        editFormData: editFormData
    }))


})) 

