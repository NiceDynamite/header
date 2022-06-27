import React from "react";

export default class CategoriesModal extends React.Component {
    render() {
        if (!this.props.show) {
            return null
        }
        return (
            <div className="modal-container">
                <div className="modal-overlay">
                    <div className="modal-body categories-modal">
                        <div className="categories-container">
                            <h3 className="modal-title">All Categories</h3>
                            <a className="category-item modal-item" rel="noreferrer" href="https://www.target.com/c/black-owned-or-founded-brands-at-target/-/N-q8v16" target="_blank">Black-owned or founded brands at Target</a>
                            <a className="category-item modal-item" href="/">Grocery</a>
                            <a className="category-item modal-item" href="/">Clothing, Shoes & Accessories</a>
                            <a className="category-item modal-item" href="/">Pride</a>
                            <a className="category-item modal-item" href="/">Baby</a>
                            <a className="category-item modal-item" href="/">Home</a>
                            <a className="category-item modal-item" href="/">College</a>
                            <a className="category-item modal-item" href="/">Patio & Garden</a>
                            <a className="category-item modal-item" href="/">Furniture</a>
                            <a className="category-item modal-item" href="/">Kitchen & Dining</a>
                            <a className="category-item modal-item" href="/">Toys</a>
                            <a className="category-item modal-item" href="/">Electronics</a>
                            <a className="category-item modal-item" href="/">Video Games</a>
                            <a className="category-item modal-item" href="/">Movies, Music & Books</a>
                            <a className="category-item modal-item" href="/">Beauty</a>
                            <a className="category-item modal-item" href="/">Personal Care</a>
                            <a className="category-item modal-item" href="/">Health</a>
                            <a className="category-item modal-item" href="/">Pets</a>
                            <a className="category-item modal-item" href="/">Household Essentials</a>
                            <a className="category-item modal-item" href="/">Luggage</a>
                            <a className="category-item modal-item" href="/">School & Office Supplies</a>
                            <a className="category-item modal-item" href="/">Party Supplies</a>
                            <a className="category-item modal-item" href="/">Bullseye's Playground</a>
                            <a className="category-item modal-item" href="/">Gift Ideas</a>
                            <a className="category-item modal-item" href="/">Gift Cards</a>
                            <a className="category-item modal-item" href="/">Clearance</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}