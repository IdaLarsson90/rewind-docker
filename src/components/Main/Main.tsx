import './Main.scss'
import chess from '../../assets/chess.avif'
import { useContext } from 'react'
import { FormContext } from '../../contexts/FormContext'
import { FilterContext } from "../../contexts/FilterContext"
import GameForm from '../../components/GameForm'
import GameList from '../../components/GameList'
import FilterBar from '../../components/FilterBar'


const Main = () =>{
    const {setSubmit, setGameToEdit} = useContext(FormContext)
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

    return (
        <main>
            <section className='hero'> 
              
                <img className='hero__pic' src={chess} alt="" />
                <section className='hero__container'>
                  <p>Samla alla matchresultat på ett ställe och jämför med dina vänner</p>
              </section>
            </section>
            <GameForm />
            <FilterBar/>
            <GameList showEditForm={showEditForm}/>
         </main>
    )
}

export default Main;