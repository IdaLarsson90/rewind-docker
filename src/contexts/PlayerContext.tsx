import {createContext, useState, useContext, useEffect} from "react";
import { GameContext } from "../contexts/GameContext"
import { Players } from "../models/data";

export const PlayerContext = createContext<any | null>(null);

const PlayerContextProvider = (props:any) => {
    const { games } = useContext(GameContext)
    const [players, setPlayers] = useState<Players[]>([
      
    ])

    
    useEffect(() => {
        const allPlayerOne = games.map( game => game.playerOneName)
        const allPlayerTwo = games.map(game => game.playerTwoName)
        const allPlayers = allPlayerOne.concat(allPlayerTwo)
        const uniquePlayers = [...new Set(allPlayers)]
        setPlayers(uniquePlayers)
    }, [games])

    return (
        <PlayerContext.Provider value={{players, setPlayers}}>
            { props.children }
        </PlayerContext.Provider>
    )
};

export default PlayerContextProvider