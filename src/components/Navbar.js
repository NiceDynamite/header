import React from "react";
import Categories from "./Categories";
import Cart from "./Cart";
import Deals from "./Deals";
import WhatsNew from "./WhatsNew";
import Pickup from "./Pickup";
import SearchBar from "./SearchBar";
import SignIn from "./SignIn";
import TargetLogo from "./TargetLogo";

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="header-wrapper">
                <div className="primary-navbar-container container-fixed">
                    <div className="navbar-container">
                        <nav id="nav" className="primary-nav">
                            <TargetLogo />
                            <Categories handleClick={this.props.props.categoriesClicked} />
                            <Deals handleClick={this.props.props.dealsClicked} show={this.props.show.deals} />
                            <WhatsNew />
                            <Pickup />
                            <SearchBar />
                            <SignIn />
                            <Cart />
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}