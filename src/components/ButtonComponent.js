import React from "react";

// styles
import "../styles/Button.css";

function Button(props) {
    return (
        <div>
            <button className={props.btnClass} onClick={props.btnFunc}>
                {props.imgProps.hasImage ? (
                    <img
                        alt={props.imgProps.alt}
                        src={props.imgProps.path}
                        className={props.imgProps.imgClassName}
                    ></img>
                ) : (
                    props.btnText
                )}
            </button>
        </div>
    );
}

export default Button;
