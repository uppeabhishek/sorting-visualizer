import { RefObject } from "react";
import {timer, arrayItemOriginalColor,arrayItemNotEqualColor,arrayItemCurrentPositionColor, arrayItemEqualColor,arrayItemSortedColor} from '../commonUtilities'

export async function BubbleSort(arr: number[], svgRef: RefObject<SVGSVGElement>, animationSpeed: number) {
    const len = arr.length;

    /*
     * Let isSwapped = false;
     */

    // @ts-ignore
    let svgChildren: HTMLCollectionOf<SVGGElement> = null;

    if (svgRef.current) {
        svgChildren = svgRef.current.children as HTMLCollectionOf<SVGGElement>;
    }

    const eachSwapTime = animationSpeed;
    
    async function sort() {
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - i - 1; j++) {
                const rect1 = svgChildren[j].children as HTMLCollectionOf<
                    SVGRectElement | SVGTextElement
                >;
                const rect2 = svgChildren[j + 1].children as HTMLCollectionOf<
                    SVGRectElement | SVGTextElement
                >;

                const firstRect = rect1[0];
                const secondRect = rect2[0];


                // Indicate these cells are currently being sorted
                firstRect.style.fill = arrayItemCurrentPositionColor;
                secondRect.style.fill = arrayItemCurrentPositionColor;
            
                await timer(eachSwapTime);

                if (arr[j] > arr[j + 1]) {
                    // If they are not in correct position
                    firstRect.style.fill = arrayItemNotEqualColor;
                    secondRect.style.fill = arrayItemNotEqualColor;
                    
                    await timer(eachSwapTime);

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

                } else {
                    // If elements are in correct position
                    firstRect.style.fill = arrayItemEqualColor;
                    secondRect.style.fill = arrayItemEqualColor;

                    await timer(eachSwapTime);
                }

                firstRect.style.fill = arrayItemOriginalColor;
                secondRect.style.fill = arrayItemOriginalColor;

                await timer(eachSwapTime);
            }

            const lastElement = svgChildren[len-i-1].children as HTMLCollectionOf<SVGRectElement | SVGTextElement>;
            lastElement[0].style.fill = arrayItemSortedColor;
        }
    }

    function func() {
        return sort().then(()=>{
                return true;
            }).catch((err)=>{
                return err;
            })
    }

    return func();
}
