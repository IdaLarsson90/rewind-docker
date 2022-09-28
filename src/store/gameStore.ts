import create from "zustand";
import {games as defaultGames} from '../data/games'
import {Game} from '../models/data'

interface GameStore {
    games: Game[];
    setGames: (array: Game[])=> void;
    gamesToShow: Game[];
    setGamesToShow: (gamesToShow:Game[])=> void;
}
const data = localStorage.getItem("games")

export const useGameStore = create<GameStore>((set, get)=>({
    games: data ? (JSON.parse(data)):(defaultGames),
    setGames: (array)=> set(state =>({
        games: array
    })),
    gamesToShow: [],
    setGamesToShow: (gamesToShow)=> set(state =>({
        gamesToShow: gamesToShow
    })),
})) 

