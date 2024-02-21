import React, { useState } from "react"
import "./InputBoxPopup.css"

// TODO: MAKE THIS A GENERAL POPUP **ADD PARAMETERS TO ALLOW US TO CHANGE IT**

const InputBoxPopup = () => {
  const [popupInput, setPopupInput] = useState("e")

  return (
    <div className="popup">
      <div className="title"> Just one sec...</div>
      <div className="description"></div> Please enter your password one more
      time to make sure they match.
      <input
        type="text"
        placeholder="Re-enter Password"
        value={popupInput}
        onChange={(e) => setPopupInput(e.target.value)}
      />
    </div>
  )
}

export default InputBoxPopup
