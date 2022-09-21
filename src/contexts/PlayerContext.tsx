import {createContext, useState} from "react";
import { Players } from "../models/data";

export const PlayerContext = createContext<any | null>(null);

const PlayerContextProvider = (props:any) => {
    const [players, setPlayers] = useState<Players[]>([{
        name: "Ida",
        numberOfWins: 0,
    },{
        name: "Anders",
        numberOfWins: 0,
    },{
        name: "Julia",
        numberOfWins: 0,
    },

])
    return (
        <PlayerContext.Provider value={{players}}>
            { props.children }
        </PlayerContext.Provider>
    )
};

export default PlayerContextProvider