import React, { Component } from "react";
import PodcastCollection from "./PodcastCollection";

// const podcasts_url = "http://localhost:3000/api/v1/podcasts";

class Podcasts extends Component {

    // state = {
    //     podcasts: []
    // }

    // getPodcasts = async () => {
    //     const response = await fetch(podcasts_url);
    //     const podcasts = await response.json()
    //     this.setState({
    //         podcasts: podcasts
    //     });
    //     console.log('podcasts', podcasts)
    //     debugger
    // }

    // componentDidMount() {
    //     this.getPodcasts();
    // }

    // componentDidMount() {
    //     fetch(podcasts_url)
    //         .then(response => response.json())
    //         .then(podcasts => this.setState({ podcasts }, console.log(podcasts)))
    // }

    render() {
        return (
            <div>
                {this.state.podcasts.map(podcast => {
                    return (
                        <PodcastCollection podcasts={podcast} />
                        )
                    })}
                {/* <PodcastCollection /> */}
                <PodcastCollection />
                <h2> Podcasts </h2>
            </div>
        )
    }
}

export default Podcasts;