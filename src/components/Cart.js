import React from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai'

export default class Cart extends React.Component {
    render() {
        return (
            <a href="/" className="cart"><AiOutlineShoppingCart /></a>
        )
    }
}