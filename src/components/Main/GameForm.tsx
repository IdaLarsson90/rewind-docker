import './GameForm.scss'

import SubmitGame from "./SubmitGame";
import EditGame from "./EditGame";
import { useFormStore } from "../../store/formStore";


const GameForm = () =>{
    const submit = useFormStore((state) => state.submit)

    return (
        <div className="accordion-body box">
            <div className="accordion ">
                
                {submit ? (<SubmitGame />):(<EditGame/>)}

            </div>
        </div>
    );
}

export default GameForm;