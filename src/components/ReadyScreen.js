import React from "react";

// components
import StartScreen from "./StartScreen";
import Donut from "./DonutComponent";
import TitleComponent from "./TitleComponent";

// styles
import "./ReadyScreen.css";

function ReadyScreen({ app, donutPath }) {
    const altDonut = "donut";
    const firstTitle = "You can now come";
    const secondTitle = "and pick up";
    const thirdTitle = "your amzaing Donut!";

    const goToStart = () => {
        app.render(
            <React.StrictMode>
                <StartScreen app={app} />
            </React.StrictMode>
        );
    };

    return (
        <div className="ReadyScreen">
            <div className="bg"></div>
            <Donut
                id={"rs1"}
                alt={altDonut}
                path={donutPath}
                w={291}
                h={289}
                isRotating={false}
            />
            <TitleComponent
                text={firstTitle}
                className={"f-title"}
                hClassName={"title rs-title-h"}
            />
            <TitleComponent
                text={secondTitle}
                className={"s-title"}
                hClassName={"title rs-title-h"}
            />
            <TitleComponent
                text={thirdTitle}
                className={"t-title"}
                hClassName={"title rs-title-h"}
            />
            <button className="button bnt-pos-rs" onClick={goToStart}>
                Done
            </button>
        </div>
    );
}

export default ReadyScreen;
