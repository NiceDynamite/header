import React from "react";

export default class Categories extends React.Component {
    render() {

        const isClicked = (e) => {
            e.preventDefault()
            document.getElementById('categories').classList.toggle('clicked')
            document.getElementById('cad').classList.toggle('arrow-visible')
            this.props.handleClick()
        }

        return (
            <div id="categories" className="nav-categories-container nav-item" onClick={isClicked}>
                <a href="/" className="nav-categories">Categories
                    <div className="arrow-holder">
                        <i id="cad" className="arrow-modal"></i>
                    </div>
                </a>
            </div>
        )
    }
}