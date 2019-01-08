import React, { Component } from "react";

import { Table } from "reactstrap";

class Product extends Component {
    render() {
        return (
            <Table bordered>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Item Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </td>
                        <td>
                        Nullam luctus posuere sem, id cursus arcu elementum non. Sed ipsum risus, vestibulum pellentesque diam sit amet, viverra auctor mi. Ut eu pharetra est, sed congue elit. Praesent felis risus, vulputate eget sem non, luctus maximus nisl.
                        </td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}

export default Product;