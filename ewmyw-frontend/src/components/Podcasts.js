import React, { Component } from "react";
import Podcast from "./Podcast";


export default class Podcasts extends Component {

    state = {
        podcasts: {
            shows: []
        }
    }

    getPodcasts = async () => {
        const response = await fetch("http://localhost:3000/api/v1/podcasts");
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
                            user={this.props.user}
                        />
                    )
                })}
            </div>
        )
    }
}

