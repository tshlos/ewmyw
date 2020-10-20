import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import Playlist from "./Playlist";

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
      <div className={this.state.expanded ? "sidebar sidebar--expanded" : "sidebar"} onClick={this.toggleSidebar} >

        {!this.state.expanded ? <h2 className="sidebar-name-rotate">Playlist</h2> : <h2 className="sidebar-name">Playlist</h2> }
        <Droppable droppableId={"sidebar"}>
          {(provided, snapshot) => {
            return (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  // background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",
                  padding: 4,
                  height: "100%"
                  // width: 250,
                  // minHeight: 500
                }}
              >
                {provided.placeholder}
                {this.state.expanded && <Playlist/> }
              </div>
            )
          }}
        </Droppable>
        <span className="shape"></span>
        <span className="shape"></span>

      </div>
    )
  }
}
export default Sidebar;