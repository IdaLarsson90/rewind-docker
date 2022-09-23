import { useContext } from 'react'
import { FormContext } from '../../contexts/FormContext'
import { FilterContext } from "../../contexts/FilterContext"
import GameForm from '../../components/GameForm'
import GameList from '../../components/GameList'
import FilterBar from '../../components/FilterBar'


const Main = () =>{
    const {editFormData, setSubmit, gameToEdit, setGameToEdit} = useContext(FormContext)
    const { gamesToShow } = useContext(FilterContext)
    
    const showEditForm = (id) => {
        setSubmit(false)
        console.log(id)
        let pickedGameToEdit = gamesToShow.filter((game)=>{
          if(game.id === id){
            return game;
          }
        })
        setGameToEdit(pickedGameToEdit[0])
    }
//     const saveEdit = (e) =>{
// e.prevent.default()
//         console.log("Sparat ändring")
//     }
   

    return (
        <main>
            <GameForm />
            <FilterBar/>
            <GameList showEditForm={showEditForm}/>
         </main>
    )
}

export default Main;