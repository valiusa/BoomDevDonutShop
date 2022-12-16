import React from "react";
//import { useNavigate } from "react-router-dom";

function StartScreen() {
    const goToMenuScreen = () => {
        console.log("menu");
    };

    return (
        <div>
            <button onClick={goToMenuScreen}>Start</button>
        </div>
    );
}

export default StartScreen;
