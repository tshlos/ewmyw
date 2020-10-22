import React, { Component } from 'react'
import { FaTruckLoading } from 'react-icons/fa';
import Podcast from './Podcast';

class Playlist extends Component {

    state = {}

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

    render() {
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
                <div className="favorites-container"> 
                    {favsToRender}
                </div>
            </div>
        )
    }
}

export default Playlist;
