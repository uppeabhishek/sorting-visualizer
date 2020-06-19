import React, { FunctionComponent, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";

export const ArrayBlocks: FunctionComponent = () => {
    // Don't destructure as destructing will cause the whole object to rerender

    /*
     * Const algorithm = useSelector((state: RootState)=> state.globals.algorithm);
     * const animationSpeed = useSelector((state: RootState)=> state.globals.animationSpeed);
     */
    let arraySize = useSelector((state: RootState) => state.globals.arraySize);
    const arrayType = useSelector((state: RootState) => state.globals.arrayType);

    const divisor = useRef(2);

    const minElements = useRef(2);

    const minRange = useRef(1);

    const maxRange = useRef(100);

    function getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
    }

    function getRandomArrayElements() {
        const array: number[] = [];

        if (arraySize < minElements.current) {
            arraySize = minElements.current;
        }
        const size = Math.ceil(arraySize / divisor.current);

        for (let i = 0; i < size; i++) {
            array.push(getRandomInt(minRange.current, maxRange.current));
        }

        return array;
    }

    function arrayTypes(type: string) {
        const dict = {
            Randomize() {
                return getRandomArrayElements();
            },
            "Almost Sorted": function () {
                return getRandomArrayElements();
            },
            Increasing() {
                return getRandomArrayElements().sort(function (a, b) {
                    return a - b;
                });
            },
            Decreasing() {
                return getRandomArrayElements().sort(function (a, b) {
                    return b - a;
                });
            }
        };

        // @ts-ignore
        return dict[type]();
    }

    useEffect(() => {
        console.log(arrayTypes(arrayType));
    }, [arraySize]);

    useEffect(() => {
        console.log(arrayTypes(arrayType));
    }, [arrayType]);

    return <div>Hello</div>;
};
