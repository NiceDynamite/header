import React from "react";
import { CgProfile } from 'react-icons/cg'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar-container">
                <nav id="nav" className="primary-nav">
                    <a href="/" className="target-logo">
                        <div className="target-logo">
                            <div className="circle"></div>
                            <div className="outer-circle"></div>
                        </div>
                    </a>
                    <div className="nav-categories-container nav-item">
                        <a href="/" className="nav-categories">Categories</a>
                        <div className="arrow-holder">
                            <i className="arrow-down"></i>
                        </div>
                    </div>
                    <div className="nav-deals-container nav-item">
                        <a href="/" className="nav-deals">Deals</a>
                        <div className="arrow-holder">
                            <i className="arrow-down"></i>
                        </div>
                    </div>
                    <div className="nav-new-container nav-item">
                        <a href="/" className="nav-new">What's New</a>
                        <div className="arrow-holder">
                            <i className="arrow-down"></i>
                        </div>
                    </div>
                    <div className="nav-pickup-container nav-item">
                        <a href="/" className="nav-pickup">Pickup & Delivery</a>
                        <div className="arrow-holder">
                            <i className="arrow-down"></i>
                        </div>
                    </div>
                    <div className="search-bar">
                        <input type="search" placeholder="Search"></input>
                        <a href="/" className="search-logo"><AiOutlineSearch /></a>
                    </div>
                    <div className="sign-in nav-item">
                        <i className="icon"><CgProfile /></i>
                        <a href="/" className="nav-sign-in">Sign in</a>
                        <div className="arrow-holder">
                            <i className="arrow-down"></i>
                        </div>
                    </div>
                    <a href="/" className="cart"><AiOutlineShoppingCart /></a>
                </nav>
            </div>
        )
    }
}