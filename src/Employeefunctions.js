import React, { useState, Fragment } from 'react'
import AddEmployeeForm from './forms/AddEmployeeForm'
import EditEmployeeForm from './forms/EditEmployeeForm'
import EmployeeTable from './tables/EmployeeTable'

function Employeefunctions() {
   	// Data
	const employeesData = [
		{ id: 1, name: 'mahesh', username: 'mahesh@mailinator' },
		{ id: 2, name: 'kiran', username: 'kiran@mailinator' },
		{ id: 3, name: 'vaishnavi', username: 'vaishnavi@mailinator' },
	]

	const initialFormState = { id: null, name: '', username: '' }

	// Setting state
	const [ employees, setEmployees ] = useState(employeesData)
	const [ currentEmployee, setCurrentEmployee ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

  //add new employee
	const addEmployee = emp => {
		emp.id = employees.length + 1
		setEmployees([ ...employees, emp ])
	}
 
	//delete employee
	const deleteEmployee = id => {
		setEditing(false)

		setEmployees(employees.filter(emp => emp.id !== id))
	}

	const updateEmployee = (id, updatedEmployee) => {
		setEditing(false)

		setEmployees(employees.map(emp => (emp.id === id ? updatedEmployee : emp)))
	}

	//edit employee
	const editRow = emp => {
		setEditing(true)

		setCurrentEmployee({ id: emp.id, name: emp.name, username: emp.username })
	}

	return (
		<div className="container">
			<h1 style={{textAlign:"center",marginBottom:"5%"}}>Employee Details</h1>
            <hr/>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditEmployeeForm
								editing={editing}
								setEditing={setEditing}
								currentEmployee={currentEmployee}
								updateEmployee={updateEmployee}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h3>Add Employee</h3>
							<AddEmployeeForm addEmployee={addEmployee} />
						</Fragment>
					)}
				</div>
                {/* <div className="flex-large">
					<h2>Login Details</h2>
					<h3>{localStorage.getItem("logindata",email)}</h3>
				</div> */}
				<div className="flex-large">
					<h3>View Employees List In Table</h3>
					<EmployeeTable employees={employees} editRow={editRow} deleteEmployee={deleteEmployee} />
				</div>
			</div>
		</div>
	)
}

export default Employeefunctions
