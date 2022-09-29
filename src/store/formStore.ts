import create from "zustand";
import {FormState, Game} from '../models/data'

interface FormStore {
    submit: boolean;
    setSubmit: (submit: boolean)=> void;
    gameToEdit: Game;
    setGameToEdit: (gameToEdit: Game)=>void;
    editFormData: Game;
    setEditFormData: (editFormData: Game)=>void;
}

export const useFormStore = create<FormStore>((set, get)=>({
    submit: true,
    setSubmit: (submit)=> set(state =>({
        submit: submit
    })),
    gameToEdit: {
        game: "",
        date: "",
        playerOneName: "",
        playerOneResult: "",
        playerTwoName: "",
        playerTwoResult: "",
        id: 0
    }, 
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

