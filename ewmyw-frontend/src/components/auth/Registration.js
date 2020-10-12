import React, { Component } from "react";

export default class Registration extends Component {

    state = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        registrationErrors: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { first_name, last_name, email, password } = this.state;
        const user = { 
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password
        }
        let resp;
        try {
            resp = await fetch('http://localhost:3000/api/v1/registrations', {
                method: 'POST', 
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }, 
                credentials: "include",
                body: JSON.stringify(user)
            });
        } catch (e) {
            console.log("Failed to login", e);
        }
        const newUser = await resp.json();
        
        if (newUser.status === 'created') {
            window.location.href = '/podcasts';
        } else {
            this.setState({
                isInvalid: true
            });
        }
    }

    render() {
        return (
        <div id="signup-form-wrapper">
            <h2> Registration </h2>
            <form onSubmit={this.handleSubmit}>
                <input
                    type="first_name"
                    name="first_name"
                    placeholder="First Name"
                    value={this.state.first_name}
                    onChange={this.handleChange}
                    required
                />
                <input
                    type="last_name"
                    name="last_name"
                    placeholder="Last Name"
                    value={this.state.last_name}
                    onChange={this.handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                />
                {this.state.isInvalid && <div> Email already taken </div>}
                <button type="submit">Register</button>
            </form>
        </div>        
        )
    }
}
