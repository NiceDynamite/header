import React from "react";

export default class Deals extends React.Component {
    render() {
        const isClicked = (e) => {
            e.preventDefault()
            document.getElementById('deals').classList.toggle('clicked')
            document.getElementById('dad').classList.toggle('arrow-visible')
            this.props.handleClick()
        }
        return (
            <div id="deals" className="nav-deals-container nav-item" onClick={isClicked}>
                <a href="/" className="nav-deals">Deals
                    <div className="arrow-holder">
                        <i id="dad" className="arrow-modal"></i>
                    </div>
                </a>
            </div>
        )
    }
}