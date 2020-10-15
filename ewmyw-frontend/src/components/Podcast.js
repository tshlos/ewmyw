import React, { Component } from "react";
import { FaHeart } from "react-icons/fa";


export default class Podcast extends Component {

    constructor(props) {
        super()
        this.state = {
            isFavorite: props.podcast.is_favorite,
            myPodcasts: []
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
    }

    // removePodcastLike = (pod) => {
    //     console.log('liked pod', pod)
    //     // this.setState(prevState => {
    //     //     return {
    //     //         myPodcasts: prevState.myPodcasts.filter(i => i !== pod)
    //     //     }
    //     // })
    // }

    // deletePodcast = (pod) => {
    //     debugger
    //     // const id = pod.id;
    //     // this.setState({
    //     //     pods: this.state.pods.filter(pod => {
    //     //         return pod.id !== id
    //     //     })
    //     // })
    //     // fetch("http://localhost:3000/api/v1/favorites" + `/${id}`), {
    //     //     method: 'DELETE'
    //     // }
    // }


    render() {
        const { name, description, external_urls, images, publisher, total_episodes, category, id } = this.props.podcast;

        return (
            <div>
                <div className="container">
                    <div className="card">
                        <div className="podcast-image">
                            <img className="card-image" src={images[0].url} />
                        </div>
                        <div className="card-text">
                            <div className="card-info">
                                <h2> {name} </h2>
                                <FaHeart
                                    onClick={() => this.addPodcastToFavorite()}
                                    // onClick={() => this.removePodcastLike()}
                                    size={25}
                                    color={this.state.isFavorite ? "#ff3232" : "#c3c6c1"}
                                />
                            </div>
                            <div className="separator"></div>
                            <h5 className="podcast-description"> {description.substr(0, 600)} </h5>
                            <div>
                                {/* <a href={external_urls["spotify"]}> Listen to Podcast </a> */}
                                <h5 className="podcast-publisher"> {publisher} </h5>
                                <h6 className="podcast-eps"> {total_episodes} episodes </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

        // return (
            // <div className="container">
            //     <div className="blog-card">
            //         {/* <img className="pod-image" src={images[0].url} /> */}
            //         <div className="pod-details">
            //             {/* <h3 className="pod-title"> {name} </h3> */}
            //             <p className="pod-description"> </p>
            //         </div>
            //     </div>
            // </div>


            // <div className="container">
        
            //     <main>
            //     <div class="banner">
            //         <img src="https://cdn.pixabay.com/photo/2017/02/01/09/45/fan-palm-2029202_1280.png" alt="banner" class="banner__img" />
            //     </div>
            //     <div class="text">
            //         <h1>California</h1>
            //         <p class="text__sub">36.77° N, 119.42° W </p>
            //         <p class="text__p">a state in the Pacific Region of the United States of America. With 39.5 million residents across a total area of about 163,696 square miles, California is the most populous U.S. state and the third-largest by area. </p>
            //     </div>

         
            //     </main>

            // </div>

            // <div className="row">
            //     <div className="column">
            //         <div className="card">
            //             <h3>{name}</h3> 
            //         </div>
            //     </div>

            // </div> 


        // )

    }
}
