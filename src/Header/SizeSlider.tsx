import React, { FunctionComponent } from "react";

export const SizeSlider: FunctionComponent = () => (
    <div>
        <input max="100" min="1" type="range" />
        <div>Change Array Size</div>
    </div>
);
