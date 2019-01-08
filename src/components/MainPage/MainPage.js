import React, { Component } from "react";

import Slideshow from "./Slideshow/Slideshow";
import LoginForm from "./LoginForm/LoginForm";

class MainPage extends Component {
    render() {
        return (
            <div className="main-page row mt-5 mx-5">
                <div className="col-8">
                    <Slideshow />
                </div>
                <div className="col-4">
                    <LoginForm />
                </div>
            </div>
        )
    }
}

export default MainPage;