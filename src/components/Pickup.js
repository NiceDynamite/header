import React from "react";

export default class Pickup extends React.Component {
    render() {

        const isClicked = (e) => {
            e.preventDefault()
            document.getElementById('pickup').classList.toggle('clicked')
            document.getElementById('pad').classList.toggle('arrow-visible')
            this.props.handleClick()
        }

        return (
            <div id="pickup" className="nav-pickup-container nav-item" onClick={isClicked}>
                <a href="/" className="nav-pickup">Pickup & Delivery
                    <div className="arrow-holder">
                        <i id="pad" className="arrow-modal"></i>
                    </div>
                </a>
            </div >
        )
    }
}