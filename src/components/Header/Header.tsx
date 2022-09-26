import './Header.scss'
import puzzle from "../../assets/puzzle.png"

const Header = () =>{

    return (
        <header>
            <div>
                <img src={puzzle} alt="" />
                <h1>Rewind</h1>
            </div>
        </header>
    )
}

export default Header;