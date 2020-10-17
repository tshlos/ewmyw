import React, { Component } from "react";
import Podcast from "./Podcast";

export default class Scroll extends Component {

    state = {
        podcasts: {
            shows: {
                items: []
            }
        },
    }

    loadDefaultSearch = async () => {
        const pageNum = this.props.page
        console.log("pageee", pageNum)

        const url = new URL("http://localhost:3000/api/v1/search");
        url.searchParams.append("page", pageNum);

        
        const response = await fetch(url.toString(), {
            credentials: "include",
            mode: "cors"
        });
        const podcasts = await response.json();
        this.setState({
            podcasts: podcasts
        });
        console.log('search podcasts', podcasts)
        // debugger
    }

    componentDidMount() {
        this.loadDefaultSearch();
        // this.loadMorePodcasts();
        // window.addEventListener('scroll', this.infiniteScroll);
        // this.searchPodcasts(this.state.page);
    }

    handleSearchChange = async (e) => {
        e.preventDefault();
        const url = new URL("http://localhost:3000/api/v1/search");

        url.searchParams.append("query", e.target.value);
        url.searchParams.append("offset", 20);
        // debugger

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
            <div className="scroll-container">
            
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
