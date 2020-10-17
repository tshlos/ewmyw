import React, { Component } from "react";
import Podcast from "./Podcast";


class Scroll extends Component {

    state = {
            podcasts: {
                shows: []
            },
            loading: false, 
            page: 0,
            prevY: 0
    }

    // async getMorePodcasts(page) {
    //     this.setState({ loading: true });

    //     const response = await fetch("http://localhost:3000/api/v1/search", {
    //         credentials: "include",
    //         mode: "cors"
    //     });
    //     const morePodcasts = await response.json();
    //     console.log('more podsss', morePodcasts)
    //     debugger
    //     // this.setState({ podcasts: [...this.state.podcasts, ...morePodcasts]})
    // }

    // componentDidMount() {
    //     this.getMorePodcasts(this.state.page)
    // }

    render() {
        return (
            <div className="scroll-container">
                <Podcast />
                <div>HELLO</div>
                <div>HELLO</div>
                <div>HELLO</div>
                <div>HELLO</div>
            </div>
        );
    }
}

export default Scroll;