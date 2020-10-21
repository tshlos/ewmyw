import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {

    render() {
         console.log("userrrr", this.props.user)

        if (!this.props.user) {
            return "";
        }

        return (

            <div className="navbar-container"> 
                <div className="navbar">
                    <h5 className="navbar-username"> Hey {this.props.user.first_name.charAt(0).toUpperCase() + this.props.user.first_name.slice(1)} </h5>
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
