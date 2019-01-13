import React, { Component } from "react";
import "./NavigationBar.css";

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from "reactstrap";

class NavigationBar extends Component {
  render() {
    return (
        <Navbar className="shadow" expand="sm">
            <NavbarBrand className="mx-5" href="/">LOGO | NAME</NavbarBrand>

            <Nav className="ml-auto mx-5" navbar>
                <NavItem className="mx-4">
                <NavLink href="/WhyUCC">Why UCC?</NavLink>
                </NavItem>

                <UncontrolledDropdown className="mx-4" nav inNavbar>
                <DropdownToggle href="/Products" nav caret>
                    Products
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem href="/Products/#Product1">
                        Product 1
                    </DropdownItem>
                    <DropdownItem href="/Products/#Product2">
                        Product 2
                    </DropdownItem>
                    <DropdownItem href="/Products/#Product3">
                        Product 3
                    </DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown className="mx-4" nav inNavbar>
                <DropdownToggle href="/Pricing" nav caret>
                    Pricing
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem href="/Pricing/#Pricing1">
                        Pricing 1
                    </DropdownItem>
                    <DropdownItem href="/Pricing/#Pricing2">
                        Pricing 2
                    </DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown className="mx-4" nav inNavbar>
                <DropdownToggle href="/Account" nav caret>
                    Account
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem href="/Account/#Settings">
                        Settings
                    </DropdownItem>
                    <DropdownItem href="/Account/#Help">
                        Help
                    </DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        </Navbar>
    );
  }
}

export default NavigationBar;
