import './Header.scss'
import puzzle from "../../assets/puzzle.png"

const Header = () =>{

    return (
        <header>
            <img src={puzzle} alt="" />
            <h1>Rewind - resultatkollen</h1>
        </header>
    )
}

export default Header;