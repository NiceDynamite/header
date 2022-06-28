import React from "react";

export default class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    render() {

        const handleQuery = (e) => {
            e.preventDefault()
            this.props.query(this.state.value)
            this.setState({ value: '' })
        }

        const handleChange = (e) => {
            this.setState({ value: e.target.value })
        }

        return (
            <form onSubmit={handleQuery}>
                <input type="search"
                    value={this.state.value}
                    placeholder="Search"
                    onChange={handleChange}
                    autoComplete="off" />
            </form>
        )
    }
}