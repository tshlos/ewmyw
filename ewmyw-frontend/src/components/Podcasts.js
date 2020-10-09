import React, { Component } from "react";
import PodcastCollection from "./PodcastCollection";

const podcasts_url = "http://localhost:3000/api/v1/podcasts";

class Podcasts extends Component {

    state = {
        podcasts: {
            shows: []
        }
    }

    getPodcasts = async () => {
        const response = await fetch(podcasts_url);
        const podcasts = await response.json()
        this.setState({
            podcasts: podcasts
        });
        console.log('podcasts', podcasts)
        // debugger
    }

    componentDidMount() {
        this.getPodcasts();
    }

    render() {
        return (
            <div>
                {this.state.podcasts.shows.map((podcast) => {
                    return (
                        <PodcastCollection podcast={podcast} />
                    )
                })}
            </div>
        )
    }
}
export default Podcasts;