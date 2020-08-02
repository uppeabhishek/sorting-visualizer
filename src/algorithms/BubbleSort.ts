import {
    timer,
    arrayItemOriginalColor,
    arrayItemNotEqualColor,
    arrayItemCurrentPositionColor,
    arrayItemEqualColor,
    arrayItemSortedColor,
    swapSVGNodes,
    fillColor
} from "../commonUtilities";

export async function BubbleSort(
    arr: number[],
    svgChildren: HTMLCollectionOf<SVGGElement>,
    animationSpeed: number
) {
    const len = arr.length;

    /*
     * Let isSwapped = false;
     */
    async function sort() {
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - i - 1; j++) {
                // Indicate these cells are currently being sorted
                fillColor(svgChildren, j, arrayItemCurrentPositionColor);
                fillColor(svgChildren, j + 1, arrayItemCurrentPositionColor);

                await timer(animationSpeed);

                if (arr[j] > arr[j + 1]) {
                    // If they are not in correct position
                    fillColor(svgChildren, j, arrayItemNotEqualColor);
                    fillColor(svgChildren, j + 1, arrayItemNotEqualColor);

                    await timer(animationSpeed);

                    // IsSwapped = true;
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

                    // Swap SVG Elements;
                    swapSVGNodes(svgChildren[j], svgChildren[j + 1]);
                } else {
                    // If elements are in correct position
                    fillColor(svgChildren, j, arrayItemEqualColor);
                    fillColor(svgChildren, j + 1, arrayItemEqualColor);

                    await timer(animationSpeed);
                }

                fillColor(svgChildren, j, arrayItemOriginalColor);
                fillColor(svgChildren, j + 1, arrayItemOriginalColor);

                await timer(animationSpeed);
            }

            fillColor(svgChildren, len - i - 1, arrayItemSortedColor);
        }
    }

    function func() {
        return sort()
            .then(() => true)
            .catch((err) => err);
    }

    return func();
}
