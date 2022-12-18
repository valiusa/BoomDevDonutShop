import React from "react";

// components
import Donut from "./DonutComponent";
import StartScreen from "./StartScreen";
import TitleComponent from "./TitleComponent";
import ButtonComponent from "./ButtonComponent";

// styles
import "../styles/ReadyScreen.css";
import "../styles/Shadow.css";

function ReadyScreen({ app, donutPath }) {
    const altDonut = "donut";
    const firstTitle = "You can now come";
    const secondTitle = "and pick up";
    const thirdTitle = "your amzaing Donut!";
    const hasImage = false;

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
            <div className="donut-shadow rs-donut-shadow-props"></div>
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
            <ButtonComponent
                btnFunc={goToStart}
                btnClass={"button bnt-pos-rs"}
                btnText={"Done"}
                imgProps={{ hasImage }}
            />
        </div>
    );
}

export default ReadyScreen;
