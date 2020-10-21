import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";
// import { FaHeart, FaPlayCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Home from "./Home";


class Podcast extends Component {

    constructor(props) {
        super()
        this.state = {
            isFavorite: props.podcast.is_favorite,
        }
    }

    addPodcastToFavorite = () => {
        this.setState({
            isFavorite: !this.state.isFavorite
        });
        // debugger
        const id = this.props.podcast.id;
        console.log("iddddd", id)
        this.fetchToAddLike(id);
    }

    fetchToAddLike = async (podcastId) => {
        const podcast = {
            podcast_id: podcastId
        }
        const response = await fetch("http://localhost:3000/api/v1/favorites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(podcast)
        });
        const podInfo = await response.json();
    }


    removeLike = () => {
        const id = this.props.podcast.favorite_id;
        if (this.state.isFavorite) {
            this.setState({
                isFavorite: !this.state.isFavorite
            })
            fetch(`http://localhost:3000/api/v1/favorites/${id}`, {
                method: "DELETE"
            })
        }
    }


    render() {

        const { name, description, external_urls, images, publisher, total_episodes, category, id } = this.props.podcast;
        const handleRedirect = () => external_urls["spotify"]

        return (
            <div className="card-container">
                <Home isFavorite={this.state.isFavorite} />
                <Draggable key={id} draggableId={id} index={this.props.index}>
                    {(provided, snapshot) => {
                        return (
                            <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={{
                                    userSelect: "none",
                                    padding: 16,
                                    margin: "0 0 8px 0",
                                    minHeight: "50px",
                                    // backgroundColor: snapshot.isDragging ? "white" : "#456C86",
                                    // color: "black",
                                    ...provided.draggableProps.style
                                }}
                            >
                                <div className="podcast sidebar-podcast">
                                    <div className="sidebar-display"> 
                                    {this.props.isSmall ? (
                                        <div className="sidebar-container">
                                            <div className="sidebar-card-name">
                                                {name}
                                            </div>
                                            <div className="card-link sidebar-cardlink"> 
                                                <a href={external_urls["spotify"]}> Listen to Podcast </a>
                                            </div>
                                            <img className="card-image sidebar-image" src={images[0].url} />
                                        </div>
                                    ) : ( <div className="cards">
                                                <ul>
                                                    <li className="card">
                                                        <div className="card-name">
                                                            {name.length > 40 ? name.substring(0, 40) + "..." : name}
                                                            <FaHeart
                                                                className="heart"
                                                                onClick={() => this.state.isFavorite ? this.removeLike() : this.addPodcastToFavorite()}
                                                                size={25}
                                                                color={this.state.isFavorite ? "#ff3232" : "#c3c6c1"}
                                                            />
                                                        </div>
                                                        <div>
                                                            <img className="card-image" src={images[0].url} />
                                                        </div>
                                                        <div className="card-description">
                                                            {description.length > 200 ? description.substring(0, 180) + "..." : description}
                                                        </div>
                                                        <div className="card-link">
                                                            <a href={external_urls["spotify"]}> Listen to Podcast </a>
                                                            {/* <FaPlayCircle
                                        size={22}
                                        href={external_urls["spotify"]} 
                                        // onClick={handleRedirect()}
                                        

                                        // href={external_urls["spotify"]}
                                        // onClick={external_urls["spotify"]}
                                    />                                 */}
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                        )}

                                </div>
                                </div>
                            </div>
                        )
                    }}
                </Draggable>
            </div>
        )
    }
}
export default Podcast;