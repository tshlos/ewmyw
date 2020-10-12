import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {

    render() {
        return (
            <div>
                <NavLink to="/"> Home </NavLink>
                {this.props.user ? <NavLink to="/login">Login</NavLink> : <NavLink to="/logout" onClick={this.props.handleLogoutClick}>Logout</NavLink> }
                <NavLink to="/signup"> Signup </NavLink>
                <NavLink to="/podcasts"> Podcasts </NavLink>
                <NavLink to="/playlist"> Playlist </NavLink>
                {/* {this.state.loggedIn ? <NavLink to="logout">Logout</NavLink> : <NavLink to="login">Login</NavLink> } */}
            </div>
        )
    }
}
