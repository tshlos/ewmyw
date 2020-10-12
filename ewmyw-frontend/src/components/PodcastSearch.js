// import { Component, useState } from 'react'
// import PodcastCollection from './PodcastCollection';

// class PodcastSearch extends Component {

//     state = {
//         podcasts: {
//             shows: {
//                 items: []
//             }
//         },
//         // search: ""
//     }

//     searchPodcasts = async () => {
//         const response = await fetch("http://localhost:3000/api/v1/search");
//         const podcasts = await response.json();
//         this.setState({
//             podcasts: podcasts
//         })
//     }

//     componentDidMount() {
//         this.searchPodcasts();
//     }

//     handleChange = (e) => {
//         this.setState({
//             search: e.target.value
//         });
//         const url = new URL("http://localhost:3000/api/v1/search");
//         url.searchParams.append("query", e.target.value);
//         fetch(url.toString()); 
//     }

//     render() {
//         return (
//             <div>
//                 <
//             </div>
//         )
//     }


// }
//  export default PodcastSearch
