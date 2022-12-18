import React from "react";

// components
import Donut from "./DonutComponent";
import PaymentScreen from "./PaymentScreen";
import TitleComponent from "./TitleComponent";

// assets
import true_blood from "../assets/true_blood.svg";
import unicorn_dust from "../assets/unicorn_dust.svg";
import sky_shaped from "../assets/sky_shaped.svg";
import marble_magic from "../assets/marble_magic.svg";

// styles
import "../styles/MenuScreen.css";
import "../styles/Shadow.css";

function MenuScreen({ app }) {
    const width = 90;
    const height = 90;
    const the = "THE";
    const title = "MENU";
    const altDonut = "donut";

    const selectDonut = (dPath) => {
        app.render(
            <React.StrictMode>
                <PaymentScreen app={app} donutPath={dPath} />
            </React.StrictMode>
        );
    };

    return (
        <div className="MenuScreen">
            <div className="donut-shadow ms-sp-shadow-props"></div>
            <div className="donut-shadow ms-mm-shadow-props"></div>
            <div className="donut-shadow ms-tb-shadow-props"></div>
            <div className="donut-shadow ms-ud-shadow-props"></div>

            <TitleComponent
                text={the}
                className={"theMS"}
                hClassName={"title theMS-1"}
            />
            <TitleComponent
                text={title}
                className={"titleContainerMS"}
                hClassName={"title"}
            />
            <div className="order-btn-container">
                <div
                    onClick={() => selectDonut(sky_shaped)}
                    className="order-btn"
                >
                    <div className="dont-names-container">
                        <p>SKY SHAPED</p>
                    </div>
                    <Donut
                        id={"ms4"}
                        alt={altDonut}
                        path={sky_shaped}
                        w={width}
                        h={height}
                        isRotating={true}
                    />
                </div>
                <div
                    onClick={() => selectDonut(marble_magic)}
                    className="order-btn"
                >
                    <div className="dont-names-container">
                        <p>MARBLE MAGIC</p>
                    </div>
                    <Donut
                        id={"ms3"}
                        alt={altDonut}
                        path={marble_magic}
                        w={width}
                        h={height}
                        isRotating={true}
                    />
                </div>
                <div
                    onClick={() => selectDonut(true_blood)}
                    className="order-btn"
                >
                    <div className="dont-names-container">
                        <p>TRUE BLOOD</p>
                    </div>
                    <Donut
                        id={"ms2"}
                        alt={altDonut}
                        path={true_blood}
                        w={width}
                        h={height}
                        isRotating={true}
                    />
                </div>
                <div
                    onClick={() => selectDonut(unicorn_dust)}
                    className="order-btn"
                >
                    <div className="dont-names-container">
                        <p>UNICORN DUST</p>
                    </div>
                    <Donut
                        id={"ms1"}
                        alt={altDonut}
                        path={unicorn_dust}
                        w={width}
                        h={height}
                        isRotating={true}
                    />
                </div>
            </div>
        </div>
    );
}

export default MenuScreen;
