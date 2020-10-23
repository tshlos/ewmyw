import React, { Component } from "react";
import { Parallax } from "react-parallax";
import Map from "./img/map.jpg"

class ParallaxEffect extends Component {

    render() {
        return (
            <div style={{
                    position: "relative",
                    transform: "translate(0, -50%)",
                    objectFit: "cover",
                    overflow: "hidden",
                    zIndex: "-1",
                    height: "800px"
                }}>
                <Parallax bgImage={Map} strength={300} >
                    <div style={{ height: "800px" }}></div>
                </Parallax>
            </div>
        )
    }
}

export default ParallaxEffect;
