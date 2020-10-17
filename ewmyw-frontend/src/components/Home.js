import React, { Component } from "react";
import Podcast from "./Podcast";

export default class Home extends Component {

    state = {
        podcasts: {
            shows: {
                items: []
            }
        },
        morePodcasts: [],
        loading: false, 
        page: 0,
        prevY: 0
    }

    // searchPodcasts = async () => {
    //     const response = await fetch("http://localhost:3000/api/v1/search", {
    //         credentials: "include",
    //         mode: "cors"
    //     });
    //     const podcasts = await response.json();
    //     this.setState({
    //         podcasts: podcasts
    //     });
    //     console.log('search podcasts', podcasts)
    //     debugger
    // }


    searchPodcasts = async () => {
        this.setState({ loading: true })
        const response = await fetch("http://localhost:3000/api/v1/search", {
            credentials: "include",
            mode: "cors"
        });
        const podcasts = await response.json();
        this.setState({
            podcasts: podcasts,
            morePodcasts: [...this.state.morePodcasts, ...this.state.podcasts.shows.items]
        });
        if (podcasts.shows.items.length > 0) {
            this.setState({ loading: false })
        }
        console.log('search podcasts', podcasts)
        // console.log('more podcasts', this.state.morePodcasts)
        // debugger
    }


    // loadMorePodcasts = () => {
    //     this.setState({ loading: true })
    //     // console.log("load more podcasts", this.state.podcasts)
    //     // debugger
    //     this.setState({
    //         morePodcasts: [...this.state.morePodcasts, ...this.state.podcasts.shows.items],
    //         loading: false,
    //     });
    //     console.log('poooooooddss', this.state.morePodcasts)
    //     // debugger
    // }


    componentDidMount() {
        this.searchPodcasts();
        // this.loadMorePodcasts();
    }


    // handleSearchChange = async (e) => {
    //     e.preventDefault();
    //     const url = new URL("http://localhost:3000/api/v1/search");
        
    //     url.searchParams.append("query", e.target.value);
    //     debugger

    //     const result = await fetch(url.toString(), {
    //         credentials: "include",
    //         mode: "cors"
    //     });
    //     const filteredPodcasts = await result.json()
    //     this.setState({
    //         podcasts: filteredPodcasts
    //     });
    //     // debugger
    // }


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
