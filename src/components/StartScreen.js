import React from "react";
import ReactDOM from "react-dom/client";

// componets
import Donut from "./DonutComponent";
import MenuScreen from "./MenuScreen";
import TitleComponent from "./TitleComponent";
import ButtonComponent from "./ButtonComponent";

// assest
import true_blood from "../assets/true_blood.svg";
import unicorn_dust from "../assets/unicorn_dust.svg";
import sparkles from "../assets/sparkles.svg";

// styles
import "../styles/StartScreen.css";
import "../styles/Shadow.css";

function StartScreen(app) {
    const the = "THE";
    const title = "DONUT SHOP";
    const altDonut = "donut";
    const altSparkles = "sparkles";
    const hasImage = false;

    const goToMenuScreen = () => {
        if (app.app == null) {
            app = new ReactDOM.createRoot(document.querySelector(".App"));

            app.render(
                <React.StrictMode>
                    <MenuScreen app={app} />
                </React.StrictMode>
            );
        } else {
            app.app.render(
                <React.StrictMode>
                    <MenuScreen app={app.app} />
                </React.StrictMode>
            );
        }
    };

    return (
        <div className="StartScreen">
            <div className="donut-shadow ss-ud-shadow-props"></div>
            <div className="donut-shadow ss-td-shadow-props"></div>
            <Donut
                id={"ss1"}
                alt={altDonut}
                path={unicorn_dust}
                w={255}
                h={240}
                isRotating={false}
            />
            <Donut
                id={"ss2"}
                alt={altDonut}
                path={true_blood}
                w={291}
                h={289}
                isRotating={false}
            />
            <Donut
                id={"ss3"}
                alt={altSparkles}
                path={sparkles}
                w={500}
                h={500}
                isRotating={false}
            />
            <TitleComponent
                text={the}
                className={"theSS"}
                hClassName={"title theSS-1"}
            />
            <TitleComponent
                text={title}
                className={"titleContainerSS"}
                hClassName={"title"}
            />
            <ButtonComponent
                btnFunc={goToMenuScreen}
                btnClass={"button bnt-pos-ss"}
                btnText={"Start"}
                imgProps={{ hasImage }}
            />
        </div>
    );
}

export default StartScreen;
