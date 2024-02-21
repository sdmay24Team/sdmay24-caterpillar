import React, { useState } from "react"
import "./CreateAccount.css"

const CreateAccount = () => {
  const [basePreferences, setPreferences] = useState({
    user_name: "",
    user_location: "",
    egg_data: {
      date: false,
      initials: false,
      dish_jar: false,
      num_eggs: false,
      total_hatched: false,
      time_drinking: false,
      time_eating: false,
      change_cotten: false,
      add_leaves: false,
    },
  })

  const handleInputChange = (e, field, nestedField) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value
    setPreferences((prevState) => {
      if (nestedField) {
        return {
          ...prevState,
          [field]: {
            ...prevState[field],
            [nestedField]: value,
          },
        }
      } else {
        return {
          ...prevState,
          [field]: value,
        }
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
  }

  return (
    <div className="container-createaccount">
      <h1>Please set your Preferences</h1>
      <h2>
        These will be used to customize your experience while using the app!
      </h2>
      <h3>Don't worry, you can always change these later in settings</h3>
      <h4>User Settings</h4>
      <form onSubmit={handleSubmit}>
        <label className="users-name-label">
          Name:
          <input
            type="text"
            name="user_name"
            placeholder="First Name"
            value={basePreferences.user_name}
            onChange={(e) => handleInputChange(e, "user_name")}
          />
        </label>
        <label className="user-location-label">
          Location:
          <input
            type="text"
            name="user_location"
            placeholder="Location"
            value={basePreferences.user_location}
            onChange={(e) => handleInputChange(e, "user_location")}
          />
        </label>
        <div className="ca-left-checkboxes-container">
          <label className="egg-data-selection-label">
            Egg Data:
            <div>
              <input
                type="checkbox"
                id="egg-data-date"
                name="egg-data"
                value={basePreferences.egg_data.date}
                checked={basePreferences.egg_data.date}
                onChange={(e) => handleInputChange(e, "egg_data", "date")}
              />
              <label htmlFor="egg-data-date">Date</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="egg-data-initials"
                name="egg-data"
                value={basePreferences.egg_data.initials}
                checked={basePreferences.egg_data.initials}
                onChange={(e) => handleInputChange(e, "egg_data", "initials")}
              />
              <label htmlFor="egg-data-initials">Person's Initials</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="egg-data-dish-jar"
                name="egg-data"
                value={basePreferences.egg_data.dish_jar}
                checked={basePreferences.egg_data.dish_jar}
                onChange={(e) => handleInputChange(e, "egg_data", "dish_jar")}
              />
              <label htmlFor="egg-data-dish-jar">Dishes/Jars</label>
            </div>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CreateAccount
