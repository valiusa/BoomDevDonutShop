import React, { useState, useEffect } from "react";

// components
import ReadyScreen from "./ReadyScreen";
import TitleComponent from "./TitleComponent";
import Donut from "./DonutComponent";

// assets
import sparkles from "./sparkles.svg";

// styles
import "./PreparationScreen.css";

function PreparationScreen({ app, donut }) {
    const title = "Preparing...";
    const altDonut = "donut";
    const altSparkles = "sparkles";
    const props = { app: app, donut: donut };

    const [showReadyScreen, setShowReadyScreen] = useState(props);

    useEffect(() => {
        setInterval(() => {
            setShowReadyScreen((props) => {
                app.render(
                    <React.StrictMode>
                        <ReadyScreen app={props.app} donutPath={props.donut} />
                    </React.StrictMode>
                );
            });
        }, 5000);
    }, []);

    return (
        <div className="PreparationScreen">
            <Donut
                id={"prs-2"}
                alt={altSparkles}
                path={sparkles}
                w={500}
                h={500}
                isRotating={false}
            />
            <Donut
                id={"prs-1"}
                alt={altDonut}
                path={donut}
                w={291}
                h={289}
                isRotating={true}
            />
            <TitleComponent
                text={title}
                className={"title-container-prs"}
                hClassName={"title prs-title-h"}
            />
        </div>
    );
}

export default PreparationScreen;
