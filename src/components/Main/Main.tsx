import './Main.scss'
import { useContext } from 'react'
import { FormContext } from '../../contexts/FormContext'
import { FilterContext } from "../../contexts/FilterContext"
import GameForm from '../../components/GameForm'
import GameList from '../../components/GameList'
import FilterBar from '../../components/FilterBar'
import { useFormStore } from "./store/gameStore";
const Main = () =>{
  const {setSubmit, setGameToEdit} = useContext(FormContext)
  const { gamesToShow } = useContext(FilterContext)
  const games = useGameStore((state) => state.games)

  const showEditForm = (id) => {
    setSubmit(false)
    let pickedGameToEdit = gamesToShow.filter((game)=>{
      if(game.id === id){
        return game;
      }
    })
    setGameToEdit(pickedGameToEdit[0])
    document.documentElement.scrollTop = 0;
  }

  return (
    <main>
      <GameForm />
      <FilterBar/>
      <GameList showEditForm={showEditForm}/>
    </main>
  )
}

export default Main;