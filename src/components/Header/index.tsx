import React, { FunctionComponent } from "react";
import { AlgorithmToggle } from "./AlgorithmToggle";
import { ArrayTypes } from "./ArrayTypes";
import { SizeSlider } from "./SizeSlider";
import { AnimationSlider } from "./AnimationSlider";
import { SortButton } from "./Sort";

export const Header: FunctionComponent = () => (
    <header style={{ maxWidth: "100%", overflowX: "auto" }}>
        <AlgorithmToggle />
        <ArrayTypes />
        <SizeSlider />
        <AnimationSlider />
        <SortButton />
    </header>
);
