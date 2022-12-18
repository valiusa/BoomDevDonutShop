import React from "react";

// components
import PreparationScreen from "./PreparationScreen";
import ButtonComponent from "./ButtonComponent";
import TitleComponent from "./TitleComponent";
import Donut from "./DonutComponent";

// assets
import sky_shaped from "../assets/sky_shaped.svg";
import unicorn_dust from "../assets/unicorn_dust.svg";
import google_pay from "../assets/google-pay.png";
import apple_pay from "../assets/apple-pay.png";

// styles
import "../styles/PaymentScreen.css";
import "../styles/Shadow.css";

function PaymentScreen({ app, donutPath }) {
    const you_can = "You can";
    const pay_us = "PAY US";
    const now = "NOW";
    const altDonut = "donut";

    const apple = {
        hasImage: true,
        alt: "apple pay",
        path: apple_pay,
        imgClassName: "pay",
    };

    const google = {
        hasImage: true,
        alt: "google pay",
        path: google_pay,
        imgClassName: "pay",
    };

    const pay = () => {
        app.render(
            <React.StrictMode>
                <PreparationScreen app={app} donut={donutPath} />
            </React.StrictMode>
        );
    };

    return (
        <div className="PaymentScreen">
            <div className="donut-shadow ps-ud-shadow-props"></div>
            <div className="donut-shadow ps-ss-shadow-props"></div>
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
                <ButtonComponent
                    btnFunc={pay}
                    btnClass={"button ps-margin"}
                    btnText={""}
                    imgProps={apple}
                />
                <ButtonComponent
                    btnFunc={pay}
                    btnClass={"button"}
                    btnText={""}
                    imgProps={google}
                />
            </div>
        </div>
    );
}

export default PaymentScreen;
