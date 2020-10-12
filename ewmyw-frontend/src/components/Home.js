import React, { Component } from "react";
import PodcastCollection from "./PodcastCollection";

export default class Home extends Component {

    state = {
        podcasts: {
            shows: {
                items: []
            },
            search: ""
        }
    }

    searchPodcasts = async () => {
        const response = await fetch("http://localhost:3000/api/v1/search");
        // debugger
        const podcasts = await response.json();
        this.setState({
            podcasts: podcasts
        });
    }

    componentDidMount() {
        this.searchPodcasts();
    }

    handleSearchChange = async (e) => {
        const search = e.target.value;
        e.preventDefault();
        const url = new URL("http://localhost:3000/api/v1/search");
        url.searchParams.append("query", e.target.value);
        const result = await fetch(url.toString());
        const filteredPodcasts = await result.json()
        this.setState({
            search,
            podcasts: filteredPodcasts
        });
    }


    render() {
        return (
            <div>
                <div className="search-field"> 
                    <input 
                        type="text" 
                        placeholder="Search..."
                        onChange={this.handleSearchChange}
                    />
                    <div className="search"> </div>
                </div>

                {this.state.podcasts.shows.items.map((podcast) => {
                    return (
                        <PodcastCollection 
                            key={podcast.id} 
                            podcast={podcast} 
                        />
                    )
                })}
        </div>

            // <div className="wrapper"> 
            //     <div>
            //         <input 
            //             className="search-field"
            //             // type="text" 
            //             type="search"
            //             placeholder="Find Podcasts"
            //             onChange={this.handleChange}
            //             // onChange={this.filteredPodcasts}
            //         />
            //         <button className="search"> Search </button>
            //     </div>
        
            //     <div>
            //         {this.state.podcasts.shows.items.map((podcast) => {
            //             return (
            //                 <PodcastCollection 
            //                     key={podcast.id} 
            //                     podcast={podcast} 
            //                 />
            //             )
            //         })}
            //     </div>
            // </div>


        )
    }
}