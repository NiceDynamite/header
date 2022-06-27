import React from "react";

export default class DealsModal extends React.Component {
    render() {
        if (!this.props.show) {
            return null
        }
        return (
            <div className="modal-container">
                <div className="modal-overlay">
                    <div className="modal-body deals-modal">
                        <div className="deals-container">
                            <a className="deals-item modal-item" href="/">Top Deals</a>
                            <a className="deals-item modal-item" href="/">Target Circle Offers</a>
                            <a className="deals-item modal-item" href="/">Weekly Ad</a>
                            <a className="deals-item modal-item" href="/">Clearance</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}