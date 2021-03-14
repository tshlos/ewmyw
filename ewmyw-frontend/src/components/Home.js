import React, { Component } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ParallaxEffect from "./ParallaxEffect";
import Podcast from "./Podcast";
import Scroll from "./Scroll";
import Sidebar from "./Sidebar";

class Home extends Component {

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
        
        this.setState({
            query: e.target.value,
            pages: 1
        });
    }

    handleLoadMore = () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1000 < document.documentElement.offsetHeight) {
            return;
        }
        this.setState({
            pages: this.state.pages + 1
        });
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleLoadMore);
        return () => window.removeEventListener("scroll", this.handleLoadMore);
    }

    onDragEnd = async (result) => {
        if (!result.destination) return;
        const id = result.draggableId;

        if (result.destination && result.destination.droppableId === "sidebar") {
            const podcast = {
                podcast_id: id
            }
            const response = await fetch("http://localhost:3000/api/v1/favorites", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(podcast)
            });
            const fav = await response.json();
        } else {
            await fetch(`http://localhost:3000/api/v1/favorites/${id}`, {
                method: "DELETE",
                credentials: "include"
            });
        }
        this.forceUpdate();
    }

    render() {
        if (!this.props.user) {
            return "";
        }

        let num = this.state.pages;
        let arr = [];
        for (let i = 0; i < num; i++) {
            arr.push(<Scroll page={i} key={i} query={this.state.query} />)
        }

        return (
            <div>
                <DragDropContext onDragEnd={result => this.onDragEnd(result)} >
                    <div className="search-container">
                        <div>
                            <input
                                className="search-input"
                                type="text"
                                placeholder="Search..."
                                onChange={(e) => this.handleSearchChange(e)}
                            />
                        </div>
                    </div>
                    <ParallaxEffect />
                    <Sidebar />
                    <div className="droppable-container">
                        <Droppable droppableId={"home"}>
                            {(provided) => {
                                return (
                                    <div
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        style={{
                                            padding: 4,
                                            minHeight: 500
                                        }}
                                    >
                                        {provided.placeholder}
                                        <div className="all-podcasts">
                                            {this.state.podcasts.shows.items.map((podcast, index) => {
                                                return (
                                                    <Podcast
                                                        key={podcast.id}
                                                        podcast={podcast}
                                                        index={1000 + index}
                                                    />
                                                )
                                            })}
                                        </div>
                                        {arr}
                                    </div>
                                )
                            }}
                        </Droppable>
                        <section className={this.props.expanded ? "main-content main-content--expanded" : "main-content"}> </section>
                    </div>
                </DragDropContext>
            </div>
        )
    }
}
export default Home;
