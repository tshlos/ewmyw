import React, { Component } from 'react'
import Podcast from './Podcast';

class Playlist extends Component {

    state = {}

    fetchFavorites = async () => {
        const response = await fetch("http://localhost:3000/api/v1/favorites", {
            credentials: "include",
            mode: "cors"
        });
        const favorites = await response.json();
        this.setState({ favorites })
    }


    componentDidMount() {
        this.fetchFavorites();
    }


    render() {
        if (!this.props.user) {
            return ""
        }

        let favsToRender;
        if (this.state.favorites) {
            favsToRender = this.state.favorites.shows.map((favs) => {
                return (
                    <Podcast podcast={favs} />
                )
            })
        } else {
            favsToRender = "Loading...";
        }

        return (
            <div>
                <div className="playlist-title">
                    <h3>{this.props.user.first_name.charAt(0).toUpperCase() + this.props.user.first_name.slice(1)}'s Playlist </h3>
                </div>
                <div className="favorites-container"> 
                    {favsToRender}
                </div>
            </div>
        )
    }
}

export default Playlist;
