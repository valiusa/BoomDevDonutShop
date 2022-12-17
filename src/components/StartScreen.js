import React from "react";
import ReactDOM from "react-dom/client";

// componets
import Donut from "./DonutComponent";
import MenuScreen from "./MenuScreen";
import TitleComponent from "./TitleComponent";

// assest
import true_blood from "./true_blood.svg";
import unicorn_dust from "./unicorn_dust.svg";
import sparkles from "./sparkles.svg";

// styles
import "./StartScreen.css";
import "./Button.css";

function StartScreen(app) {
    const the = "THE";
    const title = "DONUT SHOP";
    const altDonut = "donut";
    const altSparkles = "sparkles";

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
            <button className="button bnt-pos-ss" onClick={goToMenuScreen}>
                Start
            </button>
        </div>
    );
}

export default StartScreen;
