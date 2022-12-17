import React from "react";

import "./TitleComponent.css";

function TitleComponent({ text }) {
    return (
        <div className="titleContainer">
            <h1 className="title">{text}</h1>
        </div>
    );
}

export default TitleComponent;
