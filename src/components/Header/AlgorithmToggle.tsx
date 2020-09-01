import React, { FunctionComponent, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { changeDefaultAlgorithm } from "../../actions/globals";

export const AlgorithmToggle: FunctionComponent = () => {
    const algorithms = useRef([
        {
            minifiedName: "QUI",
            name: "Quick Sort"
        },
        {
            minifiedName: "MER",
            name: "Merge Sort"
        },
        {
            minifiedName: "BUB",
            name: "Bubble Sort"
        },
        {
            minifiedName: "SEL",
            name: "Selection Sort"
        },
        {
            minifiedName: "INS",
            name: "Insertion Sort"
        }
    ]);

    const defaultAlgorithm = useSelector((state: RootState) => state.globals.algorithm);
    const isSorting = useSelector((state: RootState) => state.globals.sort);

    const dispatch = useDispatch();

    return (
        <div
            key={defaultAlgorithm}
            className={isSorting ? "disabled algo-toggle d-flex" : "algo-toggle d-flex"}
        >
            {algorithms.current.map((algo: { name: string; minifiedName: string }) =>
                defaultAlgorithm === algo.name ? (
                    <div key={algo.name} className="selected" title={algo.name}>
                        {algo.name}
                    </div>
                ) : (
                    <div
                        key={algo.name}
                        title={algo.name}
                        onClick={() => dispatch(changeDefaultAlgorithm(algo.name))}
                    >
                        {algo.minifiedName}
                    </div>
                )
            )}
        </div>
    );
};
