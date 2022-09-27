import create from "zustand";
import {Player} from '../models/data'

interface PlayerStore {
    players: Player[];
    setPlayers: (array: Player[])=> void
}


export const usePlayerStore = create<PlayerStore>((set, get)=>({
    players: [{name: "", numberOfWins: 0}],
    setPlayers: (array)=> set(state =>({
        players: array
    }))
})) 

