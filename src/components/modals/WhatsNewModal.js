import React from "react";

export default class WhatsNewModal extends React.Component {
    render() {
        if (!this.props.show) {
            return null
        }
        return (
            <div className="modal-container">
                <div className="modal-overlay">
                    <div className="modal-body whats-new-modal">
                        <div className="whats-new-container">
                            <a className="whats-new-item modal-item" href="/">Explore What's New</a>
                            <a className="whats-new-item modal-item" href="/">#TargetStyle</a>
                            <a className="whats-new-item modal-item" href="/">Woman's New Arrivals</a>
                            <a className="whats-new-item modal-item" href="/">Beauty New Arrivals</a>
                            <a className="whats-new-item modal-item" href="/">Kids' New Arrivals</a>
                            <a className="whats-new-item modal-item" href="/">Baby New Arrivals</a>
                            <a className="whats-new-item modal-item" href="/">Men's New Arrivals</a>
                            <a className="whats-new-item modal-item" href="/">Home New Arrivals</a>
                            <a className="whats-new-item modal-item" href="/">Target Finds</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}