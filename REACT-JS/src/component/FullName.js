import React from 'react'

const FullName = () => {
  const person = {
    lastName: "Ogeleka",
    firstName: "Festus"
    
  }
  return (
    <div>

      <h4 style={{color:"white"}}> {person.lastName} {person.firstName}</h4>


    </div>
  )
}

export default FullName