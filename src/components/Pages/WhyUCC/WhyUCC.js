import React, { Component } from "react";
import "./WhyUCC.css";

import Slideshow from "./Slideshow/Slideshow";

class WhyUCC extends Component {
    render() {
        return (
            <div>
                <Slideshow />
                <div className="main-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo elit ut diam ornare elementum vel at dui. Aliquam euismod velit justo, et auctor tortor semper sed. Maecenas porttitor tortor ac turpis pharetra, non facilisis urna fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum laoreet nisi et urna volutpat, in venenatis tellus efficitur. Sed pretium cursus scelerisque. Etiam a lectus vel diam condimentum accumsan. Vivamus fermentum orci eget felis vulputate, ac maximus erat ultricies. Nam eu sem non leo congue laoreet eu id erat. Nullam sollicitudin est ac dictum commodo. Sed auctor vestibulum vestibulum. Sed viverra est quis posuere viverra. Vestibulum eleifend at nulla in porta.</p>

                <p>Nullam luctus posuere sem, id cursus arcu elementum non. Sed ipsum risus, vestibulum pellentesque diam sit amet, viverra auctor mi. Ut eu pharetra est, sed congue elit. Praesent felis risus, vulputate eget sem non, luctus maximus nisl. Sed porta, mi ullamcorper finibus tincidunt, purus ex lobortis nunc, nec convallis dolor augue ut erat. Duis vitae purus feugiat, lacinia nunc eu, imperdiet quam. Nunc bibendum ultricies luctus. Aenean et justo nec lectus luctus porta in id neque. Ut ultrices sodales dolor, quis euismod elit dignissim id. Donec sem sapien, ultricies at consectetur at, fermentum ut urna. Ut hendrerit nibh vel suscipit tristique.</p>
                </div>
            </div>
        )
    }
}

export default WhyUCC;