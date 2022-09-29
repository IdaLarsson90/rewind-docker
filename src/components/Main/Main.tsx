import './Main.scss'

import GameForm from './GameForm'
import GameList from './GameList'
import FilterBar from './FilterBar'
import { useFormStore } from "../../store/formStore";
import { useGameStore } from "../../store/gameStore";
import { useFilterStore } from "../../store/filterStore";

const Main = () =>{
  const gamesToShow = useGameStore((state) => state.gamesToShow)
  const setSubmit = useFormStore((state) => state.setSubmit)
  const setGameToEdit = useFormStore((state) => state.setGameToEdit)
  const isExpanded = useFilterStore((state=>state.isExpanded))
  const setIsExpanded = useFilterStore((state=>state.setIsExpanded))

  const showEditForm = (id:number) => { 
    setSubmit(false)
    let pickedGameToEdit = gamesToShow.filter((game)=>{
      if(game.id === id){
        return game;
      }
    })
    setGameToEdit(pickedGameToEdit[0])
    document.documentElement.scrollTop = 0;
    setIsExpanded("active")
  
  }

  return (
    <main className='main'>
        <GameForm />
        <FilterBar/>
        <GameList showEditForm={showEditForm}/>
    </main>
  )
}

export default Main;