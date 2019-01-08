import React, { Component } from "react";
import "./Products.css";

import Slideshow from "./Slideshow/Slideshow";
import Product from "./Product";

class Products extends Component {
    render() {
        return (
            <div>
                <Slideshow />

                <div className="product-container">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        )
    }
}

export default Products;