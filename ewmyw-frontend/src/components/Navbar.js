import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {

    render() {

        if (!this.props.user || !this.props.user.first_name) {
            return "";
        }

        return (

            <div className="navbar-container"> 
                <div className="navbar">
                    <div className="app-name"> EWMYW </div> 
                    <div className="navbar-username"> Hey {this.props.user.first_name.charAt(0).toUpperCase() + this.props.user.first_name.slice(1)} </div>
                    {this.props.user && <NavLink to="/"> Home </NavLink>}
                    {/* <NavLink to="/podcasts"> Podcasts </NavLink> */}
                    {/* <NavLink to="/playlist"> Playlist </NavLink> */}
                    {this.props.user ? <NavLink to="/logout" onClick={this.props.handleLogoutClick}>Logout</NavLink> : <NavLink to="/login">Login</NavLink>}
                    {!this.props.user && <NavLink to="/signup"> Signup </NavLink> }
                    {/* {!this.props.user && <NavLink to="/signup"> Signup </NavLink>} */}
        
                </div>
            </div>
        )
    }
}
