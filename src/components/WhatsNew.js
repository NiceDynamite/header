import React from "react";

export default class WhatsNew extends React.Component {
    render() {

        const isClicked = (e) => {
            e.preventDefault()
            document.getElementById('whatsNew').classList.toggle('clicked')
            document.getElementById('wad').classList.toggle('arrow-visible')
            this.props.handleClick()
        }

        return (
            <div id="whatsNew" className="nav-new-container nav-item" onClick={isClicked}>
                <a href="/" className="nav-new">What's New
                    <div className="arrow-holder">
                        <i id="wad" className="arrow"></i>
                    </div>
                </a>
            </div>
        )
    }
}