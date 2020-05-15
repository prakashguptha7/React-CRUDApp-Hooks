import React, { useState, useEffect } from 'react'

const EditEmployeeForm = props => {
  const [ employee, setEmployee ] = useState(props.currentEmployee)

  useEffect(
    () => {
      setEmployee(props.currentEmployee)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setEmployee({ ...employee, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateEmployee(employee.id, employee)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={employee.name} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" value={employee.username} onChange={handleInputChange} />
      <button>Update Employee</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditEmployeeForm
