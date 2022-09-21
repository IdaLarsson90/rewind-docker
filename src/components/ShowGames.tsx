import React, { useState } from "react";
import { FormState } from "../models/data"

interface Props {
    formData: FormState, 
    setFormData: (formData:FormState)=>void
}

const ShowGames = ({formData, setFormData} : Props) => {

    return (
      <div className="gamesList">
          <ul>
            {/* {formData.map(data => {
                return (<li key={data.id}>{data.playerOneName}</li>);
            })} */}
          </ul>
      </div>
    )
  }
  
  export default ShowGames
  