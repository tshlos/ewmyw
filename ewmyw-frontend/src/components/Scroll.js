import React, { Component } from "react";
import Podcast from "./Podcast";

class Scroll extends Component {

    state = {
        podcasts: {
            shows: {
                items: []
            }
        },
    }

    loadDefaultSearch = async (query) => {
        const pageNum = this.props.page
        

        const url = new URL("http://localhost:3000/api/v1/search");
        url.searchParams.append("page", pageNum);
        url.searchParams.append("query", query || this.props.query);


        const response = await fetch(url.toString(), {
            credentials: "include",
            mode: "cors"
        });
        const podcasts = await response.json();

        this.setState({
            podcasts: podcasts
        });
    }

    componentWillReceiveProps(props) {
        this.loadDefaultSearch(props.query);
    }

    componentDidMount() {
        this.loadDefaultSearch();
    }

    render() {

        return (
            <div className="scroll-container">
                <div className="all-podcasts">
                    {this.state.podcasts.shows.items.map((podcast, index) => {
                        return (
                            <Podcast
                                key={podcast.id}
                                podcast={podcast}
                                index={index}
                            />
                        )
                    })}
                </div>
            </div>

        )
    }
}
export default Scroll;