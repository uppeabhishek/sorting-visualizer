import React, { FunctionComponent } from "react";

export const AnimationSlider: FunctionComponent = () => (
    <div className="d-flex flex-column justify-center align-center">
        <div className="d-flex justify-center align-center">
            <div>Slow</div>
            <input max="100" min="1" type="range" />
            <div>Fast</div>
        </div>
        <div>Animation Speed</div>
    </div>
);
