import { MutableRefObject, RefObject } from "react";

export function BubbleSort(arr: number[], svgRef: RefObject<SVGSVGElement>) {
    const len = arr.length;
    let isSwapped = false;
    let svgChildren = null;
    if (svgRef.current) {
        svgChildren = svgRef.current.children as HTMLCollectionOf<SVGGElement>;
    }


    if (svgChildren) {
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - i; j++) {
                const rect = svgChildren[j].children as HTMLCollectionOf<SVGRectElement|SVGTextElement>;
                rect[0].style.fill = "blue";
                if (arr[j] > arr[j+1]) {
                    isSwapped = true;
                    [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                }
                break;
            }
            if (!isSwapped) {
                break;
            }
        }
    }
    console.log(arr);
}