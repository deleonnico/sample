import React, { Component } from "react";
import "./UserSignup.css";

import { Form, FormGroup, FormText, Label, Input, Button } from "reactstrap";

class UserSignup extends Component {
    render() {
        return (
            <Form className="user-signup">
                <FormGroup>
                    <h2>User Signup</h2>
                    <FormText color="muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </FormText>
                </FormGroup>

                <div>
                    <FormGroup>
                        <Label>Username *</Label>
                        <Input type="text" placeholder="Enter username" />
                    </FormGroup>
                </div>
                
                <div>
                    <FormGroup>
                        <Label>Email Address *</Label>
                        <Input type="email" placeholder="Enter email address" />
                    </FormGroup>
                </div>

                <div>
                    <FormGroup>
                        <Label>Password *</Label>
                        <Input type="password" placeholder="Enter password" />
                    </FormGroup>
                </div>
                <div>
                    <FormGroup>
                        <Label>Confirm Password *</Label>
                        <Input type="password" placeholder="Enter password again" />
                    </FormGroup>
                </div>

                <div>
                    <FormGroup>
                        <Label>Security Question *</Label>
                        <Input type="select">
                            <option>Question 1</option>
                            <option>Question 2</option>
                            <option>Question 3</option>
                            <option>Question 4</option>
                        </Input>
                    </FormGroup>
                </div>

                <div>
                    <FormGroup>
                        <Label>Answer *</Label>
                        <Input type="text" placeholder="Security question answer" />
                    </FormGroup>
                </div>

                <div>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" />
                            <FormText color="muted">I have read and agree to the <a href="/TermsAndConditions" target="_blank">Terms of this Service</a> and <a href="/TermsAndConditions" target="_blank">Privacy Policy</a></FormText>
                        </Label>
                    </FormGroup>
                </div>

                <div>
                    <FormText>* Fields required</FormText>
                    <Button className="float-right" color="primary" outline href="/Success">Submit</Button>
                </div>
            </Form>
        );
    }
}

export default UserSignup;