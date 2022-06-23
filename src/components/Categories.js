import React from "react";

export default class Categories extends React.Component {
    render() {
        return (
            <div className="nav-categories-container nav-item">
                <a href="/" className="nav-categories">Categories</a>
                <div className="arrow-holder">
                    <i className="arrow-down"></i>
                </div>
            </div>
        )
    }
}