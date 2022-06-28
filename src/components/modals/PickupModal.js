import React from "react";

export default class PickupModal extends React.Component {
    render() {
        if (!this.props.show) {
            return null
        }
        return (
            <div className="modal-container">
                <div className="modal-overlay">
                    <div className="modal-body pickup-modal">
                        <div className="pickup-container">
                            <a className="whats-new-item modal-item" href="/">Order Pickup</a>
                            <a className="whats-new-item modal-item" href="/">Same Day Delivery</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}