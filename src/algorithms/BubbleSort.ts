import {timer, arrayItemOriginalColor,arrayItemNotEqualColor,arrayItemCurrentPositionColor, arrayItemEqualColor,arrayItemSortedColor, swapSVGNodes} from '../commonUtilities'

export async function BubbleSort(arr: number[], svgChildren: HTMLCollectionOf<SVGGElement>, animationSpeed: number) {
    const len = arr.length;

    /*
     * Let isSwapped = false;
     */
    
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
            
                await timer(animationSpeed);

                if (arr[j] > arr[j + 1]) {
                    // If they are not in correct position
                    firstRect.style.fill = arrayItemNotEqualColor;
                    secondRect.style.fill = arrayItemNotEqualColor;
                    
                    await timer(animationSpeed);

                    // IsSwapped = true;
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

                    // Swap SVG Elements;
                    swapSVGNodes(svgChildren[j], svgChildren[j+1]);
                    
                } else {
                    // If elements are in correct position
                    firstRect.style.fill = arrayItemEqualColor;
                    secondRect.style.fill = arrayItemEqualColor;

                    await timer(animationSpeed);
                }

                firstRect.style.fill = arrayItemOriginalColor;
                secondRect.style.fill = arrayItemOriginalColor;

                await timer(animationSpeed);
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
