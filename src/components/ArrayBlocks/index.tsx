import React, { FunctionComponent, useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { useWindowSize } from "../../hooks/useWindowSize";

export const ArrayBlocks: FunctionComponent = () => {
    // Don't destructure as destructing will cause the whole object to rerender

    /*
     * Const algorithm = useSelector((state: RootState)=> state.globals.algorithm);
     * const animationSpeed = useSelector((state: RootState)=> state.globals.animationSpeed);
     */
    let arraySize = useSelector((state: RootState) => state.globals.arraySize);
    const arrayType = useSelector((state: RootState) => state.globals.arrayType);

    const [arrayElements, setArrayElements] = useState([]);

    const divisor = useRef(2);

    const minElements = useRef(2);

    const minRange = useRef(1);

    const maxRange = useRef(100);

    const [remainingHeightWidth, setRemainingHeightWidth] = useState([0, 0]);

    function getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
    }

    function getRandomArrayElements() {
        const array: number[] = [];

        const { current } = minElements;

        if (arraySize < current) {
            arraySize = current;
        }
        const size = Math.ceil(arraySize / divisor.current);

        for (let i = 0; i < size; i++) {
            array.push(getRandomInt(minRange.current, maxRange.current));
        }

        return array;
    }

    function arrayTypes(type: string) {
        const dict = {
            "Almost Sorted": function () {
                return getRandomArrayElements();
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

    const paddingLeftRight = useRef(80);

    const paddingTopBottom = useRef(40);

    const len = arrayElements.length;

    // Subtract top and bottom margin
    const height = remainingHeightWidth[0] - paddingTopBottom.current * 2;

    // Subtract left and right margin
    const width = remainingHeightWidth[1] - paddingLeftRight.current * 2;

    const eachElementWidth = width / len;

    const [innerWidth, innerHeight] = useWindowSize();

    useEffect(() => {
        const header = document.querySelector("header");

        if (header) {
            setRemainingHeightWidth([innerHeight - header.offsetHeight, innerWidth]);
        }
    }, [innerWidth, innerHeight]);

    useEffect(() => {
        const header = document.querySelector("header");
        const body = document.querySelector("body");

        if (header && body) {
            setRemainingHeightWidth([innerHeight - header.offsetHeight, innerWidth]);
        }
    }, []);

    return remainingHeightWidth[0] !== 0 ? (
        <svg
            height={height}
            style={{
                paddingBottom: paddingTopBottom.current,
                paddingLeft: paddingLeftRight.current,
                paddingRight: paddingLeftRight.current,
                paddingTop: paddingTopBottom.current
            }}
            width={width}
            xmlns="http://www.w3.org/2000/svg"
        >
            {arrayElements.map((eachElement: number, index: number) => {
                const eachElementHeight = (eachElement * height) / maxRange.current;

                return (
                    <g key={index}>
                        <rect
                            height={eachElementHeight}
                            style={{
                                fill: "blue",
                                fillOpacity: 0.1,
                                stroke: "pink",
                                strokeOpacity: 0.9,
                                strokeWidth: 5
                            }}
                            width={eachElementWidth}
                            x={index * eachElementWidth}
                            y={height - eachElementHeight}
                        />
                        <text
                            style={{ fill: "white" }}
                            x={index * eachElementWidth + eachElementWidth / 2}
                            y={height - eachElementHeight + 50}
                        >
                            {eachElement}
                        </text>
                    </g>
                );
            })}
        </svg>
    ) : (
        <div />
    );
};
