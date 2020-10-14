import React, { Component } from "react";
import { FaHeart } from "react-icons/fa";

export default class Podcast extends Component {

    state = {
        isFavorite: false,
        myPodcasts: []
    }


    addPodcastToFavorite = () => {
        this.setState({
            isFavorite: !this.state.isFavorite
        });
        const id = this.props.podcast.id;
        this.fetchToAddLike(id);
    }


    fetchToAddLike = async (podcastId) => {
        const podcast = {
            podcast_id: podcastId
        }
        const response = await fetch("http://localhost:3000/api/v1/favorites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(podcast)
        });
        const podInfo = await response.json();
    }

    // removePodcast = (pod) => {
    //     this.setState(prevState => {
    //         return {
    //             myPodcasts: prevState.myPodcasts.filter(i => i !== pod)
    //         }
    //     })
    // }

    // deletePodcast = (pod) => {
    //     const id = pod.id;
    //     this.setState({
    //         pods: this.state.pods.filter(pod => {
    //             return pod.id !== id
    //         })
    //     })
    //     fetch("http://localhost:3000/api/v1/favorites" + `/${id}`), {
    //         method: 'DELETE'
    //     }
    // }

    render() {
        const { name, description, external_urls, images, publisher, total_episodes, category, id } = this.props.podcast;
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
                                <FaHeart
                                    onClick={() => this.addPodcastToFavorite()}
                                    size={25}
                                    color={this.state.isFavorite ? "#ff3232" : "#c3c6c1"}
                                />
                            </div>
                            <div className="separator"></div>
                            <h5 className="podcast-description"> {description.substr(0, 600)} </h5>
                            <div>
                                {/* <a href={external_urls["spotify"]}> Listen to Podcast </a> */}
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
