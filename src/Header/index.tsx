import React, { FunctionComponent } from "react";
import { Theme } from "./Theme";
import { AlgorithmToggle } from "./AlgorithmToggle";

export const Header: FunctionComponent = () => (
    <header>
        <div>
            <h1>Sorting Visualizer</h1>
        </div>
        <AlgorithmToggle />
        <Theme />
    </header>
);
