import React, { Component } from "react";
import "./LoginForm.css";

import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";

class LoginForm extends Component {
    render () {
        return (
            <Form className="login-form">
                <FormGroup>
                    <Label>Email Address</Label>
                    <Input type="email" placeholder="Enter email address" />
                </FormGroup>
            
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" placeholder="Enter password" />
                    <FormText>
                        <a href="/">
                        Recover Password
                        </a>
                    </FormText>
                </FormGroup>

                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />
                        <FormText color="dark">Keep me logged in</FormText>
                    </Label>
                </FormGroup>

                <br />
                <Button color="primary" outline block href="/Welcome">Login</Button>

                <FormGroup className="sign-up">
                    <hr />
                    <FormText><a href="/UserSignup">User signup</a></FormText>
                    <FormText><a href="/CorporateSignup">Corporate signup</a></FormText>
                </FormGroup>
            </Form>
        )
    }
}

export default LoginForm;