import React from "react";

import "./TitleComponent.css";

function TitleComponent({ text, className }) {
    return (
        <div className={className}>
            <h1 className="title">{text}</h1>
        </div>
    );
}

export default TitleComponent;
