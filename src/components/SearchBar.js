import React from "react";
import { AiOutlineSearch } from 'react-icons/ai'

export default class SearchBar extends React.Component {
    render() {
        return (
            <div className="search-bar">
                <input type="search" placeholder="Search"></input>
                <a href="/" className="search-logo"><AiOutlineSearch /></a>
            </div>
        )
    }
}