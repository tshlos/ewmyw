import React, { Component } from "react";

export default class PodcastCollection extends Component {

    state = {
        favorites: []
    }

    addPodcastToFavorite = (pod) => {
        const {id} = this.props.podcast
        // podcast = {
        //     user_id:
        //     podcast_id: id
        // }
        console.log("addPodcastToFavorite", this.props.podcast)
        // this.setState({
        //     favorites: [...this.state.favorites, pod]
        // })
        const a = fetch("http://localhost:3000/api/v1/favorites")
    }
    
    render() {
        const { name, description, url, images, publisher, total_episodes, category, show_id } = this.props.podcast;
        return (
            <div>
                <div className="container">
                    <div className="card">
                        <div className="podcast-image">
                            <img className="card-image" src={images[0].url} />
                        </div>
                        <div className="card-text">
                            <div className="card-info">
                                <h2> {name} </h2>
                            </div>
                            <div className="separator"></div>
                            <h5 className="podcast-description"> {description.substr(0, 600)} </h5>
                            <div>

                            <button onClick={this.addPodcastToFavorite}>Favorite</button>

                                <h5 className="podcast-publisher"> {publisher} </h5>
                                <h6 className="podcast-eps"> {total_episodes} episodes </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}
