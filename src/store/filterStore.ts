import create from "zustand";

interface FilterStore {
   
    pickedPlayer: string;
    setPickedPlayer: (pickedPlayer:string)=>void;
    pickedGame: string;
    setPickedGame: (pickedGame:string)=>void;
    winner: any,
    setWinner: (winner:object)=>void
}

export const useFilterStore = create<FilterStore>((set, get)=>({
    pickedPlayer: "all",
    setPickedPlayer: (pickedPlayer)=> set(state =>({
        pickedPlayer: pickedPlayer
    })),
    pickedGame: "all",
    setPickedGame: (pickedGame)=> set(state =>({
        pickedGame: pickedGame
    })),
    winner: [{name: "", wins: 0}],
    setWinner: (winner)=> set(state =>({
        winner: winner
    }))
})) 

