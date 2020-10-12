import React, { Component } from 'react';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


export default class Favorite extends Component {

    state = {
        favorites: []
    }

    addPodcastToFavorite = (pod) => {
        console.log("addPodcastToFavorite", pod)

    }


    render() {
        return (
            <div>
              
            </div>
        )
    }
}
