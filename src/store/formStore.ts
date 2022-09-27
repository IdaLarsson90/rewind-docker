import create from "zustand";
import {FormState} from '../models/data'

interface FormStore {
    submit: boolean;
    setSubmit: (submit: boolean)=> void;
    gameToEdit: [];
    setGameToEdit: (gameToEdit: [])=>void;
    editFormData: {};
    setEditFormData: (editFormData: {})=>void;
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

