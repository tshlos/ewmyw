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


    handleSearchChange = async (e) => {
        e.preventDefault();
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
    }


    handleLoadMore = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 100 < document.documentElement.offsetHeight) {
            return;
        }
        console.log("fetch more podcasts")

        this.setState({
            pages: this.state.pages + 1
        });
    }


    componentDidMount() {
        window.addEventListener("scroll", this.handleLoadMore);
        return () => window.removeEventListener("scroll", this.handleLoadMore);
    }


    render() {
        console.log(this.props.user)
        if (!this.props.user) {
            return ""
        }

        let num = this.state.pages;
        let arr = []
        for (let i = 0; i < num; i++) {
            arr.push(<Scroll page={i} />)
        }

        return (
            <div>
                <h5> Hi {this.props.user.first_name.charAt(0).toUpperCase() + this.props.user.first_name.slice(1)} </h5>
                <div className="search-container">

                    <div>
                        <input
                            className="search-input"
                            type="text"
                            placeholder="Search..."
                            onChange={this.handleSearchChange}
                        />
                    </div>
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
                    {arr}
                </div>

                <section className={this.props.expanded ? "main-content main-content--expanded" : "main-content"}>
                    {/* <header>
                        <span></span>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </header> */}
                    {/* <div className="container">
                        <div className="module--full">
                        </div>
                        <div className="module-wrapper">
                            <div className="module--half">
                            </div>
                            <div className="module--half">
                            </div>
                        </div>
                    </div> */}
                </section>
            </div>
        )
    }
}
