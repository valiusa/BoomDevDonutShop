import React from "react";

import StartScreen from "./StartScreen";

function ReadyScreen({ app, donutPath }) {
    const goToStart = () => {
        app.render(
            <React.StrictMode>
                <StartScreen />
            </React.StrictMode>
        );
    };

    return (
        <div>
            <h1>Ready Screen</h1>
            <button onClick={goToStart}>Done</button>
        </div>
    );
}

export default ReadyScreen;
