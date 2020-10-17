import React, { Component } from "react";
// import { FaHeart, FaPlayCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


export default class Podcast extends Component {

    constructor(props) {
        super()
        this.state = {
            isFavorite: props.podcast.is_favorite,
            podcasts: []
        }
    }

    addPodcastToFavorite = () => {
        this.setState({
            isFavorite: !this.state.isFavorite
        });
        const id = this.props.podcast.id;
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
        console.log("pod info", podInfo)
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

        // const { name, description, external_urls, images, publisher, total_episodes, category, id } = this.props.podcast;

        // return (
        //     <div>
        //         <div className="container">
        //             <div className="card">
        //                 <div className="podcast-image">
        //                     <img className="card-image" src={images[0].url} />
        //                 </div>
        //                 <div className="card-text">
        //                     <div className="card-info">
        //                         <h2> {name} </h2>
        //                         <FaHeart
        //                             onClick={() => this.state.isFavorite ? this.removeLike() : this.addPodcastToFavorite()}
        //                             size={25}
        //                             color={this.state.isFavorite ? "#ff3232" : "#c3c6c1"}
        //                         />
        //                     </div>
        //                     <div className="separator"></div>
        //                     <h5 className="podcast-description"> {description.substr(0, 600)} </h5>
        //                     <div>
        //                         {/* <a href={external_urls["spotify"]}> Listen to Podcast </a> */}
        //                         <h5 className="podcast-publisher"> {publisher} </h5>
        //                         <h6 className="podcast-eps"> {total_episodes} episodes </h6>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // )
       
        const { name, description, external_urls, images, publisher, total_episodes, category, id } = this.props.podcast;
        const handleRedirect = () => external_urls["spotify"]

        return (
            <div className="card-container">
                <div id="podcast">
                    {/* <h2>Podcasts</h2> */}
                    <div className="cards">
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
                                <div className="card-description mt-3">
                                    {description.length > 200 ? description.substring(0, 180) + "..." : description}
                                </div>
                                <div>
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
                </div>
            </div>
        )
    }
}