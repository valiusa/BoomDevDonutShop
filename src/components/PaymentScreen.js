import React from "react";

// components
import PreparationScreen from "./PreparationScreen";
import TitleComponent from "./TitleComponent";
import Donut from "./DonutComponent";

// assets
import sky_shaped from "./sky_shaped.svg";
import unicorn_dust from "./unicorn_dust.svg";
import google_pay from "./google-pay.png";
import apple_pay from "./apple-pay.png";

// styles
import "./PaymentScreen.css";
import "./Button.css";

function PaymentScreen({ app, donutPath }) {
    const you_can = "You can";
    const pay_us = "PAY US";
    const now = "NOW";
    const altDonut = "donut";

    const pay = () => {
        app.render(
            <React.StrictMode>
                <PreparationScreen app={app} donut={donutPath} />
            </React.StrictMode>
        );
    };

    return (
        <div className="PaymentScreen">
            <div className="ps-title-container">
                <TitleComponent
                    text={you_can}
                    className={"ps-title-1"}
                    hClassName={"title ps-title-h-1"}
                />
                <TitleComponent
                    text={pay_us}
                    className={"ps-title-2"}
                    hClassName={"title ps-title-h-2"}
                />
                <TitleComponent
                    text={now}
                    className={"ps-title-3"}
                    hClassName={"title"}
                />
            </div>
            <Donut
                id={"ps1"}
                alt={altDonut}
                path={sky_shaped}
                w={234}
                h={230}
                isRotating={false}
            />
            <Donut
                id={"ps2"}
                alt={altDonut}
                path={unicorn_dust}
                w={274}
                h={286}
                isRotating={false}
            />
            <div className="ps-btn-container">
                <button className="button ps-margin" onClick={pay}>
                    <img
                        alt="apple pay"
                        src={apple_pay}
                        className="g-pay"
                    ></img>
                </button>
                <button className="button" onClick={pay}>
                    <img
                        alt="google pay"
                        src={google_pay}
                        className="g-pay"
                    ></img>
                </button>
            </div>
        </div>
    );
}

export default PaymentScreen;
