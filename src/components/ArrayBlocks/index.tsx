import React, { FunctionComponent, useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { useWindowSize } from "../../hooks/useWindowSize";
import { BubbleSort } from "../../algorithms/BubbleSort";
import { SelectionSort } from "../../algorithms/SelectionSort";
import {
    getRandom,
    shuffle,
    arrayItemOriginalColor,
    fillColor,
    arrayItemSortedColor
} from "../../commonUtilities";

import { sortAlgorithm } from "../../actions/globals";
import { InsertionSort } from "../../algorithms/InsertionSort";
import { MergeSort } from "../../algorithms/MergeSort";
import { QuickSort } from "../../algorithms/QuickSort";
import { Snackbar } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

export const ArrayBlocks: FunctionComponent = () => {
    let arraySize = useSelector((state: RootState) => state.globals.arraySize);
    const arrayType = useSelector((state: RootState) => state.globals.arrayType);

    const [arrayElements, setArrayElements] = useState([]);

    const divisor = useRef(2);

    const minElements = useRef(2);

    const minRange = useRef(1);

    const maxRange = useRef(100);

    const [remainingHeightWidth, setRemainingHeightWidth] = useState([0, 0]);

    function getRandomArrayElements() {
        const array: number[] = [];

        const { current } = minElements;

        if (arraySize < current) {
            arraySize = current;
        }
        const size = Math.ceil(arraySize / divisor.current);

        for (let i = 0; i < size; i++) {
            array.push(getRandom(minRange.current, maxRange.current));
        }

        return array;
    }

    function almostSortElements(si: number, ei: number, sortedElements: Array<number>) {
        let temp = [];

        for (let i = si; i < ei; i++) {
            temp.push(sortedElements[i]);
        }

        temp = shuffle(temp);

        let index = 0;

        for (let i = si; i < ei; i++) {
            sortedElements[i] = temp[index++];
        }
    }

    function arrayTypes(type: string) {
        const dict = {
            "Almost Sorted": function () {
                let sortedElements;

                if (getRandom(0, 1) === 0) {
                    sortedElements = getRandomArrayElements().sort(function (a, b) {
                        return a - b;
                    });
                } else {
                    sortedElements = getRandomArrayElements().sort(function (a, b) {
                        return b - a;
                    });
                }

                almostSortElements(0, Math.floor(sortedElements.length / 6), sortedElements);

                almostSortElements(
                    Math.ceil(sortedElements.length / 1.25),
                    sortedElements.length,
                    sortedElements
                );

                return sortedElements;
            },
            Decreasing() {
                return getRandomArrayElements().sort(function (a, b) {
                    return b - a;
                });
            },
            Increasing() {
                return getRandomArrayElements().sort(function (a, b) {
                    return a - b;
                });
            },
            Randomize() {
                return getRandomArrayElements();
            }
        };

        // @ts-ignore
        return dict[type]();
    }

    useEffect(() => {
        setArrayElements(arrayTypes(arrayType));
    }, [arraySize]);

    useEffect(() => {
        setArrayElements(arrayTypes(arrayType));
    }, [arrayType]);

    const marginLeftRight = useRef(20);

    const marginTopBottom = useRef(20);

    const len = arrayElements.length;

    // Subtract top and bottom margin
    const height = remainingHeightWidth[0] - marginTopBottom.current * 2;

    // Subtract left and right margin
    const width = remainingHeightWidth[1] - marginLeftRight.current * 2;

    const eachElementWidth = width / len;

    const [innerWidth, innerHeight] = useWindowSize();

    useEffect(() => {
        const item = document.querySelector(".svg-block") as HTMLElement;

        if (item) {
            setRemainingHeightWidth([item.clientHeight, item.clientWidth]);
        }
    }, [innerWidth, innerHeight]);

    useEffect(() => {
        const item = document.querySelector(".svg-block") as HTMLElement;

        if (item) {
            setRemainingHeightWidth([item.clientHeight, item.clientWidth]);
        }
    }, []);

    const svgRef = useRef<SVGSVGElement>(null);

    const isSorting = useSelector((state: RootState) => state.globals.sort);

    const dispatch = useDispatch();

    let animationSpeed = useSelector((state: RootState) => state.globals.animationSpeed);

    // As animationSpeed increase decrease its value because slow ---> fast
    animationSpeed = 7 * (100 - animationSpeed);

    const defaultAlgorithm = useSelector((state: RootState) => state.globals.algorithm);

    const [isSnackBarOpen, toggleSnackBar] = useState(false);

    function Alert(props: AlertProps) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    function afterSorting(): void {
        // @ts-ignore
        let svgChildren: HTMLCollectionOf<SVGGElement> = null;

        if (svgRef.current) {
            svgChildren = svgRef.current.children as HTMLCollectionOf<SVGGElement>;
        }

        for (let i = 0; i < svgChildren.length; i++) {
            fillColor(svgChildren, i, arrayItemSortedColor);
        }

        setTimeout(() => {
            toggleSnackBar(true);
            dispatch(sortAlgorithm(false));
        }, 1000);
    }

    useEffect(() => {
        if (isSorting && svgRef) {
            // @ts-ignore
            let svgChildren: HTMLCollectionOf<SVGGElement> = null;

            if (svgRef.current) {
                svgChildren = svgRef.current.children as HTMLCollectionOf<SVGGElement>;
            }

            switch (defaultAlgorithm) {
                case "Bubble Sort":
                    BubbleSort(arrayElements, svgChildren, animationSpeed).then((ele) => {
                        if (ele) {
                            afterSorting();
                        }
                    });
                    break;
                case "Selection Sort":
                    SelectionSort(arrayElements, svgChildren, animationSpeed).then((ele) => {
                        if (ele) {
                            afterSorting();
                        }
                    });
                    break;
                case "Insertion Sort":
                    InsertionSort(arrayElements, svgChildren, animationSpeed).then((ele) => {
                        if (ele) {
                            afterSorting();
                        }
                    });
                    break;
                case "Merge Sort":
                    QuickSort(arrayElements, svgChildren, animationSpeed).then((ele) => {
                        if (ele) {
                            afterSorting();
                        }
                    });
                    break;
                case "Quick Sort":
                    QuickSort(arrayElements, svgChildren, animationSpeed).then((ele) => {
                        if (ele) {
                            afterSorting();
                        }
                    });
                    break;
                default:
                    break;
            }
        }
    }, [isSorting]);

    return (
        <div
            className="svg-block"
            style={{
                marginTop: marginTopBottom.current,
                marginBottom: marginTopBottom.current,
                marginLeft: marginLeftRight.current,
                marginRight: marginLeftRight.current
            }}
        >
            <Snackbar
                open={isSnackBarOpen}
                autoHideDuration={2000}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                onClose={() => toggleSnackBar(false)}
            >
                <Alert onClose={() => toggleSnackBar(false)} severity="success">
                    Sorting Completed
                </Alert>
            </Snackbar>
            <svg
                key={defaultAlgorithm.toString() + isSorting}
                ref={svgRef}
                height="100%"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
            >
                {arrayElements.map((eachElement: number, index: number) => {
                    const eachElementHeight = (eachElement * height) / maxRange.current;

                    return (
                        <g
                            key={
                                (index * eachElementWidth).toString() +
                                (height - eachElementHeight).toString()
                            }
                            transform={`translate(${index * eachElementWidth} ${
                                height - eachElementHeight
                            })`}
                        >
                            <rect
                                height={eachElementHeight}
                                style={{
                                    fill: arrayItemOriginalColor,
                                    stroke: "pink",
                                    strokeOpacity: 0.9,
                                    strokeWidth: 2
                                }}
                                width={eachElementWidth}
                            />
                            <text
                                alignmentBaseline="central"
                                style={{ fill: "white" }}
                                textAnchor="middle"
                                x={eachElementWidth / 2}
                                y={eachElementHeight / 2}
                            >
                                {eachElementWidth > 23 ? eachElement : ""}
                            </text>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
};
