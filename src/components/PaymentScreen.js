import React from "react";

import PreparationScreen from "./PreparationScreen";

function PaymentScreen({ app, donutPath }) {
    const pay = () => {
        app.render(
            <React.StrictMode>
                <PreparationScreen app={app} />
            </React.StrictMode>
        );
    };

    return (
        <div>
            <h1>Payment Screen</h1>
            <button onClick={pay}>Pay</button>
        </div>
    );
}

export default PaymentScreen;
