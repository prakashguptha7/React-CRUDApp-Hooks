import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card,Button } from 'react-bootstrap';
import swal from 'sweetalert';
class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	displayLogin(e) {
        e.preventDefault();
        if(this.state.email == '' || this.state.password == ''){
            swal("Warning","Please Give Any Email and Password"
            ,"warning");
        }else{
            window.location.href='/Employeedetails';
        }
		console.log('You are logged in');
		console.log(this.state);
		this.setState({
			email: '',
			password: ''
		});
	}

	render() {
		return (
        <div style={{marginLeft:"40%",marginTop:"10%"}}>
            <Card style={{ width: '18rem' }} >
            <Card.Body>
                <h1>Login</h1>
                <Card.Text>
                <form onSubmit={this.displayLogin}>
                    <div className="username">
                    <input
                    type="text"
                    placeholder="Username..."
                    value={this.state.email}
                    onChange={this.update}
                    name="email"
                    />
                    </div>

                <div className="password">
                    <input
                    type="password"
                    placeholder="Password..."
                    value={this.state.password}
                    onChange={this.update}
                    name="password"
                    />
                    </div>
                <Button variant="primary" type="submit" >Login</Button>
                </form>
                </Card.Text>
            </Card.Body>
            </Card>
   </div>
		);
	}
}

export default Login;
