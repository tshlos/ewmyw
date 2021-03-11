import React, { Component } from "react";
import Home from "./Home";
import Podcast from "./Podcast";

class Podcasts extends Component {

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
                        <div> 
                            <Podcast 
                                key={podcast.id} 
                                podcast={podcast}
                            />
                            <Home
                                podcast={podcast}
                            />
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default Podcasts;

