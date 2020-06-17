import React, { FunctionComponent } from "react";

export const ArrayTypes: FunctionComponent = () => {
    const types = ["Randomize", "Almost Sorted", "Increasing", "Decreasing"];

    return (
        <select>
            {types.map((type) => (
                <option key={type}>{type}</option>
            ))}
        </select>
    );
};
