import React from "react";

// style
import "./Donut.css";

function Donut({ id, alt, path, w, h }) {
    return (
        <div id={id} className="donut-container">
            {/* TODO: put shadow */}
            {/* <div className="donut" width={w} height={250}></div> */}
            <img src={path} alt={alt} width={w} height={h} />
        </div>
    );
}

export default Donut;
