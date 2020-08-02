import React, { FunctionComponent } from "react";
import { AlgorithmToggle } from "./AlgorithmToggle";
import { ArrayTypes } from "./ArrayTypes";
import { SizeSlider } from "./SizeSlider";
import { AnimationSlider } from "./AnimationSlider";
import { SortButton } from "./Sort";

// Import { Controls } from "../Controls";

export const Header: FunctionComponent = () => (
    <header>
        <div className="title" onClick={() => window.location.reload()}>
            Sorting Visualizer
        </div>
        <AlgorithmToggle />
        <ArrayTypes />
        <SizeSlider />
        <AnimationSlider />
        <SortButton />
        {/* <Controls /> */}
    </header>
);
