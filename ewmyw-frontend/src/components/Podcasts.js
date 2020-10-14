import React, { Component } from "react";
import Podcast from "./Podcast";


const podcastsUrl = "http://localhost:3000/api/v1/podcasts";

export default class Podcasts extends Component {

    state = {
        podcasts: {
            shows: []
        }
    }

    getPodcasts = async () => {
        const response = await fetch(podcastsUrl);
        const podcasts = await response.json()
        this.setState({
            podcasts: podcasts
        });
    }

    componentDidMount() {
        this.getPodcasts();
    }

    render() {
        return (
            <div>
                {this.state.podcasts.shows.map((podcast) => {
                    return (
                        <Podcast 
                            key={podcast.id} 
                            podcast={podcast}
                        />
                    )
                })}
            </div>
        )
    }
}
