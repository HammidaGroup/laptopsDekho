import React from 'react'
import "./AddError.css"
const AddError = () => {
  return (
   <div className="addErrorMainDiv">
    <div className="addErrorBox">
        <h2>Something went wrong while adding the laptop. Please try again.</h2>
        <div className="btnsDiv">
            <button onClick={() => window.location.reload()}>Try Again</button>
             <button onClick={() => window.history.back()}>Go Back</button>
        </div>
    </div>
   </div>
  )
}

export default AddError