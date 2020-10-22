import React, { Component } from "react";
import { Parallax } from "react-parallax";
import Img1 from "./img/abs.jpg"
import Img2 from "./img/pod.jpg"
import Img3 from "./img/mic.jpg"
import Img4 from "./img/rain.jpg"

// const inlineStyle = {
//     background: "#fff",
//     left: "50%",
//     top: "50%",
//     position: "absolute",
//     padding: "20px",
//     transform: "translate(-50%, -50%)",
// }

class ParallaxEffect extends Component {

    render() {
        // return (
        //     <div style={{
        //         textAlign: "center",
        //         // filter: "grayscale(100%)"
        //     }}>
        //         <Parallax bgImage={Img3} strength={-200} >
        //             <div style={{ height: 500 }} >
        //                 {/* <div style={{ inlineStyle }}>Reverse</div> */}
        //             </div>
        //         </Parallax>
        //         <h1> | | | </h1>
        //         <Parallax bgImage={Img2} blur={{ min: -1, max: 10 }} >
        //             <div style={{
        //                 height: "500px",
        //                 filter: "grayscale(100%)"
        //             }}>
        //                 {/* <div style={{ inlineStyle }}>Blur</div> */}
        //             </div>
        //         </Parallax>
        //         <h1> | | | </h1>
        //         <Parallax bgImage={Img1} strength={500} >

        return (
            <div style={{
                    position: "relative",
                    transform: "translate(0, -50%)",
                    objectFit: "cover",
                    overflow: "hidden",
                    zIndex: "-1",
                    height: "800px"
                }}>
                <Parallax bgImage={Img1} strength={500} >
                    <div style={{ height: "800px" }}></div>
                </Parallax>
            </div>
        )
    }
}

export default ParallaxEffect;
