
export interface FormState { 
  game: string;
  date: string;
  playerOneName: string;
  playerOneResult: string;
  playerTwoName: string;
  playerTwoResult: string;
  id:number
}

export interface Game {
  game: string;
  date: string;
  playerOneName: string;
  playerOneResult: string;
  playerTwoName: string;
  playerTwoResult: string;
  id:number
}

export interface Player {
  name: string;
  numberOfWins: number;
}

export type GameContextType = {
  games: Game[], 
  addGame: (formData:Game, setFormData:(game:Game)=>void)=>void, 
  setGames: (games:Game[])=>void
}