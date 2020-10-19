import React, { Component } from "react";
import Podcast from "./Podcast";


export default class Podcasts extends Component {

    state = {
        defaultPodcasts: {
            shows: []
        }
    }

    getPodcasts = async () => {
        const response = await fetch("http://localhost:3000/api/v1/podcasts");
        const podcasts = await response.json()
        this.setState({
            defaultPodcasts: podcasts
        });
    }

    componentDidMount() {
        this.getPodcasts();
    }

    render() {
        return (
            <div>
                {this.state.defaultPodcasts.shows.map((podcast) => {
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

