import React from "react";

// styles
import "../styles/Donut.css";

function Donut({ id, alt, path, w, h, isRotating }) {
    return (
        <div id={id} className="donut-container">
            <img
                src={path}
                alt={alt}
                width={w}
                height={h}
                className={isRotating ? "donut-rotate" : ""}
            />
        </div>
    );
}

export default Donut;
