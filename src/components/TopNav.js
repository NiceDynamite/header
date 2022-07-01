import React from "react";

export default class TopNav extends React.Component {
    render() {
        return (
            <div className="link-container">
                <div className="top-link">
                    <a href="/" className="top-link" >Registry</a>
                </div>
                <div className="top-link">
                    <a href="/" className="top-link">Weekly Ad</a>
                </div>
                <div className="top-link">
                    <a href="/" className="top-link">RedCard</a>
                </div>
                <div className="top-link">
                    <a href="/" className="top-link">Target Circle</a>
                </div>
                <div className="top-link">
                    <a href="/" className="top-link">Find Stores</a>
                </div>
            </div>
        )
    }
} 