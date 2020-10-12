import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import Login from './components/auth/Login';
import Navbar from './components/Navbar';
import Playlist from './components/Playlist';
import Podcasts from './components/Podcasts';
import Registration from './components/auth/Registration';

class App extends Component {

  state = {
    loggedInStatus: "not logged in"
  }

  handleSuccessfulAuth = async () => {
    const resp = await fetch("http://localhost:3000/api/v1/logged_in", {
      credentials: "include",
      mode: "cors"
    });
    const userLoggedIn = await resp.json();
    // console.log('user logged in?', userLoggedIn)
    this.setState({
      loggedInStatus: "logged in",
      user: userLoggedIn.user
    });
  }


  componentDidMount() {
    this.handleSuccessfulAuth();
  }


  handleLogoutClick = async (event) => {
    event.preventDefault();
    
    let resp;
    try {
    resp = await fetch("http://localhost:3000/api/v1/logout", {
        method: 'DELETE',
        credentials: "include",
    });
    } catch (e) {
        console.log("Failed to logout", e)
    }
    const userLoggedOut = await resp.json();
    console.log("logged out user", userLoggedOut)
    this.setState({
      loggedInStatus: "Not logged in", 
      user: {}
    });
    window.location.href = '/';
  }


  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" 
              render={props => (
                <Navbar {...props}
                  handleLogoutClick={this.handleLogoutClick}
                  user={this.state.user}
                /> 
              )}
            />
          <Route path="/playlist" component={Playlist} />
          <Route path="/podcasts" component={Podcasts} />
          <Route 
            path="/login" 
            render={(props) => (
              <Login 
                {...props}
                handleLogoutClick={this.handleLogoutClick}
                handleSuccessfulAuth={this.handleSuccessfulAuth}

              />
            )} 
          />
          <Route 
            path="/signup" component={Registration} />
            <Route exact path="/" 
              render={props => (
                <Home {...props}
                  handleLogoutClick={this.handleLogoutClick}
                /> 
              )}
            />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
