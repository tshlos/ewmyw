import React, { Component } from "react";

class Login extends Component {

    state = {
        email: '',
        password: '',
        loginErrors: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;
        const user = { 
            email: email,
            password: password
        };

        const resp = await fetch('http://localhost:3000/api/v1/sessions', {
            method: 'POST', 
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }, 
            credentials: "include",
            body: JSON.stringify(user)
        })
        const loggedInUser = await resp.json();
        if (loggedInUser.logged_in) {
            window.location.href = '/podcasts';
        } else {
            this.setState({
                isInvalid: true
            });
        }
    }


    render() {
        return (
            <div id="login-form-wrapper" >             
                <form onSubmit={this.handleSubmit}>
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
                    {this.state.isInvalid && <div> Invalid username or password </div>}
                <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login;