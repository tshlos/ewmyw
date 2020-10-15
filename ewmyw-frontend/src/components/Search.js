// import React, { Component } from "react";
// import Podcast from "./Podcast";
// import Home from "./Home";

// export default class Home extends Component {

//     state = {
//         podcasts: {
//             shows: {
//                 items: []
//             }
//         }
//     }

//     searchPodcasts = async () => {
//         const response = await fetch("http://localhost:3000/api/v1/search");
//         const podcasts = await response.json();
//         this.setState({
//             podcasts: podcasts
//         });
//     }

//     componentDidMount() {
//         this.searchPodcasts();
//     }

//     handleSearchChange = async (e) => {
//         const search = e.target.value;
//         // debugger
//         e.preventDefault();
//         const url = new URL("http://localhost:3000/api/v1/search");
//         url.searchParams.append("query", e.target.value);
//         const result = await fetch(url.toString());
//         const filteredPodcasts = await result.json()
//         this.setState({
//             podcasts: filteredPodcasts
//         });
//         console.log(podcasts)
//         debugger
//     }


//     render() {
//         return (
//             <div>
//                 <Home 
//                     // searchPodcasts={this.searchPodcasts}
//                     handleSearchChange={this.handleSearchChange}
//                     podcasts={this.state.podcasts}
//                 />
//                 {/* {this.state.podcasts.shows.items.map((podcast) => {
//                     return (
//                         <Podcast
//                             key={podcast.id}
//                             podcast={podcast}
//                         />
//                     )
//                 })} */}
//             </div>

//         )
//     }
// }