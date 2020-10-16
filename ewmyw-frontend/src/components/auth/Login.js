import React, { Component } from "react";

export default class Login extends Component {

    state = {
        email: '',
        password: ''
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
        });
        const loggedInUser = await resp.json();

        if (loggedInUser.logged_in) {
            window.location.href = '/';
        } else {
            this.setState({
                isInvalid: true
            });
        }
    }

    // componentDidMount() {
    //     this.handleSubmit();
    // }

    render() {
        return (
            <div className="login-container">
                <div id="login-form-wrapper" >
                    {/* <h2> Login </h2>           */}
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
                        <div className="button">
                            <button className="btn" type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
