import React from "react";

import "./Start.css";
import donuts from "./donuts.png";

function StartComponent() {
    return (
        <div className="container-start">
            <div className="image-wrapper">
                <img alt="donuts" src={donuts} className="image" />
            </div>

            <div className="header-wrapper">
                <h1 className="the headings">THE</h1>
                <h1 className="headings">DONUT</h1>
                <h1 className="headings">SHOP</h1>
            </div>

            <div className="button-wrapper">
                <div className="btn btn-light btn-lg">Start</div>
            </div>
        </div>
    );
}

export default StartComponent;
