import React from "react";
import Navbar from "./components/Navbar";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            super: 'fun'
        }
    }

    render() {
        return (
            <Navbar />
        )
    }
}

export default App