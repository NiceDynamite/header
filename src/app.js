import React from "react";
import CategoriesModal from "./components/modals/CategoriesModal";
import DealsModal from "./components/modals/DealsModal";
import PickupModal from "./components/modals/PickupModal";
import WhatsNewModal from "./components/modals/WhatsNewModal";
import Navbar from "./components/Navbar";


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            CategoriesModal: false,
            DealsModal: false,
            WhatsNewModal: false,
            PickupModal: false,
        }
    }

    render() {

        const queryItem = (value) => {
            fetch(`http://localhost:5001/api/item/${value}`)
                .then(result => result.json())
                .then((data) =>
                    localStorage.setItem('item_id', data.id)
                )
        }

        const categoriesClicked = () => {
            this.setState({ CategoriesModal: !this.state.CategoriesModal, DealsModal: false, WhatsNewModal: false, PickupModal: false })
        }

        const dealsClicked = () => {
            this.setState({ DealsModal: !this.state.DealsModal, CategoriesModal: false, WhatsNewModal: false, PickupModal: false })
        }

        const whatsNewClicked = () => {
            this.setState({ WhatsNewModal: !this.state.WhatsNewModal, DealsModal: false, CategoriesModal: false, PickupModal: false })
        }

        const pickupClicked = () => {
            this.setState({ PickupModal: !this.state.PickupModal, WhatsNewModal: false, DealsModal: false, CategoriesModal: false })
        }

        const props = {
            categoriesClicked,
            dealsClicked,
            whatsNewClicked,
            pickupClicked,
            queryItem
        }

        return (
            <>
                <Navbar props={props} />
                <CategoriesModal show={this.state.CategoriesModal} />
                <DealsModal show={this.state.DealsModal} />
                <WhatsNewModal show={this.state.WhatsNewModal} />
                <PickupModal show={this.state.PickupModal} />
            </>
        )
    }
}

export default App