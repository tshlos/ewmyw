// const { createContext } = require("react");
// import React, { Component } from 'react'
// import { FaSearch } from "react-icons/fa";


// export default class Search extends Component {

//     state = {
//         isActive: false
//     }
//     // const body = document.querySelector('body');
//     // const searchBtn = document.querySelector('#search');
//     // const searchInput = document.querySelector('#search-input');
//     // let active = false;

//     handleSearch = () => {

//     }

//     body.addEventListener('click', (e) => {
//         if (e.target.id === 'search' || e.target.id === 'search-input' || e.target.id === 'search-icon') {
//             if (!active) {
//                 searchBtn.classList.add('active');
//                 searchInput.classList.add('active');
//                 active = true;
//             }
//         } else {
//             searchBtn.classList.remove('active');
//             searchInput.classList.remove('active');
//             searchInput.value = '';
//             active = false;
//         }
//     });

// render() {
//     return (
//         <div>
//             <div className="search">
//                 <FaSearch>
//                 </FaSearch>
//                 <input
//                     id="search-input"
//                     type="text"
//                     placeholder="Search..."
//                     onChange={this.handleSearchChange}
//                 />
//                 <div className="search"> </div>
//             </div>
//         </div>
//     )
// }
