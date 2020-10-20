import React, { Component } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
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
        this.setState({
            pages: this.state.pages + 1
        });
    }


    componentDidMount() {
        window.addEventListener("scroll", this.handleLoadMore);
        return () => window.removeEventListener("scroll", this.handleLoadMore);
    }


    onDragEnd = async (result) => {
        // debugger
        const id = result.draggableId;
        console.log('heeeeyyyy', result)

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
        this.setState({
            a: 1
        });
    }


    // onDragDelete = (result) => {
    //     const id = result.draggableId;
    //     console.log('deleteeee', result)

    //     if (result.destination.droppableId === "home") {
    //         this.setState({
    //             isFavorite: !this.props.isFavorite
    //         })
    //         fetch(`http://localhost:3000/api/v1/favorites/${id}`, {
    //             method: "DELETE"
    //         })
    //     }
    // }


    render() {
        // console.log(this.props.user)
        if (!this.props.user) {
            return ""
        }

        let num = this.state.pages;
        let arr = []
        for (let i = 0; i < num; i++) {
            arr.push(<Scroll page={i} key={i} />)
        }

        return (
            <div>
                <DragDropContext 
                    onDragEnd={result => this.onDragEnd(result)} 

                >
                    <Sidebar a={this.state.a} />
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
                            {/* <div className="all-podcasts">
                                {this.state.podcasts.shows.items.map((podcast) => {
                                    return (
                                        <Podcast
                                            key={podcast.id}
                                            podcast={podcast}
                                        />
                                    )
                                })} */}
                            {/* </div> */}
                          
                        </div>
                        <Droppable droppableId={"home"}>
                                {(provided, snapshot) => {
                                    return (
                                        <div
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            style={{
                                                // background: snapshot.isDraggingOver ? "white" : "white",
                                                padding: 4,
                                                minHeight: 500
                                            }}
                                        >
                                            {provided.placeholder}
                                            {arr}
                                        </div>
                                    )
                                }}
                            </Droppable>

                        <section className={this.props.expanded ? "main-content main-content--expanded" : "main-content"}>
                        </section>
                    </div>
                </DragDropContext>
            </div>
        )
    }
}
export default Home;
