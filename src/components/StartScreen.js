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

function StartScreen() {
    const the = "THE";
    const title = "DONUT SHOP";
    const altDonut = "donut";
    const altSparkles = "sparkles";

    const goToMenuScreen = () => {
        const app = ReactDOM.createRoot(document.querySelector(".App"));

        app.render(
            <React.StrictMode>
                <MenuScreen app={app} />
            </React.StrictMode>
        );
    };

    return (
        <div className="StartScreen">
            <Donut
                id={"d1"}
                alt={altDonut}
                path={unicorn_dust}
                w={255}
                h={240}
            />
            <Donut id={"d2"} alt={altDonut} path={true_blood} w={291} h={289} />
            <Donut
                id={"d3"}
                alt={altSparkles}
                path={sparkles}
                w={500}
                h={500}
            />
            <h1 className="title the">{the}</h1>
            <TitleComponent text={title} />
            <button className="button" onClick={goToMenuScreen}>
                Start
            </button>
        </div>
    );
}

export default StartScreen;
