import React from "react";
import Footer from "./components/Footer";
import CategoriesModal from "./components/modals/CategoriesModal";
import DealsModal from "./components/modals/DealsModal";
import Navbar from "./components/Navbar";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            CategoriesModal: false,
            DealsModal: false
        }
    }

    render() {

        const categoriesClicked = () => {
            this.setState({ CategoriesModal: !this.state.CategoriesModal, DealsModal: false })
        }

        const dealsClicked = () => {
            this.setState({ DealsModal: !this.state.DealsModal, CategoriesModal: false })
        }

        const props = {
            categoriesClicked,
            dealsClicked
        }

        const show = {
            categories: this.state.CategoriesModal,
            deals: this.state.DealsModal
        }

        return (
            <>
                <Navbar props={props} show={show} />
                <CategoriesModal show={this.state.CategoriesModal} />
                <DealsModal show={this.state.DealsModal} />
                <Footer />
            </>
        )
    }
}

export default App