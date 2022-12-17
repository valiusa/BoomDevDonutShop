import React, { useState, useEffect } from "react";

import ReadyScreen from "./ReadyScreen";

function PreparationScreen({ app, donut }) {
    const [showReadyScreen, setShowReadyScreen] = useState(app);

    useEffect(() => {
        setInterval(() => {
            setShowReadyScreen((app) => {
                app.render(
                    <React.StrictMode>
                        <ReadyScreen app={app} />
                    </React.StrictMode>
                );
            });
        }, 5000);
    }, []);

    return (
        <div>
            <h1>Praparing...</h1>
        </div>
    );
}

export default PreparationScreen;
