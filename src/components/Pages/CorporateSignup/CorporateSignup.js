import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./CorporateSignup.css";

import CountrySelector from "./CountrySelector/CountrySelector";
import FormPH from "./Forms/FormPH";
import FormSG from "./Forms/FormSG";
import FormUS from "./Forms/FormUS";

class CorporateSignup extends Component {
    render() {
        return (
            <div className="corporate-signup">
                <BrowserRouter>
                    <Switch>
                        <Route path="/CorporateSignup" exact component={ CountrySelector } />
                        <Route path="/CorporateSignup/PH"    component={ FormPH } />
                        <Route path="/CorporateSignup/SG"    component={ FormSG } />
                        <Route path="/CorporateSignup/US"    component={ FormUS } />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default CorporateSignup;