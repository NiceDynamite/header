import React from "react";
import Input from "./Input";
import { AiOutlineSearch } from 'react-icons/ai'

export default class SearchBar extends React.Component {
    render() {
        return (
            <div className="search-bar">
                <Input query={this.props.query} />
                <a href="/" className="search-logo"><AiOutlineSearch /></a>
            </div>
        )
    }
}