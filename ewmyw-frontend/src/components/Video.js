import React from 'react'
// import VideoFile from "./video/paint.mp4";
// import VideoFile from "./video/blue2.mp4";
// import VideoFile from "./video/pod.mp4";
// import VideoFile from "./video/studio.mp4";

export default function Video() {
    return (
        <div className="video">
            <video
                autoPlay
                loop
                muted
                style={{
                    width: "100%",
                    left: "50%",
                    top: "50%",
                    height: "100%",
                    position: "fixed",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    zIndex: "-1",
                    filter: "blur(10px) grayscale(100%)"
                }}
            >
                {/* <source src={VideoFile} type="video/mp4" /> */}
            </video>
        </div>
    )
}
