import React from "react";

import PaymentScreen from "./PaymentScreen";

function MenuScreen({ app }) {
    const selectDonut = () => {
        app.render(
            <React.StrictMode>
                <PaymentScreen app={app} />
            </React.StrictMode>
        );
    };

    return (
        <div>
            <h1>Menu Screen</h1>
            <button onClick={selectDonut}>Donut</button>
        </div>
    );
}

export default MenuScreen;
