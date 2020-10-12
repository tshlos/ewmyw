import React from "react";

const PodcastCollection = (props) => {

    const { name, description, url, images, publisher, total_episodes, category, show_id } = props.podcast;

    const maxLength = 100;

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
                        </div>
                        <div className="separator"></div>
                        <h5 className="podcast-description"> {description.substr(0, 600)} </h5>
                        <div>
                            <h5 className="podcast-publisher"> {publisher} </h5>
                            <h6 className="podcast-eps"> {total_episodes} episodes </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}
export default PodcastCollection