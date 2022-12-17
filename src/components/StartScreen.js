import React from "react";
import ReactDOM from "react-dom/client";

import MenuScreen from "./MenuScreen";

function StartScreen() {
    const goToMenuScreen = () => {
        const app = ReactDOM.createRoot(document.querySelector(".App"));

        app.render(
            <React.StrictMode>
                <MenuScreen app={app} />
            </React.StrictMode>
        );
    };

    return (
        <div>
            <button onClick={goToMenuScreen}>Start</button>
        </div>
    );
}

export default StartScreen;
