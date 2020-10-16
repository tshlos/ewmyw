import React, { Component } from "react";
import Podcast from "./Podcast";

export default class Home extends Component {

    state = {
        podcasts: {
            shows: {
                items: []
            }
        },
    }

    searchPodcasts = async () => {
        const response = await fetch("http://localhost:3000/api/v1/search", {
            credentials: "include",
            mode: "cors"
        });
        const podcasts = await response.json();
        // debugger
        this.setState({
            podcasts: podcasts
        });
    }

    componentDidMount() {
        this.searchPodcasts();
    }

    handleSearchChange = async (e) => {
        e.preventDefault();
        const search = e.target.value;
        const url = new URL("http://localhost:3000/api/v1/search");
        
        url.searchParams.append("query", e.target.value);

        const result = await fetch(url.toString(), {
            credentials: "include",
            mode: "cors"
        });
        const filteredPodcasts = await result.json()
        this.setState({
            podcasts: filteredPodcasts
        });
        // debugger
    }


    render() {
        return (
            <div className="search-container"> 
                {/* <div> */}
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Search..."
                        onChange={this.handleSearchChange}
                    />
                {/* </div> */}
                <div className="all-podcasts">
                    {this.state.podcasts.shows.items.map((podcast) => {
                        return (
                            <Podcast
                                key={podcast.id}
                                podcast={podcast}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}
