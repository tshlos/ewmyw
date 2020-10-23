import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import Playlist from "./Playlist";
// import { FaLongArrowAltLeft } from "react-icons/fa";

class Sidebar extends Component {

  state = {
    expanded: false
  }

  toggleSidebar = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    return ( 
      <div>
        <span className="shape"></span>
        <div className={this.state.expanded ? "sidebar sidebar--expanded" : "sidebar"} onClick={this.toggleSidebar} >
          <h2 className={!this.state.expanded ? "sidebar-name-rotate" : "sidebar-name"}><span>Playlist</span> </h2>
          <span className="shape"></span>

          {/* <div className="icon-arrow"> {!this.state.expanded && <FaLongArrowAltLeft />} </div> */}
          <div className="sidebar-playlist-text">{this.state.expanded && <div> To create a playlist drag the cards here </div>}</div>
          <Droppable droppableId={"sidebar"}>
            {(provided) => {
              return (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{
                    padding: 4,
                    height: "100%"
                  }}
                >
                  {provided.placeholder}
                  {this.state.expanded && <Playlist />}
                </div>
              )
            }}
          </Droppable>
          <span className="shape"></span>
        </div>
      </div>
    )
  }
}
export default Sidebar;