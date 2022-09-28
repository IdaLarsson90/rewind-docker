import './GameForm.scss'

import SubmitGame from "./SubmitGame";
import EditGame from "./EditGame";
import { useFormStore } from "../store/formStore";


const GameForm = () =>{
    const submit = useFormStore((state) => state.submit)

    return (
        <div className="box">
            {submit ? (<SubmitGame />):(<EditGame/>)}
        </div>
    );
}

export default GameForm;