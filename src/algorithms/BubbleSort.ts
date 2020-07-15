import { RefObject } from "react";

export function BubbleSort(arr: number[], svgRef: RefObject<SVGSVGElement>) {
    const len = arr.length;

    /*
     * Let isSwapped = false;
     */

    // @ts-ignore
    let svgChildren: HTMLCollectionOf<SVGGElement> = null;

    if (svgRef.current) {
        svgChildren = svgRef.current.children as HTMLCollectionOf<SVGGElement>;
    }

    const timeout = 900;

    const numberOfSwaps = 3;

    const eachSwapTime = timeout / numberOfSwaps;

    if (svgChildren) {
        for (let i = 0; i < len; i++) {
            setTimeout(() => {
                for (let j = 0; j < len - i - 1; j++) {
                    setTimeout(() => { 
                        const rect1 = svgChildren[j].children as HTMLCollectionOf<
                            SVGRectElement | SVGTextElement
                        >;
                        const rect2 = svgChildren[j + 1].children as HTMLCollectionOf<
                            SVGRectElement | SVGTextElement
                        >;

                        const firstRect = rect1[0];
                        const secondRect = rect2[0];

                        const prevFilled1 = firstRect.style.fill;
                        const prevFilled2 = secondRect.style.fill;

                        // Indicate these cells are currently being sorted
                        firstRect.style.fill = "blue";
                        secondRect.style.fill = "blue";

                        setTimeout(function() {
                            if (arr[j] > arr[j + 1]) {
                                // If they are not in correct position
                                firstRect.style.fill = "red";
                                secondRect.style.fill = "red";

                                setTimeout(() => {
                                    // IsSwapped = true;
                                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

                                    // Swap SVG Elements;
                                    const { parentNode } = svgChildren[j + 1];

                                    if (parentNode) {
                                        parentNode.insertBefore(svgChildren[j + 1], svgChildren[j]);
                                    }

                                    const first = svgChildren[j].transform.baseVal.getItem(0);
                                    let firstX = 0;
                                    let firstY = 0;
                                    
                                    if (first.type === SVGTransform.SVG_TRANSFORM_TRANSLATE) {
                                        firstX = first.matrix.e;
                                        firstY = first.matrix.f;
                                    }

                                    const second = svgChildren[j + 1].transform.baseVal.getItem(0);
                                    let secondX = 0;
                                    let secondY = 0;

                                    if (second.type === SVGTransform.SVG_TRANSFORM_TRANSLATE) {
                                        secondX = second.matrix.e;
                                        secondY = second.matrix.f;
                                    }

                                    svgChildren[j + 1].transform.baseVal
                                        .getItem(0)
                                        .setTranslate(firstX, secondY);
                                    svgChildren[j].transform.baseVal
                                        .getItem(0)
                                        .setTranslate(secondX, firstY);

                                }, eachSwapTime);
                            } else {
                                // If elements are in correct position
                                setTimeout(() => {
                                    firstRect.style.fill = "green";
                                    secondRect.style.fill = "green";
                                }, eachSwapTime);
                            }
                            firstRect.style.fill = prevFilled1;
                            secondRect.style.fill = prevFilled2;
                        }, eachSwapTime);

                    }, j * timeout);
                }
            }, (i) * timeout * (len - i));
        }
    }
}
