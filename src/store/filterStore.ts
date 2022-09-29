import create from "zustand";
import { Player } from "../models/data";

interface FilterStore {
    // const [isExpanded, setIsExpanded] = useState("active")
    pickedPlayer: string;
    setPickedPlayer: (pickedPlayer:string)=>void;
    pickedGame: string;
    setPickedGame: (pickedGame:string)=>void;
    winners: Player[];
    setWinners: (winners:Player[])=>void;
    isExpanded: string;
    setIsExpanded: (isExpanded:string)=>void;
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
    winners: [{name: "", numberOfWins: 0}],
    setWinners: (winners)=> set(state =>({
        winners: winners
    })),
    isExpanded: " ",
    setIsExpanded: (isExpanded)=> set(state=>({
        isExpanded:isExpanded
    }))
})) 

