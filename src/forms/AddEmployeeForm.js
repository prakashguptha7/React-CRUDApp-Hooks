import React, { useState } from 'react'

const AddEmployeeForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ employee, setEmployee ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setEmployee({ ...employee, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!employee.name || !employee.username) return

				props.addEmployee(employee)
				setEmployee(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={employee.name} onChange={handleInputChange} />
			<label>Username</label>
			<input type="text" name="username" value={employee.username} onChange={handleInputChange} />
			<button>Add new Employee</button>
		</form>
	)
}

export default AddEmployeeForm
