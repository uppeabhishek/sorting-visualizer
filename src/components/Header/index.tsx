import React, { FunctionComponent } from "react";
import { AlgorithmToggle } from "./AlgorithmToggle";
import { ArrayTypes } from "./ArrayTypes";
import { SizeSlider } from "./SizeSlider";
import { AnimationSlider } from "./AnimationSlider";
import { SortButton } from "./Sort";
// import { Controls } from "../Controls";

export const Header: FunctionComponent = () => (
    <header>
        <AlgorithmToggle />
        <ArrayTypes />
        <SizeSlider />
        <AnimationSlider />
        <SortButton />
        {/* <Controls /> */}
    </header>
);
