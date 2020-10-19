import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {

    render() {
        // const userName = this.props.user.first_name.charAt(0).toUpperCase() + this.props.user.first_name.slice(1);
        // console.log(userName, 'username')

        return (
            <div className="navbar-container"> 
                <div className="navbar">
                    <NavLink to="/"> Home </NavLink>
                    {/* <NavLink to="/podcasts"> Podcasts </NavLink> */}
                    <NavLink to="/playlist"> Playlist </NavLink>
                    {this.props.user ? <NavLink to="/logout" onClick={this.props.handleLogoutClick}>Logout</NavLink> : <NavLink to="/login">Login</NavLink>}
                    <NavLink to="/signup"> Signup </NavLink>
                    <NavLink to="drag"> Drag </NavLink>
                </div>
            </div>
        )
    }
}
