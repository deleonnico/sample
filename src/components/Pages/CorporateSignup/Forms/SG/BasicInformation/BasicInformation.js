import React, { Component } from "react";
import "./BasicInformation.css";

import { Form, FormGroup, FormText, Label, Input } from "reactstrap";

class BasicInformation extends Component {
    render() {
        return (
            <Form className="basic-information">
                <FormGroup>
                    <h2>Welcome to UCC</h2>
                    <FormText color="muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo elit ut diam ornare elementum vel at dui. Aliquam euismod velit justo, et auctor tortor semper sed.
                    </FormText>
                </FormGroup>

                <div className="row">
                    <FormGroup className="col-6">
                        <Label>First Name *</Label>
                        <Input type="text" placeholder="Enter first name" />
                    </FormGroup>
                    <FormGroup className="col-6">
                        <Label>Last Name *</Label>
                        <Input type="text" placeholder="Enter last name" />
                    </FormGroup>
                </div>
                
                <div className="row">
                    <FormGroup className="col-6">
                        <Label>Work Email *</Label>
                        <Input type="email" placeholder="Enter work email" />
                    </FormGroup>
                    <FormGroup className="col-6">
                        <Label>Mobile Number *</Label>
                        <Input type="text" placeholder="+639123456789" />
                    </FormGroup>
                </div>

                <div className="row">
                    <div className="col-6">
                        <FormGroup>
                            <Label>Password *</Label>
                            <Input type="password" placeholder="Enter password" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Confirm Password *</Label>
                            <Input type="password" placeholder="Enter password again" />
                        </FormGroup>
                    </div>
                    <div className="mt-4 col-6">
                        <FormText color="muted">Password must contain:</FormText>
                        <FormText color="muted">8 characters or more</FormText>
                        <FormText color="muted">1 uppercase</FormText>
                        <FormText color="muted">1 lowercase</FormText>
                        <FormText color="muted">1 digit</FormText>
                    </div>
                </div>
            </Form>
        );
    }
}

export default BasicInformation;