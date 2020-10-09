import React, { Component } from "react";

const PodcastCollection = (props) => {

    console.log('props', props)

    const { name, description, url, images, publisher, total_episodes, category, show_id } = props.podcast
    // const img = props.podcast.images(img => { return img.url})
    // debugger
    return (
        // <div className="container">
        //     <span></span>
        //     <span></span>
        //     <div className="card">
        //         <div className="container-text">
        //             <div> 
        //                 <h5> {name} </h5>
        //                 <h6> {description} </h6>
        //             </div>
        //             <div className="container-image"> 
        //                 <img alt="podcast-image" src={images[0].url} style={{width: "50%"}} />
        //             </div>
        //         </div>
        //     </div> 
        // </div>
        // <div> 
        //     <div className="card">
        //         <div className="card-image"> </div>
        //     </div>
        //         <img className="podcast-image" src={images[0].url} style={{width: "50%"}}/>
        //     <div className="card-text"> 
        //         <h3> {name} </h3>
        //         <div className="separator"></div>
        //         <h5> {description} </h5>
        //     </div>
        // </div>

        // <div>
        //     <div className="card">
        //         <div className="podcast-image">
        //             <img className="card-image" src={images[0].url} />
        //         </div>
        //         <div className="card-text">
        //             <div className="card-info">
        //                 <h2> {name} </h2>
        //             </div>
        //             <div className="separator"></div>
        //             <h5 className="podcast-description"> {description} </h5>
        //             <div> 
        //             <h5 className="podcast-publisher"> {publisher} </h5>
        //             <h6 className="podcast-eps"> {total_episodes} episodes </h6>
        //             </div>
        //         </div>
        //     </div>
        // </div>
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
                <h5 className="podcast-description"> {description} </h5>
                <div> 
                <h5 className="podcast-publisher"> {publisher} </h5>
                <h6 className="podcast-eps"> {total_episodes} episodes </h6>
                </div>
            </div>
        </div>
    </div>
    )
}
export default PodcastCollection