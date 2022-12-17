import React from "react";

import "./TitleComponent.css";

function TitleComponent({ text, className, hClassName }) {
    return (
        <div className={className}>
            <h1 className={hClassName}>{text}</h1>
        </div>
    );
}

export default TitleComponent;
