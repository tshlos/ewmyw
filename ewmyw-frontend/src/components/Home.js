import React, { Component } from "react";
import Podcast from "./Podcast";
import Scroll from "./Scroll";

export default class Home extends Component {

    state = {
        podcasts: {
            shows: {
                items: []
            }
        },
        pages: 1
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


    // componentDidMount() {
    //     this.searchPodcasts(this.state.page);
    // }


    handleSearchChange = async (e) => {
        e.preventDefault();
        const url = new URL("http://localhost:3000/api/v1/search");

        url.searchParams.append("query", e.target.value);
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


    handleLoadMore = () => {
        this.setState({
            pages: this.state.pages + 1 
        });
    }


    render() {
        let num = this.state.pages;
        let arr = []
        for (let i = 0; i < num; i++) {
            arr.push(<Scroll page={i} />)
            console.log(arr)
        }
       
        
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
                {/* <div className="all-podcasts">
                    {this.state.podcasts.shows.items.map((podcast) => {
                        return (
                            <Podcast
                            key={podcast.id}
                            podcast={podcast}
                            />
                            )
                        })}
                    </div> */}
                {/* <Scroll page={this.state.pages} /> */}
                {arr}
                <button onClick={this.handleLoadMore} >Load more</button>
            </div>
        )
    }
}
