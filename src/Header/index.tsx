import React, { FunctionComponent } from "react";
import { Theme } from "./Theme";
import { AlgorithmToggle } from "./AlgorithmToggle";
import { ArrayTypes } from "./ArrayTypes";
import { SizeSlider } from "./SizeSlider";
import { AnimationSlider } from "./AnimationSlider";
import { SortButton } from "./Sort";
import { GenerateArrayButton } from "./GenerateArrayButton";

export const Header: FunctionComponent = () => (
    <header>
        <AlgorithmToggle />
        <ArrayTypes />
        <GenerateArrayButton />
        <SizeSlider />
        <AnimationSlider />
        <SortButton />
        <Theme />
    </header>
);
