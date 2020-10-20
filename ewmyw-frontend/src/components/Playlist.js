import React, { Component } from 'react'
import Podcast from './Podcast';

class Playlist extends Component {

    state = {
        // favorites: null
    }

    fetchFavorites = async () => {
        
        const response = await fetch("http://localhost:3000/api/v1/favorites", {
            credentials: "include",
            mode: "cors"
        });
        const favorites = await response.json();
         

        if (!favorites.shows) {
            if (this.state.favorites) {
                this.setState({
                    favorites: null
                });
            } 
            return;
        }
        
        
        if (!this.state.favorites || favorites.shows.length !== this.state.favorites.shows.length) {
            this.setState({ favorites })
        } 
    }

    componentDidUpdate() {
        this.fetchFavorites();
    }

    componentDidMount() {
        this.fetchFavorites();
    }

    render() { console.log('favsssss?', this.state.favorites)
        
        // if (!this.props.user) {
        //     return ""
        // }

        if (!this.state.favorites) {
            return null;
        }
        let favsToRender;
        if (this.state.favorites) {
            favsToRender = this.state.favorites.shows.map((favs, index) => {
                return (
                    <Podcast 
                        index={index}
                        podcast={favs}
                        isSmall={true}
                    />
                )
            })
        } else {
            favsToRender = "Loading...";
        }


        return (
            <div>
                <div className="playlist-title">
                    {/* <h3>{this.props.user.first_name.charAt(0).toUpperCase() + this.props.user.first_name.slice(1)}'s Playlist </h3> */}
                </div>
                <div className="favorites-container"> 
                    {favsToRender}
                </div>
            </div>
        )
    }
}

export default Playlist;
